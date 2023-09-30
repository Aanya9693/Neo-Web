<script>
	// import Input from '$lib/components/form/Input.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import ContactInput from '$lib/components/form/ContactInput.svelte';
	import { goto } from '$app/navigation';
	export let data = {};
	export let show;
	const APIURL = 'https://api.neucron.io/docs/';
	// console.log(show)
	const { form, enhance, errors, message, delayed } = superForm(data.form);
</script>

<div class="bg-secondary pt-0 lg:py-24 px-10 w-full relative" id="contactForm">
	<div class="absolute xl:block hidden xl:-right-0 xl:-top-0">
		<img src="/landing/side-arrow.svg" alt="cross-right" />
	</div>
	<div class="hidden lg:block absolute z-0 top-0 left-0">
		<img src="/landing/Pattern.svg" alt="pattern" />
	</div>
	<div
		class="z-10 bg-base-100 text-center flex flex-col items-center max-w-[510px] m-auto lg:hidden rounded-2xl shadow-xl p-5 my-5 mb-5"
	>
		<img src="/neucron-logo.svg" alt="Neucron Logo" class="w-32 mx-28" />
		<h1 class="text-[#0A142F] font-semibold text-[22px] leading-8">
			Technology-First, Token-Last: Reinventing Digital Asset Management
		</h1>
		<p class="text-[#0A142F] text-xs">Register and enjoy all the advantages that we offer you</p>
	</div>
	<div class="max-w-[1280px] relative mx-auto my-5">
		<div class="hidden lg:block box_parent max-w-7xl mx-2 lg:mx-auto">
			<div class="box2 h-[605px] w-full bg-base-100 relative pt-40 pl-10">
				<img
					src="/landing/middle-arrow.svg"
					alt="cross-right"
					class="absolute scale-75 -top-40 right-80"
				/>
				<img
					src="/landing/cross-left.svg"
					alt="cross-left"
					class="absolute -top-40 scale-75 -left-12"
				/>

				<div class="w-full mt-20 xl:mt-0 max-w-[360px] xl:max-w-[533px]">
					<img src="/neucron-logo.svg" alt="Neucron Logo" class="xl:mb-4 max-w-[200px]" />
					<h1
						class="text-[#0A142F] text-[35px] font-medium xl:text-[40px] xl:max-h-[180px] mb-5 box-border leading-8 xl:!leading-[48px]"
					>
						Technology-First, Token-Last: Reinventing Digital Asset Management
					</h1>
					<p
						class="text-[#0A142F] px- xl:px-0 text-sm leading-5 xl:leading-normal md:text-[16px] xl:text-[20px]"
					>
						Register and enjoy all the advantages that we offer you
					</p>
				</div>
			</div>

			<svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<filter id="flt_tag">
						<feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -9"
							result="flt_tag"
						/>
						<feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
					</filter>
				</defs>
			</svg>
		</div>
		<form
			action="?/contact_us"
			method="POST"
			use:enhance
			novalidate
			class="lg:absolute h-[600px] -top-10 right-10 max-w-[510px] mx-auto lg:w-[510px] flex flex-col justify-evenly bg-white px-8 xl:px-10 mb-20 py-14 xl:bottom-16 rounded-2xl xl:shadow-xl"
		>
			{#if $message?.status == 'failed' && $message.content}
				<p class="bg-red-100 p-4 text-red-400 text-xs font-semibold rounded mb-2">
					{$message.content}
				</p>
			{/if}
			{#if show === true}
				<div class="flex flex-col w-full justify-start items-center xl:items-start">
					<ContactInput
						type="text"
						name="name"
						bind:value={$form.name}
						aria-invalid={$errors.name ? 'true' : undefined}
						placeholder="Name"
						errors={$errors?.name}
					/>

					<ContactInput
						type="text"
						name="email"
						placeholder="Email"
						bind:value={$form.email}
						errors={$errors?.email}
						aria-invalid={$errors.email ? 'true' : undefined}
					/>
					<ContactInput
						type="text"
						name="phone_number"
						bind:value={$form.phone_number}
						errors={$errors?.phone_number}
						aria-invalid={$errors.phone_number ? 'true' : undefined}
						placeholder="Phone Number"
					/>
					<ContactInput
						name="message"
						type="textarea"
						placeholder="Message"
						bind:value={$form.message}
						errors={$errors?.message}
						aria-invalid={$errors.message ? 'true' : undefined}
						rows="6"
					/>
					<div class="flex gap-3 mb-[20px] w-full items-center">
						<ContactInput
							type="checkbox"
							id="terms"
							bind:checked={$form.terms}
							aria-invalid={$errors.terms ? 'true' : undefined}
							name="terms"
							errors={$errors?.terms}
							class="form-checkbox accent-primary border border-[#92B0C9] rounded focus:border-primary"
							label={`I have read and accept the <a href="#" class="text-[#0081FE] underline"
							>privacy policy.</a>`}
						/>
					</div>
					<button
						type="submit"
						class="btn btn-secondary text-[#06E7ED] capitalize max-w-[160px] w-full"
					>
						Contact Us
					</button>
				</div>
			{:else}
				<div
					class="w-full flex flex-col justify-evenly items-center text-center h-[300px] lg:h-[450px]"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="60"
						height="60"
						viewBox="0 0 60 60"
						fill="none"
						class="bg-secondary p-5 rounded-full h-20 w-20 mb-4"
					>
						<path
							d="M39.875 55L29.25 44.375L32.75 40.875L39.875 48L54 33.875L57.5 37.375L39.875 55ZM30 27.5L50 15H10L30 27.5ZM30 32.5L10 20V45H22.875L27.875 50H10C8.625 50 7.44833 49.5108 6.47 48.5325C5.49 47.5525 5 46.375 5 45V15C5 13.625 5.49 12.4483 6.47 11.47C7.44833 10.49 8.625 10 10 10H50C51.375 10 52.5525 10.49 53.5325 11.47C54.5108 12.4483 55 13.625 55 15V25.875L50 30.875V20L30 32.5Z"
							fill="#07E1E8"
						/>
					</svg>
					<h3 class="text-sm lg:text-2xl text-secondary font-medium">
						Congratulations! You're All Set!
					</h3>
					<p class="text-xs lg:text-lg">
						You're now part of our vibrant community after successfully registering. Get ready for
						an exciting journey ahead!
					</p>
					<button
						on:click={() => goto(APIURL)}
						type="submit"
						class="btn btn-secondary text-[#06E7ED] w-7/12 min-w-[150px] mt-10 capitalize"
					>
						Continue Building
					</button>
				</div>
			{/if}
		</form>
	</div>
</div>

<style>
	.box2 {
		clip-path: polygon(0 0, 70% 18%, 100% 100%, 0% 100%);
		margin: 0 auto;
	}

	.flt_svg {
		visibility: hidden;
		position: absolute;
		width: 0px;
		height: 0px;
	}

	.box_parent {
		filter: url('#flt_tag');
	}
</style>
