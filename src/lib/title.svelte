<script>
    export let title = "";
    export let subtitle = "";
</script>

<div class="my-2">
    {#if title}
        <div class="font-semibold text-base">{title}</div>
    {/if}
    {#if subtitle}
        <div class="text-gray-500 text-xs" style="font-size:10px">{subtitle}</div>
    {/if}
</div>