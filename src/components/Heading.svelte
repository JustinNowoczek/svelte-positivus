<script lang="ts">
	export let title: string
	export let description: string

	const middle = parseInt(description.length / 2 + '')

	let target = 0

	while (target < middle / 2) {
		if (description[middle + target] === ' ') {
			break
		} else if (description[middle - target] === ' ') {
			target = -target
			break
		}

		target++
	}

	let [first, second] = [
		description.slice(0, middle + target),
		description.slice(middle + target + 1),
	]
</script>

<div class="heading">
	<h2>{title}</h2>
	<p>
		{first}<br />{second}
	</p>
</div>

<style>
	.heading {
		display: flex;
		gap: 40px;
	}

	h2 {
		background-color: var(--main);
		font-weight: 500;
		font-size: 40px;
		line-height: 51.04px;
		padding: 0 7px;
	}

	p {
	}
</style>
