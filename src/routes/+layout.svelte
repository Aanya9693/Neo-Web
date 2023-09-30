<script>
	import '../app.css';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init({
			once: false,
			duration: 600,
			easing: 'ease'
		});
	});
	import Analytics from '$lib/analytics.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500&display=swap"
		rel="stylesheet"
	/>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500&display=swap"
		rel="stylesheet"
	/>

	<script src="https://cdn.zipy.ai/sdk/v1.0/zipy.min.umd.js" crossorigin="anonymous"></script>
	<script>
		window.zipy && window.zipy.init('3c20cba3');
	</script>
</svelte:head>

<slot />
<Analytics />
