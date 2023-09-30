<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';

	export const authToken = writable(null);

	const credentials = {
		client_id: '888461744011-eadumibs680dsdlfgq3ime6fb7hoepmp.apps.googleusercontent.com',
		project_id: 'neucron-379716',
		auth_uri: 'https://accounts.google.com/o/oauth2/auth',
		token_uri: 'https://oauth2.googleapis.com/token',
		auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
		client_secret: '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',
		javascript_origins: ['https://neucron.vercel.app', 'http://neucron.io', 'https://neucron.io'],
		scopes: [
			'https://accounts.google.com/o/oauth2/auth?scope=openid',
			'https://www.googleapis.com/auth/userinfo.email',
			'https://www.googleapis.com/auth/userinfo.profile'
		],
		scope: 'openid%20email%20https://www.googleapis.com/auth/userinfo.email'
	};

	function popupWindow(url, windowName, win, w, h) {
		const y = win.top.outerHeight / 2 + win.top.screenY - h / 2;
		const x = win.top.outerWidth / 2 + win.top.screenX - w / 2;
		return win.open(
			url,
			windowName,
			`toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`
		);
	}

	function signInWithGoogle() {
		// ${GOOGLE_OAUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}
		// 'http://api.neucron.io/auth/login',
		// console.log('Error 400: redirect_uri_mismatch : ', ;
		const authURL = 'https://api.neucron.io/auth/login_google';
		const redirectURL = window.location.href;
		const authWindow = popupWindow(
			`${authURL}?callback_url=${redirectURL}`,
			'Neucron Google Sign In',
			window,
			500,
			500
		);
		// const authWindow = window.open(
		// 	`http://api.neucron.io/auth/login`,
		// 	'_blank',
		// 	'width=600,height=600,align-center'
		// );

		const timer = setInterval(() => {
			if (authWindow.closed) {
				clearInterval(timer);
				handleAuthResponse();
			}
		}, 1000);
	}

	function handleAuthResponse() {
		const hash = window.location.hash.substr(1);
		const token = hash.split('&').reduce((acc, item) => {
			const [key, value] = item.split('=');
			acc[key] = value;
			return acc;
		}, {});

		// authToken.set(token);
		localStorage.setItem('token', token);
	}

	let user = {};

	// const signInWithGoogle = async () => {
	// 	try {
	// 		const response = await fetch('http://api.neucron.io/auth/login', {
	// 			method: 'POST',
	// 			headers: { 'Content-Type': 'application/json' },
	// 			body: JSON.stringify(user)
	// 		});

	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			localStorage.setItem('token', data.token);

	// 			goto('/dashboard'); // Redirect to dashboard page after successful login with Google account
	// 		} else {
	// 			console.log('Error signing in with Google'); // Log error if there is an error in signing in with Google account
	// 		}
	// 	} catch (err) {
	// 		console.log(err); // Log error if there is an error in signing in with Google account
	// 	}
	// };
</script>

<button
	class="group bg-primary-dark-highlight text-lg py-2 px-16 rounded w-fit self-center mt-2 hover:bg-white flex items-center border border-1 border-primary-dark-highlight"
	on:click={signInWithGoogle}
>
	<img src="/google-icon.svg" class="mr-2" alt="Google Logo" />
	<span class="mt-1 ml-1 text-sm font-medium text-white group-hover:text-primary-dark-highlight">Google Sign In</span>
	
</button>
