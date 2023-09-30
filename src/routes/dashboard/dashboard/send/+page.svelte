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
		<div class="w-[718px] p-10 bg-[#112D44] rounded-2xl">
			<div class="text-center mb-3">Send Funds</div>
			<!-- <div class="mx-auto w-[368px] bg-[#081B2A] p-1 flex rounded-lg" /> -->
			<div class="flex flex-col gap-5 my-10 px-10">
				<div>
					<Input
						type="number"
						editIcon={false}
						label="Amount to transfer"
						name="amount"
						placeholder="0.001"
					/>
				</div>
				<div>
					<Input
						type="text"
						editIcon={false}
						label="Note (optional)"
						name="note"
						placeholder="Thanks for coffee"
					/>
				</div>
				<div>
					<Input
						type="text"
						editIcon={false}
						label="Address or Paymail*"
						name="address"
						placeholder="Satoshi@neucron.com"
					/>
				</div>
				<div>
					<DropdownInput
						label="Select asset"
						options={['Bitrupee']}
						selectedValue="Bitrupee"
						showValue={false}
					/>
				</div>
			</div>
			<div class="flex justify-center">
				<button
					class="text-[16px] font-bold bg-primary text-primary-dark hover:bg-white py-2 px-8 rounded"
					>SEND</button
				>
			</div>
		</div>
	</Modal>
</div>
