<script>
	export let item;
	export let index;
</script>

<div
	data-aos="fade-up"
	data-aos-delay={index * 100}
	class="col-span-1 h-[194px] w-[154px] sm:h-[320px] sm:w-[264px] border border-[rgba(17, 45, 68, 0.10)] m-auto mt-32 rounded-lg border-b-8 border-b-secondary shadow-md"
>
	<div class="h-[80px] w-[80px] sm:w-[150px] sm:h-[150px] p-4 mx-auto -mt-[30px] sm:-mt-[60px]">
		<img src={`/technology/` + item.icon} alt="logo" />
	</div>
	<div class="text-xs sm:text-xl px-4 sm:px-8 font-light">{item.text}</div>
</div>
