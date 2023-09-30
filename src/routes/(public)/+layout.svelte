<script>
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import navigationState from '$lib/stores/NavigationState';
	import PageLoader from '$lib/PageLoader.svelte';
	import { fade } from 'svelte/transition';

	let showLoader = false;
	beforeNavigate(() => {
		$navigationState = 'loading';
		showLoader = true;
	});
	afterNavigate(() => {
		showLoader = false;
		$navigationState = 'loaded';
	});
</script>

<div class="text-barlow overflow-x-hidden relative">
	<header class="fixed top-0 w-full bg-transparent z-50">
		{#if showLoader}
			<div class="fixed z-50 top-0 left-0 bg-black/10 h-screen w-full grid place-items-center">
				<div out:fade={{ delay: 500 }}>
					<PageLoader />
				</div>
			</div>
		{/if}
		<Header />
	</header>
	<slot />
	<Footer />
</div>
