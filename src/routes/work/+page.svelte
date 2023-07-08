<script>
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	let posts = [];
	let isLoading = true;

	async function fetchData() {
		const resultList = await pb.collection('portfolio_posts').getList(1, 20, {
			sort: 'created',
			filter: 'visible = True'
		});
		posts = resultList.items;
		isLoading = false;
	}
	onMount(() => {
		fetchData();
	});
</script>

{#if isLoading}
	<div class="wrapper">
		<h2 class="loading">Loading...</h2>
		<p class="loading">The first post is currently loading, please wait until it has finished loading into the page</p>
		<a href="work" class="loading">Read more →</a>
	</div>
{:else}
	{#each posts as post (post.id)}
		<div class="wrapper">
			<h2>{post.title}</h2>
			<p>{post.short_description}</p>
			<a href="work/{post.slug}">Read more →</a>
		</div>
	{/each}
{/if}

<style>
	p {
		margin-top: 0.5rem;
	}
</style>
