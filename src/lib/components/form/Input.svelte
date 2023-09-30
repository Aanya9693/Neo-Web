<script>
	import Button from '$lib/buttons/button.svelte';
	import Icon from '@iconify/svelte';
	export let value = '';
	export let placeholder = '';
	export let label = '';
	export let name = '';
	export let type = 'text';
	export let htmlType = '';
	export let disabled = false;
	export let required = false;
	export let errors = '';
	export let icon = true;
	export let editIcon = false;
	export let url = '';
	let show = false;
</script>

{#if editIcon}
	<div class="flex justify-between">
		<span>
			<label for={label} class="capitalize text-left">
				{label}
			</label>
		</span>
		<a href={url}><img src="/dashboard/edit.svg" alt="edit" /></a>
	</div>
{:else}
	<label for={label} class="capitalize text-left">
		{label}
	</label>
{/if}
{#if htmlType === 'password'}
	<div
		class="relative bg-[#0E1F2D] text-primary rounded focus:ring-2 focus:ring-primary"
	>
		<input
			on:input
			{placeholder}
			{required}
			{disabled}
			id={name}
			{name}
			{value}
			{...$$restProps}
			type={show ? 'text' : 'password'}
			autocomplete="off"
			class={`w-full form-input relative bg-[#0E1F2D] text-primary rounded focus:ring-2 focus:ring-primary ${
				errors ? 'border-red-700' : ''
			}`}
		/>
		<button
			type="button"
			class="absolute cursor-pointer top-1.5 right-2"
			on:click={() => (show = !show)}
		>
			{#if show}<Icon icon="ph:eye-fill" color="#92B0C9" width={25} height={25} />{:else}<Icon
					icon="el:eye-close"
					color="#92B0C9"
					width={25}
					height={25}
				/>{/if}
		</button>
	</div>
	{#if errors}
		{#each errors as error}
			<span class="text-red-400 text-xs font-medium mt-1">{error}</span>
		{/each}
	{/if}
{:else}
	<div class="relative bg-[#0E1F2D] text-primary rounded">
		<input
			{type}
			{placeholder}
			{required}
			{disabled}
			id={name}
			{name}
			{value}
			{...$$restProps}
			autocomplete="off"
			class={`w-full form-input  bg-[#0E1F2D] text-primary rounded focus:ring-2 focus:ring-primary ${
				errors ? 'border-red-700' : ''
			}`}
		/>
		{#if errors && icon}
			<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
					class="h-5 w-5 text-red-700"
					><path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/></svg
				>
			</div>
		{/if}
	</div>
	{#if errors}
		{#each errors as error}
			<span class="text-red-400 text-xs font-medium mt-1">{error}</span>
		{/each}
	{/if}
{/if}

<style>
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
</style>
