<script>
	export let icon = true;
	export let direction = 'row';
	export let size = 'small';
</script>

<div class="flex items-center relative logo__direction--{direction} logo__size--{size}">
	{#if icon}
		<img class="logo__icon" src="/favicon.svg" alt="logo" />
	{/if}
	<span class="text-2xl font-normal relative mt-1 logo__title text-[#fff]"
		>NEUCRO<span class="logoname__nletter absolute">N</span></span
	>
</div>

<style>
	.logo__direction--column {
		@apply flex-col;
	}

	.logo__direction--column .logo__title {
		@apply mt-2.5;
	}
	.logo__direction--row .logo__title {
		@apply ml-2;
	}
	.logo__size--small .logo__icon {
		@apply h-8 w-8;
	}
	.logo__size--large .logo__icon {
		@apply h-14 w-14;
	}
</style>
