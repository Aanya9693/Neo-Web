import { BASE_API_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies, url }) => {
    /*
        1. Check if jwt token exists in cookies.
        2. If cookies exists, validate appid is correct (exists).
        3. IF cookie doesn't exists, redirect user to login (auth/login).
        4. app => authorise => (user && appid exists) ? authorize and redirect to app : rediect to login => after login redirect to suthorize and then redirect to app.
    */
    const _params = new URLSearchParams(url.search);
    let appID = _params.get('appid');

    const _cookie = cookies.get("jwtToken");

    if (!_cookie) {
        console.log("User is not logged in");
        await cookies.set('appID', appID, { path: '/', maxAge: 60 * 5 });
        console.log("AppID from Cookies :", cookies.get('appID'));
        throw new redirect(302, "/auth/login");
    }

    const response = await fetch(`${BASE_API_URL}/develop/app/appdetails?appID=${appID}`, {
        headers: {
            authorization: _cookie
        }
    });

    const result = await response.json();

    if (!Object.keys(result?.data?.app?.url ?? {}).length) {
        return result;
    }


    const credentials = await fetch(`${BASE_API_URL}/develop/app/credentials?appID=${appID}`, {
        headers: {
            authorization: _cookie
        }
    });
    const cred = await credentials.json();

    const appPermissions = await fetch(`${BASE_API_URL}/oauth/permissions`);
    const _permissions = await appPermissions.json();

    const UserWalletRes = await fetch(`${BASE_API_URL}/wallet/list`, {
        headers: {
            authorization: _cookie,
            accept: 'application/json'
        }
    });

    
    const userWallets = await UserWalletRes.json();
    

    console.log("user wallets list: ",userWallets);
    result.userWallets = userWallets?.data?.details?.Wallets;

    result._cookie = _cookie;

    result.app_cred = cred;


    let perms = {};

    for (let i = 0; i < _permissions?.data?.length; i++) {
        const permission = _permissions?.data[i];
        perms[permission.name] = (permission.desc ? permission.desc : "");
    }

    result._perms = perms;

    if (!response.ok) {
        console.log("Failed to fetch data!");
    }

    return result;
}

export const actions = {
    default: async ({ request, cookies, fetch }) => {
        const data = await request.formData();

        const permissions = await data.get('permissions');

        const wallets = await data.get('selectedWallet');

        const _cookies = cookies.get('jwtToken');

        const app_id = await data.get('app_id');

        const key_id = await data.get('key_id');

        var all_perms = permissions.split(", ");

        let redirect_uri = await data.get('redirect_uri');

        console.log(data);

        try {
            const response = await fetch(`${BASE_API_URL}/oauth/authorize`, {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    authorization: _cookies,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    app_id: app_id,
                    key_id: key_id,
                    permissions: all_perms,
                    redirect_uri: redirect_uri,
                    ...(wallets != 'Wallets' && { wallets: [wallets] })
                })
            });

            const _data = await response.json();
            console.log(_data);
            if (_data.status_code == 200) {

                if (!redirect_uri.includes('https://')) {
                    redirect_uri = 'https://' + redirect_uri;
                }
                const extensionURL = new URL(redirect_uri);


                extensionURL.searchParams.set("code", _data?.data?.code);
                // console.log("extensionURL : ", extensionURL);

                redirect_uri = extensionURL.href;
            } else {
                redirect_uri = "";
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
            return { message: 'Error occured, refresh & try again!' };
        }
        if (redirect_uri.length > 0) {
            throw redirect(302, redirect_uri);
        }

    }
};

const getUserInfo = async (fetch, jwtToken) => {
    try {
        const response = await fetch(`${BASE_API_URL}/user/info`, {
            method: 'GET',
            headers: {
                'Authorization': jwtToken
            }
        });

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const result = await response.json();
        const userInfo = result?.data;

        console.log("User Info : ", userInfo);
        return userInfo;
    } catch(e) {
        console.log("Get user info error : ", e);
        return null; 
    }
};
