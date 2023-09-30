<script>
	export let item;
	export let index;
</script>

<div
	data-aos="flip-right"
	data-aos-delay={index * 100}
	class="col-span-1 transition-all text-left duration-200 group overflow-hidden m-auto p-4 my-3 relative flex flex-col justify-start text-primary border border-primary border-opacity-10 rounded-lg h-[148px] w-[154px] md:h-[202px] md:w-[240px]"
>
	<div class="absolute right-0 top-0">
		{#if index % 2}<svg
				xmlns="http://www.w3.org/2000/svg"
				width="67"
				height="71"
				viewBox="0 0 67 71"
				fill="none"
			>
				<path
					opacity="0.25"
					d="M48.8261 26.2727L72.7391 41.4901L96.6522 26.2727V56.7075L72.7391 69.751L48.8261 56.7075V26.2727ZM48.8261 26.2727L24.913 13.2292L1 26.2727V56.7075L24.913 69.751V41.4901L48.8261 26.2727ZM48.8261 26.2727L72.7391 13.2292V-17.2055L48.8261 -30.249L24.913 -17.2055L48.8261 -1.98815V26.2727Z"
					stroke="#07E1E8"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="71"
				height="71"
				viewBox="0 0 71 71"
				fill="none"
			>
				<path
					opacity="0.15"
					d="M82.5789 19.751L101 1.32992V-30.249H69.4211L51 -11.828M82.5789 19.751L51 -11.828M82.5789 19.751V51.3299H51M82.5789 19.751L101 38.172V69.751H69.4211L51 51.3299M51 -11.828L32.5789 -30.249H1V1.32992L19.4211 19.751M51 -11.828L19.4211 19.751M51 51.3299L32.5789 69.751H1V38.172L19.4211 19.751M51 51.3299H19.4211V19.751"
					stroke="#07E1E8"
				/>
			</svg>
		{/if}
	</div>
	<div class="rounded-full mt-[12px] bg-primary h-10 w-10 md:h-12 md:w-12 flex flex-col items-center justify-center">
		{@html item.icon}
	</div>
	<h3 class="text-base-100 text-sm md:text-xl mt-[12px] leading-4 md:leading-8 font-medium">{@html item.title}</h3>
</div>

<style>
	.group{
		box-shadow: 0px 15px 25px 0px rgba(51, 51, 51, 0.03);
	}
</style>