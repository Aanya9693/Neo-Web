<script>
    import DropdownInput from "./form/DropdownInput.svelte";
    import Input from "./form/Input.svelte";
    import Button from '../buttons/button.svelte'
	export let expand = false;
	export let showMenu = false;


	let bank_names = [
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
</script>

<div class="w-full px-12 rounded-xl py-10 bg-[#112D4480]">
	<div class="flex items-start flex-col justify-between gap-10">
		<div class="flex justify-between w-full items-start">
			<div class="flex space-x-4 items-center">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					src="../../../Vector.png"
					alt="logo"
					class={`w-fit h-fit cursor-pointer ${!expand ? 'rotate-180' : ''}`}
					on:click={() => (expand = !expand)}
				/>
				<img src="/dashboard/logo.svg" alt="logo" />
				<h1 class="font-medium text-xl leading-6">Neucron Bank - Rohan Sharan</h1>
			</div>
			<div class="flex space-x-12 items-center">
				<span class="font-normal text-[#ffffff99] text-[14px] leading-6"> Primary </span>
				<img src="../../../../Combined Shape.png" alt="trash" class="h-6 cursor-pointer" />
				<div class="relative">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<img
						src="../../../../carbon_overflow-menu-horizontal.png"
						class="cursor-pointer"
						alt="options"
						on:click={() => (showMenu = !showMenu)}
					/>
					{#if showMenu}
						<ul
							class="absolute w-[150px] bg-[#0E1F2D] py-3 rounded-lg right-0 z-10 border border-gray-600"
						>
							<li class="hover:text-white hover:bg-[#1a2a3a] py-3 px-6 cursor-pointer">
								Set as Primary
							</li>
							<li
								class="hover:text-white hover:bg-[#1a2a3a] border-t border-gray-600 py-3 px-6 cursor-pointer"
							>
								Manage UPI
							</li>
							<li
								class="hover:text-white hover:bg-[#1a2a3a] border-t border-gray-600 py-3 px-6 cursor-pointer"
							>
								Any Bank
							</li>
							<li
								class="hover:text-white hover:bg-[#1a2a3a] border-t border-gray-600 py-3 px-6 cursor-pointer"
							>
								Bank Bank
							</li>
						</ul>
					{/if}
				</div>
			</div>
		</div>
		{#if expand}
			<div class="flex justify-between items-start w-full pr-16">
				<div class="">
					<h1 class="font-medium text-base leading-6">Primary Account</h1>
					<h6 class="font-normal text-[#ffffff99] w-9/12 text-[10px] leading-6">
						Define where to redirect users after Connect authentication is successful or declined
					</h6>
				</div>
				<div class="flex flex-col flex-1">
					<div class="grid grid-cols-2 gap-x-10">
						<div class="flex flex-col h-full mt-5">
							<DropdownInput
								showValue={false}
								label="Beneficiary Name"
								options={bank_names}
								selectedValue={bank_name}
							/>
						</div>
						<div class="flex flex-col h-full mt-5">
							<Input type="number" readonly label="Account Number" name="accountNumber" />
						</div>
						<div class="flex flex-col h-full mt-12">
							<Input type="text" readonly label="IFSC Code" name="ifscCode" />
						</div>
						<div class="flex flex-col h-full mt-12">
							<Input type="text" readonly label="Branch" name="branch" />
						</div>
					</div>
					<div class="mt-6 flex justify-end">
						<Button
							label="Change"
							route="/dashboard/manage"
							className="bg-primary text-primary-dark w-full"
						/>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
