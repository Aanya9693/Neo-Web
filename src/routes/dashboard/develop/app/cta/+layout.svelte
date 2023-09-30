<script>
	import CTA from './+page.svelte';
	import Search from '$lib/search.svelte';
	import Date from '$lib/date.svelte';
	import NotificationIcon from 'iconsax-svelte/Notification.svelte';

	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import EmptyWallet from 'iconsax-svelte/EmptyWallet.svelte';
	let ActiveTab = 'CTA';

	const Apps = [
		{
			id: 'App1',
			icon: '<Icon icon="fa-brands:fonticons" color="brown" />',
			label: 'App1'
		},
		{
			id: 'App2',
			icon: '<Icon icon="simple-icons:icons8" color="pink" />',
			label: 'App2'
		},
		{
			id: 'App3',
			icon: '<Icon icon="la:icons" color="brown" />',
			label: 'App3'
		}

		// {
		// 	id: 'App4',
		// 	icon: '<Icon icon="fluent:icons-20-filled" color="yellow" />',
		// 	label: 'App4'
		// },
		// {
		// 	id: 'App5',
		// 	icon: '<Icon icon="pixelarticons:pixelarticons" color="purple" />',
		// 	label: 'App5'
		// },
		// {
		// 	id: 'App6',
		// 	icon: '<Icon icon="arcticons:arcticons" color="red" />',
		// 	label: 'App6'
		// },
		// {
		// 	id: 'App5',
		// 	icon: '<Icon icon="pixelarticons:pixelarticons" color="purple" />',
		// 	label: 'App5'
		// },
		// {
		// 	id: 'App6',
		// 	icon: '<Icon icon="arcticons:arcticons" color="red" />',
		// 	label: 'App6'
		// }
		// {
		// 	id: 'App5',
		// 	icon: '<Icon icon="pixelarticons:pixelarticons" color="purple" />',
		// 	label: 'App5'
		// },
		// {
		// 	id: 'App6',
		// 	icon: '<Icon icon="arcticons:arcticons" color="red" />',
		// 	label: 'App6'
		// },
		// {
		// 	id: 'App5',
		// 	icon: '<Icon icon="pixelarticons:pixelarticons" color="purple" />',
		// 	label: 'App5'
		// },
		// {
		// 	id: 'App6',
		// 	icon: '<Icon icon="arcticons:arcticons" color="red" />',
		// 	label: 'App6'
		// },
		// {
		// 	id: 'App5',
		// 	icon: '<Icon icon="pixelarticons:pixelarticons" color="purple" />',
		// 	label: 'App5'
		// },
		// {
		// 	id: 'App6',
		// 	icon: '<Icon icon="arcticons:arcticons" color="red" />',
		// 	label: 'App6'
		// },
		// {
		// 	id: 'App5',
		// 	icon: '<Icon icon="pixelarticons:pixelarticons" color="purple" />',
		// 	label: 'App5'
		// },
		// {
		// 	id: 'App6',
		// 	icon: '<Icon icon="arcticons:arcticons" color="red" />',
		// 	label: 'App6'
		// }
	];

	const navbar = [
		{
			label: 'Credentials',
			route: '/dashboard/develop/app/cta/credentials'
		},
		{
			label: 'App Profile',
			route: '/dashboard/develop/app/cta/app-profile'
		},
		{
			label: 'Permission',
			route: '/dashboard/develop/app/cta/permission'
		},
		{
			label: 'User Data',
			route: '/dashboard/develop/app/cta/user-data'
		},
		{
			label: 'Permissions',
			route: '/dashboard/develop/app/cta/credentials'
		},
		{
			label: 'Terms',
			route: '/dashboard/manage/wallet/cta/terms'
		}
	];
</script>

<main class="bg-primary-light w-full col-start-1 col-span-6 gap-5">
	<div class=" bg-primary-dark col-span-2 px-5">
		<div class="flex gap-5 overflow-hidden justify-between">
			<div class="pt-4 overflow-x-auto rounded-t-2xl">
				<div class="flex my-4 space-x-28">
					{#each Apps as App}
						<button
							type="button"
							class={`button text-base leading-[22px] font-normal transition-all px-8 py-3 ${
								ActiveTab === App['id']
									? 'text-[#FFFFFF] rounded-xl bg-[#54DEB2]'
									: 'text-[#243341]'
							}`}
							on:click={() => {
								ActiveTab = App['id'];
							}}
						>
							{App['label']}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<aside class="flex w-full">
		<nav class=" bg-primary-dark rounded-b-2xl sidebar flex flex-col gap-8 py-3">
			{#each navbar as nav, i}
				<a
					class="text-lg gap-2 px-7 py-2.5 flex items-center"
					href={nav['route']}
					class:activenav={$page.url.pathname === nav['route']}
				>
					{#if $page.url.pathname === nav['route']}
						<span class="activenav__bar" />
					{/if}
					{nav['label']}
				</a>
			{/each}
		</nav>
		<div class="w-full">
			<slot />
		</div>
	</aside>
</main>

<style>
	.sidebar {
		/* max-height: 672px; */
		@apply w-44 text-[#243341];
	}

	.sidebar__head {
		@apply mt-9 mb-16;
	}

	.activenav {
		background-color: var(--primary);
		@apply border-[#58C9ED] border-solid border-b-2 w-full text-white;
	}
	.activenav__bar {
		@apply h-5/6 rounded-r-3xl left-0 absolute;
	}
	.ActiveTab {
		background-color: var(--primary);
		@apply bg-[#54DEB2];
	}
</style>
