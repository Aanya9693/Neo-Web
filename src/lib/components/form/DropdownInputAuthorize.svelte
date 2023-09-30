<script>
	export let label = '';
	export let sublabel = '';
	export let options = [];
	export let selectedValue = '';
	export let showValue = true;
	export let isDropdownOpen = false;
	
	export let roundedfull = false;
	export let bright = false;

	const handleOptionClick = (value) => {
		selectedValue = value;
		isDropdownOpen = false;
	};
</script>

<div class="flex flex-col">
	<div for="dropdown" class="text-sm mb-2">
		{label}
	</div>
	<div for="dropdown" class="text-sm mb-2 text-[#92B0C9]">
		{sublabel}
	</div>
</div>

{#if showValue}
<p class="font-normal text-[#ffffff99] text-[9px] leading-6">
	{selectedValue}
</p>
{/if}

<div class="selectdiv">
	<div
	id="dropdown"
	class={`custom-dropdown  focus:ring-2 focus:ring-primary text-gray-500 text-md p-2 block relative ${roundedfull ? 'rounded-full border-none bg-[#112D44]': ''} `}
	>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class={`selected-option ${bright ? 'text-[#06E7ED]':'text-white'} -ml-20`} on:click={() => (isDropdownOpen = !isDropdownOpen)}>
		{selectedValue}
		<img src="../../../../Vector.png" alt="" class={`${isDropdownOpen ? 'rotate-180': ''}`} />
	</div>

		{#if isDropdownOpen}
			<div class="absolute top-full left-0 mt-2 w-full z-10 rounded-md shadow-md">
				<ul	class={`options-list absolute text-md rounded-sm ${roundedfull ? 'border-none bg-[#112D44]': 'border border-gray-600 bg-bg-secondary'} ${bright ? 'text-[#FFF]':'text-[#FFF]'}`}>
					{#each options as option}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li class={`border-b border-gray-600 font-normal py-2 w-[120px] pl-4 ${bright ? '':'hover:text-[#FFF]'}`} on:click={() => handleOptionClick(option)}>{option}</li>
					{/each}
				</ul>
			</div>
		{/if}

	</div>
</div>



<style>
	.custom-dropdown {
		position: relative;
		cursor: pointer;
	}

	.selected-option {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.options-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.option {
		padding: 0.5rem 1rem;
		transition: background-color 0.2s, color 0.2s;
		cursor: pointer;
	}

	.option:hover {
		color: white;
	}
</style>
