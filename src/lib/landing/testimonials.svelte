<script>
	import SectionHeader from './sectionHeader.svelte';
	import { onMount } from 'svelte';

	import Testimonial from './testimonial.svelte';

	export let testimonials;

	const getHeight = (name) => {
		let height = 425;
		if (name == 'reviews') {
			height = 320;
		}
		return height;
	};
	const params = {
		injectStyles: [
			`
                .swiper-pagination-bullets.swiper-pagination-horizontal{                    
                    position: initial !important;
                    margin-top: 50px;
                }
                .swiper-pagination-bullet {
                    border-radius: 10px;
                    width: 25px;
                    height: 5px;
                    text-align: center;
                    line-height: 12px;
                    font-size: 12px;
                    color: #000;
                    opacity: 1;
                    background: rgba(0, 0, 0, 0.12);
                }
                swiper-slide {
                    text-align: center;
                    font-size: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .swiper-pagination-bullet-active {
                    color: #fff;
                    background: #07E1E8;
                }
                .swiper-button-prev, .swiper-button-next{                                        
                    height: 500px;
                    top: 0;
                    width: 50px;
                }
				.swiper-button-prev::after, .swiper-button-next::after{
					border-radius: 100%;
					background-color: #92B0C9;
					color: #112D44;
					font-size: 18px;					
					height: 40px;
					width: 40px;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					box-sizing: border-box;
				}
				.swiper-button-prev:hover::after, .swiper-button-next:hover::after{
					background-color: #07E1E8;
				}
				.swiper-button-disabled.swiper-button-prev::after, .swiper-button-disabled.swiper-button-next::after{
					background-color: #92B0C9;
					opacity: 1;					
				}
				@media only screen and (max-width: 768px) {
					.swiper-button-prev::after, .swiper-button-next::after {
						height: 30px;
						width: 30px;
						font-size: 14px;
					}
					.swiper-button-prev, .swiper-button-next{                                        
						height: 350px;
						top: 0;
						width: 30px;
					}   
				}
                // .swiper-button-prev{                    
                //     left: 0;
                //     background: linear-gradient(-273.67deg, #FFFFFF 31.18%, rgba(255, 255, 255, 0) 92.31%);
                // }
                // .swiper-button-next{
                //     right: 0;                    
                //     background: linear-gradient(273.67deg, #FFFFFF 31.18%, rgba(255, 255, 255, 0) 92.31%);                    
                // }

            `
		],
		pagination: {
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '"></span>';
			}
		},
		spaceBetween: 220
	};

	onMount(() => {
		let swiperEl;
		swiperEl = document.querySelector(`swiper-container.mySwiper`);
		Object.assign(swiperEl, params);

		swiperEl.initialize();
	});
</script>

<div class="pt-12 md:pt-16 pb-16 w-full md:pb-[90px] bg-[#F0F1F5]">
	<div class="px-4 md:px-20">
		<div class="mb-12 max-w-[1280px] mx-auto w-full">
			<SectionHeader
				title="What Client Think Of Us"
				subTitle="Testimonial"
				description="Everything you need to harness blockchain's power without the crypto complexities. We empower
			businesses across the spectrum, providing tools to manage digital assets seamlessly."
			/>
		</div>
		<div class="flex justify-center items-center max-w-[1440px] mx-auto">
			<swiper-container
				class="mySwiper"
				pagination="true"
				navigation="true"
				loop="true"
				pagination-dynamic-bullets="false"
				slides-per-view="1"
				init="false"
				autoplay="200"
			>
				{#each testimonials as testimonial}
					<swiper-slide>
						<Testimonial {testimonial} />
					</swiper-slide>
				{/each}
			</swiper-container>
		</div>
	</div>
</div>
