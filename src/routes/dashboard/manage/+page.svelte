<script>
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import Title from '$lib/title.svelte';
	import Input from '$lib/components/form/Input.svelte';
	import Button from '$lib/buttons/button.svelte';
	import SecondaryButton from '$lib/buttons/SecondaryButton.svelte';

	import { invalidateAll } from '$app/navigation';
	import CopyToClipboard from '$lib/copy-to-clipboard.svelte';
	import EmptyWallet from 'iconsax-svelte/EmptyWallet.svelte';
	import Icon from '@iconify/svelte';
	import Loading from '$lib/components/loading.svelte';
	import Modal from '$lib/components/modal.svelte';
	import Logo from '$lib/logo.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import Popinput from '$lib/components/form/popinput.svelte';

	import { createEventDispatcher } from 'svelte';
	import DropdownInput from '../../../lib/components/form/DropdownInput.svelte';
	import Account from '../../../lib/components/Account.svelte';
	const dispatch = createEventDispatcher();

	export let data;
	const { user } = data;
	console.log('show-set-password', data.showSetPasswordPopup);

	// export let form;
	const { form, enhance, errors, message, delayed } = superForm(data.form);

	// let showPassword = false;
	// let showConfirmPassword = false;

	$: if ($message?.status == 'failed') {
		toast.error($message.content, {
			position: 'top-right'
		});
	} else if ($message?.status == 'success') {
		toast.success($message.content, {
			position: 'top-right'
		});
	}

	const usersDetails = [
		{
			id: 'general',
			label: 'General'
		},
		{
			id: 'security',
			label: 'Security'
		},
		{
			id: 'accounts',
			label: 'Accounts'
		},
		{
			id: 'terms',
			label: 'Terms'
		},
		{
			id: 'wallet',
			label: 'Wallet'
		}
	];
	let usersActiveTab = 'general';
	//side tab
	const sideTabs = [
		{
			id: 'kyc',
			label: 'KYC'
		},
		{
			id: 'profile',
			label: 'Profile'
		},
		{
			id: 'advanced',
			label: 'Advanced'
		}
	];
	let sideActiveTab = 'profile';
	//Profile tabs
	const kycs = [
		{
			id: 'kyc_verification',
			label: 'KYC Verification'
		},
		{
			id: 'kyc_2_verification',
			label: 'KYC 2 Verification'
		},
		{
			id: 'kyc_3_verification',
			label: 'KYC 3 Verification'
		}
	];
	let kycActiveTab = 'kyc_verification';

	const regions = ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Oceania'];
	const languages = [
		'English',
		'Spanish',
		'French',
		'German',
		'Chinese',
		'Japanese',
		'Russian',
		'Arabic',
		'Portuguese',
		'Italian'
	];

	let selectedRegion = 'North America';
	let selectedLanguage = 'English';

	const bank_names = [
		'HDFC',
		'YES BANK',
		'ICICI',
		'AXIS BANK',
		'HDFC',
		'YES BANK',
		'ICICI',
		'AXIS BANK',
		'HDFC',
		'YES BANK',
		'ICICI'
	];
	let bank_name = 'Bank name';
	let expand = false;
	let showMenu = false;
</script>

<div class="mx-4 mr-10">
	<div class="bg-[#112D4424] min-h-screen col-start-1 col-span-6 my-5 rounded-t-2xl">
		<div class="rounded-md button__group pt-3 px-5 w-[1030px] flex justify-between">
			{#each usersDetails as tab}
				<button
					type="button"
					class={`button text-base leading-[22px] font-normal transition-all px-8 py-3 w-[150px] ${
						usersActiveTab === tab['id']
							? 'text-[#FFFFFF] bg-[#112D4480] rounded-xl'
							: 'text-[#92B0C9]'
					}`}
					on:click={() => {
						usersActiveTab = tab['id'];
					}}
				>
					{tab['label']}
				</button>
			{/each}
		</div>
		<div class="flex flex-col gap-0 py-3 px-5">
			{#if usersActiveTab == 'general'}
				<div class="flex gap-3">
					<div
						class="w-[150px] h-[540px] rounded-md bg-[#112D4480] flex flex-col gap-10 items-start pt-10"
					>
						{#each sideTabs as sidetab}
							<button
								type="button"
								class={`w-full text-left button font-medium text-base leading-[24px] px-8 py-3 ${
									sideActiveTab === sidetab['id']
										? 'text-white border border-t-0 border-r-0 border-l-0 border-[#06E7ED]'
										: 'text-[#92B0C9]'
								}`}
								on:click={() => {
									sideActiveTab = sidetab['id'];
								}}
							>
								{sidetab['label']}
							</button>
						{/each}
					</div>
					<div class="flex-1">
						{#if sideActiveTab == 'kyc'}
							<div class="rounded-md bg-[112D4424] button__group w-fit">
								{#each kycs as tab}
									<button
										type="button"
										class={`button font-medium text-base leading-[24px] transition-all px-8 py-3 ${
											kycActiveTab === tab['id']
												? 'text-[#54DEB2] bg-[#112D4480] rounded-t-md'
												: 'text-[#92B0C9]'
										}`}
										on:click={() => {
											kycActiveTab = tab['id'];
										}}
									>
										{tab['label']}
									</button>
								{/each}
							</div>

							{#if kycActiveTab == 'kyc_verification'}
								<div class="w-full grid grid-cols-8 gap-20 px-12 bg-[#112D4480] py-10">
									<div class="col-span-3">
										<h1 class="font-medium text-base leading-6">KYC</h1>
										<h6 class="font-normal text-[#ffffff99] w-8/12 text-[10px] leading-6">
											Use these credentials to use our APIs.
										</h6>
									</div>
									<div class="col-span-5">
										<!-- <div class="flex space-x-3 relative">
											<img
												src={user?.image_url || '/dashboard/cameraProfile.svg'}
												alt="cameraProfile"
												class="w-[70px] h-[70px] rounded-full bg-black"
											/>
											<a href="/dashboard/manage/photo">
												<img
													src="/dashboard/camera.svg"
													alt="camera"
													class="w-5 h-5 -bottom-1 left-12 absolute"
												/>
											</a>
											<h2 class="whitespace-nowrap mt-6">Change Profile</h2>
										</div> -->
										<div class="flex flex-col my-8 items-end">
											<!-- <div class="grid grid-cols-2 gap-x-10">
												<div class="flex flex-col h-full mt-5">
													<Input
														type="text"
														editIcon={true}
														readonly
														url="/dashboard/manage/name"
														label="name"
														name="name"
														value={`${user?.first_name} ${user?.last_name}`}
													/>
												</div>
												<div class="flex flex-col h-full mt-5">
													<Input
														type="text"
														editIcon={true}
														readonly
														url="/dashboard/manage/username"
														label="user name"
														name="userName"
													/>
												</div>
											</div> -->
											<div class="grid grid-cols-2 gap-x-10 my-20">
												<div class="flex flex-col h-full">
													<Input
														type="text"
														editIcon={false}
														readonly
														url="/dashboard/manage/email"
														label="email"
														name="email"
														value={user?.email}
													/>
												</div>
												<div class="flex flex-col h-full">
													<div class="flex justify-between">
														<span>
															<label for="mobile number">Phone Number</label>
														</span>
														<!-- <a href="/dashboard/manage/phonenumber"
															><img src="/dashboard/edit.svg" alt="edit" /></a
														> -->
													</div>
													<div class="relative">
														<span class="absolute inset-y-0 left-0 flex items-center pl-2">
															<img src="/india-flag.svg" class="w-5 h-5" alt="Cloud Lock" />
														</span>
														<span class="absolute inset-y-0 left-8 flex items-center">
															<span class="border-l border-gray-400 mx-2" style="height: 1rem;" />
															<span class="text-primary text-base">+91</span>
														</span>
														<input
															type="text"
															name="number"
															value={user?.phone_number}
															readonly
															class="pl-[80px] w-full pr-4 py-2.5 border-2 bg-[#0E1F2D] border-none rounded-md overflow-clip whitespace-nowrap focus:ring-primary border-primary text-primary"
														/>
													</div>
												</div>
											</div>
											<div style="margin:auto 0;">
												<Button
													label="ADD"
													route="/dashboard/manage/pan"
													className="w-fit bg-primary text-primary-dark"
												/>
											</div>
										</div>
									</div>
								</div>
							{:else if kycActiveTab == 'kyc_2_verification'}
								<div class="w-full flex flex-col justify-between gap-20 px-10 bg-[#112D4480] py-10">
									<div class="flex items-start justify-between pr-10">
										<div>
											<h1 class="font-medium text-base leading-6">KYC 2</h1>
											<h6 class="font-normal text-[#ffffff99] w-8/12 text-[10px] leading-6">
												Define where to redirect users after Connect authentication is successful or
												declined
											</h6>
										</div>
										<div class="flex flex-col">
											<label for="pan">Pan</label>
											<div
												class="relative mt-2 p-2 pr-4 w-72 flex items-end bg-[#0E1F2D] rounded-md overflow-clip whitespace-nowrap"
											>
												KQHFPB)(*(&%^%&HFVD
											</div>
											<div class="my-8 flex justify-end">
												<Button
													label="Update"
													route="/dashboard/manage/pan"
													className="w-full bg-primary text-primary-dark"
												/>
											</div>
										</div>
									</div>
									<hr />
									<div class="flex items-start justify-between pr-10">
										<div>
											<h1 class="font-medium text-base leading-6">KYC 2</h1>
											<h6 class="font-normal text-[#ffffff99] w-8/12 text-[10px] leading-6">
												Define where to redirect users after Connect authentication is successful or
												declined
											</h6>
										</div>

										<div class="flex flex-col">
											<div class="relative mt-2 flex items-start">
												<CopyToClipboard label={`UPI ID`} content="UPI192198@Neucron.io" />
											</div>
											<div class="my-8 flex justify-end">
												<Button
													label="Update"
													route="/dashboard/manage/upi"
													className="w-full bg-primary text-primary-dark"
												/>
											</div>
										</div>
									</div>
								</div>
							{:else if kycActiveTab == 'kyc_3_verification'}
								<div class="w-full grid grid-cols-8 gap-3 px-12 bg-[#112D4480] py-10">
									<div class="col-span-3">
										<h1 class="font-medium text-base leading-6">KYC 3</h1>
										<h6 class="font-normal text-[#ffffff99] w-9/12 text-[10px] leading-6">
											Define where to redirect users after Connect authentication is successful or
											declined
										</h6>
									</div>
									<div class="col-span-5">
										<div class="flex flex-col my-8 items-end">
											<div class="grid grid-cols-2 gap-x-10 mb-10">
												<div class="flex flex-col h-full mt-5">
													<Input
														type="text"
														editIcon={false}
														placeholder="XYZR JUSG LCHY"
														readonly
														url="/dashboard/manage/aadhar"
														label="aadhar"
														name="aadhar"
													/>
												</div>
												<div class="flex flex-col h-full mt-5">
													<Input
														type="text"
														editIcon={false}
														placeholder="XYZR JUSG LCHY"
														readonly
														url="/dashboard/manage/address"
														label="address"
														name="address"
													/>
												</div>
												<div class="flex flex-col h-full mt-12">
													<Input
														type="text"
														editIcon={false}
														placeholder="123456"
														readonly
														url="/dashboard/manage/pincode"
														label="pincode"
														name="pincode"
													/>
												</div>
												<div class="flex flex-col h-full mt-12">
													<Input
														type="text"
														editIcon={false}
														placeholder="Mumbai"
														readonly
														url="/dashboard/manage/city"
														label="city"
														name="city"
													/>
												</div>
											</div>
											<div class="" style="margin:auto 0;">
												<Button
													label="ADD"
													route="/dashboard/manage/pan"
													className="w-fit bg-primary text-primary-dark"
												/>
											</div>
										</div>
									</div>
								</div>
							{/if}
						{:else if sideActiveTab == 'profile'}
							<div
								class="w-full h-full flex flex-col justify-start gap-10 px-10 bg-[#112D4480] py-10"
							>
								<div class="flex items-start justify-start">
									<div class="w-1/3">
										<h1 class="text-white text-xl font-bold">Profile</h1>
										<p class="font-normal text-[#ffffff99] text-[10px] leading-6">
											Use these credentials to use our APIs.
										</p>
									</div>
									<div class="flex flex-col gap-10 flex-1">
										<div class="flex space-x-3 relative">
											<img
												src={user?.image_url || '/dashboard/cameraProfile.svg'}
												alt="cameraProfile"
												class="w-[70px] h-[70px] rounded-full bg-black"
											/>
											<a href="/dashboard/manage/photo">
												<img
													src="/dashboard/camera.svg"
													alt="camera"
													class="w-5 h-5 -bottom-1 left-12 absolute"
												/>
											</a>
											<h2 class="whitespace-nowrap mt-6">Change Profile</h2>
										</div>
										<div class="flex justify-between gap-10 w-full">
											<div class="flex flex-col h-full w-full">
												<Input
													type="text"
													editIcon={true}
													readonly
													url="/dashboard/manage/name"
													label="name"
													name="name"
													value={`${user?.first_name} ${user?.last_name}`}
												/>
											</div>
											<div class="flex flex-col h-full w-full">
												<Input
													type="text"
													editIcon={true}
													readonly
													url="/dashboard/manage/username"
													label="user name"
													name="userName"
												/>
											</div>
										</div>
									</div>
								</div>
								<div class="flex items-start justify-between">
									<div class="w-1/3">
										<h1 class="text-white text-xl font-bold">Currency conversion</h1>
										<p class="font-normal text-[#ffffff99] text-[10px] leading-6">
											Updated Thu Aug 17 2022 20:25:12 GMT+0530 (Indian Standard Time)
										</p>
									</div>
									<div class="flex flex-col gap-10 justify-between flex-1">
										<div class="flex justify-between gap-10 w-full">
											<div class="flex flex-col h-full w-full">
												<h1 class="text-white text-md font-bold">Minimum Token Value (USD)</h1>
												<p class="font-normal text-[#ffffff99] text-[9px] leading-6">
													Minimum value in the selected base currency to use for filtering tokens
												</p>
												<Input type="number" disabled={false} name="amount" placeholder="Amount" />
											</div>
											<div class="flex flex-col h-full w-full">
												<h1 class="text-white text-md font-bold">Currency conversion</h1>
												<p class="font-normal text-[#ffffff99] text-[9px] leading-6">
													Updated Thu Aug 17 2022 20:25:12 GMT+0530 (Indian Standard Time)
												</p>
												<DropdownInput
													options={['Rohan sharan']}
													selectedValue="Rohan sharan"
													showValue={false}
												/>
											</div>
										</div>
										<div class="flex justify-between gap-10 w-full">
											<div class="flex flex-col h-full w-full">
												<DropdownInput
													label="Select Region"
													options={regions}
													selectedValue={selectedRegion}
												/>
											</div>
											<div class="flex flex-col h-full w-full">
												<DropdownInput
													label="Select Language"
													options={languages}
													selectedValue={selectedLanguage}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						{:else if sideActiveTab == 'advanced'}
							<div class="w-full h-full flex flex-col gap-12 px-10 bg-[#112D4480] py-10 rounded-md">
								<div class="flex items-center justify-between">
									<div class="w-1/3">
										<h1 class="text-white text-xl font-bold">Backup your data</h1>
										<p class="font-normal text-[#ffffff99] text-[10px] leading-6">
											You can backup user settings containing preferences and account addresses into
											a JSON file.
										</p>
									</div>

									<SecondaryButton text="Backup" danger={false} />
								</div>
								<div class="flex items-center justify-between">
									<div class="w-1/3">
										<h1 class="text-white text-xl font-bold">Restore user data</h1>
										<p class="font-normal text-[#ffffff99] text-[10px] leading-6">
											You can restore user settings containing preferences and account addresses
											from a previously backed up JSON file.
										</p>
									</div>

									<SecondaryButton text="Restore" danger={false} />
								</div>
								<div class="flex items-center justify-between">
									<div class="w-1/3">
										<h1 class="text-white text-xl font-bold">Clear activity and nonce data</h1>
										<p class="font-normal text-[#ffffff99] text-[10px] leading-6">
											This resets the account's nonce and erases data from the activity tab in your
											wallet. Only the current account and network will be affected. Your balances
											and incoming transactions won't change.
										</p>
									</div>

									<SecondaryButton text="Clear activity tab data ?" danger={true} />
								</div>
								<div class="flex items-center justify-between">
									<div class="w-1/3">
										<h1 class="text-white text-xl font-bold">Cloud Service</h1>
										<p class="font-normal text-[#ffffff99] text-[10px] leading-6">
											You can restore user settings containing preferences and account addresses
											from a previously backed up JSON file.
										</p>
									</div>

									<SecondaryButton text="Backup" danger={false} />
								</div>
							</div>
						{/if}
					</div>
				</div>
			{:else if usersActiveTab == 'security'}
				<div class="w-full grid grid-cols-8 gap-3 px-12 bg-[#112D4480] py-10 rounded-xl">
					<div class="col-span-3">
						<h1 class="font-medium text-base leading-6">Change Password</h1>
						<h6 class="font-normal text-[#ffffff99] w-9/12 text-[10px] leading-6">
							Use these credentials to use our APIs.
						</h6>
					</div>

					<div class="col-span-5">
						<div class="flex flex-col">
							<div class="grid grid-cols-2 gap-x-10 mt-3">
								<div class="flex flex-col h-full">
									<Input type="password" readonly label="password" name="password" />
								</div>
								<div class="flex flex-col h-full">
									<Input type="password" readonly label="confirm password" name="cpassword" />
								</div>
							</div>
						</div>
						<div class="mt-8 mb-16 flex justify-end">
							<Button
								label="Change"
								route="/dashboard/manage"
								className="bg-[#0E1F2D] text-white hover:text-primary-dark"
							/>
						</div>
					</div>
					<div class="col-span-8 flex justify-between">
						<div class="">
							<h1 class="font-medium text-base leading-6">Manage Sessions</h1>
							<h6 class="font-normal text-[#ffffff99] text-[10px] leading-6">
								Define where to redirect
							</h6>
						</div>
						<div class="text-4xl">...</div>
					</div>
					<div class="col-span-8 mt-5 bg-[#0E1F2D] rounded-md py-5 px-3">
						<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
								<table class="min-w-full">
									<thead>
										<tr>
											<th
												scope="col"
												class="py-3.5 pl-4 pr-3 w-1/4 text-left font-medium text-sm leading-4 text-[#FFFFFF] sm:pl-0"
												>Login time</th
											>
											<th
												scope="col"
												class="py-3.5 pl-4 pr-3 w-1/4 text-left font-medium text-sm leading-4 text-[#FFFFFF] sm:pl-0"
												>Browser</th
											>
											<th
												scope="col"
												class="py-3.5 pl-4 pr-3 w-1/4 text-left font-medium text-sm leading-4 text-[#FFFFFF] sm:pl-0"
												>Device OS</th
											>
											<th
												scope="col"
												class="py-3.5 pl-4 pr-3 w-1/4 text-left font-medium text-sm leading-4 text-[#FFFFFF] sm:pl-0"
												>Location (IP address)</th
											>
										</tr>
									</thead>
									<tbody class="">
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Aug 8, 2022 10:27 PM</td
											>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Chrome</td
											>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Mac OS</td
											>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Copenhangen,denmark, (45.12.221.18)</td
											>
										</tr>

										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Aug 8, 2022 10:27 PM</td
											>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Chrome</td
											>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Linux</td
											>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Copenhangen,denmark, (45.12.221.18)</td
											>
										</tr>

										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Aug 8, 2022 10:27 PM</td
											>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Chrome</td
											>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Windows</td
											>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Copenhangen,denmark, (45.12.221.18)</td
											>
										</tr>

										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Aug 8, 2022 10:27 PM</td
											>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Chrome</td
											>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Linux</td
											>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
												>Copenhangen,denmark, (45.12.221.18)</td
											>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			{:else if usersActiveTab == 'accounts'}
				<div class="flex gap-10 flex-col">
					<Account expand={true} />
					<Account expand={false} />
				</div>
			{:else if usersActiveTab == 'terms'}
				<div class="flex flex-col mx-auto gap-12">
					<button
						class="text-md font-semibold bg-primary text-primary-dark hover:bg-white py-3 px-14 rounded mx-auto"
						>Terms</button
					>
				</div>
			{:else if usersActiveTab == 'wallet'}
				<div class="w-full gap-3 px-12 bg-[#0C151E] -mt-6 py-10">
					<div class="flex justify-between">
						<div class="flex space-x-4">
							<EmptyWallet size="40" color="#54deb2" variant="Bold" />
							<p class="mt-4 font-normal text-lg leading-5 capitalize">Wallet A</p>
						</div>
						<div class="flex space-x-12 mt-4 text-[#54DEB2] bg-[#18212966] py-1 px-2">
							<a
								href="/dashboard/manage/wallet/create-wallet"
								class="font-bold text-sm leading-6 tracking-[-0.2px] flex"
							>
								<p class="text-5xl font-light -mt-3 pr-2">+</p>
								<p>Create New Wallet</p>
							</a>
							<div class="text-5xl -mt-6">...</div>
						</div>
					</div>
					<h1 class="font-normal text-xl leading-5 capitalize mt-8 mb-4">Connected Apps</h1>
					<div class="grid grid-cols-4 gap-6">
						<div class="px-1 py-5 bg-[#18212966]">
							<div class="flex space-x-2">
								<div class="p-3 bg-[#23394d4d] rounded-xl">
									<img src="/dashboard/wallet/horse.svg" alt="horse" />
								</div>
								<div class="d">
									<p class="font-normal text-xl leading-5 capitalize">PowChess</p>
									<p class="font-normal text-xs mt-2 leading-3 text-[#70767B] capitalize">
										Play chess. Earn Money
									</p>
								</div>
							</div>
							<div class="w-full">
								<Button
									route="/dashboard/manage/wallet/cta/cards"
									label="CTA"
									className="bg-primary text-primary-dark w-full"
								/>
							</div>
						</div>

						<div class="px-1 py-5 bg-[#18212966]">
							<div class="flex space-x-2">
								<div class="p-3 bg-[#b01af733] rounded-xl">
									<img src="/dashboard/wallet/horse.svg" alt="horse" />
								</div>
								<div class="d">
									<p class="font-normal text-xl leading-5 capitalize">PowChess</p>
									<p class="font-normal text-xs mt-2 leading-3 text-[#70767B] capitalize">
										Play chess. Earn Money
									</p>
								</div>
							</div>
							<div class="w-full">
								<Button
									label="CTA"
									htmlType="submit"
									className="bg-[#18212999] text-white w-full hover:text-black"
								/>
							</div>
						</div>

						<div class="px-1 py-5 bg-[#18212966]">
							<div class="flex space-x-2">
								<div class="p-3 bg-[#004de633] rounded-xl">
									<img src="/dashboard/wallet/horse.svg" alt="horse" />
								</div>
								<div class="d">
									<p class="font-normal text-xl leading-5 capitalize">PowChess</p>
									<p class="font-normal text-xs mt-2 leading-3 text-[#70767B] capitalize">
										Play chess. Earn Money
									</p>
								</div>
							</div>
							<div class="w-full">
								<Button
									label="CTA"
									htmlType="submit"
									className="bg-[#18212999] text-white w-full hover:text-black"
								/>
							</div>
						</div>

						<div class="px-1 py-5 bg-[#18212966]">
							<div class="flex space-x-2">
								<div class="p-3 bg-[#004de633] rounded-xl">
									<img src="/dashboard/wallet/horse.svg" alt="horse" />
								</div>
								<div class="d">
									<p class="font-normal text-xl leading-5 capitalize">PowChess</p>
									<p class="font-normal text-xs mt-2 leading-3 text-[#70767B] capitalize">
										Play chess. Earn Money
									</p>
								</div>
							</div>
							<div class="w-full">
								<Button
									label="CTA"
									htmlType="submit"
									className="bg-[#18212999] text-white w-full hover:text-black"
								/>
							</div>
						</div>
						<div class="px-1 py-5 bg-[#18212966]">
							<div class="flex space-x-2">
								<div class="p-3 bg-[#23394d4d] rounded-xl">
									<img src="/dashboard/wallet/horse.svg" alt="horse" />
								</div>
								<div class="d">
									<p class="font-normal text-xl leading-5 capitalize">PowChess</p>
									<p class="font-normal text-xs mt-2 leading-3 text-[#70767B] capitalize">
										Play chess. Earn Money
									</p>
								</div>
							</div>
							<div class="w-full">
								<Button
									label="CTA"
									route="/dashboard/manage/wallet/cta/cards"
									className="bg-primary text-primary-dark w-full"
								/>
							</div>
						</div>

						<div class="px-1 py-5 bg-[#18212966]">
							<div class="flex space-x-2">
								<div class="p-3 bg-[#ef35564d] rounded-xl">
									<img src="/dashboard/wallet/horse.svg" alt="horse" />
								</div>
								<div class="d">
									<p class="font-normal text-xl leading-5 capitalize">PowChess</p>
									<p class="font-normal text-xs mt-2 leading-3 text-[#70767B] capitalize">
										Play chess. Earn Money
									</p>
								</div>
							</div>
							<div class="w-full">
								<Button
									label="CTA"
									htmlType="submit"
									className="bg-[#18212999] text-white w-full hover:text-black"
								/>
							</div>
						</div>
						<div class="py-5 bg-[#18212966]">
							<div class="flex justify-center">
								<div class="p-3 rounded-xl border-2 border-dashed border-spacing-4">
									<Icon icon="material-symbols:add" width="30" height="30" color="#54deb2" />
								</div>
							</div>
							<div class="w-full">
								<Button
									label="Add Apps"
									htmlType="submit"
									className="bg-[#18212999] text-white w-full hover:text-black"
								/>
							</div>
						</div>
						<div class="py-5 bg-[#18212966]">
							<div class="flex justify-center">
								<div class="p-3 rounded-xl border-2 border-dashed border-spacing-4">
									<Icon icon="material-symbols:add" width="30" height="30" color="#54deb2" />
								</div>
							</div>
							<div class="w-full">
								<Button
									label="Add Apps"
									htmlType="submit"
									className="bg-[#18212999] text-white w-full hover:text-black"
								/>
							</div>
						</div>
					</div>
				</div>
			{/if}
			{#if data?.showSetPasswordPopup === 'true'}
				<div class="w-full">
					<Modal>
						<main class="justify-center items-center text-barlow">
							<div class="w-[550px] rounded-2xl px-10 py-6 bg-secondary">
								<div class="flex flex-col items-center px-10">
									<h1 class="text-[30px] text-[#06E7ED] mt-6 mb-4">Welcome to Neucron!</h1>
									<h6 class="font-normal text-[#92B0C9] text-[12px]">
										Before moving ahead, please set up your account details.
									</h6>
									<img
										src="/dashboard/cameraProfile.svg"
										alt="cameraProfile"
										class="w-[60px] h-[60px] rounded-full bg-[#081B2A] mt-8"
									/>
									<h2 class="mt-2 text-[#FFF]">Add a photo</h2>
								</div>

								<div class="px-10 pt-4">
									<SuperDebug data={$form} />
									{#if $message?.status == 'failed' && $message.content}
										<p class="bg-red-100 p-4 text-red-400 text-xs font-semibold rounded">
											{$message.content}
										</p>
									{/if}
									{#if $message?.status == 'success' && $message.content}
										<p class="bg-green-100 p-4 text-green-400 text-xs font-semibold rounded">
											{$message.content}
										</p>
									{/if}
									<form
										class="flex flex-col"
										method="POST"
										action="?/updateuserProfile"
										use:enhance
										novalidate
										on:submit={(event) => {
											event.preventDefault();
											data.showSetPasswordPopup = 'false';
										}}
									>
										<div class="flex flex-col">
											<div class="h-full mt-5 text-[14px] text-[#FFF]">
												<Popinput
													type="text"
													label="Full Name"
													name="fullName"
													bind:value={form.fullname}
													errors={$errors?.fullName}
												/>
											</div>
											<div class="h-full mt-5 text-[14px] text-[#FFF]">
												<Popinput
													type="password"
													label="Set Password"
													name="password"
													htmlType="password"
													class={`bg-[#FFF]`}
													bind:value={form.password}
													errors={$errors?.password}
												/>
											</div>
											<div class="flex space-x-2 mt-2">
												<input
													type="checkbox"
													name=""
													id=""
													class="appearance-none bg-transparent border-2 border-[#081B2A] rounded-sm w-4 h-4 checked:bg-white"
												/>
												<p class="text-gray-400 text-barlow text-xs font-normal leading-4">
													Would you like to receive our email from our marketing team?
												</p>
											</div>
										</div>
										<div class="py-8 text-center">
											<button
												type="submit"
												class="text-md font-semibold whitespace-nowrap hover:bg-white py-3 px-14 rounded text-center w-[50%] bg-primary text-primary-dark"
												on:click={(event) => {
													event.preventDefault();
													data.showSetPasswordPopup = 'false';
												}}
											>
												{#if $delayed}
													<div>Saving</div>
													<div class="loading loading-dots" />
												{:else}
													Save
												{/if}
											</button>
										</div>
									</form>
								</div>
								<h6 class="text-[#92B0C9] text-[14px] text-center">
									By agreeing to receive emails from Neucron, you'll receive updates regarding new
									features on Neucron and be the first among the users to try out new features. You
									can unsubscribe to them anytime from your registered email.
								</h6>
							</div>
						</main>
					</Modal>
				</div>
			{/if}
		</div>
	</div>
</div>
