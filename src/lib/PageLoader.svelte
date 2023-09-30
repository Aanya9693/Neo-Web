<script>
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import navigationState from '$lib/stores/NavigationState';

    const progress = tweened(0, {
        duration: 3500,
        easing: cubicOut
    });

    $: if($navigationState === "loaded"){
        progress.set(1, { duration: 1000 });
    }

    onMount(() => {       
        progress.set(0.7);
    });
</script>

<div class="fixed inset-0 h-1">
	<div class="bg-[#112D44] h-full w-[var(--width)]" style={`--width: ${$progress * 100}%`} />
</div>
