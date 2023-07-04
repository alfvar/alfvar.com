<script>
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	let posts = [];

	async function fetchData() {
		const resultList = await pb.collection('portfolio_posts').getList(1, 20, {
			sort: 'created',
			filter: 'visible = True',
		});
		posts = resultList.items;
	}
	onMount(() => {
		fetchData();
	});
</script>

{#each posts as post (post.id)}
	<div class="wrapper">
		<h2>{post.title}</h2>
		<p>{post.short_description}</p>
		<a href="work/{post.slug}">Read more →</a>
	</div>
{/each}

<style>
	p {
		margin-top: 0.5rem;
	}
</style>
