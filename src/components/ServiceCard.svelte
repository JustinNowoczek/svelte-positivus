<script lang="ts">
	import Arrow from '@assets/Arrow.svelte'
	import splitText from '../helpers/splitText'

	export let title: string
	export let image: string
	export let url: string = ''

	let [first, second] = splitText(title)
</script>

<div class="card">
	<div class="info">
		<h3 class="large">
			<span class="highlight">{first}</span> <br /><span class="highlight">{second}</span>
		</h3>
		<div class="link"><Arrow /><a href={url}>Learn more</a></div>
	</div>

	<img src={image} alt={title} />
</div>

<style>
	.card {
		width: 600px;
		border: 1px solid #191a23;
		border-radius: 45px;
		align-items: center;
		padding: 50px;
		box-sizing: border-box;
		box-shadow: 0px 5px 0px 0px #191a23;
		display: flex;
		justify-content: space-between;

		& .info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 210px;

			& .link {
				display: flex;
				gap: 15px;
				align-items: center;

				& a {
					color: var(--dark);
				}
			}
		}

		& img {
			width: 210px;
			height: min-content;
		}
	}
</style>
