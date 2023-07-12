<script>
	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import { isLoading } from '../../../stores.js';

	let slug = $page.params.slug;
	let imageSrc = '';
	let post = {};
	onMount(async () => {
		isLoading.set(true);
		const result = await pb.collection('artwork').getFirstListItem(`slug="${slug}"`);
		post = result;
		imageSrc = `https://api.alfvar.com/api/files/${post.collectionId}/${post.id}/${post.image}?thumb=1000x0`;
		isLoading.set(false);
	});
</script>

{#if $isLoading}
	<div class="hidden" />
{:else}
	<div class="animate-appear">
		<div class="wrapper">
			<div class="content">
				<img src={imageSrc} alt={post.title} />
			</div>
		</div>
		<div class="content"><h4 style="margin:1rem;">{post.title}</h4></div>
	</div>
{/if}

<style>

	.wrapper {
		padding: 0rem;
		margin: auto;
		display: block;
		width: 100%;
		height: 100%;
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

	@media (min-width: 768px) {
		.content {
			align-items: center;
		}

		.wrapper {
			margin: auto;
			width: 55%;
			height: 55%;
		}
	}
</style>
