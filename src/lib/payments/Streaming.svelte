<script>
	import { fade } from 'svelte/transition';
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

<div class="flex justify-center md:my-20">
	<LottiePlayer
		src="/payment/Streaming.json"
		autoplay={true}
		loop={false}
		speed={.5}
		controls={false}
		renderer="svg"
		background="transparent"
		height={"auto"}
		class="max-w-[80vw]"
		width={""}
		{controlsLayout}
	/>
</div>


