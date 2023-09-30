<script>
	import Header from "../lib/header.svelte";
	import Lottie from '../lib/assets/lottie.svelte';
	import { browser } from '$app/environment';
    export let homepageURL = "/";

</script>

<header class="fixed top-0 w-full bg-[#F3F5F7] z-50">
	<Header />
</header>
<div class="my-40 md:my-10 font-barlow flex flex-col items-center justify-center md:h-full">
    <div class="mb-10">
        {#if browser}
            <Lottie src="/payment/Error.json" />
        {/if}
    </div>
    <!-- <img src="/under-construction.svg" class="w-96" alt="Under Construction" />  -->
    <h1 class="text-center text-secondary md:text-[64px] text-[24px] font-semibold md:!leading-1">Page Not Found</h1>       
    <h1 class="mb-10 text-center text-[#33444F] md:text-2xl text-sm md:w-full w-2/3">Ready to return to familiar dimensions? Click the button below.</h1>       
    <a href={homepageURL} class="bg-secondary w-fit text-[16px] font-semibold leading-6 md:!leading-7 text-[#06E7ED] rounded-md px-10 py-3 my-3 whitespace-nowrap z-10 hover:text-secondary hover:bg-transparent border-2 hover:border-secondary"> 
        Back to Home 
    </a>
    <!-- <div class="flex justify-center items-center">    
        <a href={homepageURL} class="text-lg bg-primary text-primary-dark-highlight py-2 px-24 rounded w-fit self-center mt-2 hover:underline">Go To Home</a>
    </div>     -->
</div>
