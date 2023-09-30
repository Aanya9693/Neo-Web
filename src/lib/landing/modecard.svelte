<script>
	export let card;
</script>

<div
	class="flex flex-col px-8 pb-10 border rounded-xl bg-secondary md:bg-secondary"
>
	<div
		class="text-base md:text-xl text-left text-primary md:text-primary my-2 md:mt-[70px]"
	>
		<p>
			{card.title}
		</p>
	</div>
	<div
		class="text-sm md:text-base text-left font-normal !leading-5 md:!leading-6 text-[#92B0C9] md:text-[#92B0C9]"
	>
		{card.desc}
	</div>
    <div class="flex items-center mt-5">
        <p class="text-2xs md:text-lg text-primary">Learn More</p>
        <img src="/landing/mode_learnmore.svg" alt="Icon 1" class="w-3 h-3 md:w-4 md:h-4 ml-2"> 
    </div>
</div>