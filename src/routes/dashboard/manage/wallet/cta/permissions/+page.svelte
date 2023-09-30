<script>
	import Ellipse from '$lib/components/svg/Ellipse.svelte';
	import Profile from '$lib/components/svg/Profile.svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="p-5 w-full bg-primary-dark m-6 rounded-xl">
	<div class="flex justify-between">
		<div class="flex items-center justify-center space-x-2">
			<Icon icon="ic:round-arrow-drop-up" class=" rotate-180 text-3xl text-[#3A4753]" />
			<p class=" font-normal text-lg leading-5 text-[#54DEB2] capitalize">Permissions</p>
		</div>
		<div class="flex text-lg items-center space-x-8 text-[#54DEB2]">
			<Icon icon="ph:dots-three-bold" />
		</div>
	</div>

	<div class="my-6">
		<div class="grid grid-cols-3 gap-4">
			<div class="">
				<p class="text-base text-[#FFFFFF]">Basic</p>
				<p class="text-xs text-[#FFFFFF] opacity-60">
					Most Connect apps these permissions to process payments, fetch friends’list and some
					available info about your users.
				</p>
			</div>
			<div class="grid grid-cols-2 gap-4 col-span-2">
				<div class="p-3 bg-primary-light rounded-md border border-[#3A4753] border-dashed">
					<div class="">
						<div class="flex justify-between">
							<div class="flex items-center justify-center space-x-2">
								<Profile />
							</div>
							<div class="flex text-lg items-center space-x-8">
								<Ellipse />
							</div>
						</div>
					</div>
					<div class="mt-5">
						<p class="text-base text-[#FFFFFF]">Public profile</p>
						<p class="text-xs text-[#FFFFFF] opacity-60">
							Get user’s $handle,display name and profile picture.
						</p>
					</div>
				</div>
				<div class="p-3 bg-primary-light rounded-md border border-[#3A4753] border-dashed">
					<div class="">
						<div class="flex justify-between">
							<div class="flex items-center justify-center space-x-2">
								<Profile />
							</div>
							<div class="flex text-lg items-center space-x-8">
								<Ellipse />
							</div>
						</div>
					</div>
					<div class="mt-5">
						<p class="text-base text-[#FFFFFF]">Public profile</p>
						<p class="text-xs text-[#FFFFFF] opacity-60">
							Get user’s $handle,display name and profile picture.
						</p>
					</div>
				</div>
				<div class="p-3 bg-primary-light rounded-md border border-[#3A4753] border-dashed">
					<div class="">
						<div class="flex justify-between">
							<div class="flex items-center justify-center space-x-2">
								<Profile />
							</div>
							<div class="flex text-lg items-center space-x-8">
								<Ellipse />
							</div>
						</div>
					</div>
					<div class="mt-5">
						<p class="text-base text-[#FFFFFF]">Public profile</p>
						<p class="text-xs text-[#FFFFFF] opacity-60">
							Get user’s $handle,display name and profile picture.
						</p>
					</div>
				</div>
				<div class="p-3 bg-primary-light rounded-md border border-[#3A4753] border-dashed">
					<div class="">
						<div class="flex justify-between">
							<div class="flex items-center justify-center space-x-2">
								<Profile />
							</div>
							<div class="flex text-lg items-center space-x-8">
								<Ellipse />
							</div>
						</div>
					</div>
					<div class="mt-5">
						<p class="text-base text-[#FFFFFF]">Public profile</p>
						<p class="text-xs text-[#FFFFFF] opacity-60">
							Get user’s $handle,display name and profile picture.
						</p>
					</div>
				</div>
				<div class="p-3 bg-primary-light rounded-md border border-[#3A4753] border-dashed">
					<div class="">
						<div class="flex justify-between">
							<div class="flex items-center justify-center space-x-2">
								<Profile />
							</div>
							<div class="flex text-lg items-center">
								<Ellipse />
							</div>
						</div>
					</div>
					<div class="mt-5">
						<p class="text-base text-[#FFFFFF]">Public profile</p>
						<p class="text-xs text-[#FFFFFF] opacity-60">
							Get user’s $handle,display name and profile picture.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="my-20">
			<div class="grid grid-cols-3 gap-4">
				<div class="">
					<p class="text-base text-[#FFFFFF]">Advanced</p>
					<p class="text-xs text-[#FFFFFF] opacity-60">
						Create more complicated system with encryption keys and data signing capabilities.
					</p>
				</div>
				<div class="grid grid-cols-2 gap-4 col-span-2">
					<div class="p-3 bg-primary-light rounded-md border border-[#3A4753] border-dashed">
						<div class="">
							<div class="flex justify-between">
								<div class="flex items-center justify-center space-x-2">
									<Profile />
								</div>
								<div class="flex text-lg items-center space-x-8">
									<Ellipse />
								</div>
							</div>
						</div>
						<div class="mt-5">
							<p class="text-base text-[#FFFFFF]">Public profile</p>
							<p class="text-xs text-[#FFFFFF] opacity-60">
								Get user’s $handle,display name and profile picture.
							</p>
						</div>
					</div>
					<div class="p-3 bg-primary-light rounded-md border border-[#3A4753] border-dashed">
						<div class="">
							<div class="flex justify-between">
								<div class="flex items-center justify-center space-x-2">
									<Profile />
								</div>
								<div class="flex text-lg items-center space-x-8">
									<Ellipse />
								</div>
							</div>
						</div>
						<div class="mt-5">
							<p class="text-base text-[#FFFFFF]">Public profile</p>
							<p class="text-xs text-[#FFFFFF] opacity-60">
								Get user’s $handle,display name and profile picture.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="my-20">
			<div class="grid grid-cols-3 gap-4">
				<div class="">
					<p class="text-base text-[#FFFFFF]">NFT</p>
					<p class="text-xs text-[#FFFFFF] opacity-60">
						Allow user to interact with NFTs on your platform Required if you intend to use RUN or
						NFTY Jigs.
					</p>
				</div>
				<div class="grid grid-cols-2 gap-4 col-span-2">
					<div class="p-3 bg-primary-light rounded-md border border-[#3A4753] border-dashed">
						<div class="">
							<div class="flex justify-between">
								<div class="flex items-center justify-center space-x-2">
									<Profile />
								</div>
								<div class="flex text-lg items-center space-x-8">
									<Ellipse />
								</div>
							</div>
						</div>
						<div class="mt-5">
							<p class="text-base text-[#FFFFFF]">Public profile</p>
							<p class="text-xs text-[#FFFFFF] opacity-60">
								Get user’s $handle,display name and profile picture.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
