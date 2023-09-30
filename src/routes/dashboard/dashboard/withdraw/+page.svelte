<script>
	import { onMount } from 'svelte';
	import Modal from '$lib/components/modal.svelte';
	import Input from '$lib/components/form/Input.svelte';
	import DropdownInput from '../../../../lib/components/form/DropdownInput.svelte';
	import Icon from '@iconify/svelte';

	let activeTab = 0; // To track the active tab, 0 for the first tab and 1 for the second tab

	onMount(() => {
		// Set the initial active tab
		setActiveTab(0);
	});

	function setActiveTab(tabIndex) {
		activeTab = tabIndex;
	}
</script>

<div class="w-full h-screen">
	<Modal>
		<div class="w-[718px] p-10 bg-[#112D44] rounded-xl">
			<div class="text-center mb-3">Withdraw Funds</div>
			<div class="mx-auto w-[368px] bg-[#081B2A] p-1 flex rounded-lg">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span
					class={`cursor-pointer w-1/2 rounded-md py-3 text-md text-center ${
						activeTab === 0 ? 'bg-[#112D44] text-white' : 'text-[#92B0C999]'
					}`}
					on:click={() => setActiveTab(0)}
				>
					Via UPI
				</span>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span
					class={`cursor-pointer w-1/2 rounded-md py-3 text-md text-center ${
						activeTab === 1 ? 'bg-[#112D44] text-white' : 'text-[#92B0C999]'
					}`}
					on:click={() => setActiveTab(1)}
				>
					Bank Transfer
				</span>
			</div>
			<!-- svelte-ignore empty-block -->
			{#if activeTab === 0}
				<div class="flex flex-col gap-10 my-10 px-10">
					<div>
						<Input type="number" editIcon={false} label="Withdraw amount" name="amount" value={0} />
					</div>
					<div>
						<DropdownInput
							label="UPI ID"
							options={['UPI192198@Neucron.io']}
							selectedValue="UPI192198@Neucron.io"
							showValue={false}
						/>
					</div>
				</div>
				<div class="flex justify-center">
					<button
						class="text-[16px] font-bold bg-primary text-primary-dark hover:bg-white py-2 px-8 rounded"
						>Withdraw</button
					>
				</div>
			{:else if activeTab === 1}
				<div class="flex flex-col gap-5 my-6 px-10 w-full">
					<div class="flex flex-col items-start gap-1">
						<h1 class="text-xl flex items-start gap-3">Account Details <Icon icon="icon-park-solid:down-one" color="#06e7ed" /></h1>
						<p class="text-xs text-[#92B0C999]">To add funds to your Neucron wallet, transfer funds via UPI/NEFT/RTGS/IMPS to the account below</p>
						
					</div>
					<div class="w-full bg-[#081B2A] rounded-lg">
                        <div class="flex py-3 justify-between px-4 border-b border-[#92B0C933]">
                            <div class="w-1/2 text-[#92B0C999]">Beneficiary Name</div>
                            <div class="w-1/2">Neucron</div>
                        </div>
                        <div class="flex py-3 justify-between px-4 border-b border-[#92B0C933]">
                            <div class="w-1/2 text-[#92B0C999]">Account No</div>
                            <div class="w-1/2">22222847466348487346</div>
                        </div>
                        <div class="flex py-3 justify-between px-4 border-b border-[#92B0C933]">
                            <div class="w-1/2 text-[#92B0C999]">IFSC Code</div>
                            <div class="w-1/2">Neucronaapis</div>
                        </div>
                        <div class="flex py-3 justify-between px-4">
                            <div class="w-1/2 text-[#92B0C999]">UPI ID</div>
                            <div class="w-1/2">Neu.payto000993298388@okicici</div>
                        </div>
                    </div>
				</div>
				<div class="flex justify-center">
					<button
						class="text-[16px] font-bold bg-primary text-primary-dark hover:bg-white py-2 px-8 rounded"
						>Withdraw</button
					>
				</div>
			{/if}
		</div>
	</Modal>
</div>
