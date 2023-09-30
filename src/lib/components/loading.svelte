<script>
	import { fly, fade } from 'svelte/transition';
	export let desc = '';
</script>

<div
	class="fixed top-0 bottom-0 left-0 right-0 z-10 w-full h-full bg-[#000000cc] bg-opacity-75"
	transition:fade
>
	<div class="opacity-100 z-12" transition:fly={{ y: 500 }}>
		<div class="relative grid place-items-center h-screen">
			<div
				class="flex flex-col justify-center items-center bg-[#0C151E] w-[296px] h-[152px] rounded-2xl"
			>
				<img class="" src="/favicon.svg" alt="logo" />
				<h1 class="text-white capitalize font-semibold text-base leading-6">{desc}</h1>
			</div>
		</div>
	</div>
</div>
