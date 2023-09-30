<script>
	let links = [
		{
			title: 'Assets',
			href: '/assets'
		},
		{
			title: 'Payments',
			href: '/payments'
		},
		{
			title: 'Technology',
			href: '/technology'
		},
		{
			title: 'About Us',
			href: '/about'
		},
		{
			title: 'Partners',
			href: '/partners'
		},
		{
			title: 'Docs',
			href: 'https://timechain.gitbook.io/neucron'
		},
		{
			title: 'Wallet',
			href: '/waitlist'
		},
		{
			title: 'Contact Us',
			href: '/#contactForm'
		}
	];
	let contact = [
		{
			icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3083 16.2751C17.3083 16.5751 17.2416 16.8834 17.1 17.1834C16.9583 17.4834 16.775 17.7667 16.5333 18.0334C16.125 18.4834 15.675 18.8084 15.1666 19.0167C14.6666 19.2251 14.125 19.3334 13.5416 19.3334C12.6916 19.3334 11.7833 19.1334 10.825 18.7251C9.86663 18.3167 8.90829 17.7667 7.95829 17.0751C6.99996 16.3751 6.09163 15.6001 5.22496 14.7417C4.36663 13.8751 3.59163 12.9667 2.89996 12.0167C2.21663 11.0667 1.66663 10.1167 1.26663 9.17508C0.866626 8.22508 0.666626 7.31675 0.666626 6.45008C0.666626 5.88341 0.766626 5.34175 0.966626 4.84175C1.16663 4.33341 1.48329 3.86675 1.92496 3.45008C2.45829 2.92508 3.04163 2.66675 3.65829 2.66675C3.89163 2.66675 4.12496 2.71675 4.33329 2.81675C4.54996 2.91675 4.74163 3.06675 4.89163 3.28341L6.82496 6.00842C6.97496 6.21675 7.08329 6.40841 7.15829 6.59175C7.23329 6.76675 7.27496 6.94175 7.27496 7.10008C7.27496 7.30008 7.21663 7.50008 7.09996 7.69175C6.99163 7.88341 6.83329 8.08341 6.63329 8.28341L5.99996 8.94175C5.90829 9.03341 5.86663 9.14175 5.86663 9.27508C5.86663 9.34175 5.87496 9.40008 5.89163 9.46675C5.91663 9.53341 5.94163 9.58341 5.95829 9.63341C6.10829 9.90841 6.36663 10.2667 6.73329 10.7001C7.10829 11.1334 7.50829 11.5751 7.94163 12.0167C8.39163 12.4584 8.82496 12.8667 9.26663 13.2417C9.69996 13.6084 10.0583 13.8584 10.3416 14.0084C10.3833 14.0251 10.4333 14.0501 10.4916 14.0751C10.5583 14.1001 10.625 14.1084 10.7 14.1084C10.8416 14.1084 10.95 14.0584 11.0416 13.9667L11.675 13.3417C11.8833 13.1334 12.0833 12.9751 12.275 12.8751C12.4666 12.7584 12.6583 12.7001 12.8666 12.7001C13.025 12.7001 13.1916 12.7334 13.375 12.8084C13.5583 12.8834 13.75 12.9917 13.9583 13.1334L16.7166 15.0917C16.9333 15.2417 17.0833 15.4167 17.175 15.6251C17.2583 15.8334 17.3083 16.0417 17.3083 16.2751Z" stroke="#06E7ED" stroke-width="1.2" stroke-miterlimit="10"/>
<path d="M14.4167 8.50016C14.4167 8.00016 14.025 7.2335 13.4417 6.6085C12.9083 6.0335 12.2 5.5835 11.5 5.5835" stroke="#06E7ED" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3333 8.50008C17.3333 5.27508 14.725 2.66675 11.5 2.66675" stroke="#06E7ED" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
			title: `Have a question?`,
			desc: `+91 9346759484`
		},
		{
			icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1666 17.0834H5.83329C3.33329 17.0834 1.66663 15.8334 1.66663 12.9167V7.08342C1.66663 4.16675 3.33329 2.91675 5.83329 2.91675H14.1666C16.6666 2.91675 18.3333 4.16675 18.3333 7.08342V12.9167C18.3333 15.8334 16.6666 17.0834 14.1666 17.0834Z" stroke="#06E7ED" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1667 7.5L11.5584 9.58333C10.7 10.2667 9.2917 10.2667 8.43337 9.58333L5.83337 7.5" stroke="#06E7ED" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`,
			title: `Contact us at`,
			desc: `neucron@timechainlabs.io`
		}
	];
</script>

<footer
	class="bg-secondary overflow-x-hidden relative font-barlow w-full flex flex-col justify-center items-center text-center py-10"
>
	<img
		src="/landing/footer-arrow.svg"
		class="absolute hidden lg:block opacity-40 -z-0 top-0 left-0"
		alt="arrow"
	/>
	<img
		src="/landing/footer-arrow.svg"
		class="absolute hidden lg:block opacity-40 -z-0 -top-3 -right-3 rotate-[115deg]"
		alt="arrow"
	/>
	<img src="/landing/logo-white.svg" alt="Logo-Neucron" class="w-40 md:w-60 mb-10" />
	<div class="text-[#92B0C9] z-10">
		<p class="text-xs md:text-sm max-w-2xl mx-4">
			Neucron offers a user-friendly digital wallet platform for businesses, utilizing blockchain's
			advantages without market volatility. Our system converts fiat to stable digital assets,
			ensuring security and transparency, no technical expertise required.
		</p>
	</div>
	<div class="flex scale-75 md:scale-100 space-x-3 my-4">
		<!-- linkedin twitter whatsapp insta discord telegram -->
		<a href="https://www.linkedin.com/showcase/neucron-io"><img src="/landing/linkedin.svg" alt="linkedin" /></a>
		<a href="https://twitter.com/NeucronWallet"><img src="/landing/twitter.svg" alt="twitter" /></a>
		<a href="https://api.whatsapp.com/send/?phone=9346759484&text=Hello"><img src="/landing/whatApp.svg" alt="WhatApp" /></a>
		<a href="https://www.instagram.com/neucron.io"><img src="/landing/instagram.svg" alt="instagram" /></a>
		<!-- <a href=""><img src="/landing/discord.svg" alt="discord" /></a> -->
		<img src="/landing/discord.svg" alt="discord" />		
		<a href="https://t.me/neucronwallet"><img src="/landing/telegram.svg" alt="telegram" /></a>
	</div>
	<div
		class="grid grid-cols-2 sm:flex flex-row justify-center flex-wrap items-center m-auto gap-x-14 sm:gap-x-2 max-w-6xl my-4"
	>
		{#each links as link}
			<a
				class="text-[#92b0c9] text-base lg:text-lg hover:text-primary text-left mx-4 col-span-1"
				href={link.href}>{link.title}</a
			>
		{/each}
	</div>
	<div
		class="xl:max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row my-4 md:justify-between items-center"
	>
		<div class="flex md:space-x-5 mb-8">
			{#each contact as item}
				<div class="flex justify-start items-center space-x-2 text-left m-3">
					<div class="rounded-full p-3 bg-[#104156]">
						{@html item.icon}
					</div>
					<div>
						<p class="text-[#92b0c9] text-xs md:text-sm">{item.title}</p>
						<a class="text-sm md:text-base text-primary" href="https://api.whatsapp.com/send/?phone=9346759484&text=Hello">{item.desc}</a>
					</div>
				</div>
			{/each}
		</div>
		<div class="text-[#92b0c9] md:space-x-6 whitespace-nowrap flex flex-col lg:flex-row justify-center items-center">
			<a>Privacy Policy</a>
			<a>Terms & Conditions</a>
			<p>© 2023 TimeChain Labs | All Rights Reserved</p>
		</div>
	</div>
</footer>
