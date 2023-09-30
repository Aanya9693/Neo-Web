<script>
	import Button from '$lib/buttons/button.svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="bg-primary-dark m-6 rounded-xl p-5 w-full">
	<div class="flex justify-between rounded-xl">
		<div class="flex items-center justify-center space-x-2">
			<Icon icon="ic:round-arrow-drop-up" class=" rotate-180 text-3xl text-[#3A4753]" />
			<p class=" font-normal text-lg leading-5 text-[#54DEB2] capitalize">Assets</p>
		</div>
		<div class="flex items-center space-x-8 text-[#54DEB2]">
			<div class="text-lg rounded-xl flex">
				<Icon icon="gg:trash" />
				<span class="text-[#3A4753] mx-6 text-sm">|</span>
				<Icon icon="ph:dots-three-bold" />
			</div>
		</div>
	</div>
	<div class="grid grid-cols-3 gap-4 my-5">
		<div class="p-6 bg-[#18212966] rounded-xl">
			<div class="flex space-x-2">
				<div class="p-3 bg-[#23394d4d] rounded-xl">
					<img src="/dashboard/wallet/horse.svg" alt="horse" />
				</div>
				<div class="d">
					<p class="font-normal text-xl leading-5 capitalize">PowChess</p>
					<p class="font-normal text-xs mt-2 leading-3 text-[#70767B] capitalize">
						Play chess. Earn Money
					</p>
				</div>
			</div>
			<div class="w-full">
					<Button
						route="/dashboard/manage/wallet/CTA"
						label="CTA"
						htmlType="submit"
						className="bg-primary text-primary-dark w-full"
					/>
			</div>
		</div>
		<div class="p-6 bg-[#18212966] rounded-xl">
			<div class="flex space-x-2">
				<div class="p-3 bg-[#b01af733] rounded-xl">
					<img src="/dashboard/wallet/horse.svg" alt="horse" />
				</div>
				<div class="d">
					<p class="font-normal text-xl leading-5 capitalize">PowChess</p>
					<p class="font-normal text-xs mt-2 leading-3 text-[#70767B] capitalize">
						Play chess. Earn Money
					</p>
				</div>
			</div>
			<div class="w-full">
				<Button
					label="CTA"
					htmlType="submit"
					className="bg-[#18212999] text-white w-full hover:text-black"
				/>
			</div>
		</div>
		<div class="p-6 bg-[#18212966] rounded-xl">
			<div class="flex space-x-2">
				<div class="p-3 bg-[#b01af733] rounded-xl">
					<img src="/dashboard/wallet/horse.svg" alt="horse" />
				</div>
				<div class="d">
					<p class="font-normal text-xl leading-5 capitalize">PowChess</p>
					<p class="font-normal text-xs mt-2 leading-3 text-[#70767B] capitalize">
						Play chess. Earn Money
					</p>
				</div>
			</div>
			<div class="w-full">
				<Button
					label="CTA"
					htmlType="submit"
					className="bg-[#18212999] text-white w-full hover:text-black"
				/>
			</div>
		</div>
		<div class="p-6 bg-[#18212966] rounded-xl">
			<div class="flex space-x-2">
				<div class="p-3 bg-[#b01af733] rounded-xl">
					<img src="/dashboard/wallet/horse.svg" alt="horse" />
				</div>
				<div class="d">
					<p class="font-normal text-xl leading-5 capitalize">PowChess</p>
					<p class="font-normal text-xs mt-2 leading-3 text-[#70767B] capitalize">
						Play chess. Earn Money
					</p>
				</div>
			</div>
			<div class="w-full">
				<Button
					label="CTA"
					htmlType="submit"
					className="bg-[#18212999] text-white w-full hover:text-black"
				/>
			</div>
		</div>
		<div class="p-6 bg-[#18212966] rounded-xl">
			<div class="flex space-x-2">
				<div class="p-3 bg-[#b01af733] rounded-xl">
					<img src="/dashboard/wallet/horse.svg" alt="horse" />
				</div>
				<div class="d">
					<p class="font-normal text-xl leading-5 capitalize">PowChess</p>
					<p class="font-normal text-xs mt-2 leading-3 text-[#70767B] capitalize">
						Play chess. Earn Money
					</p>
				</div>
			</div>
			<div class="w-full">
				<Button
					label="CTA"
					htmlType="submit"
					className="bg-[#18212999] text-white w-full hover:text-black"
				/>
			</div>
		</div>
		<div class="p-6 bg-[#18212966] rounded-xl">
			<div class="flex justify-center">
				<div class="p-3 rounded-xl border-2 border-dashed border-spacing-4">
					<Icon icon="material-symbols:add" width="30" height="30" color="#54deb2" />
				</div>
			</div>
			<div class="w-full">
				<Button label="Add" htmlType="submit" className=" text-white w-full hover:text-black" />
			</div>
		</div>
	</div>
</div>
