<script>
	export let icon = true;
	export let direction = 'row';
	export let size = 'small';
</script>

<div class="font-sans text-Josefin flex items-center relative logo__direction--{direction} logo__size--{size}">
	{#if icon}
		<img class="logo__icon" src="/favicon.svg" alt="logo" />
	{/if}
    <h1 class="mr-4 text-[20px] font-normal pt-1 logo__title text-[#fff]"
        >NEUCRO<span class="logoname__nletter absolute">N</span></h1
    >
	<button class="mt-2 text-[10px] border border-[#06E7ED] text-[#06E7ED] font-normal rounded-xl px-4 bg-transparent">
		BETA
	</button>

</div>

<style>
	.logo__direction--column {
		@apply flex-col;
	}

	.logo__direction--column .logo__title {
		@apply mt-2.5;
	}
	/* .logo__direction--row .logo__title {
		@apply ml-2;
	} */
	.logo__size--small .logo__icon {
		@apply h-8 w-8;
	}
	.logo__size--large .logo__icon {
		@apply h-20 w-14;
	}
</style>
