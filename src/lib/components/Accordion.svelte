<script>
	import Icon from '@iconify/svelte';
	import { Accordion, AccordionItem } from 'svelte-collapsible';
	export let props = '';
	export let className = '';
	let toggle = false;
</script>

<main>
	<div
		class={`w-full ${
			toggle ? 'bg-secondary text-white rounded-2xl border-l-8 border-primary' : 'text-secondary'
		}`}
	>
		<Accordion>
			<div class={`my-0 rounded-md border-b-2 border-[#00000026] ${className ? '' : 'shadow'} `}>
				<AccordionItem key={props.key}>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						slot="header"
						class="flex justify-between w-full"
						on:click={() => (toggle = !toggle)}
					>
						<div class="py-1 flex">
							<div
								class={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full my-auto ml-3 ${
									toggle ? 'bg-primary' : 'bg-secondary'
								}`}
							/>
							<h1
								class={`pl-4 text-xs !leading-4 md:text-lg ${className} ${
									toggle ? 'font-bold' : 'font-normal'
								} `}
							>
								{props.contentLabel}
							</h1>
						</div>
						{#if toggle}
							<div class="pt-4 md:pt-6 pr-3">
								<Icon icon="pepicons-pop:minus" color="#07e1e8" />
							</div>
						{:else}
							<div class="pt-4 md:pt-6 pr-3">
								<Icon icon="typcn:plus" color="#92b0c9" />
							</div>
						{/if}
					</div>

					<div
						class="w-full pt-1 pl-8 pr-14 text-justify font-normal text-[10px] !leading-[14px] md:text-base md:!leading-[24px]"
						slot="body"
					>
						<slot />
					</div>
				</AccordionItem>
			</div>
		</Accordion>
	</div>
</main>

<style>
	:global(.accordion-item-header) {
		width: 100% !important;
	}
</style>
