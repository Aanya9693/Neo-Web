<script>
	const APIURL = 'https://api.neucron.io/docs/';
	let lastScrollTop; //last scroll position
	let showNav = true; //boolean to show or hide nav bar
	let dpdnChecked = false;
	let isNeoClicked = false;

	function toggleNeo() {
		isNeoClicked = true;
	}

	// Check if window is defined before using it
	if (typeof window !== 'undefined') {
		// Watch for changes in the URL
		window.addEventListener('popstate', () => {
			const currentURL = window.location.href;
			const words = currentURL.split('/');
			const lastThreeWords = words.slice(-3);

			if (lastThreeWords.some((word) => word.toLowerCase() === 'neo')) {
				isNeoClicked = true;
			} else {
				isNeoClicked = false;
			}
		});

		// Initial check of the URL when the component loads
		const currentURL = window.location.href;
		const words = currentURL.split('/');
		const lastThreeWords = words.slice(-3);

		if (lastThreeWords.some((word) => word.toLowerCase() === 'neo')) {
			isNeoClicked = true;
		} else {
			isNeoClicked = false;
		}
	}
</script>

<svelte:window
	on:scroll={() => {
		var st = window.scrollY || document.documentElement.scrollTop; //Get current scroll position
		//If new scroll position is greater than old (previous/ last) - hide
		if (st > lastScrollTop) showNav = false;
		else showNav = true;
		lastScrollTop = st;
	}}
/>

<div
	class="text-[barlow] stickty top-0 w-full {isNeoClicked ? 'bg-[#081B2A]' : 'bg-base-100'}"
>
	<nav
		class="flex justify-between {isNeoClicked
			? 'bg-[#081B2A]'
			: 'bg-base-100'} items-center mx-auto max-w-[1280px] sm:py-3 px-5 md:px-4"
	>
		<a href="/" class="cursor-pointer z-10">
			{#if isNeoClicked}
				<img src="../../logo light.png" alt="logo" class="-ml-2" />
			{:else}
				<img src="/landing/logo.svg" alt="logo" class="-ml-2" />
			{/if}
		</a>
		<div class="hidden lg:flex items-center justify-center font-medium">
			<a
				href="/assets"
				class="text-xs {isNeoClicked ? 'text-white' : ''} md:text-[18.37px] mr-16 hover:font-bold"
				on:click={() => (isNeoClicked = false)}>Assets</a
			>
			<a
				href="/payments"
				class="text-xs {isNeoClicked ? 'text-white' : ''} md:text-[18.37px] mr-16 hover:font-bold"
				on:click={() => (isNeoClicked = false)}>Payments</a
			>
			<a
				href="/technology"
				class="text-xs {isNeoClicked ? 'text-white' : ''} md:text-[18.37px] mr-16 hover:font-bold"
				on:click={() => (isNeoClicked = false)}>Technology</a
			>
			<a
				href="/neo"
				class="text-xs {isNeoClicked ? 'text-white' : ''} md:text-[18.37px] mr-16 hover:font-bold"
				on:click={toggleNeo}>Neo AI</a
			>
			<a
				href="https://timechain.gitbook.io/neucron/"
				class="text-xs {isNeoClicked ? 'text-white' : ''} md:text-[18.37px] mr-16 hover:font-bold"
				on:click={() => (isNeoClicked = false)}>Docs</a
			>
			<a
				href="/waitlist"
				class="{isNeoClicked
					? 'bg-[#06E7ED]'
					: 'bg-secondary'} w-fit text-xl font-semibold leading-6 md:!leading-7 rounded-md px-8 py-3 my-3 whitespace-nowrap z-10 {isNeoClicked
					? 'text-secondary'
					: 'text-[#06E7ED] '} hover:text-secondary hover:bg-primary"
				on:click={() => (isNeoClicked = false)}
			>
				Wallet
			</a>
		</div>
		<div class="lg:hidden top-0 right-0 z-10" id="menuToggle">
			<input type="checkbox" bind:checked={dpdnChecked} />
			<span class={isNeoClicked ? 'bg-white' : 'bg-[#112d44]'} />
			<span class={isNeoClicked ? 'bg-white' : 'bg-[#112d44]'} />
			<span class={isNeoClicked ? 'bg-white' : 'bg-[#112d44]'} />
			<ul id="menu">
				<a
					href="/assets"
					class="text-xl leading-10 font-medium my-3"
					on:click={() => (isNeoClicked = false)}>Assets</a
				>
				<a
					href="/payments"
					class="text-xl leading-10 font-medium my-3"
					on:click={() => (isNeoClicked = false)}>Payments</a
				>
				<a
					href="/technology"
					class="text-xl leading-10 font-medium my-3"
					on:click={() => (isNeoClicked = false)}>Technology</a
				>
				<a href="/neo" class="text-xl leading-10 font-medium my-3" on:click={toggleNeo}>Neo AI</a>
				<a
					href="https://timechain.gitbook.io/neucron/"
					class="text-xl leading-10 font-medium my-3"
					on:click={() => (isNeoClicked = false)}>Docs</a
				>
				<a
					href="/waitlist"
					class="{isNeoClicked
						? 'bg-[#06E7ED]'
						: 'bg-secondary'} w-fit text-xl font-semibold leading-6 md:!leading-7 rounded-md px-8 py-3 my-3 whitespace-nowrap z-10 {isNeoClicked
						? 'text-secondary'
						: 'text-[#06E7ED] '} hover:text-secondary hover:bg-primary"
				>
					Wallet
				</a>
			</ul>
		</div>
	</nav>
</div>

<style>
	.hide {
		transform: translateY(-140px);
	}
	.show {
		transform: translateY(0px);
	}
	#menuToggle input {
		display: block;
		width: 41px;
		height: 32px;
		position: absolute;
		top: 16px;
		right: 12px;

		cursor: pointer;

		opacity: 0;
		z-index: 2;

		-webkit-touch-callout: none;
	}
	#menuToggle span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;

		border-radius: 3px;

		z-index: 1;

		transform-origin: 4px 0px;

		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
	}
	#menuToggle span:first-child {
		transform-origin: 0% 0%;
	}
	#menuToggle span:nth-last-child(2) {
		transform-origin: 0% 100%;
	}
	#menuToggle input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-1px, -1px);
		background: #232323;
	}
	#menuToggle input:checked ~ span:nth-last-child(3) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}
	#menuToggle input:checked ~ span:nth-last-child(2) {
		transform: rotate(-45deg);
	}
	#menu {
		width: 100%;
		height: 100svh;
		position: absolute;
		left: 0;
		top: 0px;
		display: flex;
		flex-direction: column;
		background-color: #f3f5f7;
		padding: 20px 30px;
		font-size: 20px;
		transition: all 0.3s ease-in-out;
		transform: translate(0px, -120%);
	}
	#menuToggle input:checked ~ #menu {
		transform: translate(0, 0);
	}
</style>
