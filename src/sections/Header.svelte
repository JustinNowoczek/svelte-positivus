<script lang="ts">
	import HeaderImage from '@assets/HeaderImage.svelte'
	import Banner from '@components/Banner.svelte'
	import Button from '@components/Button.svelte'
</script>

<div class="header">
	<div class="desc">
		<header>Navigating the digital landscape for success</header>
		<span
			>Our digital marketing agency helps businesses grow and succeed online through a range of
			services including SEO, PPC, social media marketing, and content creation.</span
		>
		<Button color="dark" text="Book a consultation" />
	</div>
	<div class="imageContainer"><HeaderImage /></div>
</div>

<Banner />

<style>
	.header {
		display: flex;
		justify-content: space-between;

		& .desc {
			display: flex;
			flex-direction: column;
			gap: 35px;
			width: 40%;
			min-width: 510px;
			background-color: var(--light);
		}

		& .imageContainer {
			width: 100%;
			display: flex;
			justify-content: end;

			& svg {
				height: 515px;
				z-index: -1;
				top: 0;
				right: 0;
			}
		}
	}
</style>
