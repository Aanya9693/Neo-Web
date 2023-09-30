<script>
    export let text;
    export let danger = false;
</script>

<button class="px-3 py-3 text-xl rounded-md bg-[#112D4480] w-[30%] {!danger ? 'border border-[#06E7ED] text-[#06E7ED]' : 'border border-[#E42D04] text-[#E42D04]'}">
    {text}
</button>
