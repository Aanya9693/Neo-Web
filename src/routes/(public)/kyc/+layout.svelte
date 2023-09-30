<script>
	import Logo from '$lib/logo.svelte';
	import { page } from '$app/stores';
</script>

<main class="flex justify-center items-center mt-24 mb-24">
	<div
		class="h-[580px] w-[560px] rounded-2xl px-24 py-14 flex justify-evenly flex-col bg-primary-dark text-white text-sm relative"
	>
		<!-- <img class="man-with-key absolute -left-48 top-10" src="/man-with-key.svg" alt="Man with Key"/> -->
		<!-- <img class="shield absolute -right-24 top-12" src="/shield.svg" alt="Sheild" /> -->

		<div class="login-card-inner h-full w-full">
			<div class="flex flex-col items-center justify-center gap-2">
				<img src="/cloud-lock.svg" class="ml-5" alt="Cloud Lock" />
				<Logo icon={false} />
				<p class="text-xs">
					Lorem ipsum dolor sit amet consectetur. Dolor vel massa non egestas lorem.met consectetur.
					Dolor vel massa m
				</p>
			</div>
			<slot />
		</div>
	</div>
</main>
