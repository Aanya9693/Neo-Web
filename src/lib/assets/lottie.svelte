<script>
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
	export let src = '';
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

<div class="flex justify-center max-w-[60vw]">
	<LottiePlayer
		{src}
		autoplay={true}
		loop={true}
		speed={0.5}
		controls={false}
		renderer="svg"
		background="transparent"
		height={'auto'}
		class="max-w-[70vw]"
		width={'auto'}
		{controlsLayout}
	/>
</div>
