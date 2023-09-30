<script>
    export let item;
    export let index;
</script>
<div data-aos="flip-left" data-aos-delay={index*100} class="col-span-1 transition-all duration-200 group overflow-hidden relative flex flex-col justify-start my-2 space-y-1 md:space-y-3 m-auto h-[240px] min-w-[165px] max-w-[90%] text-left p-4 rounded-lg border border-[rgba(17, 45, 68, 0.10)] border-b-8 border-b-secondary bg-base-100 md:h-[305px] md:w-[290px]">
    <div class="absolute top-0 right-0 stroke-secondary">
		<!-- <img src="{item.pattern}" alt="img_icon" class="pattern-icon"> -->
        {@html item.pattern}
	</div>
    <div class="w-fit h-fit bg-secondary stroke-primary rounded-full">
        <!-- <img src={item.logo} alt="icon" class="h-6 w-6" /> -->
        {@html item.icon}
    </div>
    <h3 class="uppercase font-semibold text-lg md:text-xl leading-6 md:leading-7 text-secondary">{item.title}</h3>
    <p class="leading-[19px] text-secondary font-normal text-[12px] md:text-[14px] md:leading-6">{item.desc}</p>
</div>
<style>
    .group{
        box-shadow: 0px 15px 25px 0px rgba(51, 51, 51, 0.03);
    }
</style>