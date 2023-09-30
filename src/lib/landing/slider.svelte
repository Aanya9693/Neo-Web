<script>
	export let logos;
</script>

<div class="wrapper flex items-center justify-center">
	<div class="slider h-[110px] m-auto overflow-hidden relative">
		<div class="slide-track">
			{#each logos as logo}
				<div class="slide h-[100px] w-[250px]">
					<img src={logo.route} alt={logo.label} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	/* .wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.slider {
		height: 110px;
		margin: auto;
		overflow: hidden;
		position: relative;
	} */

	.slider .slide-track {
		-webkit-animation: scroll 30s linear infinite;
		animation: scroll 30s linear infinite;
		display: flex;
		width: calc(250px * 14);
	}

	/* .slider .slide {
		height: 100px;
		width: 250px;
	} */

	.slider .slide img {
		width: 90%;
		height: 100px;
	}

	@-webkit-keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-250px * 7));
		}
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-250px * 7));
		}
	}
</style>
