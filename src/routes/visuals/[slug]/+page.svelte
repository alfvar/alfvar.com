<script>
	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	let slug = $page.params.slug;
	let isLoading = true;
	let imageSrc = '';

	let post = {};
	onMount(async () => {
		const result = await pb.collection('artwork').getFirstListItem(`slug="${slug}"`);
		post = result;
		imageSrc = `https://api.alfvar.com/api/files/${post.collectionId}/${post.id}/${post.image}`;
		isLoading = false;
	});
</script>

{#if isLoading}
	<div class="placeholder" />
{:else}
	<div class="wrapper">
		<div class="content">
			<img src={imageSrc} alt={post.title} />
			<h3>"{post.title}"</h3>
		</div>
	</div>
{/if}

<style>
	.wrapper {
		padding: 0rem;
		width: 95.4vw;
		height: 110vw;
		margin: auto;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		width: 100%;
		max-width: 100rem;
	}

	h3 {
		margin: 1rem auto;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.placeholder {
		height: 95.4vw;
		width: 95vw;
		object-fit: contain;
	}

	@media (min-width: 768px) {
		.content {
			align-items: center;
		}

		.placeholder {
			height: 80vh;
			object-fit: contain;
			width: 20vw;
		}
		.wrapper {
			margin: auto;
			width: 80vh;
			height: 90vh;
			margin-bottom: 2rem;
		}
	}
</style>
