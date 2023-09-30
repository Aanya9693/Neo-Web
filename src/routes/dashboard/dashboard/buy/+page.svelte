<script>
	import { onMount } from 'svelte';
	import Modal from '$lib/components/modal.svelte';
	import Input from '$lib/components/form/Input.svelte';
	import DropdownInput from '../../../../lib/components/form/DropdownInput.svelte';
	import Icon from '@iconify/svelte';
	import CopyToClipboard from '$lib/copy-to-clipboard.svelte';

	let activeTab = 0; // To track the active tab, 0 for the first tab and 1 for the second tab
	const options = ['Indian Rupees', 'USD', 'RUB', 'AED'];
	const upis = [
		'hello@handcash.io',
		'192g5ssJ8Q3YmofhdQwdiFKopc9ENQX',
		'192g5ssJ8Q3YmofhdQwdiFKopc9ENQX',
		'192g5ssJ8Q3YmofhdQwdiFKopc9ENQX',
		'192g5ssJ8Q3YmofhdQwdiFKopc9ENQX'
	];
	let activeUpi = 'hello@handcash.io';

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
		<div class=" px-14 py-10 bg-[#112D44] rounded-2xl">
			<div class="text-center mb-3 text-[#06E7ED] text-xl font-bold">Buy Crypto</div>
			<div class="mx-auto bg-[#0C2539] py-4 px-6 flex rounded-lg items-end w-[420px]">
				<div class="flex-1 flex flex-col gap-2">
					<p>You'll pay</p>
					<div class="text-3xl">100.00</div>
				</div>
				<div class="w-44">
					<DropdownInput
						{options}
						selectedValue="Indian Rupees"
						showValue={false}
						bright={true}
						roundedfull={true}
					/>
				</div>
			</div>
			<div class="text-xs text-[#06E7ED] text-center my-3">1 INR, 3.3686717736493E-7 Bitcoin</div>
			<div
				class="mx-auto bg-[#081B2A] py-4 px-6 flex rounded-lg items-end w-[420px] border-b-4 border-[#06E7ED]"
			>
				<div class="flex flex-col gap-2">
					<p>You'll get</p>
					<div class="text-3xl">0.009</div>
				</div>
			</div>
			<div
				class="mx-auto bg-[#081B2A] py-4 px-6 flex flex-col items-start rounded-lg w-[420px] my-4"
			>
				<div class="w-full">
					<DropdownInput
						options={upis}
						label="PayMail/Wallet Address"
						selectedValue={activeUpi}
						showValue={false}
						bright={true}
						roundedfull={true}
					/>
				</div>
				<div class="bg-[#112D44] py-3 px-4 rounded-md mt-3 flex gap-3">
					<svg
					class="inline-block"
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="#06E7ED"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7 0C3.14018 0 0 3.14018 0 7C0 10.8598 3.14018 14 7 14C10.8598 14 14 10.8598 14 7C14 3.14018 10.8598 0 7 0ZM10.1818 7.63636H7.63636V10.1818C7.63636 10.5332 7.35143 10.8182 7 10.8182C6.64857 10.8182 6.36364 10.5332 6.36364 10.1818V7.63636H3.81818C3.46675 7.63636 3.18182 7.35143 3.18182 7C3.18182 6.64857 3.46675 6.36364 3.81818 6.36364H6.36364V3.81818C6.36364 3.46675 6.64857 3.18182 7 3.18182C7.35143 3.18182 7.63636 3.46675 7.63636 3.81818V6.36364H10.1818C10.5332 6.36364 10.8182 6.64857 10.8182 7C10.8182 7.35143 10.5332 7.63636 10.1818 7.63636Z"
							fill="#06E7ED"
						/>
					</svg>

					<span class="text-[#06E7ED]">Add new</span>
				</div>
			</div>
			<div class="flex justify-center">
				<button
					class="text-[16px] font-bold bg-primary text-primary-dark hover:bg-white py-3 px-20 rounded mt-4"
					>Button</button
				>
			</div>
		</div>
	</Modal>
</div>

<style>
	.colorized-svg {
		filter: brightness(0) invert(1) hue-rotate(180deg);
	}
</style>
