<script>
	import Card from '$lib/components/svg/card.svelte';
	import Frame from '$lib/components/svg/frame.svelte';
	import Icon from '@iconify/svelte';
	console.log('dummy');
</script>

<div class="grid grid-rows-2 gap-4 m-6 w-full">
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
</div>
