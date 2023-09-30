<script>
	// import Card from '$lib/components/svg/card.svelte';
	// import Frame from '$lib/components/svg/frame.svelte';
	// import Icon from '@iconify/svelte';
	import Card from '$lib/card.svelte';
	import Title from '$lib/title.svelte';
	import CopyToClipboard from '$lib/copy-to-clipboard.svelte';
	import URLInput from '$lib/url-input.svelte';
</script>

<!-- <div class="grid grid-rows-2 gap-4 m-6 w-full">
	<div class="p-6 bg-[#0C151E] rounded-xl">
		<div class="flex justify-between rounded-xl col-span-2">
			<div class="flex items-center justify-center space-x-2">
				<Icon icon="ic:round-arrow-drop-up" class=" rotate-180 text-3xl text-[#3A4753]" />
				<p class=" font-normal text-lg leading-5 text-[#54DEB2] capitalize">Card</p>
			</div>
			<div class="flex items-center space-x-8 text-[#54DEB2]">
				<div class="text-lg rounded-xl flex">
					<Icon icon="gg:trash" />
					<span class="text-[#3A4753] mx-6 text-sm">|</span>
					<Icon icon="ph:dots-three-bold" />
				</div>
			</div>
		</div>
		<div class="flex">
			<div class="flex flex-col my-5">
				<div class="w-full">
					<Card />
				</div>
				<div class="my-5">
					<a
						href="/dashboard/manage/wallet/cta/cards/new-card"
						class="font-bold text-sm leading-6 tracking-[-0.2px] flex"
					>
						<p class="text-xl text-[#54DEB2] font-light pr-2"><Icon icon="jam:plus-circle" /></p>
						<p>Add new card</p>
					</a>
				</div>
			</div>
			<div class="ml-20 my-5">
				<p class="text-[#8F92A1]">Card Information Primary</p>
				<div class="grid grid-cols-2 gap-4 my-8">
					<div class="flex flex-col">
						<p class="text-[#8F92A1] my-2">Card Name</p>
						<p>Main Card</p>
					</div>
					<div class="flex flex-col">
						<p class="text-[#8F92A1] my-2">Card Number</p>
						<p>•••• •••• •••• 1234</p>
					</div>
				</div>
				<div class="grid grid-cols-3 gap-4">
					<div class="">
						<p class="text-[#8F92A1] my-2">Name</p>
						<p>Rara Avis</p>
					</div>
					<div class="">
						<p class="text-[#8F92A1] my-2">Valid Thru</p>
						<p>03/21</p>
					</div>
					<div class="">
						<p class="text-[#8F92A1] my-2">Bank</p>
						<p>Bank XKDX</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-[#0C151E] min-w-full p-5 rounded-xl">
		<div class="flex justify-between rounded-xl col-span-2">
			<div class="flex items-center justify-center space-x-2 px-3">
				<Icon icon="ic:round-arrow-drop-up" class=" rotate-180 text-3xl text-[#3A4753]" />
				<p class=" font-normal text-lg leading-5 text-[#54DEB2] capitalize">Other Cards</p>
			</div>
			<div class="flex items-center space-x-8 text-[#54DEB2]">
				<div class="text-lg rounded-xl flex">
					<Icon icon="gg:trash" />
					<span class="text-[#3A4753] mx-6 text-sm">|</span>
					<Icon icon="ph:dots-three-bold" />
				</div>
			</div>
		</div>

		<div class="inline-block min-w-full align-middle">
			<table class="min-w-full">
				<tbody class=" my-5">
					<tr class="bg-primary-light rounded-xl m-3">
						<td
							class="whitespace-nowrap py-4 pl-4 pr-2 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><Frame />
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><div class="flex flex-col">
								<p class="text-[#ffffff]">Card Type</p>
								<p class="text-[#8F92A1]">Business</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
						>
							<div class="flex flex-col">
								<p class="text-[#ffffff]">Name</p>
								<p class="text-[#8F92A1]">Rara Avis</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><div class="flex flex-col">
								<p class="text-[#ffffff]">Card Number</p>
								<p class="text-[#8F92A1]">•••• •••• •••• 1234</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><div class="flex flex-col">
								<p class="text-[#ffffff]">Valid Thru</p>
								<p class="text-[#8F92A1]">03/21</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
						>
							<button
								class="text-md font-semibold text-white bg-primary py-2 px-6 rounded hover:bg-primary-light"
								>Active
							</button>
						</td>
					</tr>

					<tr class="bg-primary-light rounded-xl m-3">
						<td
							class="whitespace-nowrap py-4 pl-4 pr-2 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><Frame />
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><div class="flex flex-col">
								<p class="text-[#ffffff]">Card Type</p>
								<p class="text-[#8F92A1]">Identity Cards</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
						>
							<div class="flex flex-col">
								<p class="text-[#ffffff]">Name</p>
								<p class="text-[#8F92A1]">Rara Avis</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><div class="flex flex-col">
								<p class="text-[#ffffff]">Card Number</p>
								<p class="text-[#8F92A1]">•••• •••• •••• 1234</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><div class="flex flex-col">
								<p class="text-[#ffffff]">Valid Thru</p>
								<p class="text-[#8F92A1]">03/21</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
						>
							<button
								class="text-md font-semibold text-white bg-[#FF4A55] py-2 px-6 rounded hover:bg-primary-light"
								>Inactive</button
							>
						</td>
					</tr>

					<tr class="bg-primary-light rounded-xl m-3">
						<td
							class="whitespace-nowrap py-4 pl-4 pr-2 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><Frame />
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><div class="flex flex-col">
								<p class="text-[#ffffff]">Card Type</p>
								<p class="text-[#8F92A1]">Coupon</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
						>
							<div class="flex flex-col">
								<p class="text-[#ffffff]">Name</p>
								<p class="text-[#8F92A1]">Rara Avis</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><div class="flex flex-col">
								<p class="text-[#ffffff]">Card Number</p>
								<p class="text-[#8F92A1]">•••• •••• •••• 1234</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><div class="flex flex-col">
								<p class="text-[#ffffff]">Valid Thru</p>
								<p class="text-[#8F92A1]">03/21</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
						>
							<button
								class="text-md font-semibold text-white bg-primary py-2 px-6 rounded hover:bg-white"
								>Active
							</button>
						</td>
					</tr>

					<tr class="bg-primary-light rounded-xl m-3">
						<td
							class="whitespace-nowrap py-4 pl-4 pr-2 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><Frame />
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><div class="flex flex-col">
								<p class="text-[#ffffff]">Card Type</p>
								<p class="text-[#8F92A1]">Tickets</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
						>
							<div class="flex flex-col">
								<p class="text-[#ffffff]">Name</p>
								<p class="text-[#8F92A1]">Rara Avis</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><div class="flex flex-col">
								<p class="text-[#ffffff]">Card Number</p>
								<p class="text-[#8F92A1]">•••• •••• •••• 1234</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
							><div class="flex flex-col">
								<p class="text-[#ffffff]">Valid Thru</p>
								<p class="text-[#8F92A1]">03/21</p>
							</div>
						</td>
						<td
							class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-normal text-[#CBCBCB] capitalize sm:pl-0"
						>
							<button
								class="text-md font-semibold text-white bg-primary py-2 px-6 rounded hover:bg-white"
								>Active
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div> -->

<!-- <div class="col-span-6 gap-8 relative">
	<div class="w-full text-xs font-light">
		<Card>
			<div class="flex flex-col gap-14">
				<div class="flex gap-10">
					<div class="w-60 mr-10">
						<Title title="Keys" subtitle="Use these credentials to use our APIs" />
					</div>
					<div class="flex gap-4">
						<CopyToClipboard
							label="APP ID"
							content="63wreuidvbdsig46idsbvsbdbsbcvgv98 63wreuidvbdsig46idsbvsbdbsbcvgv9863wreuidvbdsig46idsbvsbdbsbcvgv98"
						/>
						<CopyToClipboard
							label="APP SECRET"
							content="appsecret_63wreuidvbdsig46idsbvsbdbsbcvgv98_random"
							secret={true}
						/>
					</div>
				</div>
				<div>
					<div class="flex gap-10">
						<div class="w-60 mr-10">
							<Title
								title="Redirections"
								subtitle="Define where to redirect users after Connect authentication is successful or declined"
							/>
						</div>
						<div class="flex gap-4">
							<CopyToClipboard
								label="URL SUCCESS REDIRECT"
								content="63wreuidvbdsig46idsbvsbdbsbcvgv98"
							/>
							<CopyToClipboard
								label="URL DECLINE REDIRECT"
								content="63wreuidvbdsig46idsbvsbdbsbcvgv98"
							/>
						</div>
					</div>
				</div>

				<div>
					<div class="flex gap-10">
						<div class="w-60 mr-10">
							<Title
								title="App URLs"
								subtitle="Link to your app on all available platforms. Provide at least one of them"
							/>
						</div>
						<div class="flex flex-col gap-4">
							<URLInput label="GOOGLE PLAY STORE" />
							<URLInput label="APPLE APP STORE" />
							<URLInput label="WEB APP" />
						</div>
					</div>
				</div>
				<div class="text-end">
					<button
						type="button"
						class="text-md font-semibold bg-primary text-primary-dark hover:bg-white py-3 px-14 rounded"
						>ADD</button
					>
				</div>
			</div>
		</Card>
	</div>
</div> -->
<div class="w-full flex justify-between space-x-4 p-[4%]">
	<div class="d">
		<Title title="Keys" subtitle="Use these credentials to use our APIs" />
	</div>
	<div class="d">
		<CopyToClipboard
			label="APP ID"
			content="63wreuidvbdsig46idsbvsbdbsbcvgv98 63wreuidvbdsig46idsbvsbdbsbcvgv9863wreuidvbdsig46idsbvsbdbsbcvgv98"
		/>
	</div>
	<div class="d">
		<CopyToClipboard
			label="APP SECRET"
			content="appsecret_63wreuidvbdsig46idsbvsbdbsbcvgv98_random"
			secret={true}
		/>
	</div>
</div>
<!-- <Card>
	<div class="flex flex-col gap-14">
		<div class="flex gap-10">
			<div class="w-60 mr-10">
				<Title title="Keys" subtitle="Use these credentials to use our APIs" />
			</div>
			<div class="flex gap-4">
				<CopyToClipboard
					label="APP ID"
					content="63wreuidvbdsig46idsbvsbdbsbcvgv98 63wreuidvbdsig46idsbvsbdbsbcvgv9863wreuidvbdsig46idsbvsbdbsbcvgv98"
				/>
				<CopyToClipboard
					label="APP SECRET"
					content="appsecret_63wreuidvbdsig46idsbvsbdbsbcvgv98_random"
					secret={true}
				/>
			</div>
		</div>
		<div>
			<div class="flex gap-10">
				<div class="w-60 mr-10">
					<Title
						title="Redirections"
						subtitle="Define where to redirect users after Connect authentication is successful or declined"
					/>
				</div>
				<div class="flex gap-4">
					<CopyToClipboard
						label="URL SUCCESS REDIRECT"
						content="63wreuidvbdsig46idsbvsbdbsbcvgv98"
					/>
					<CopyToClipboard
						label="URL DECLINE REDIRECT"
						content="63wreuidvbdsig46idsbvsbdbsbcvgv98"
					/>
				</div>
			</div>
		</div>

		<div>
			<div class="flex gap-10">
				<div class="w-60 mr-10">
					<Title
						title="App URLs"
						subtitle="Link to your app on all available platforms. Provide at least one of them"
					/>
				</div>
				<div class="flex flex-col gap-4">
					<URLInput label="GOOGLE PLAY STORE" />
					<URLInput label="APPLE APP STORE" />
					<URLInput label="WEB APP" />
				</div>
			</div>
		</div>
		<div class="text-end">
			<button
				type="button"
				class="text-md font-semibold bg-primary text-primary-dark hover:bg-white py-3 px-14 rounded"
				>ADD</button
			>
		</div>
	</div>
</Card> -->
