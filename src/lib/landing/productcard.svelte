<script>
	export let card;
	export let href;
</script>
<div
	class="group relative font-barlow text-secondary flex flex-col px-4 pb-4 md:mb-10 mb-4 border bg-base-100 border-b-[0.4rem] border-b-secondary rounded-lg eachcard"
>
	<div class="md:visible absolute md:group-hover:invisible top-0 right-0">
		<img src={card.pattern} alt="img_icon" class="pattern-icon" />
	</div>
	<div class="md:invisible absolute md:group-hover:visible top-0 right-0">
		<img src={card.newpattern} alt="img_icon" class="pattern-icon" />
	</div>
	<div
		class="md:visible absolute invisible md:group-hover:invisible text-normal md:text-xl text-left text-secondary md:text-secondary my-4"
	>
		<img src={card.img} alt="img_icon" />
	</div>
	<div
		class="md:invisible md:group-hover:visible text-normal md:text-xl text-left text-secondary md:text-secondary my-4"
	>
		<img src={card.newimg} alt="img_icon" />
	</div>
	<div class="text-normal md:text-xl text-left text-secondary md:text-secondary my-4 mt-6">
		<p>
			{card.title}
		</p>
	</div>
	<div class="font-semibold text-[18px] text-left text-secondary !leading-6 mb-1">
		<p>
			{card.subtitle}
		</p>
	</div>
	<div
		class="mb-14 text-secondary text-sm md:text-base text-left font-normal !leading-5 md:!leading-6"
	>
		{card.desc}
	</div>
	<div class="flex absolute bottom-6">
		<a href={href+"#"+card.id} class="learnmore text-2xs md:text-md text-secondary font-semibold hover:cursor-pointer">
			Learn More
			<img src="/onboarding/learnmore.svg" alt="Icon 1" class="ml-2 learnmore-icon inline-block" />
		</a>
	</div>
</div>

<style>
	.eachcard {
		transition: background-color 0.3s, color 0.3s, border-color 0.3s;
	}

	.eachcard:hover {
		background-color: #112d44;
		color: white;
		border-color: #06e7ed;
	}
	.eachcard:hover * {
		color: white;
	}

	.eachcard:hover .learnmore,
	.eachcard:hover img {
		color: #06e7ed;
	}

	.eachcard:hover .learnmore-icon {
		content: url(/onboarding/learnmorehover.svg);
	}

	@media (max-width: 768px) {
		.eachcard {
			background-color: #112d44;
			color: white;
			border-color: #06e7ed;
		}
		.eachcard * {
			color: white;
		}

		.eachcard .learnmore,
		.eachcard img {
			color: #06e7ed;
		}

		.eachcard .learnmore-icon {
			content: url(/onboarding/learnmorehover.svg);
		}
	}
</style>
