<script>
	import StarRating from '$lib/components/StarRating.svelte';
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();

	export let testimonial;
</script>

<div
	class="md:w-[746px] md:h-[370px] h-[180px] w-[230px] sm:w-[300px] bg-secondary rounded-2xl relative pt-8 md:pt-[50px] mt-[52px] pb-14"
>
	<!-- <div class="top-0 left-0 absolute">
		<img src="/landing/Pattern.svg" alt="top" class="w-[60%] md:w-full" />
	</div> -->
	<!-- <div class="bottom-0 right-0 absolute">
		<img src="/landing/Pattern.svg" alt="bottom" class="w-[60%] md:w-full" />
	</div> -->
	<div class="top-0 right-0 absolute hidden md:block">
		<img src="/landing/right-arrow.svg" alt="right-arrow" class="w-[60%] md:w-full" />
	</div>
	<div class="bottom-0 left-0 absolute hidden md:block">
		<img src="/landing/left-arrow.svg" alt="left-arrow" class="w-[60%] md:w-full" />
	</div>
	<div class="flex flex-col items-center shrink-0">
		<div class="avatar absolute -top-[52px] shadow-2xl">
			<div class="w-16 md:w-[104px] mt-4 md:mt-0 rounded-full">
				<img src={testimonial.avatar} class="w-16 h-16 md:w-[104px] md:h-[104px]" alt="dummy" />
			</div>
		</div>
		<div class="mt-2 md:mt-5 w-[30%] md:w-[120px] shrink-0 mb-2 md:mb-6">
			<StarRating rating={testimonial.rating} />
		</div>
		<p
			class="md:max-w-[618px] px-6 md:px-0 text-base-100 text-[10px] md:text-[22px] text-center mb-5 md:mb-[65px] leading-3 md:!leading-[28px] shrink-0"
		>
			“{testimonial.review}”
		</p>
		<div class="text-center">
			<h3 class="text-primary leading-[9.953px] md:!leading-7 font-semibold text-[10px] md:text-xl">
				{testimonial.username}
			</h3>
			<p class="text-[#92B0C9] font-normal text-[8px] md:text-base leading-[7.962px] md:!leading-6">
				{testimonial.duration}
			</p>
		</div>
	</div>
</div>
