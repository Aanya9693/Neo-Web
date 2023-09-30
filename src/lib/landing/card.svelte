<script>
	export let card;
	export let index;
</script>

<div data-aos="zoom-in-left" data-aos-delay={index*300}
	class="relative m-auto my-3 w-[276px] h-[276px] lg:w-[412px] lg:h-[383px] drop-shadow-sm text-center justify-start items-center flex flex-col px-5 lg:px-14 border rounded-xl bg-secondary md:bg-[#f0f1f5] group hover:bg-secondary font-barlow text-secondary p-5 lg:py-10"
>
	<div class="absolute top-0 right-0">
		<img src="{card.pattern}" alt="img_icon" class="pattern-icon">
	</div>
	<div class="md:invisible absolute group-hover:visible top-0 right-0">
		<img src="{card.newpattern}" alt="img_icon" class="pattern-icon">
	</div>
	<div class="w-full">
		<img src="{card.img}" alt="img_icon" class="hidden m-0 lg:mx-auto h-12 lg:h-16 w-12 lg:w-16 md:block group-hover:hidden">
		<img src="{card.newimg}" alt="img_icon" class="block m-0 lg:mx-auto h-12 lg:h-16 w-12 lg:w-16 md:hidden group-hover:block">
	</div> 
	<div
		class="text-base lg:text-xl font-semibold leading-6 lg:leading-8 text-primary md:text-[#2D2D2D] group-hover:text-primary mt-3 mb-2 lg:mt-6 lg:mb-4"
	>
		<p>
			{card.title}
		</p>
	</div>
	<div
		class=" text-center justify-center text-sm lg:text-base font-normal leading-5 lg:leading-6 text-base-100 md:text-[#33444F] group-hover:text-base-100"
	>
		{card.desc}
	</div>
</div>
