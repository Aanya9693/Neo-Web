<script>
	const APIURL = 'https://api.neucron.io/docs/';
</script>

<nav class="font-barlow text-medium flex justify-between items-center py-6 md:py-2 px-1 md:px-16">
	<a href="/" class="cursor-pointer z-10">
		<img src="/landing/logo.svg" alt="logo" class="w-[30%] block md:hidden" />
		<img src="/landing/logo.svg" alt="logo" class="md:block hidden" />
	</a>
	<div class="md:flex items-center justify-center font-medium">
		<a href="/products" class="text-xl md:text-[18.37px] mr-16">Products</a>
		<a href={APIURL} class="text-xl md:text-[18.37px] mr-16">Technology</a>
		<a href={APIURL} class="text-xl md:text-[18.37px] mr-16">Docs</a>
		<a
			href="/waitlist"
			class="bg-secondary text-base md:text-lg font-semibold leading-6 md:!leading-7 text-[#06E7ED] rounded-md px-8 py-3 whitespace-nowrap z-10"
		>
			Wallet
		</a>
	</div>
</nav>
