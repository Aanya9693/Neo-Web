<script>
    import { onMount } from "svelte";
    export let icon = "";
    export let size="20"
    export let color="#54deb2"
    export let variant="Bold"

    const iconName = `iconsax-svelte/${icon}.svelte`;
    let iconComponent = import(iconName);

    // onMount(async () => {
    //     /* @vite-ignore */ 
    //     let res = await import(iconName).then(
    //         ({ default: res }) => res
    //     );
    //     iconComponent = res;

    //     console.log("IconComponent : ", iconComponent);
    // });

    // import EmptyWallet from 'iconsax-svelte/EmptyWallet.svelte';
</script>

  
{#await iconComponent}
<iconComponent 
    {size}
    {color}
    {variant}
/>
{/await}

    <!-- {#await import(iconName) then iconComponent}
            <svelte:component 
                this={iconComponent.default} 
                {size}
                {color}
                {variant}
            />
    {/await} -->
<!-- {/if} -->