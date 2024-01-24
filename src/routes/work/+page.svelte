<script>
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import { isLoading } from '../../stores.js';
	let posts = [];

	async function fetchData() {
		isLoading.set(true);
		const resultList = await pb.collection('portfolio_posts').getList(1, 20, {
			sort: 'created',
			filter: 'visible = True'
		});
		posts = resultList.items;
		isLoading.set(false);
	}
	onMount(() => {
		fetchData();
	});
</script>

<div style="overflow:hidden; padding: 1rem; margin: -1rem -1rem 0rem -1rem;" >
	{#if $isLoading}
		<div class="hidden" />
	{:else}
		{#each posts as post, index (post.id)}
			<div class="wrapper animate-right" style="animation-delay: {index * 0.2}s; ">
				<h2>{post.title}</h2>
				<p>{post.short_description}</p>
				<a href="work/{post.slug}">Read more →</a>
			</div>
		{/each}
	{/if}
</div>

<style>
	p {
		margin-top: 0.5rem;
	}

	a {
		font-family: forma-djr-text, sans-serif;
		font-weight: 400;
		font-style: normal;
		color: black;
		text-decoration: none;
		list-style-type: none;
		font-size: 1em;
	}
</style>
