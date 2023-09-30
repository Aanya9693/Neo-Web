<script>
	import Button from '$lib/buttons/button.svelte';
	import Logo from '$lib/logo.svelte';
	import { goto } from '$app/navigation';
</script>

<main class="md:flex bg-[#081B2A]">
	<div class="w-full bg-[#081B2A] h-screen md:w-1/2 bg-[#081B2A] pb-5 flex">
		<div class="absolute top-0 left-0 p-14">
			<Logo size="big" />
		</div>
		<div class="absolute top-0 left-0 md:w-1/2 h-full flex justify-center">
			<div class="flex items-center">
				<img src="/resetpass2.svg" alt="" />
			</div>
		</div>
	</div>

	<div
		class="bg-white md:w-1/2 flex justify-center items-center"
		style="border-radius: 32px 0px 0px 32px;"
	>
		<div class="absolute top-0 right-0 p-14">
			<h1 class="text-secondary text-[18.368px] text-right !leading-[27.552px] trackning-[0.115px]">
				API Documentation
			</h1>
		</div>
		<div class="flex justify-center items-center flex-col">
			<h1 class="text-[24px] font-medium !leading-6 uppercase text-secondary text-barlow mb-2">
				recovery Email sent
			</h1>
			<div class="text-center pt-4 2xl:pt-10 md:w-2/3">
				<p
					class="text-[16px] font-medium text-center text-[#081B2A] text-barlow mb-10 md:mx-8 !leading-6"
				>
					Please Check your email for next steps to reset your password
				</p>
				<div class="flex justify-center mt-5">
					<Button
						label="Back to Login"
						htmlType="submit"
						on:click={() => goto('/auth/login')}
						className="bg-secondary text-[14px] md:text-[16px] font-medium text-primary rounded-sm px-6 sm:px-8 py-2 hover:text-secondary hover:bg-primary"
					/>
				</div>
				<p class="font-medium text-[12px] font-[300] text-secondary text-barlow mt-1">
					Didn’t receive mail? <span class="text-[14px] font-semibold">Contact Us</span>
				</p>
				<!-- {#if status}
                    <Loading desc="Loading" />
                    <p>Successfully logged in! Welcome back, {data?.user?.name}</p>
                {/if} -->
			</div>
		</div>
	</div>
</main>
