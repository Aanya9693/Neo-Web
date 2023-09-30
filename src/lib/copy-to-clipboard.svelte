<script>
	import Copy from 'iconsax-svelte/Copy.svelte';
	export let label = '';
	export let content = '';
	export let secret = false;

	// @ts-ignore
	const CopyMe = (TextToCopy) => {
		var TempText = document.createElement('input');
		TempText.value = TextToCopy;
		document.body.appendChild(TempText);
		TempText.select();

		document.execCommand('copy');
		document.body.removeChild(TempText);
	};

	let copyButtonPressed = false;
	$: {
		if (copyButtonPressed) {
			CopyMe(content);
			setTimeout(() => {
				copyButtonPressed = false;
			}, 1000);
		}
	}
</script>

<div>
	{#if label}
		<div class="flex gap-1">
			{@html label}
		</div>
	{/if}
	<div
		class="relative mt-2 p-2 px-4 w-72 flex items-end bg-primary-dark rounded-md overflow-clip whitespace-nowrap"
	>
		{secret ? '*********************************' : content}
		<button
			type="button"
			class="absolute top-0 bottom-0 right-0 px-2 bg-[#141d24]"
			on:click={() => {
				copyButtonPressed = true;
			}}
		>
			<Copy size="20" color="#06E7ED" variant="Outline" />
		</button>
		{#if copyButtonPressed}
			<div
				class="absolute left-0 top-0 w-full h-full inline-flex items-center justify-center right-0 bottom-0 bg-primary-dark-highlight text-white rounded-md"
			>
				Copied!
			</div>
		{/if}
	</div>
</div>
