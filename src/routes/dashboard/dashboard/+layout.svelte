<script>
	import Icon from '@iconify/svelte';
	import EmptyWallet from 'iconsax-svelte/EmptyWallet.svelte';
	import { selectedWalletStore } from './store.js';

	let selectedWallet;
	selectedWalletStore.subscribe((value) => {
		selectedWallet = value;
	});
	let dropdownVisible = false;

	let walletOptions = ['Wallet A', 'Wallet B', 'Wallet C'];
</script>

<div class="mx-[24px] mr-[48px] mt-[32px]">
	<div class="flex gap-[24px]">
		<div
			class="flex gap-2 justify-between bg-[#112D4466] px-[16px] py-[20px] rounded-[12px] w-[268px]"
		>
			<div class="relative w-full">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="flex items-center justify-start p-[27px] pl-[24px] bg-primary-light rounded-[8px] w-full"
					on:click={() => (dropdownVisible = !dropdownVisible)}
				>
					<EmptyWallet size="25" color="#06E7ED" variant="Bold" />
					<h3 class="text-lg mt-2 ml-2 font-bold mr-8">{selectedWallet}</h3>
					<div class="" style="margin: 0 auto;">
						<Icon
							icon="icon-park-solid:down-one"
							class={`cursor-pointer ${dropdownVisible ? 'rotate-180' : ''}`}
							color="#06e7ed"
						/>
					</div>
				</div>
				{#if dropdownVisible}
					<div class="absolute top-full left-0 mt-2 w-full z-10 rounded-md shadow-md">
						<ul class="py-2 bg-[#112D44] rounded-lg border border-gray-600">
							{#each walletOptions as walletOption (walletOption)}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<li
									class="hover:text-white hover:bg-[#1a2a3a] py-4 px-6 cursor-pointer"
									on:click={() => {
										selectedWalletStore.set(walletOption);
										dropdownVisible = false; // Close the dropdown after selection
									}}
								>
									{walletOption}
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
			<!-- <div class="flex space-x-8">
				<button class="bg-primary-light py-2 px-3 rounded-md flex space-x-2">
					<div class="-mt-1.5">
						<Icon icon="ic:round-plus" color="#06E7ED" width="25" />
					</div>
					<h4 class="text-[#06E7ED]">Create New Wallet</h4>
				</button>
				<button class="bg-primary-light p-1 px-3 rounded-md">
					<Icon icon="ph:dots-three-bold" color="#06E7ED" width="28" />
				</button>
			</div> -->
		</div>
		<div class="flex items-center bg-[#112D4466] flex-1 p-[16px] rounded-[8px] relative">
			<div class="flex items-center gap-[20px] justify-start ">
				<img src="/onboarding/ticket.svg" alt="" class="w-[50px]  h-[70px]" />
				<div class="mt-1">
					<h1 class="text-[20px] font-bold">Your KYC is pending</h1>
					<div class="flex items-center mt-2 gap-2">
						<img src="/onboarding/chart.svg" alt="" />
						<h2 class="text-[14px]">75% KYC Done so far</h2>
					</div>
				</div>
			</div>
			<div class="ml-auto mr-20 font-sans text-Josefin">
				<button
					class="text-[16px] font-bold bg-primary text-primary-dark hover:bg-white py-[8px] px-[46px] rounded"
					>Verify KYC</button
				>
			</div>
			<button
				class="p-1 rounded-full bg-gray-500 hover:bg-gray-600 focus:outline-none absolute top-[11px] right-[11px]"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-3 w-3 text-white"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
	</div>
	<slot />
</div>
