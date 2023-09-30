<script>
	import Search from 'iconsax-svelte/SearchNormal1.svelte';
</script>

<form class="flex items-center w-full">
	<label for="voice-search" class="sr-only">Search</label>
	<div class="relative w-full">
		<input
			type="search"
			id="voice-search"
			class="bg-primary-light border-none text-sm rounded-lg block w-full pr-10 p-2.5 ring-0 focus:outline-none"
			placeholder="Search ..."
			required
		/>
		<button type="submit" class="absolute inset-y-0 right-0 flex items-center pr-3">
			<Search size="20" color="#06E7ED" variant="Outline" />
		</button>
	</div>
</form>

<style>
	input[type='search'] {
		@apply caret-green-500 text-white;
		/* color: var(--secondary); */
	}
</style>
