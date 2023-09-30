<script>
	import { page } from '$app/stores';
	import Api from '$lib/develop/svg/api.svelte';
	import App from '$lib/develop/svg/app.svelte';
	import Find from '$lib/develop/svg/find.svelte';
	import People from '$lib/develop/svg/people.svelte';
	import Setting from '$lib/develop/svg/setting.svelte';
	import Subscription from '$lib/develop/svg/subscription.svelte';
	import Team from '$lib/develop/svg/team.svelte';
	import Usage from '$lib/develop/svg/usage.svelte';
	import Icon from '@iconify/svelte';

	const navbar = [
		{
			icon: App,
			label: 'Your Apps',
			route: '/dashboard/develop/app/cta/credentials'
		},
		{
			icon: People,
			label: 'People',
			route: '/dashboard/develop/people'
		},
		{
			icon: Subscription,
			label: 'Subscription',
			route: '/dashboard/develop/subscription'
		},
		{
			icon: Api,
			label: 'API Key’s',
			route: '/dashboard/develop/api'
		},
		{
			icon: Usage,
			label: 'Usage',
			route: '/dashboard/develop/usage'
		},
		{
			icon: Setting,
			label: 'Setting',
			route: '/dashboard/develop/setting'
		}
	];
</script>

<div class="w-full col-span-6 h-screen">
	<div
		class="col-start-1 col-span-8 flex gap-5 justify-between bg-[#112D4466] px-10 py-2 rounded-md"
	>
		<div class="flex space-x-8">
			<div class="flex space-x-4 bg-primary-light px-3 rounded-md py-0.5">
				<Team />
				<h3 class="mt-2">Teams</h3>
				<div class="mt-2">
					<Icon icon="icon-park-solid:down-one" color="#06e7ed" />
				</div>
			</div>
		</div>
		<div class="flex space-x-8">
			<button class="bg-primary-light py-2 px-3 rounded-md flex space-x-2">
				<div class="-mt-1.5">
					<Icon icon="ic:round-plus" color="#06e7ed" width="25" />
				</div>
				<h4>Create New</h4>
			</button>
			<button class="bg-primary-light py-2 px-3 rounded-md flex space-x-2">
				<div class="-mt-1.5">
					<Find />
				</div>
			</button>
			<button class="bg-primary-light p-1 px-3 rounded-md">
				<Icon icon="ph:dots-three-bold" color="#06e7ed" width="25" />
			</button>
		</div>
	</div>
	<div class="bg-[#112D4466] py-4 rounded-lg col-start-1 col-span-6 w-full">
		<div class="flex gap-5 justify-evenly py-2 rounded-md">
			{#each navbar as nav, i}
				<a
					class={`flex space-x-2 p-3 ${
						$page.url.pathname === nav['route'] ? 'bg-primary-light rounded-lg' : ''
					}`}
					href={nav['route']}
					class:activenav={$page.url.pathname === nav['route']}
				>
					<h3>{nav.label}</h3>
					<svelte:component
						this={nav.icon}
						className={`${
							$page.url.pathname === nav['route'] ? 'text-[#06E7ED]' : 'text-[#92B0C9]'
						}`}
					/>
				</a>
			{/each}
		</div>
		<slot />
	</div>
</div>
