<script>
	import Logo from '$lib/logo.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import Slide from './slide.svelte';

	const sections = [
		{
			imageSrc: '/screen.svg',
			des: 'Behind every Neucron account is a secure digital wallet where you can hold all of your digital assets.'
		},
		{
			imageSrc: '/screen.svg',
			des: 'Behind every Neucron account is a secure digital wallet where you can hold all of your digital assets.'
		},
		{
			imageSrc: '/screen.svg',
			des: 'Behind every Neucron account is a secure digital wallet where you can hold all of your digital assets.'
		},
		{
			imageSrc: '/screen.svg',
			des: 'Behind every Neucron account is a secure digital wallet where you can hold all of your digital assets.'
		}
	];
</script>


<main class="h-screen">
	<div class="md:flex bg-[#081B2A] h-screen">
		<div class="md:w-1/2 bg-[#081B2A] pb-5">
			<a href="/" class="p-14 block z-10">
				<Logo size="big" />
			</a>
			{#if browser}
				<Carousel
					autoplay
					autoplayDuration={3000}
					arrows={false}
					let:pagesCount
					let:currentPageIndex
				>
					<div slot="dots" class="custom-dots flex mt-6">
						{#each Array(pagesCount) as _, pageIndex (pageIndex)}
							<div
								class="w-10 h-1 rounded-2xl mr-1"
								class:active={currentPageIndex === pageIndex}
								style="background-color: {currentPageIndex === pageIndex ? '#06E7ED' : '#92B0C9'}"
							/>
						{/each}
					</div>
					{#each sections as section}
						<Slide {section} />
					{/each}
				</Carousel>
			{/if}
		</div>
		<div class="bg-white md:w-1/2 p-6 pb-5" style="border-radius: 32px 0px 0px 32px;">
			<slot />
		</div>
	</div>
</main>
