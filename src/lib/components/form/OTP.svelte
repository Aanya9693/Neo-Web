<script>
	export let value = '';
	export let placeholder = '';
	export let name = '';
	export let type = 'text';
	export let errors = '';
</script>

<!-- <div>
	<input
		{type}
		{placeholder}
		id={name}
		{name}
		{value}
		{...$$restProps}
		autocomplete="off"
		class={`w-full bg-primary-dark-highlight text-primary rounded focus:ring-2 focus:ring-primary ${
			errors ? 'border-red-700' : ''
		}`}
	/>
</div>
{#if errors}
	{#each errors as error}
		<span class="text-red-700 text-left mt-1">{error}</span>
	{/each}
{/if}

<script lang="ts">
	: any, value: any, error: string;
</script> -->

<input
	{type}
	{placeholder}
	id={name}
	{name}
	{value}
	{...$$restProps}
	class={` w-full h-[46px] border border-[#D9D9D94A] button-strip here bg-[#D9D9D94A] rounded-[8px] text-center text-[20px] font-semibold text-primary`}
/>
<!-- onKeyPress="if(this.value.length==6) return false;" -->
{#if errors}
	{#each errors as error}
		<span class="text-red-700 text-left mt-2">{error}</span>
	{/each}
{/if}

<style>
	.here {
		letter-spacing: 2vw;
	}
	.hide {
		caret-color: transparent;
	}
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
</style>
