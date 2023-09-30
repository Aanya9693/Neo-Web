<script>
	import Icon from '@iconify/svelte';
	import House from '$lib/components/svg/house.svelte';
</script>

<div class="p-5 w-full min-h-full bg-primary-dark m-6 rounded-xl">
	<div class="flex justify-between">
		<div class="flex items-center justify-center space-x-2">
			<Icon icon="ic:round-arrow-drop-up" class=" rotate-180 text-3xl text-[#3A4753]" />
			<p class=" font-normal text-lg leading-5 text-[#54DEB2] capitalize">Data</p>
		</div>
		<div class="flex items-center space-x-8 text-[#54DEB2]">
			<div class="text-lg flex">
				<Icon icon="gg:trash" />
				<span class="text-[#3A4753] mx-6 text-sm">|</span>
				<Icon icon="ph:dots-three-bold" />
			</div>
		</div>
	</div>
	<div class="bg-primary-light my-6 p-6 rounded-xl">
		<div class="flex justify-between h-full">
			<div class="flex items-center justify-center space-x-2">
				<House />
			</div>
		</div>
		<div class="grid grid-cols-3 my-6">
			<div class="p-2 border-[#243341]">
				<div class="">
					<a href="/" class="font-bold text-sm leading-6 tracking-[-0.2px] flex">
						<p class="text-xl text-[#54DEB2] font-light pr-2"><Icon icon="charm:plus" /></p>
						<p>Start collection</p>
					</a>
				</div>
			</div>
			<div class="p-2">
				<div class="">
					<a href="/" class="font-bold text-sm leading-6 tracking-[-0.2px] flex">
						<p class="text-xl text-[#54DEB2] font-light pr-2"><Icon icon="charm:plus" /></p>
						<p>Add document</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
