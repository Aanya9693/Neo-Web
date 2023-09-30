<script>
	export let header;
	export let content;
	export let src;
</script>

<div
	data-aos="zoom-in"
	class="w-[380px] border border-[#06E7ED] rounded-[40px] overflow-hidden max-[550px]:w-full"
>
	<div class="bg-[#081B2A] h-[220px] w-full flex items-center justify-center">
		<img {src} alt="" class="h-[145px] w-auto" srcset="" />
	</div>
	<div class="bg-[#112D44] h-full py-8 pt-4 px-4 w-full">
		<h2 class="text-[#06E7ED] text-xl mb-3 whitespace-normal">
			{header}
		</h2>
		<p class="text-md text-[#92B0C9] whitespace-normal">
			{content}
		</p>
	</div>
</div>
