<script>
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
    export let checked = false;
	export let editIcon = false;
	export let url = '';
	let show = false;
</script>

<div class="mb-2 w-full">
	<div class="relative rounded">
		{#if type === 'text'}
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
				class={`form-input bg-base-100 w-full border border-[#92B0C9] rounded focus:border-primary ${
					errors ? 'border-red-400' : ''
				}`}
			/>
		{:else if type === 'textarea'}
			<textarea
				{type}
				{placeholder}
				{required}
				{disabled}
				id={name}
				{name}
				{value}
				{...$$restProps}
				autocomplete="off"
				class={`form-input bg-base-100 w-full border border-[#92B0C9] rounded focus:border-primary ${
					errors ? 'border-red-400' : ''
				}`}
			/>
		{:else if type === 'checkbox'}
			<div>
				<input
					{type}
					{placeholder}
					{required}
					{disabled}
					id={name}
					{name}
					{checked}
					{...$$restProps}
					autocomplete="off"
					class={`form-checkbox accent-primary border border-[#92B0C9] rounded focus:border-primary ${
						errors ? 'border-red-400' : ''
					}`}
				/>
				<label bind:innerHTML={label} contenteditable="false" for={name} class="ml-2 text-sm text-gray-700"></label>
			</div>
		{/if}

		{#if errors && icon && type !== 'checkbox'}
			<div class="absolute top-3 right-0 pr-3 flex items-center pointer-events-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
					class="h-5 w-5 text-red-400"
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
			<div class="text-red-400 text-xs font-medium" style="margin-top: 1px;">{error}</div>
		{/each}
	{/if}
</div>

<style>
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
</style>
