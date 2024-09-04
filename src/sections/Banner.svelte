<script lang="ts">
	import BannerImage from '@assets/BannerImage.svelte'
	import Button from '@components/Button.svelte'
</script>

<div class="container">
	<div class="desc">
		<header>Navigating the digital landscape for success</header>
		<span
			>Our digital marketing agency helps businesses grow and succeed online through a range of
			services including SEO, PPC, social media marketing, and content creation.</span
		>
		<Button color="dark" text="Book a consultation" />
	</div>
	<div class="image">
		<BannerImage />
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		padding-top: 70px;
		align-items: center;

		& .desc {
			display: flex;
			flex-direction: column;
			gap: 35px;
			min-width: 510px;
		}

		& .image {
			width: 60%;
		}
	}
</style>
