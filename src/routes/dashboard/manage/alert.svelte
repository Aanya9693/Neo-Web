<script>
	import Button from '$lib/buttons/button.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div class="-mt-5">
	<p class="text-center text-2xl font-medium">Are you sure do you want to Update</p>
	<div class="my-8 flex justify-center space-x-6">
		<Button
			label="Yes"
			htmlType="button"
			on:click={() => dispatch('open')}
			className="w-full bg-primary text-primary-dark"
		/>
		<Button
			label="Cancel"
			route="/dashboard/manage"
			className="bg-[#20303E] text-white hover:text-primary-dark"
		/>
	</div>
</div>
