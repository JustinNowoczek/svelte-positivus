<script lang="ts">
	import BannerImageA from '@assets/bannerImages/a.png'
	import BannerImageD from '@assets/bannerImages/d.png'
	import BannerImageH from '@assets/bannerImages/h.png'
	import BannerImageNo from '@assets/bannerImages/no.png'
	import BannerImageNe from '@assets/bannerImages/ne.png'
	import BannerImageZ from '@assets/bannerImages/z.png'

	const bannerImages = [
		BannerImageA,
		BannerImageD,
		BannerImageH,
		BannerImageNo,
		BannerImageNe,
		BannerImageZ,
	]
</script>

<div class="banner">
	{#each [...bannerImages] as image}
		<img class="bannerImage" src={image} alt="BannerImage" />
	{/each}
</div>

<style>
	.banner {
		height: 48px;
		width: 100%;
		justify-content: space-around;
		display: flex;
		overflow: hidden;
		filter: grayscale(1);
	}
</style>
