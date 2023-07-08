<script>
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	let posts = [];
	let isLoading = true;
	async function fetchData() {
		const resultList = await pb.collection('artwork').getList(1, 20, {
			sort: 'created'
		});
		posts = resultList.items;
		isLoading = false;
	}
	onMount(() => {
		fetchData();
	});
</script>

<div class="wrapper">
	<div class="imageGrid">
		{#if isLoading}
			<div class="placeholder" />	
		{:else}
			{#each posts as post (post.id)}
				<div class="image">
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
	.wrapper {
		padding: 0rem;
	}
	.imageGrid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0.2rem;
		margin: 0 auto;
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

	@media (min-width: 768px) {
		.imageGrid {
			grid-template-columns: 1fr 1fr 1fr 1fr;
			width: 100%;
		}
	}
</style>
