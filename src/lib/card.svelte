<script>
	export let title = '';
	export let className = 'bg-primary-light';
</script>

<slot name="wallet" />
<div class={`card mb-3 ${className}`}>
	<div class={`${className === 'bg-none' ? '' : 'card__body'}`}>
		<div class="card__title">
			{title}
		</div>
		<div class="card__content">
			<slot />
		</div>
	</div>
</div>
