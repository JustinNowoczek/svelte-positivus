<script lang="ts">
	import Icon from '@assets/Icon.svelte'
	import Button from '@components/Button.svelte'

	const navItems = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog']
</script>

<div class="small">
	<Icon color="dark" fullLogo />
	<div>
		{#each navItems as item}
			<a href={'#' + item.split(' ').join('').toLowerCase()}>{item}</a>
		{/each}
		<Button text="Request a Quote" />
	</div>
</div>

<style>
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& div {
			display: flex;
			gap: 40px;
			align-items: center;

			& a {
				color: var(--dark);
			}
		}
	}
</style>
