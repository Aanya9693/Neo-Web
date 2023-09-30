<script>
    
	const APIURL = 'https://api.neucron.io/docs/';
</script>
<nav class="flex justify-between items-center py-6 md:py-12 px-4 md:px-16">
		<img src="/landing/logo.svg" alt="logo" class="w-[30%] block md:hidden" />
		<img src="/landing/logo.svg" alt="logo" class="md:block hidden" />
		
		<div class="hidden md:flex items-center justify-center font-bold">
			<a href={APIURL} class="text-xs md:text-[18.37px] mr-16">Products</a>
			<a href={APIURL} class="text-xs md:text-[18.37px] mr-16">Technology</a>
			<a href={APIURL} class="text-xs md:text-[18.37px] mr-16">Docs</a>
			<button type="button" class="bg-secondary text-base md:text-lg font-semibold leading-6 md:!leading-7 text-[#06E7ED] rounded-md px-8 py-3 whitespace-nowrap" on:click={() => { goto(APIURL); }}>
				Wallet
			</button>
		</div>
	</nav>