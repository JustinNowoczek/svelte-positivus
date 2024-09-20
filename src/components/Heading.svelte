<script lang="ts">
	import splitText from '../helpers/splitText'

	export let title: string
	export let description: string

	let [first, second] = splitText(description)
</script>

<div class="heading">
	<h2 class="highlight">{title}</h2>
	<p>
		{first}<br />{second}
	</p>
</div>

<style>
	.heading {
		display: flex;
		gap: 40px;
		margin: 140px 0 80px 0;
	}

	h2 {
		font-weight: 500;
		font-size: 40px;
		line-height: 51.04px;
	}

	p {
		text-wrap: nowrap;
	}
</style>
