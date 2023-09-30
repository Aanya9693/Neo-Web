<script>
	import Icon from '@iconify/svelte';
	import Button from '$lib/buttons/button.svelte';
	import Loading from '$lib/components/loading.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';
	export let data;
	export let form;

	let hexColors = [];
	for (let i = 0; i <= data.apps.length; i++) {
		hexColors[i] = `#${Math.random().toString(16).slice(2, 8)}`;
	}
</script>

<div class="grid grid-cols-4 gap-3">
	{#if data.apps.length > 0}
		{#each data.apps as app, i}
			<div class="px-4 py-5 bg-primary-light">
				<div class="flex space-x-2">
					<div class="p-3 rounded-xl" style:background={hexColors[i]}>
						<img src="/dashboard/wallet/horse.svg" alt="horse" />
					</div>
					<div class="d">
						<p class="font-normal text-xl leading-5 capitalize">{app.app_name}</p>
						<p class="font-normal text-xs mt-2 leading-3 text-[#70767B] capitalize">
							Play chess. Earn Money
						</p>
					</div>
				</div>
				<div class="w-full">
					<Button
						label="CTA"
						route="/dashboard/develop/app/cta/credentials"
						className="bg-[#18212999] text-white w-full hover:text-black"
					/>
				</div>
			</div>
		{/each}
	{/if}
	<div class="px-4 py-5 bg-primary-light">
		<a href="/dashboard/develop/create-app">
			<div class="flex flex-col justify-center items-center hover:cursor-pointer">
				<div class="p-3 rounded-xl border-2 border-dashed border-spacing-4">
					<Icon icon="material-symbols:add" width="30" height="30" color="#54deb2" />
				</div>
				<h3 class="mt-5">Add Apps</h3>
			</div>
		</a>
	</div>
</div>
