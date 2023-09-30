<script>
	import { onMount } from 'svelte';
	import Logo from '$lib/logo.svelte';
    import DropdownInput from "$lib/components/form/DropdownInputAuthorize.svelte";
	let wallet_names = [
		'Wallet A',
		'Wallet B',
		'Wallet C',
		'Wallet D',
		'Wallet E'
	];
	let bank_name = 'Bank name';
	/*
		{
			"data": {
				"app": {
				"app_id": "a27b885d-8182-4f5d-b667-5fbf7ca26199",
				"app_name": "nuecron-web-2",
				"user_id": "4f85b440-a923-4a7b-8929-b372980d2660",
				"app_wallet": "5804f98a-9289-4dc5-a236-6bf3c750d5db"
				},
				"keys": {
				"app_id": "a27b885d-8182-4f5d-b667-5fbf7ca26199",
				"key_id": "S83F70N60LYV",
				"secret": "AzUcpW1qkOUmvxe6CLV8Ar3DgceLJz4wfogQzap5mY7ql5LL"
				},
				"walletID": "5804f98a-9289-4dc5-a236-6bf3c750d5db"
			},
			"status_code": 200,
			"permissions": ["public_profile", "private_profile","all_wallet", "wallet_balance", "wallet_payments","user_data","wallet_contract","add_user_activity","app","create_app","whatsapp_notif","all_asset","custom_txn","issue_assets","data_integrity"],
		}
	*/
	export var data;
	export let form;
	var permissions = {};

	var err_msg = '';

	function setPerms() {
		let len = data?.data?.app?.Permissions.length;
		var perms = data?.data?.app?.Permissions;
		for (let i = 0; i < len; i++) {
			if (
				perms[i] != 'all_wallet' &&
				perms[i] != 'wallet_signature' &&
				perms[i] != 'wallet_payments'
			) {
				permissions[perms[i]] = perms[i];
			} else {
				permissions[perms[i]] = '';
			}
		}
	}

	onMount(() => {
		setPerms();
	});

	if (form) {
		if (form.message) {
			err_msg = form.message;
		}
	}

	var allWalletsNeeded = data?.data?.app?.Permissions?.includes('all_wallet');

	var walletSelected = false;

	function toggleCheckboxes(event) {
		if (event.target.value != 'wallets') {
			walletSelected = true;
			wallet_err_msg="";
		} else {
			walletSelected = false;
			document.getElementById('all_wallet').checked = false;
			document.getElementById('wallet_payments').checked = false;
			document.getElementById('wallet_signature').checked = false;
		}
	}

	const wallet_permissions = ['all_wallet', 'wallet_payments', 'wallet_signature'];
	var wallet_err_msg = '';

	async function customSubmit(event) {
		event.preventDefault();

		if (document.getElementById('wallets').value == 'wallets') {
			wallet_err_msg = 'Please select a wallet!';
			const div = document.getElementById('style-3');

			if (div) {
				// Scroll to the bottom of the div
				div.scrollTop = div.scrollHeight + 200;
			}
			return;
		}

		const form = document.getElementById('authorize-form');

		if (document.getElementById('all_wallet').checked) {
			permissions['all_wallet'] = 'all_wallet';
		}
		if (document.getElementById('wallet_signature').checked) {
			permissions['wallet_signature'] = 'wallet_signature';
		}
		if (document.getElementById('wallet_payments').checked) {
			permissions['wallet_payments'] = 'wallet_payments';
		}

		const permissionsTextarea = form.querySelector('textarea[name="permissions"]');

		const permissionsArray = Object.values(permissions).filter(Boolean); // Filter out empty values

		const permissionsCsv = permissionsArray.join(', ');

		const selectedWallet = document.getElementById('wallets').value;

		const walletInput = document.createElement('input');
		walletInput.type = 'hidden';
		walletInput.name = 'selectedWallet';
		walletInput.value = selectedWallet;
		form.appendChild(walletInput);

		permissionsTextarea.value = permissionsCsv;

		form.submit();
	}

	function changeWalletPerms(event, permission) {
		if (permission != 'all_wallet') {
			
			if (event?.target?.checked) {
				if (
					document.getElementById('wallet_payments').checked &&
					document.getElementById('wallet_signature').checked
				) {
					document.getElementById('all_wallet').checked = true;
				}
				permissions[permission] = permission;
			} else {
				permissions[permission] = '';
				document.getElementById('all_wallet').checked = false;
			}
			console.log('perms:', permissions);
		} else {
			if (event?.target?.checked) {
				document.getElementById('wallet_payments').checked = true;
				document.getElementById('wallet_signature').checked = true;
			} else {
				document.getElementById('wallet_payments').checked = false;
				document.getElementById('wallet_signature').checked = false;
			}
		}
	}

	
</script>

<div class="bg-primary-dark md:h-full md:w-full text-white font-barlow pb-20">
	<div class="p-16">
		<a href="/" class="">
			<Logo size="big" />
		</a>
	</div>
	<div class="md:w-2/3 w-5/6 bg-bg-secondary mx-auto py-16 flex justify-center">

		{#if Object.keys(data?.data?.app?.url ?? {}).length}
			<div class="flex flex-col md:flex-row md:gap-40 items-center">
				<div class="flex flex-col gap-28">
					<div class="flex gap-5 flex-col">
						<div class="flex items-center gap-[22px]">
							<img
								class="rounded-full object-contain h-[68px] w-[68px] bg-[#111A22]"
								src={data?.userInfo?.image_url ?? '/person-male.png'}
								alt="Profile"
							/>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15.3 10.7L11.7 14.3C11.6 14.4 11.5293 14.5083 11.488 14.625C11.4467 14.7416 11.4257 14.8666 11.425 15C11.425 15.1333 11.446 15.2583 11.488 15.375C11.53 15.4916 11.6007 15.6 11.7 15.7L15.3 19.3C15.5 19.5 15.7333 19.6 16 19.6C16.2667 19.6 16.5 19.5 16.7 19.3C16.9 19.1 17 18.8623 17 18.587C17 18.3116 16.9 18.0743 16.7 17.875L14.825 16H21C21.2833 16 21.521 15.904 21.713 15.712C21.905 15.52 22.0007 15.2826 22 15C22 14.7166 21.904 14.479 21.712 14.287C21.52 14.095 21.2827 13.9993 21 14H14.825L16.7 12.125C16.9 11.925 17 11.6916 17 11.425C17 11.1583 16.9 10.925 16.7 10.725C16.5 10.525 16.271 10.4166 16.013 10.4C15.755 10.3833 15.5173 10.4833 15.3 10.7ZM7.3 4.72498C7.5 4.52498 7.73334 4.42064 8 4.41198C8.26667 4.40331 8.5 4.49931 8.7 4.69998L12.3 8.29998C12.4 8.39998 12.4707 8.50831 12.512 8.62498C12.5533 8.74164 12.5743 8.86664 12.575 8.99998C12.575 9.13331 12.554 9.25831 12.512 9.37498C12.47 9.49164 12.3993 9.59998 12.3 9.69998L8.7 13.3C8.5 13.5 8.26667 13.6 8 13.6C7.73334 13.6 7.5 13.5 7.3 13.3C7.1 13.1 7 12.8623 7 12.587C7 12.3116 7.1 12.0743 7.3 11.875L9.175 9.99998H3C2.71667 9.99998 2.479 9.90398 2.287 9.71198C2.095 9.51997 1.99934 9.28264 2 8.99998C2 8.71664 2.096 8.47898 2.288 8.28698C2.48 8.09498 2.71734 7.99931 3 7.99998H9.175L7.3 6.12498C7.1 5.92498 7 5.69164 7 5.42497C7 5.15831 7.1 4.92498 7.3 4.72498Z"
									fill="#06E7ED"
								/>
							</svg>
							{#if data?.data?.app?.icon_url}
								<img width={65} height={65} src={data?.data?.app?.icon_url} alt="Icon" />
							{:else}
								<div
									class="text-3xl font-bold bg-primary text-primary-dark rounded-full h-[64px] w-[64px] flex items-center justify-center leading-none pt-1.5"
								>
									{data?.data?.app?.profile?.app_name?.slice(0, 1)?.toUpperCase()
										? data?.data?.app?.profile?.app_name?.slice(0, 1)?.toUpperCase()
										: 'A'}
								</div>
							{/if}
						</div>
						<p class="text-base text-center">
							Connect to {data?.data?.app?.profile?.app_name
								? data?.data?.app?.profile?.app_name
								: 'app'}
						</p>
					</div>
					<div class="flex flex-col gap-5">
						<form method="post" id="authorize-form" on:submit={customSubmit}>
							<textarea name="permissions" id="permissions" cols="30" rows="10" class="hidden"
								>{permissions}</textarea
							>
							<a href={form?.redirect} id="redirect_a" class="hidden">redirect</a>
							<textarea name="app_id" id="app_id" cols="30" rows="10" class="hidden"
								>{data?.app_cred?.data?.credentials?.app_id?.toString()}</textarea
							>
							<textarea name="key_id" id="key_id" cols="30" rows="10" class="hidden"
								>{data?.app_cred?.data?.credentials?.key_id?.toString()}</textarea
							>
							<textarea name="redirect_uri" id="redirect_uri" cols="30" rows="10" class="hidden"
								>{data?.data?.app?.url.success_redirect?.toString()}</textarea
							>
							<button
								type="submit"
								class="text-base font-semibold bg-primary text-primary-dark hover:opacity-80 h-10 w-48 flex items-center justify-center rounded text-center"
							>
								Authorize
							</button>
						</form>
						<a
							type="button"
							href={data?.data?.app?.url?.decline_redirect.includes("https://") ? data?.data?.app?.url?.decline_redirect : "https://" + data?.data?.app?.url?.decline_redirect}
							class="text-base font-semibold bg-primary-dark text-white hover:opacity-80 h-10 w-48 flex items-center justify-center rounded text-center"
						>
							Decline
						</a>
						<span class="py-[10px] font-semibold text-red-400 text-center">{err_msg}</span>
					</div>
				</div>
				<div class="flex justify-start flex-col gap-3 md:mt-0 mt-10">
					<h2 class="text-[#FFFFFF] text-center md:text-start">PERMISSIONS REQUESTED</h2>
					<div
						id="style-3"
						class="border scroll-smooth color-black styled-scroll border-secondary-grey rounded md:w-[340px] w-[300px] h-[330px] flex overflow-y-scroll flex-col gap-9 px-4 pt-6"
						>
						{#if data?.data?.app?.Permissions}
							{#each data?.data?.app?.Permissions as permission}
								{#if permission != 'all_wallet' && permission != 'wallet_signature' && permission != 'wallet_payments'}
									<div class="flex gap-4">
										<img
											src={'/app-authorize/public_profile.png'}
											class="w-8 h-8 object-contain"
											alt={'😀'}
										/>
										<div class="flex flex-col gap-2">
											<h2 class="text-[14px] text-[#FFFFFF]">
												{permission.slice(0, 1).toUpperCase() +
													permission.slice(1).split('_').join(' ')}
											</h2>
											<p class="text-[#92B0C9] text-xs">{data?._perms[permission] + '.'}</p>
										</div>
									</div>
								{/if}
							{/each}
							{#if allWalletsNeeded}
								<div class="flex gap-4">
									<img
										src={'/app-authorize/wallet.png'}
										class="w-8 h-8 object-contain"
										alt={'😀'}
									/>
									<DropdownInput 
										showValue={false}
										label="Wallet"
										sublabel="Choose your wallet"
										options={wallet_names}
									/>
									<!-- <p class="text-[#92B0C9] text-xs">Choose your wallet </p> -->
									<!-- <div class="flex flex-col gap-2">
										<select
											name="wallets"
											id="wallets"
											class="text-black outline-none border-none p-[5px] rounded-[5px]"
											on:change={toggleCheckboxes}
										>
											<option value="wallets" selected class="rounded-[5px]">Wallets</option>
											{#each data?.userWallets as wallet}
												<option value={wallet} class="rounded-[5px]"
													>{wallet.slice(0, 5) + ' . . . ' + wallet.slice(-10)}</option
												>
											{/each}
										</select>
									</div> -->
								</div>
								<div class={`${!walletSelected && 'hidden'} flex flex-col gap-[20px]`}>
									{#each wallet_permissions as permission}
										<div class={`flex gap-4 `}>
											<input
												type="checkbox"
												class="mx-[8px] w-[18px] h-[18px]"
												name={permission}
												id={permission}
												on:change={(event) => {
													changeWalletPerms(event, permission);
												}}
											/>
											<label for={permission}>
												<div class="flex flex-col gap-2">
													<h2 class="text-sm">
														{permission.slice(0, 1).toUpperCase() +
															permission.slice(1).split('_').join(' ')}
													</h2>
													<p class="text-[#989898] text-xs">
														{data?._perms[permission]?.length > 0
															? data?._perms[permission] + '.'
															: '--'}
													</p>
												</div>
											</label>
										</div>
									{/each}
								</div>
								<span class={`text-[#ff0000] relative top-[-20px] ${wallet_err_msg.length > 0 ? 'h-[10px]' : 'h-[0px]'} text-center font-bold text-[18px]`}>{wallet_err_msg}</span>
							{/if}
						{:else}
							<span class="text-center">No permissions requested!</span>
						{/if}
					</div>
				</div>
			</div>
		{:else}
			App not found
		{/if}
	</div>
</div>

<style>
	/* For webkit-based browsers (like Chrome) */
#style-3::-webkit-scrollbar {
  width: 8px; /* Adjust the width as needed */
}

#style-3::-webkit-scrollbar-thumb {
  background-color: #081B2A; /* Change this to your desired color */
  border-radius: 5px;
}

/* For Firefox and other non-webkit browsers */
#style-3 {
  scrollbar-width: thin; /* Adjust the width as needed */
  scrollbar-color: yellow red; /* Change these to your desired colors */
}

</style>
