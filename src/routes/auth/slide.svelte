<script>
    /**
	 * @type {{ imageSrc: any; des: any; }}
	 */
     export let section;
</script>

<div>
    <div class="px-14">
        <img src="{section.imageSrc}" alt="" class="h-full w-full" />
        <div class="md:w-2/3 mx-auto md:px-4">
            <p class="text-[#F0F1F5] font-normal leading-7 text-center text-[16px] text-barlow">
                {section.des}
            </p>
        </div>

    </div>
</div>