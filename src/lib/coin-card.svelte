<script>
	import ArrowDown from 'iconsax-svelte/ArrowDown.svelte';
	import ArrowUp from 'iconsax-svelte/ArrowUp3.svelte';

	export let amount = '';
	export let url = '';
	export let shortName = 'Timechain';
	export let type = 'May 23, 2023 at 10:56 PM';
	export let percentage = '-6.06%';
</script>

<div class="w-full flex bg-primary-light mb-3 p-3 px-4 rounded-md justify-between">
	<div class="flex">
		{#if url}
			<!-- <img
				class="bitcoin__img bg-primary bg-gradient-to-r from-primary-light shadow-md p-3 block w-12 rounded-md"
				src={url}
				alt="Bitcoin Logo"
			/> -->
			<img
				class="bitcoin__img p-3 block rounded-md"
				src={url}
				alt="Bitcoin Logo"
			/>
		{:else}
			<div
				class="bitcoin__img bg-purple-400 bg-gradient-to-r from-indigo-500 p-3 block w-12 rounded-md"
			>
				No
			</div>
		{/if}

		<div class="flex flex-col font-sans text-Josefin justify-center pl-2">
			<div class="text-[20px] font-normal text-[#FFF]">
				{shortName}
			</div>
			<div class="text-[12px] font-normal text-[#92B0C9] mt-1">
				{type}
			</div>
		</div>
	</div>
	<div class="flex flex-col justify-center items-center items-end pl-2">
		<div>
			{amount ? amount : '$0.00'}
		</div>
	</div>
</div>
