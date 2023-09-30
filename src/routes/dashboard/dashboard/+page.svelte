<script>
	import Portal from 'svelte-portal';
	import Card from '$lib/card.svelte';
	import CoinCard from '$lib/coin-card.svelte';
	import Title from '$lib/title.svelte';
	import CopyToClipboard from '$lib/copy-to-clipboard.svelte';
	import Icon from '@iconify/svelte';
	// Icons
	import EmptyWallet from 'iconsax-svelte/EmptyWallet.svelte';
	import ScanBarcode from 'iconsax-svelte/ScanBarcode.svelte';
	import Bank from 'iconsax-svelte/Bank.svelte';
	import Cards from 'iconsax-svelte/Cards.svelte';
	import { selectedWalletStore } from './store.js';
	import Asset from '../../../lib/components/Asset.svelte';

	let selectedWallet;
	const walletsData = {
		'Wallet A': [
			{
				tabType: 'Asset',
				value: '0.5 XMR (1 XMR = 200.75 GBP)',
				svg: '../../../../dashboard/dashboard/tabs/Frame 1000003894-4.svg'
			},
			{
				tabType: 'Activity',
				value: 'Last transaction September 2, 2023',
				svg: '../../../../dashboard/dashboard/tabs/Frame 1000003894.svg'
			},
			{
				tabType: 'Invoice',
				value: '8000 | in last 30 days',
				svg: '../../../../dashboard/dashboard/tabs/Frame 1000003894-2.svg'
			},
			{
				tabType: 'Notification',
				value: 'Last transaction September 2, 2023',
				svg: '../../../../dashboard/dashboard/tabs/Frame 1000003894-3.svg'
			}
		],

		'Wallet B': [
			{
				tabType: 'Asset',
				value: '2 LTC (1 LTC = 150.25 CAD)',
				svg: '../../../../dashboard/dashboard/tabs/Frame 1000003894-4.svg'
			},
			{
				tabType: 'Activity',
				value: 'Last transaction August 15, 2023',
				svg: '../../../../dashboard/dashboard/tabs/Frame 1000003894.svg'
			},
			{
				tabType: 'Invoice',
				value: '30000 | in last 30 days',
				svg: '../../../../dashboard/dashboard/tabs/Frame 1000003894-2.svg'
			},
			{
				tabType: 'Notification',
				value: 'Last transaction August 15, 2023',
				svg: '../../../../dashboard/dashboard/tabs/Frame 1000003894-3.svg'
			}
		],

		'Wallet C': [
			{
				tabType: 'Asset',
				value: '50 ADA (1 ADA = 1.75 USD)',
				svg: '../../../../dashboard/dashboard/tabs/Frame 1000003894-4.svg'
			},
			{
				tabType: 'Activity',
				value: 'Last transaction August 20, 2023',
				svg: '../../../../dashboard/dashboard/tabs/Frame 1000003894.svg'
			},
			{
				tabType: 'Invoice',
				value: '6000 | in last 30 days',
				svg: '../../../../dashboard/dashboard/tabs/Frame 1000003894-2.svg'
			},
			{
				tabType: 'Notification',
				value: 'Last transaction August 20, 2023',
				svg: '../../../../dashboard/dashboard/tabs/Frame 1000003894-3.svg'
			}
		]
	};
	let selectedWalletData;
	let activeTab;
	selectedWalletStore.subscribe((value) => {
		selectedWallet = value;
		selectedWalletData = walletsData[selectedWallet];
		activeTab = selectedWalletData[0].tabType;
	});

	const notifications = [
		{
			company: 'Neucron',
			label: 'Onramp',
			time: '23:12',
			message: 'You have loaded 20 rs',
			logo: '../../../../dashboard/dashboard/logos/Frame 1194.svg'
		},
		{
			company: 'EUBS',
			label: 'Ticket Purchase',
			time: '23:12',
			message: 'You bought ticket for EUBS Conference Ticket',
			logo: '../../../../dashboard/dashboard/logos/Frame 1193.svg'
		},
		{
			company: 'Manthandex',
			label: 'Securities-Purchase',
			time: '23:12',
			message: 'You bought 20 shares of Timechainlabs',
			logo: '../../../../dashboard/dashboard/logos/Frame 1193-2.svg'
		},
		{
			company: 'Neucron',
			label: 'Onramp',
			time: '23:12',
			message: 'You have loaded 20 rs',
			logo: '../../../../dashboard/dashboard/logos/Frame 1194.svg'
		},
		{
			company: 'EUBS',
			label: 'Ticket Purchase',
			time: '23:12',
			message: 'You bought ticket for EUBS Conference Ticket',
			logo: '../../../../dashboard/dashboard/logos/Frame 1193.svg'
		},
		{
			company: 'Manthandex',
			label: 'Securities-Purchase',
			time: '23:12',
			message: 'You bought 20 shares of Timechainlabs',
			logo: '../../../../dashboard/dashboard/logos/Frame 1193-2.svg'
		}
	];

	const activities = [
		{
			date: 'May 23',
			day: 'Monday',
			company: 'Neucron',
			label: 'You sent Firdous 15$',
			activity: 'Payment done',
			logo: '../../../../dashboard/dashboard/logos/Frame 1194.svg'
		},
		{
			date: 'May 24',
			day: 'Tuesday',
			company: 'Metalogue',
			activity: 'ONDC Purchase',
			label: 'You have purchased Iphone 15 from apple store',
			logo: '../../../../dashboard/dashboard/logos/Frame 1193-4.svg'
		},
		{
			date: 'May 25',
			day: 'Wednesday',
			company: 'BDFS',
			activity: 'Fill Access Purchase',
			label: 'You have purchased Iphone 15 from apple store',
			logo: '../../../../dashboard/dashboard/logos/Frame 1193-3.svg'
		},
		{
			date: 'May 23',
			day: 'Monday',
			company: 'Neucron',
			label: 'You sent Firdous 15$',
			activity: 'Payment done',
			logo: '../../../../dashboard/dashboard/logos/Frame 1194.svg'
		},
		{
			date: 'May 24',
			day: 'Tuesday',
			company: 'Metalogue',
			activity: 'ONDC Purchase',
			label: 'You have purchased Iphone 15 from apple store',
			logo: '../../../../dashboard/dashboard/logos/Frame 1193-4.svg'
		}
	];

	const assets = [
		{
			name: 'AWS Credits',
			value: '20.00 USDT',
			label: 'AWS',
			logo: '../../../../dashboard/dashboard/logos/aws.svg'
		},
		{
			name: 'EUBS Ticket',
			value: '20 Tickets',
			label: 'Eubs',
			logo: '../../../../dashboard/dashboard/logos/Frame 1193.svg'
		},
		{
			name: 'Rupees',
			value: '20.00',
			label: 'Curr',
			logo: '../../../../dashboard/dashboard/logos/rupee.svg'
		},
		{
			name: 'Dollor',
			value: '20.00 USDC',
			label: 'USD',
			logo: '../../../../dashboard/dashboard/logos/dollar.svg'
		},
		{
			name: 'Myntra Coupon',
			value: '20.00',
			label: 'AWS',
			logo: '../../../../dashboard/dashboard/logos/myntra.svg'
		},
		{
			name: 'BSV',
			value: '1.20 BSV',
			label: 'AWS',
			logo: '../../../../dashboard/dashboard/logos/bsv.svg'
		},
		{
			name: 'NFT',
			value: '20 NFTS',
			label: 'Anokha',
			logo: '../../../../dashboard/dashboard/logos/nft.svg'
		},
		{
			name: 'REIT',
			value: '70 REIT',
			label: 'AWS',
			logo: '../../../../dashboard/dashboard/logos/reit.svg'
		},
		{
			name: 'Shares',
			value: '2 sHARES',
			label: 'AWS',
			logo: '../../../../dashboard/dashboard/logos/shares.svg'
		},
		{
			name: 'Votes',
			value: '1 VOTE',
			label: 'Reorg',
			logo: '../../../../dashboard/dashboard/logos/votes.svg'
		},
		{
			name: 'loyalty',
			value: '30 POINTS',
			label: 'AWS',
			logo: '../../../../dashboard/dashboard/logos/loyalty.svg'
		}
	];

	let selectedBasket = 'Basket 1';
	let dropdownVisible = false;

	let basketOptions = ['Basket 1', 'Basket 2', 'Basket 3'];

	function handleBasketClick(basket) {
		selectedBasket = basket;
		dropdownVisible = false; // Hide the dropdown after selecting an option
	}

	// let active = 'activity';

	// function toggleActiveTab(tab) {
	// 	if (active === tab) {
	// 		active = null;
	// 	} else {
	// 		active = tab;
	// 	}
	// }

	// function isActiveTab(tab) {
	// 	return active === tab;
	// }

	// let walletButtons = [
	// 	{
	// 		id: 'add',
	// 		label: 'Add'
	// 	},
	// 	// {
	// 	// 	id: 'send',
	// 	// 	label: 'Send'
	// 	// },
	// 	{
	// 		id: 'withdraw',
	// 		label: 'Withdraw'
	// 	}
	// ];

	// let bitcoins = [
	// 	{
	// 		status: true,
	// 		amount: '$58,456.05',
	// 		url: '/crypto-logos/bitcoin-btn.svg'
	// 	},
	// 	{
	// 		status: false,
	// 		amount: '$58,456.05',
	// 		url: '/crypto-logos/cardano.svg'
	// 	},
	// 	{
	// 		status: false,
	// 		amount: '$58,456.05',
	// 		url: '/crypto-logos/chainlink.svg'
	// 	},
	// 	{
	// 		status: true,
	// 		amount: '$58,456.05',
	// 		url: '/crypto-logos/neucron.svg'
	// 	},
	// 	{
	// 		status: true,
	// 		amount: '$58,456.05',
	// 		url: '/crypto-logos/chainlink.svg'
	// 	},
	// 	{
	// 		status: false,
	// 		amount: '$58,456.05',
	// 		url: '/crypto-logos/cardano.svg'
	// 	},
	// 	{
	// 		status: false,
	// 		amount: '$58,456.05',
	// 		url: '/crypto-logos/bitcoin-btn.svg'
	// 	}
	// ];
	// let notifications = [
	// 	{
	// 		status: true,
	// 		amount: '$',
	// 		url: '/crypto-logos/bitcoin-btn.svg'
	// 	},
	// 	{
	// 		status: false,
	// 		amount: '$',
	// 		url: '/crypto-logos/cardano.svg'
	// 	},
	// 	{
	// 		status: false,
	// 		amount: '$.05',
	// 		url: '/crypto-logos/chainlink.svg'
	// 	},
	// 	{
	// 		status: true,
	// 		amount: '$58,456.05',
	// 		url: '/crypto-logos/neucron.svg'
	// 	},
	// 	{
	// 		status: true,
	// 		amount: '$58,456.05',
	// 		url: '/crypto-logos/chainlink.svg'
	// 	},
	// 	{
	// 		status: false,
	// 		amount: '$58,456.05',
	// 		url: '/crypto-logos/cardano.svg'
	// 	},
	// 	{
	// 		status: false,
	// 		amount: '$58,456.05',
	// 		url: '/crypto-logos/bitcoin-btn.svg'
	// 	}
	// ];

	// const fundTabs = [
	// 	{
	// 		id: 'scanqrcode',
	// 		label: 'Scan QR Code',
	// 		tabIcon: ScanBarcode
	// 	},
	// 	{
	// 		id: 'banktransfer',
	// 		label: 'Bank Transfer',
	// 		tabIcon: Bank
	// 	},
	// 	{
	// 		id: 'paymentgateway',
	// 		label: 'Payment Gateway',
	// 		tabIcon: Cards
	// 	}
	// ];
	// let activeTab = 'scanqrcode';

	// // @ts-ignore
	// function clickOutside(node) {
	// 	// @ts-ignore
	// 	const handleClick = (event) => {
	// 		if (node && !node.contains(event.target) && !event.defaultPrevented) {
	// 			node.dispatchEvent(new CustomEvent('click_outside', node));
	// 		}
	// 	};

	// 	document.addEventListener('click', handleClick, true);

	// 	return {
	// 		destroy() {
	// 			document.removeEventListener('click', handleClick, true);
	// 		}
	// 	};
	// }

	// let showWalletModal = false;
	// function handleClickOutide() {
	// 	setTimeout(function () {
	// 		showWalletModal = false;
	// 	}, 10);
	// }

	// function handleWindowKeyDown(event) {
	// 	if (event.key === 'Escape') {
	// 		handleClickOutide();
	// 	}
	// }

	// const walletButtonHanlder = (button) => {
	// 	if (button['id'] == 'add') {
	// 		showWalletModal = true;
	// 	}
	// };
</script>

<div class="w-full flex flex-col mt-[24px] min-h-screen">
	<div class="flex justify-start gap-[24px] w-full h-fit">
		{#each selectedWalletData as item}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class={`p-[16px] rounded-[12px] cursor-pointer w-1/4 max-w-[268px] ${activeTab ? 'bg-[#091D2E]':'bg-[#112D4466]'}`}
				on:click={() => (activeTab = item.tabType)}
			>
				<div
					class={`py-4 px-5 rounded-[8px] h-full ${
						activeTab == item.tabType ? 'bg-[#06E7ED]' : 'bg-primary-light'
					}`}
				>
					<div class="flex items-end justify-between">
						<h3
							class={`font-extralight ${
								activeTab == item.tabType ? 'text-[#112D44]' : 'text-[#5A718B]'
							}`}
						>
							{selectedWallet}
						</h3>
						<img
							src={item.svg}
							alt={`SVG for ${item.tabType}`}
							style={{ fill: activeTab == item.tabType ? '#06E7ED' : 'none' }}
						/>
					</div>
					<h2 class={`font-bold text-xl my-1 ${activeTab == item.tabType ? 'text-[#091D2E]' : ''}`}>
						{item.tabType}
					</h2>
					<p class={`text-[12px] ${activeTab == item.tabType ? 'text-[#091D2E]' : ''}`}>
						{item.value}
					</p>
				</div>
			</div>
		{/each}
	</div>
	{#if activeTab == 'Asset'}
		<div class="bg-[#112D4424] min-h-screen my-[24px] rounded-lg px-[24px] py-[35px]">
			<div class="relative w-fit mb-[24px]">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="flex items-center justify-start p-[12px] bg-[#13283A] rounded-xl w-full"
					on:click={() => (dropdownVisible = !dropdownVisible)}
				>
					<EmptyWallet size="25" color="#06E7ED" variant="Bold" />
					<h3 class="text-[18px] mt-2 ml-[8px] font-bold mr-[28px]">{selectedBasket}</h3>
					<div class="" style="margin: 0 auto;">
						<Icon
							icon="icon-park-solid:down-one"
							class={`cursor-pointer ${dropdownVisible ? 'rotate-180' : ''}`}
							color="#06e7ed"
						/>
					</div>
				</div>
				{#if dropdownVisible}
					<div class="absolute top-full left-0 mt-2 w-full z-10 rounded-md shadow-md">
						<ul class="py-2 bg-[#112D44] rounded-lg border border-gray-600">
							{#each basketOptions as basket}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<li
									class="hover:text-white hover:bg-[#1a2a3a] py-4 px-6 cursor-pointer"
									on:click={() => {
										handleBasketClick(basket);
									}}
								>
									{basket}
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>

			<div class="grid grid-cols-2 gap-[28px] w-full">
				{#each assets as asset}
					<Asset {asset} />
				{/each}
			</div>
		</div>
	{:else if activeTab == 'Activity'}
		<div class="flex gap-[24px] flex-col w-full my-[24px]">
			{#each activities as activity}
				<div
					class="flex justify-start items-center w-full pr-[51px] bg-[#091D2E] rounded-lg overflow-hidden"
				>
					<div class="bg-[#0C384A] w-[8px] h-[106px]">&nbsp;</div>
					<div class="text-center px-8 border-r border-[#5C788F]">
						<h3 class="text-2xl text-white">{activity.date}</h3>
						<p class="text-sm text-[#5C788F]">{activity.day}</p>
					</div>
					<div class="flex pl-[40px] flex-1 items-center">
						<img src={activity.logo} alt="" />
						<div class="ml-[16px]">
							<h1 class="text-[#06E7ED] text-[18px]">{activity.company}</h1>
							<p class="font-extralight text-[18px]">{activity.label}</p>
						</div>
					</div>
					<div
						style="margin: 0 auto;"
						class="bg-[#0C384A] text-[#06E7ED] text-xs w-fit py-1 px-2 my-2 rounded-full"
					>
						{activity.activity}
					</div>
				</div>
			{/each}
		</div>
	{:else if activeTab == 'Invoice'}
		<table class="bg-[#112D4466] my-[24px] rounded-[12px]">
			<thead class="border-b border-[#06E7ED]">
				<tr>
					<th
						scope="col"
						class="py-6 pl-6 w-1/6 text-left font-medium text-sm leading-4 text-[#06E7ED]"
						>Number</th
					>
					<th
						scope="col"
						class="py-6 pl-6 w-1/6 text-left font-medium text-sm leading-4 text-[#06E7ED]"
						>Amount</th
					>
					<th
						scope="col"
						class="py-6 pl-6 w-1/6 text-left font-medium text-sm leading-4 text-[#06E7ED]"
						>Status</th
					>
					<th
						scope="col"
						class="py-6 pl-6 w-1/6 text-left font-medium text-sm leading-4 text-[#06E7ED]"
						>Due date</th
					>
					<th
						scope="col"
						class="py-6 pl-6 w-1/6 text-left font-medium text-sm leading-4 text-[#06E7ED]"
						>Description</th
					>
					<th
						scope="col"
						class="py-6 text-center w-1/6 font-medium text-sm leading-4 text-[#06E7ED]">Review</th
					>
				</tr>
			</thead>
			<tbody class="">
				<tr class="border-b border-[#5B758B]">
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white uppercase"
						>Unknown</td
					>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">1000Rs</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal">
						<span class="bg-[#0C384A] text-[#06E7ED] py-2 px-3 rounded-full">Pending</span>
					</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">27/03/22</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">Lorem ipsum</td>
					<td class="whitespace-nowrap py-4 text-xs font-normal text-white w-full flex gap-6 pr-4">
						<button
							class="text-md font-bold bg-primary text-primary-dark hover:bg-white px-[22px] py-[8px] rounded"
							>Review</button
						>
						<button
							class="text-md font-bold bg-[#5C788F] text-white hover:bg-gray-600 px-[22px] py-[8px] rounded"
							>Reject</button
						>
					</td>
				</tr>
				<tr class="border-b border-[#5B758B]">
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white uppercase"
						>Unknown</td
					>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">1000Rs</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal">
						<span class="bg-[#0C384A] text-[#06E7ED] py-2 px-3 rounded-full">Pending</span>
					</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">27/03/22</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">Lorem ipsum</td>
					<td class="whitespace-nowrap py-4 text-xs font-normal text-white w-full flex gap-6 pr-4">
						<button
							class="text-md font-bold bg-primary text-primary-dark hover:bg-white px-[22px] py-[8px] rounded"
							>Review</button
						>
						<button
							class="text-md font-bold bg-[#5C788F] text-white hover:bg-gray-600 px-[22px] py-[8px] rounded"
							>Reject</button
						>
					</td>
				</tr>
				<tr class="border-b border-[#5B758B]">
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white uppercase"
						>Unknown</td
					>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">1000Rs</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal">
						<span class="bg-[#0C384A] text-[#06E7ED] py-2 px-3 rounded-full">Pending</span>
					</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">27/03/22</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">Lorem ipsum</td>
					<td class="whitespace-nowrap py-4 text-xs font-normal text-white w-full flex gap-6 pr-4">
						<button
							class="text-md font-bold bg-primary text-primary-dark hover:bg-white px-[22px] py-[8px] rounded"
							>Review</button
						>
						<button
							class="text-md font-bold bg-[#5C788F] text-white hover:bg-gray-600 px-[22px] py-[8px] rounded"
							>Reject</button
						>
					</td>
				</tr>
				<tr class="border-b border-[#5B758B]">
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white uppercase"
						>Unknown</td
					>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">1000Rs</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal">
						<span class="bg-[#0C384A] text-[#06E7ED] py-2 px-3 rounded-full">Pending</span>
					</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">27/03/22</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">Lorem ipsum</td>
					<td class="whitespace-nowrap py-4 text-xs font-normal text-white w-full flex gap-6 pr-4">
						<button
							class="text-md font-bold bg-primary text-primary-dark hover:bg-white px-[22px] py-[8px] rounded"
							>Review</button
						>
						<button
							class="text-md font-bold bg-[#5C788F] text-white hover:bg-gray-600 px-[22px] py-[8px] rounded"
							>Reject</button
						>
					</td>
				</tr>
				<tr class="border-b border-[#5B758B]">
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white uppercase"
						>Unknown</td
					>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">1000Rs</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal">
						<span class="bg-[#0C384A] text-[#06E7ED] py-2 px-3 rounded-full">Pending</span>
					</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">27/03/22</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">Lorem ipsum</td>
					<td class="whitespace-nowrap py-4 text-xs font-normal text-white w-full flex gap-6 pr-4">
						<button
							class="text-md font-bold bg-primary text-primary-dark hover:bg-white px-[22px] py-[8px] rounded"
							>Review</button
						>
						<button
							class="text-md font-bold bg-[#5C788F] text-white hover:bg-gray-600 px-[22px] py-[8px] rounded"
							>Reject</button
						>
					</td>
				</tr>
				<tr class="border-b border-[#5B758B]">
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white uppercase"
						>Unknown</td
					>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">1000Rs</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal">
						<span class="bg-[#0C384A] text-[#06E7ED] py-2 px-3 rounded-full">Pending</span>
					</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">27/03/22</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">Lorem ipsum</td>
					<td class="whitespace-nowrap py-4 text-xs font-normal text-white w-full flex gap-6 pr-4">
						<button
							class="text-md font-bold bg-primary text-primary-dark hover:bg-white px-[22px] py-[8px] rounded"
							>Review</button
						>
						<button
							class="text-md font-bold bg-[#5C788F] text-white hover:bg-gray-600 px-[22px] py-[8px] rounded"
							>Reject</button
						>
					</td>
				</tr>
				<tr class="">
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white uppercase"
						>Unknown</td
					>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">1000Rs</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal">
						<span class="bg-[#0C384A] text-[#06E7ED] py-2 px-3 rounded-full">Pending</span>
					</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">27/03/22</td>
					<td class="whitespace-nowrap py-4 pl-6 text-xs font-normal text-white">Lorem ipsum</td>
					<td class="whitespace-nowrap py-4 text-xs font-normal text-white w-full flex gap-6 pr-4">
						<button
							class="text-md font-bold bg-primary text-primary-dark hover:bg-white px-[22px] py-[8px] rounded"
							>Review</button
						>
						<button
							class="text-md font-bold bg-[#5C788F] text-white hover:bg-gray-600 px-[22px] py-[8px] rounded"
							>Reject</button
						>
					</td>
				</tr>
			</tbody>
		</table>
	{:else if activeTab == 'Notification'}
		<div class="flex gap-8 flex-col w-full my-[24px]">
			{#each notifications as notification}
				<div
					class="flex justify-start items-center w-full pr-[24px] bg-[#091D2E] rounded-lg overflow-hidden"
				>
					<div class="bg-[#0C384A] w-3 h-28">&nbsp;</div>
					<div class="flex items-start px-3 flex-1">
						<img src={notification.logo} alt="" />

						<div class="px-3">
							<h1 class="text-[#06E7ED] text-[18px]">{notification.company}</h1>
							<p class="bg-[#0C384A] text-[#06E7ED] text-[10px] w-fit py-0 px-2 my-[8px] rounded-full">
								{notification.label}
							</p>
							<p class="font-extralight">{notification.message}</p>
						</div>
					</div>
					<div style="margin: 0 auto;">{notification.time}</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<!-- <div class="w-full flex mt-8">
	<div class="md:w-1/2 md:flex flex-col">
		{selectedWallet}
		{#each selectedWalletData as item}
			<div class="tab text-white">
				<h3>{item.tabType}</h3>
				<p>{item.value}</p>
			</div>
		{/each}
		<Card>
			<div slot="wallet" class="my-4 font-sans text-Josefin flex justify-between">
				<h4 class="text-[20px] text-[#FFF] font-normal font-sans text-Josefin">Asset</h4>
				<div class="flex space-x-2 pt-1.5 px-3">
					<h3 class="text-[20px] text-[#FFF] font-normal font-sans text-Josefin">Basket A</h3>
					<Icon icon="icon-park-solid:down-one" color="#06e7ed" />
				</div>
			</div>

			<div class="card">
				<div class="">
					<div class="text-[#5A718B] text-base">Total Balance</div>
					<div class="absolute top-6 right-6">
						<EmptyWallet size="60" color="#06E7ED" variant="Bold" />
					</div>
					<div class="font-semibold text-4xl font-sans">₹ 0.00</div>
					<div class="opacity-70 text-xs">0 BSV ( 1 BSV = 3,476.48 INR )</div>
					<CopyToClipboard content="UPI87676471okici7@Neucron.io" />

					<div class="flex gap-6 pt-4">
						{#each walletButtons as button}
							<button
								class="text-md font-semibold text-primary-dark bg-primary py-2 px-10 rounded hover:bg-white"
								on:click={() => walletButtonHanlder(button)}
							>
								{button['label']}
							</button>
						{/each}
					</div>
				</div>
			</div>
		</Card>
		{#each bitcoins as coin, i}
			{#if i < 2}
				<CoinCard {...coin} />
			{/if}
		{/each}
	</div>
	<div class="font-sans text-Josefin md:ml-20 md:w-1/2">
		<Card className="bg-none">
			<div slot="wallet" class="text-[20px] my-4 font-normal font-sans text-Josefin flex">
				<h4
					class={isActiveTab('activity') ? 'tab-active' : 'tab-inactive'}
					on:click={() => toggleActiveTab('activity')}
				>
					Activity
				</h4>
				<h4
					class={isActiveTab('notification') ? 'tab-active' : 'tab-inactive'}
					on:click={() => toggleActiveTab('notification')}
				>
					Notification
				</h4>
				<div class="ml-auto">
					<button class="bg-primary-light p-1 px-3 rounded-md">
						<Icon icon="ph:dots-three-bold" color="#06e7ed" width="25" />
					</button>
				</div>
			</div>

			{#if active === 'activity'}
				<div class="flex gap-3 flex-col">
					{#each bitcoins as coin, i}
						<CoinCard {...coin} />
					{/each}
				</div>
			{/if}

			{#if active === 'notification'}
				<div class="flex gap-3 flex-col">
					{#each notifications as notification, i}
						<CoinCard {...notification} />
					{/each}
				</div>
			{/if}
		</Card>
	</div>
</div> -->
<!-- <svelte:window on:keydown|preventDefault={handleWindowKeyDown} />
{#if showWalletModal}
	<Portal target=".modal-element">
		<div class="absolute bg-modal-overlay flex top-0 left-0 w-full h-full">
			<div
				class="relative bg-primary-dark h-[514px] w-[718px] mx-auto my-auto p-6"
				use:clickOutside
				on:click_outside={handleClickOutide}
			>
				<div class="text-center"><Title title="Add Funds" /></div>
				<div class="shadow-md rounded-md bg-primary-light button__group w-fit mx-auto my-2">
					{#each fundTabs as tab}
						<button
							type="button"
							class="button transition-all"
							class:button--active={activeTab == tab['id']}
							on:click={() => {
								activeTab = tab['id'];
							}}
						>
							<svelte:component
								this={tab.tabIcon}
								size="20"
								color={activeTab == tab['id'] ? '#54deb2' : '#243341'}
								variant="Outline"
							/>
							{tab['label']}
						</button>
					{/each}
				</div>
				<div class="flex flex-col gap-3 my-4">
					{#if activeTab == 'scanqrcode'}
						<div class="w-fit mx-auto">Scan the QR code to add money</div>
						<div
							class="border-4 w-fit border-primary-dark-highlight rounded-xl p-4 relative mx-auto"
						>
							<div class="-top-2 w-5/6 left-0 right-0 p-2 mx-auto absolute bg-primary-dark" />
							<div class="-bottom-2 w-5/6 left-0 right-0 p-2 mx-auto absolute bg-primary-dark" />
							<div class="-left-2 h-5/6 my-auto top-0 bottom-0 p-2 absolute bg-primary-dark" />
							<div class="-right-2 h-5/6 my-auto top-0 bottom-0 p-2 absolute bg-primary-dark" />
							<img src="/qrcode.svg" alt="QR Code" class="rounded-md" />
						</div>
						<div class="mx-auto">
							<CopyToClipboard
								label={`UPI ID <img src="/flower-thumb.svg" alt="Thumbs Up"/>`}
								content="UPI192198@Neucron.io"
							/>
						</div>
						<button
							class="text-md font-semibold bg-primary text-primary-dark hover:bg-white py-3 px-14 rounded mx-auto"
							>Add</button
						>
					{:else if activeTab == 'banktransfer'}
						<div class="w-fit mx-auto flex flex-col gap-6">
							<Title
								title="Virtual Account Details"
								subtitle="To add funds to your Neucron wallet, transfer funds via UPI/NEFT/RTGS/IMPS to the account below"
							/>

							<table class="bg-primary-light table-auto rounded-md mb-6">
								<tbody>
									<tr>
										<td class="table__cell">Beneficiary Name :</td>
										<td class="table__cell">Neucron</td>
									</tr>
									<tr>
										<td class="table__cell">Account No</td>
										<td class="table__cell">22222847466348487346</td>
									</tr>
									<tr>
										<td class="table__cell">IFSC Code</td>
										<td class="table__cell">Neucronaapis</td>
									</tr>
									<tr>
										<td class="table__cell">UPI ID</td>
										<td class="table__cell">Neu.payto000993298388@okicici</td>
									</tr>
								</tbody>
							</table>
						</div>
						<button
							class="text-md font-semibold bg-primary text-primary-dark hover:bg-white py-3 px-14 rounded mx-auto"
							>Add</button
						>
					{:else if activeTab == 'paymentgateway'}
						<div class="flex flex-col mx-auto gap-12">
							<Title
								title="Payment Method Details"
								subtitle="To add funds to your Neucron wallet, enter the recharge amount and pay via Credit/Debit Card, UPI,or NetBanking."
							/>
							<button
								class="text-md font-semibold bg-primary text-primary-dark hover:bg-white py-3 px-14 rounded mx-auto"
								>Add</button
							>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</Portal>
{/if} -->

<style>
	/* .button__group .button {
		@apply py-2 px-3 mx-1 my-1 text-primary-dark-highlight inline-flex gap-1.5 justify-center items-end rounded-md;
	}
	.button__group .button--active {
		@apply text-white bg-primary-dark;
	}

	.table__cell {
		@apply py-4 px-8;
	}

	tr {
		@apply border-b border-[#243341];
	}
	tbody tr:last-child {
		@apply border-none;
	}
	tr .table__cell:first-child {
		@apply text-gray-400;
	}

	.tab-active {
		font-weight: 400;
		border-bottom: 4px solid #06e7ed;
	}
	.tab-inactive {
		font-weight: normal;
		border: none;
		margin-left: 20px;
		font-weight: 400;
		color: #5c788f;
	} */
</style>
