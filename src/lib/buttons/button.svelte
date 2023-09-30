<script>
	import Icon from '@iconify/svelte';
	export let label = '';
	export let route = '#';
	export let verify = false;
	export let htmlType = 'button';
	export let className = 'w-[50%] bg-primary text-primary-dark';
</script>

<div class="mt-5">
	{#if verify}
		<div
			class={`text-md relative font-semibold whitespace-nowrap hover:bg-white py-3 px-14 rounded text-center ${className}`}
		>
			<button on:click {...$$restProps}>{label}</button>
			<div class="absolute top-3 right-5">
				<Icon icon="eva:external-link-outline" color="#112D44" />
			</div>
		</div>
	{:else if htmlType === 'submit'}
		<button
			type="submit"
			class={`text-center ${className}`}
			on:click
			{...$$restProps}
		>
			{label}
		</button>
	{:else}
		<a
			type="button"
			href={route}
			class={`text-md font-semibold whitespace-nowrap hover:bg-white py-3 px-14 rounded text-center ${className}`}
			on:click
			{...$$restProps}
		>
			{label}
		</a>
	{/if}
</div>
