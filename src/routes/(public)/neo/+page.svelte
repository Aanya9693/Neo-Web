<script>
	import NeoCard from '../../../lib/components/NeoCard.svelte';

	const cards = [
		{
			header: 'Neo Financial Copilot for Entrepreneurs',
			content:
				"Neo is not just an AI assistant; it's your financial copilot. Navigate the world of transactions, assets, and decisions with ease, and empower your entrepreneurial journey like never before.",
			src: '../../../neo/neo_card5.png'
		},
		{
			header: 'NEO Second Brain for Your Organization',
			content:
				'Neo becomes your second brain, handling financial tasks with precision. From instant money transfers to smart asset management, Neo simplifies complexity and amplifies efficiency.',
			src: '../../../neo/neo_card5.png'
		},
		{
			header: 'NEO Where Trust Meets Intelligence',
			content:
				'Powered by blockchain, Neo\'s "Proof of Alignment" ensures that its actions align perfectly with your intentions. Trust Neo to safeguard your interests and financial goals.',
			src: '../../../neo/neo_card6.png'
		},
		{
			header: 'Revolutionize Your Financial Interactions',
			content:
				'Neo revolutionizes how you interact with your finances. Say goodbye to conventional approaches and welcome a new era of financial intimacy, transparency, and trust.',
			src: '../../../neo/neo_card7.png'
		}
	];
</script>

<div class=" bg-[#081B2A] flex justify-center">
	<main class="pt-32 max-w-[1440px] max-[1440px]:w-screen">
		<section class="relative">
			<div
				class="relative px-20 pr-32 flex max-[935px]:flex-col justify-between items-center py-20 mt-10x gap-10 max-[935px]:px-8 max-[935px]:pr-8 max-[935px]:justify-center"
			>
				<div data-aos="fade-up-right" class="max-w-[555px] flex flex-col gap-4">
					<h1 class="text-6xl text-white max-[1230px]:text-4xl max-[935px]:text-center">
						<span class="text-[#06E7ED]">NEO</span> the only smart agent you can trust with your data
					</h1>
					<p class="text-md text-[#92B0C9] max-[935px]:text-center">
						Neo has access to all your personal data and money. AI Wallet Manager : Money, Data,
						Assets
					</p>
					<a
						href="https://wa.me/message/GWBXKS5NZV2RP1"
						class="max-[935px]:hidden rounded-2xl w-fit font-semibold bg-[#06E7ED] text-[#112D44] px-4 py-2"
						>Chat With Neo
						<!-- <span>
							<img
								src="../../../neo/up-arrow.svg"
								alt=""
								class="h-5 inline-block ml-5 -mt-1.5"
								srcset=""
							/>
						</span> -->
					</a>
				</div>
				<div data-aos="zoom-in" class="max-w-[400px] max-[1136px]:max-w-full">
					<img src="../../../neo/main_image.png" class="h-auto w-full" alt="" srcset="" />
				</div>
				<a
					href="https://wa.me/message/GWBXKS5NZV2RP1"
					class="max-[935px]:block hidden rounded-3xl text-center text-xl w-[230px] font-semibold bg-[#06E7ED] text-[#112D44] px-4 py-2"
					>Chat With Neo
					<!-- <span>
						<img
							src="../../../neo/up-arrow.svg"
							alt=""
							class="h-5 inline-block ml-5 -mt-1.5"
							srcset=""
						/>
					</span> -->
				</a>
			</div>
			<!-- <img src="../../../neo/Looper BG.png" class="absolute -bottom-[250px] " alt="" srcset="" /> -->
		</section>

		<section class="px-14 py-20 max-[700px]:px-6">
			<div data-aos="zoom-in" class="flex flex-col gap-2 justify-center items-center mb-10">
				<h1 class="text-4xl text-center text-white max-w-[670px] max-[700px]:text-3xl">
					Introducing <span class="text-[#06E7ED]">NEO</span> Your Trusted Financial Companion
				</h1>
				<p class="text-md text-center text-[#92B0C9] max-w-[920px]">
					Experience a new level of financial empowerment with Neo by your side. Neo combines
					cutting-edge AI technology with your unique identity to become the trusted representative
					you've been looking for.
				</p>
			</div>

			<div class="scroll-outer max-[750px]:flex max-[750px]:flex-col">
				<div class="scroll-container">
					<div class="flex gap-10 mx-3 max-[750px]:flex-col max-[750px]:items-center">
						{#each cards as card}
							<NeoCard header={card.header} content={card.content} src={card.src} />
						{/each}
					</div>
				</div>
			</div>
		</section>

		<section class="px-14 py-20 max-[700px]:px-6">
			<div data-aos="fade-up" class="flex flex-col gap-2 items-center justify-center mb-10">
				<h1 class="text-4xl text-center text-white max-[700px]:text-3xl">
					Unleash <span class="text-[#06E7ED]">Neo's</span> Capabilities
				</h1>
				<p class="text-md text-center text-[#92B0C9] max-w-[472px]">
					Explore Neo's suite of capabilities designed for effortless financial navigation:
				</p>
			</div>
			<div class="flex flex-wrap justify-center items-center gap-10">
				<div data-aos="zoom-in" class="flex flex-col gap-1 items-center w-[389px]">
					<div class="bg-[#112D44] p-2 flex items-center justify-center rounded-full w-14 h-14">
						<img src="../../../neo/Group-2.svg" alt="" srcset="" />
					</div>
					<h1 class="text-[#06E7ED]">Instant Money Transfers</h1>
					<p class="text-[#92B0C9] max-w-[273px] text-center">
						Seamlessly send and receive funds with Neo's secure platform.
					</p>
				</div>
				<div data-aos="zoom-in" class="flex flex-col gap-1 items-center w-[389px]">
					<div class="bg-[#112D44] p-2 flex items-center justify-center rounded-full w-14 h-14">
						<img src="../../../neo/Vector.svg" alt="" srcset="" />
					</div>
					<h1 class="text-[#06E7ED]">Smart Asset Management</h1>
					<p class="text-[#92B0C9] max-w-[273px] text-center">
						Optimize your digital, financial, and smart assets effortlessly.
					</p>
				</div>
				<div data-aos="zoom-in" class="flex flex-col gap-1 items-center w-[389px]">
					<div class="bg-[#112D44] p-2 flex items-center justify-center rounded-full w-14 h-14">
						<img src="../../../neo/Group 1000004232.svg" alt="" srcset="" />
					</div>
					<h1 class="text-[#06E7ED]">Automated Tax Filing</h1>
					<p class="text-[#92B0C9] max-w-[273px] text-center">
						Neo takes the stress out of tax season, ensuring accurate filings.
					</p>
				</div>
				<div data-aos="zoom-in" class="flex flex-col gap-1 items-center w-[389px]">
					<div class="bg-[#112D44] p-2 flex items-center justify-center rounded-full w-14 h-14">
						<img src="../../../neo/Group.svg" alt="" srcset="" />
					</div>
					<h1 class="text-[#06E7ED]">Effortless Exchange Trading</h1>
					<p class="text-[#92B0C9] max-w-[273px] text-center">
						Maximize opportunities in the dynamic world of digital assets.
					</p>
				</div>
				<div data-aos="zoom-in" class="flex flex-col gap-1 items-center w-[389px]">
					<div class="bg-[#112D44] p-2 flex items-center justify-center rounded-full w-14 h-14">
						<img src="../../../neo/Vector-2.svg" alt="" srcset="" />
					</div>
					<h1 class="text-[#06E7ED]">Secure Digital Identity</h1>
					<p class="text-[#92B0C9] max-w-[273px] text-center">
						Neo safeguards your personal and financial information, prioritizing your privacy.
					</p>
				</div>
			</div>
		</section>

		<section class="py-20 relative">
			<!-- <img src="../../../neo/Topographic 5-2.png" alt="" class="absolute right-0" srcset=""> -->
			<!-- <img src="../../../neo/Topographic 6-2.png" alt="" class="absolute -top-20" srcset=""> -->
			<div
				data-aos="fade-up"
				class="flex flex-col gap-2 items-center justify-center mb-10 px-14 max-[700px]:px-6"
			>
				<h1 class="text-4xl text-center text-white max-w-[613px] max-[700px]:text-3xl">
					How <span class="text-[#06E7ED]">Neo</span> Works a Smarter Financial Future
				</h1>
				<p class="text-md text-center text-[#92B0C9] max-w-[915px]">
					Experience a new level of financial empowerment with Neo by your side. Neo combines
					cutting-edge AI technology with your unique identity to become the trusted representative
					you've been looking for.
				</p>
			</div>
			<div class="flex flex-col gap-20 mt-20">
				<div
					class="flex justify-between w-full items-center max-[950px]:flex-col max-[950px]:items-start"
				>
					<img
						data-aos="fade-up-right"
						src="../../../neo/neo_card1.png"
						alt=""
						srcset=""
						class="pr-8"
					/>
					<div
						data-aos="fade-up-left"
						class="p-10 max-[950px]:px-5 flex-1 ml-32 max-[1000px]:ml-10 max-[700px]:ml-0"
					>
						<h2 class="text-[#06E7ED] text-[28px] max-[950px]:text-[22px]">
							Personalised Onboarding
						</h2>
						<p class="text-md text-[#92B0C9] max-w-[460px] text-[24px] max-[950px]:text-[18px]">
							Neo understands your financial preferences and goals seamlessly.
						</p>
					</div>
				</div>
				<div
					class="flex justify-between w-full items-center max-[950px]:flex-col max-[950px]:items-end"
				>
					<div
						class="p-10 max-[950px]:px-5 flex-1 ml-32 max-[1000px]:ml-10 max-[700px]:ml-0 max-[950px]:order-2"
						data-aos="fade-up-right"
					>
						<h2 class="text-[#06E7ED] text-[28px] max-[950px]:text-[22px]">
							Intuitive Conversations
						</h2>
						<p class="text-md text-[#92B0C9] max-w-[460px] text-[24px] max-[950px]:text-[18px]">
							Chat naturally with Neo for transactions, asset management, and decisions.
						</p>
					</div>
					<img
						data-aos="fade-up-left"
						src="../../../neo/neo_card2.png"
						alt=""
						srcset=""
						class="pl-8"
					/>
				</div>

				<div
					class="flex justify-between w-full items-center max-[950px]:flex-col max-[950px]:items-start"
				>
					<img
						data-aos="fade-up-right"
						src="../../../neo/neo_card3.png"
						alt=""
						srcset=""
						class="pr-8"
					/>
					<div
						data-aos="fade-up-left"
						class="p-10 max-[950px]:px-5 flex-1 ml-32 max-[1000px]:ml-10 max-[700px]:ml-0"
					>
						<h2 class="text-[#06E7ED] text-[28px] max-[950px]:text-[22px]">
							Blockchain-Powered Trust
						</h2>
						<p class="text-md text-[#92B0C9] max-w-[460px] text-[24px] max-[950px]:text-[18px]">
							Neo's actions are recorded on the blockchain, establishing transparent trust.
						</p>
					</div>
				</div>
				<div
					class="flex justify-between w-full items-center max-[950px]:flex-col max-[950px]:items-end"
				>
					<div
						class="p-10 max-[950px]:px-5 flex-1 ml-32 max-[1000px]:ml-10 max-[700px]:ml-0 max-[950px]:order-2"
						data-aos="fade-up-right"
					>
						<h2 class="text-[#06E7ED] text-[28px] max-[950px]:text-[22px]">Continuous Learning</h2>
						<p class="text-md text-[#92B0C9] max-w-[460px] text-[24px] max-[950px]:text-[18px]">
							Neo evolves alongside your financial journey, aligning with your intentions.
						</p>
					</div>
					<img
						data-aos="fade-up-left"
						src="../../../neo/neo_card4.png"
						alt=""
						srcset=""
						class="pl-8"
					/>
				</div>
			</div>
		</section>

		<section data-aos="zoom-in" class="p-10 max-[700px]:px-6">
			<div
				class="bg-[#112D44] rounded-[40px] p-10 max-[700px]:p-6 flex items-center justify-between max-[950px]:flex-col relative overflow-hidden"
			>
				<img src="../../../neo/Topographic 5.png" alt="" srcset="" class="absolute top-0 left-0" />
				<img
					src="../../../neo/Topographic 7.png"
					alt=""
					srcset=""
					class="absolute right-0 max-[600px]:right-[-180px] top-0 max-h-[250px]"
				/>
				<img
					src="../../../neo/Topographic 6.png"
					alt=""
					srcset=""
					class="absolute right-0 max-[600px]:right-[-80px] -bottom-10 max-h-[250px]"
				/>
				<div class="max-w-[660px] flex-1">
					<h1 class="text-5xl mb-4 text-[#06E7ED] max-[1200px]:text-2xl">
						Confused about Blockchain Solutions in Finance?
					</h1>
					<div class="flex justify-center relative flex-col items-start mt-4 mb-9">
						<a
							href="https://wa.me/message/GWBXKS5NZV2RP1"
							class="mt-1 sm:mt-2 text-lg bg-[#06E7ED] text-[#112D44] font-semibold py-2 px-5 rounded-3xl"
						>
							Chat with Neo</a
						>
						<!-- <form class="relative flex flex-row items-center w-full md:w-auto my-2">
							<input
								type="emailID"
								name="emailID"
								placeholder=""
								class="text-white focus:outline-none bg-[#081B2A] w-full md:w-[390px] py-4 px-6 rounded-full"
							/>
							<button
								type="submit"
								class="absolute top-1/2 transform -translate-y-1/2 text-lg right-1 bg-[#06E7ED] text-[#112D44] font-semibold py-2 px-5 rounded-3xl"
								>Chat with Neo</button
							>
						</form> -->
					</div>
				</div>
				<div class="h-fit w-fit">
					<img src="../../../neo/main_image.png" class="max-h-[350px]" alt="" srcset="" />
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	.scroll-outer {
		width: 100%;
		overflow-x: auto;
	}

	.scroll-container {
		display: inline-block;
		white-space: nowrap;
	}
	.scroll-outer::-webkit-scrollbar {
		display: none;
	}

	.scroll-container::-webkit-scrollbar {
		display: none;
	}
</style>
