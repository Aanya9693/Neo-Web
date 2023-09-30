<script>
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

	let controlsLayout = [
		'previousFrame',
		'playpause',
		'stop',
		'nextFrame',
		'progress',
		'frame',
		'loop',
		'spacer',
		'background',
		'snapshot',
		'zoom',
		'info'
	];
</script>

<div class="flex justify-end md:my-10 max-w-[70vw] mx-auto">
	<LottiePlayer
		src="/landing/hero-illustration.json"
		autoplay={true}
		loop={true}
		controls={false}
		renderer="svg"
		background="transparent"
		height={"auto"}
		{controlsLayout}
	/>
</div>
