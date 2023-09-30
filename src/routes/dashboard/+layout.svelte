<script>
	// import 'normalize.css';
	import Logo from '$lib/logo.svelte';
	import Search from '$lib/search.svelte';
	import Date from '$lib/date.svelte';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	// Icons
	import EmptyWallet from 'iconsax-svelte/EmptyWallet.svelte';
	import ElementPlus from 'iconsax-svelte/ElementPlus.svelte';
	import CodeCircle from 'iconsax-svelte/CodeCircle.svelte';
	import Setting2 from 'iconsax-svelte/Setting2.svelte';
	import BitcoinConvert from 'iconsax-svelte/BitcoinConvert.svelte';
	import Dashboard from '$lib/components/svg/dashboard.svelte';
	import Develop from '$lib/components/svg/develop.svelte';
	import Setting from '$lib/components/svg/manage.svelte';
	import Dashboardlogo from '../../lib/dashboardlogo.svelte';
	export let data;

	const navbar = [
		{
			icon: Dashboard,
			label: 'Dashboard',
			route: '/dashboard/dashboard'
		},
		{
			icon: EmptyWallet,
			label: 'Wallet',
			route: '/dashboard/wallet'
		},
		{
			icon: ElementPlus,
			label: 'Apps',
			route: '/dashboard/apps'
		},
		{
			icon: Develop,
			label: 'Develop',
			route: '/dashboard/develop'
		},
		{
			icon: Setting,
			label: 'Manage',
			route: '/dashboard/manage'
		}
	];
</script>

<div class="dashboard bg-primary-dark flex text-white text-sm">
	<div class="fixed md:w-[216px] h-screen font-sans text-Josefin font-normal bg-primary-light">
		<div class="text-center justify-center items-center">
			<div class="sidebar__head pt-4">
				<Dashboardlogo direction="column" size="large" />
			</div>
			<div class="items-start flex flex-col"
			>
				{#each navbar as nav, i}
					<a
						class="text-lg w-full gap-2 py-2.5 mb-2 flex items-center justify-start pl-12"
						href={nav['route']}
						class:activenav={$page.url.pathname === nav['route']}
						>
						{#if $page.url.pathname === nav['route']}
							<span class="activenav__bar" />
						{/if}
						<svelte:component this={nav.icon} size="20" color="#06E7ED" variant="Bold"/>
						{nav['label']}
					</a>
				{/each}
				<form action="/auth/logout?/logout" method="POST">
					<button type="submit" class="text-lg items-center gap-2 flex md:mt-16 mb-8 ml-14">
						Logout
						<Icon icon="material-symbols:logout" color="#06e7ed" width="20" />
					</button>
				</form>
			</div>
		</div>
	</div>
	<div class="md:w-5/6 h-full pt-12 ml-0 md:ml-[240px]">
		<div class="flex gap-8 mr-10 ml-4">
			<Search />
			<Date />
			<button class="bg-primary-light px-3 rounded-md">
				<Icon icon="mingcute:notification-fill" color="#06e7ed" />
			</button>
			<button class="">
				<img
					class="max-w-12 max-h-12 aspect-square object-cover rounded-md"
					src={data?.userInfo?.image_url ?? '/person-male.png'}
					alt="Profile"
				/>
			</button>
		</div>
		<slot />
	</div>
	<!-- <div class="modal-element" /> -->
</div>

<style>
	/* .sidebar {
		@apply w-60 rounded-2xl;
	} */

	.sidebar__head {
		@apply mt-9 mb-20;
	}

	.activenav {
		/* width: 100%; */
		background: var(--primary);
		@apply bg-primary-dark;
	}
	.activenav__bar {
		@apply w-1 h-11 right-0 absolute bg-primary;
	}
</style>
