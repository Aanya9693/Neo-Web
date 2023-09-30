<script>
	export let asset = {};
	let expanded = false;
	let showMenu = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class={`bg-[#112D44] px-[20px] rounded-lg h-fit ${
		expanded ? 'border-[1px] border-[#06E7ED] py-[22px]' : 'py-[16px]'
	}`}
>
	<div class="flex justify-between items-center">
		<div class="flex items-center">
			<img
				src={asset.logo}
				alt=""
				class={`transition-all duration-200 ${expanded ? 'h-[64px] ' : 'h-[40px]'}`}
			/>

			<div class="px-2">
				<h1 class="text-[14px]">{asset.name}</h1>
				<p class="text-gray-500 text-md">{asset.label}</p>
			</div>
		</div>
		<div class="flex items-center gap-3">
			{asset.value}
			<!-- svelte-ignore missing-declaration -->

			<img
				src="../../../Vector.png"
				alt="logo"
				class={`w-2  cursor-pointer transition-all duration-300 ${expanded ? 'rotate-180' : ''}`}
				on:click={() => (expanded = !expanded)}
			/>
		</div>
	</div>
	{#if expanded}
		<div class="flex justify-between items-center mt-6">
			<div class="flex gap-2">
				<div
					class="text-md font-bold w-[120px] bg-primary text-primary-dark hover:bg-white py-[7px] px-[24px] rounded flex items-center gap-2 cursor-pointer justify-center"
				>
					<a href="/dashboard/dashboard/send">Send</a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
					>
						<path
							d="M6.5343 13.5701C6.5343 13.8282 6.32514 14.0187 6.06904 13.9911C6.06904 13.9911 6.22015 14.0114 6.06538 13.9907C2.64127 13.5321 0 10.5888 0 7.02637C0 3.14581 3.13401 0 7 0C10.866 0 14 3.14581 14 7.02637C14 10.5878 11.3603 13.5304 7.93759 13.9903C7.78188 14.0112 7.93018 13.9912 7.93018 13.9912C7.67369 14.0168 7.46577 13.8281 7.46577 13.5701V5.57025C7.46577 5.44121 7.53923 5.41056 7.62924 5.50117L9.4633 7.34756C9.90226 7.78933 10.561 7.12692 10.1218 6.68516L7.40083 3.91897C7.17482 3.68921 6.80847 3.69013 6.58138 3.92224L3.87822 6.68516C3.43904 7.12692 4.09758 7.78933 4.53677 7.34756L6.37084 5.50117C6.46112 5.41029 6.5343 5.44036 6.5343 5.57025V13.5701Z"
							fill="#0C151E"
						/>
					</svg>
				</div>
				<div
					class="text-md font-bold w-[120px] bg-primary text-primary-dark hover:bg-white py-[7px] px-[24px] rounded flex items-center gap-2 cursor-pointer justify-center"
				>
					<a href="/dashboard/dashboard/receive" class="">Receive</a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
					>
						<path
							d="M6.5343 0.429851C6.5343 0.171771 6.32514 -0.0187492 6.06904 0.00885201C6.06904 0.00885201 6.22015 -0.0113878 6.06538 0.00934029C2.64127 0.467923 0 3.41116 0 6.97363C0 10.8542 3.13401 14 7 14C10.866 14 14 10.8542 14 6.97363C14 3.41219 11.3603 0.469627 7.93759 0.00973797C7.78188 -0.0111837 7.93018 0.00875378 7.93018 0.00875378C7.67369 -0.016757 7.46577 0.171865 7.46577 0.429856V8.42975C7.46577 8.55879 7.53923 8.58944 7.62924 8.49883L9.4633 6.65244C9.90226 6.21067 10.561 6.87308 10.1218 7.31484L7.40083 10.081C7.17482 10.3108 6.80847 10.3099 6.58138 10.0778L3.87822 7.31484C3.43904 6.87308 4.09758 6.21067 4.53677 6.65244L6.37084 8.49883C6.46112 8.58971 6.5343 8.55964 6.5343 8.42975V0.429851Z"
							fill="#0C151E"
						/>
					</svg>
				</div>
			</div>
			<div class="relative">
					<img
						src="../../../../carbon_overflow-menu-horizontal.png"
						class={`cursor-pointer bg-[#091D2E] rounded-[8px] px-[14px] py-[8px] w-[40px] h-[40px] rotate-90`}
						alt="options"
						on:click={() => (showMenu = !showMenu)}
					/>
				{#if showMenu}
					<ul
						class="absolute w-[150px] bg-[#112D44] rounded-lg right-0 z-10 border border-[#92B0C980]"
					>
						<li
							class="text-[#06E7ED] py-4 px-6 cursor-pointer flex items-center justify-start gap-2"
						>
							<a href="/dashboard/dashboard/buy">Buy</a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<path
									d="M8 0C3.58878 0 0 3.58878 0 8C0 12.4112 3.58878 16 8 16C12.4112 16 16 12.4112 16 8C16 3.58878 12.4112 0 8 0ZM11.6364 8.72727H8.72727V11.6364C8.72727 12.038 8.40163 12.3636 8 12.3636C7.59837 12.3636 7.27273 12.038 7.27273 11.6364V8.72727H4.36364C3.962 8.72727 3.63636 8.40163 3.63636 8C3.63636 7.59837 3.962 7.27273 4.36364 7.27273H7.27273V4.36364C7.27273 3.962 7.59837 3.63636 8 3.63636C8.40163 3.63636 8.72727 3.962 8.72727 4.36364V7.27273H11.6364C12.038 7.27273 12.3636 7.59837 12.3636 8C12.3636 8.40163 12.038 8.72727 11.6364 8.72727Z"
									fill="#06E7ED"
								/>
							</svg>
						</li>
						<li
							class="text-[#06E7ED] border-t border-[#92B0C980] py-4 px-6 cursor-pointer flex items-center justify-start gap-2"
						>
							<a href="/dashboard/dashboard/add">Add</a>
							<img
								src="../../../dashboard/dashboard/Group 1000003871.svg"
								class="inline-block"
								alt=""
								srcset=""
							/>
						</li>
						<li
							class="text-[#06E7ED] border-t border-[#92B0C980] py-4 px-6 cursor-pointer flex items-center justify-start gap-2"
						>
							<a href="/dashboard/dashboard/withdraw">Withdraw</a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="14"
								viewBox="0 0 16 14"
								fill="none"
							>
								<path
									d="M3.16121 14.0003H12.8356C13.1804 13.9984 13.5105 13.8654 13.7544 13.6302C13.9982 13.395 14.136 13.0765 14.138 12.7439V2.69275C14.136 2.55052 14.0766 2.41464 13.9723 2.31406C13.8681 2.21348 13.7272 2.15616 13.5798 2.1543H2.41703C2.2696 2.15616 2.12875 2.21348 2.02449 2.31406C1.92024 2.41464 1.86081 2.55052 1.85889 2.69275V12.7439C1.86084 13.0765 1.99868 13.395 2.24249 13.6302C2.4863 13.8654 2.81642 13.9984 3.16121 14.0003ZM5.39377 8.05574C5.49842 7.9549 5.64028 7.89826 5.78819 7.89826C5.9361 7.89826 6.07796 7.9549 6.18261 8.05574L7.46261 9.29059V5.5645C7.46261 5.42169 7.52141 5.28473 7.62608 5.18375C7.73075 5.08277 7.87272 5.02604 8.02075 5.02604C8.16877 5.02604 8.31074 5.08277 8.41541 5.18375C8.52008 5.28473 8.57889 5.42169 8.57889 5.5645V9.29059L9.85889 8.05574C9.96469 7.96062 10.1046 7.90884 10.2492 7.91131C10.3938 7.91377 10.5318 7.97028 10.634 8.06893C10.7363 8.16758 10.7949 8.30068 10.7974 8.44018C10.8 8.57967 10.7463 8.71468 10.6477 8.81675L8.94354 10.4608C8.69819 10.6958 8.36648 10.8277 8.02075 10.8277C7.67502 10.8277 7.34331 10.6958 7.09796 10.4608L5.37144 8.81675C5.26692 8.71579 5.20821 8.57893 5.20821 8.43624C5.20821 8.29355 5.26692 8.1567 5.37144 8.05574H5.39377Z"
									fill="#06E7ED"
								/>
								<path
									d="M14.6977 0H1.30233C0.95753 0.00188466 0.627412 0.134859 0.383601 0.37007C0.13979 0.605282 0.00195356 0.923755 0 1.25639V6.28195C0 6.42475 0.0588038 6.56171 0.163475 6.66269C0.268147 6.76367 0.410112 6.8204 0.55814 6.8204C0.706167 6.8204 0.848132 6.76367 0.952804 6.66269C1.05748 6.56171 1.11628 6.42475 1.11628 6.28195V1.25639C1.11628 1.20879 1.13588 1.16313 1.17077 1.12947C1.20566 1.09581 1.25298 1.07691 1.30233 1.07691H14.6977C14.747 1.07691 14.7943 1.09581 14.8292 1.12947C14.8641 1.16313 14.8837 1.20879 14.8837 1.25639V6.28195C14.8837 6.42475 14.9425 6.56171 15.0472 6.66269C15.1519 6.76367 15.2938 6.8204 15.4419 6.8204C15.5899 6.8204 15.7319 6.76367 15.8365 6.66269C15.9412 6.56171 16 6.42475 16 6.28195V1.25639C15.998 0.923755 15.8602 0.605282 15.6164 0.37007C15.3726 0.134859 15.0425 0.00188466 14.6977 0Z"
									fill="#06E7ED"
								/>
							</svg>
						</li>
					</ul>
				{/if}
			</div>
		</div>
	{/if}
</div>
