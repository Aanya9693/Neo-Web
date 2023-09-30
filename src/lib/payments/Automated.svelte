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

<div class="flex justify-center">
	<LottiePlayer
		src="/payment/Automated.json"
		autoplay={true}
		loop={false}
		speed={.5}
		controls={false}
		renderer="svg"
		background="transparent"
		height={"auto"}
		class="max-w-[80vw]"
		width={"auto"}
		{controlsLayout}
	/>
</div>
