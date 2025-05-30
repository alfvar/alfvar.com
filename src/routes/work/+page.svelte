<script>
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import { isLoading } from '../../stores.js';
	let posts = [];

	async function fetchData() {
		isLoading.set(true);
		const resultList = await pb.collection('portfolio_posts').getList(1, 20, {
			sort: 'created',
			filter: 'visible = True',
			fields: 'title, short_description, slug, id, created'
		});
		posts = resultList.items.reverse();
		isLoading.set(false);
	}
	onMount(() => {
		fetchData();
	});
</script>

<div class="cardcontainer">
	{#if $isLoading}
		<div class="hidden"></div>
	{:else}
		{#each posts as post, index (post.id)}
			<a href="work/{post.slug}">
				<div
					class="wrapper animate-right"
					style="animation-delay: {index * 0.2}s; margin-bottom:0px;"
				>
					<h2>{post.title}</h2>
					<p class="label handwriting">{post.created.substring(0, 4)}</p>
					<p>{post.short_description}</p>
					<span class="read-more">Read more →</span>
				</div>
			</a>
		{/each}
	{/if}
</div>

<style>
	p {
		margin-top: 0.5rem;
	}
	.cardcontainer {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 0;
	}
	.wrapper {
		overflow: visible;
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
	.label {
		position: absolute;
		right: 1.5rem;
		top:1rem;
		background-color: white;
		color:grey;
	}
</style>
