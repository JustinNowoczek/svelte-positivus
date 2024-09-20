<script lang="ts">
	import ads from '@assets/serviceImages/ads.png'
	import analytics from '@assets/serviceImages/analytics.png'
	import content from '@assets/serviceImages/content.png'
	import mail from '@assets/serviceImages/mail.png'
	import search from '@assets/serviceImages/search.png'
	import social from '@assets/serviceImages/social.png'

	import Heading from '@components/Heading.svelte'
	import ServiceCard from '@components/ServiceCard.svelte'
</script>

<div>
	<Heading
		title="Services"
		description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
	/>
	<div class="cards">
		{#each [1, 2, 3, 4, 5, 6] as a}
			<ServiceCard title="Search engine optimization" image={search} />
		{/each}
	</div>
</div>

<style>
</style>
