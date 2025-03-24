<script>
	import { pb } from '$lib/pocketbase';
	import { onMount, onDestroy } from 'svelte';
	import { isLoading } from '../../stores.js';

	let posts = [];
	let observer;

	async function fetchData() {
		isLoading.set(true);

		const resultList = await pb.collection('artwork').getList(1, 20, {
			sort: 'created'
		});
		posts = resultList.items;
		isLoading.set(false);

		posts.reverse();
	}

	onMount(() => {
		fetchData();

		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					let img = entry.target;
					img.src = img.dataset.src;
					observer.unobserve(img);
				}
			});
		});

		document.querySelectorAll('.lazyload').forEach((img) => {
			observer.observe(img);
		});
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<div>
	<div class="imageGrid">
		{#if $isLoading}
			<div class="placeholder"> </div>
		{:else}
			{#each posts as post, index (post.id)}
				<div class="image animate-appear" style="animation-delay: {index * 0.05}s;">
					<a href="/visuals/{post.slug}">
						<img
							src="https://api.alfvar.com/api/files/{post.collectionId}/{post.id}/{post.image}?thumb=500x0"
							alt={post.title}
						/>
					</a>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	.imageGrid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0.2rem;
		margin: 0rem 0 0.5rem;
		width: 100%;
		max-width: 100rem;
		
	}

	.placeholder {
		height: 30.75rem;
	}

	.imageGrid img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		margin: 0px;
		box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.15);
	}

	@media (min-width: 705px) {
		.imageGrid {
			grid-template-columns: 1fr 1fr 1fr 1fr;
			width: 100%;
		}
	}
	@media (min-width: 1200px) {
		.imageGrid {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
			width: 100%;
			margin:0 auto;
		}
	}
</style>
