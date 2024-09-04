<script lang="ts">
	export let text = ' '
	export let maxWidth = false
	export let color: 'light' | 'dark' | 'main' = 'light'
</script>

<button class={color} class:maxWidth><p>{text}</p></button>

<style>
	button {
		text-wrap: nowrap;
		padding: 20px 35px;
		border-radius: 14px;
		width: fit-content;

		&.maxWidth {
			width: 100%;
		}

		&.main {
			background-color: var(--main);
		}

		&.light {
			background-color: var(--light);
			border: 1px solid var(--dark);
		}

		&.dark {
			background-color: var(--dark);
			color: var(--light);
		}
	}
</style>
