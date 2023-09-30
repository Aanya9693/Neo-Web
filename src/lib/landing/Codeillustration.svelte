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

	<div class="flex justify-end">
		<LottiePlayer
			src="/landing/code-illustration.json"
			autoplay={true}
			loop={false}
			speed={.5}
			controls={false}
			renderer="svg"
			background="transparent"
			height={"auto"}
			class="max-w-[70vw]"
			width={"auto"}
			{controlsLayout}
		/>
	</div>
