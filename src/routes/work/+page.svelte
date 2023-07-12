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
<div style="overflow:hidden">
{#if $isLoading}
	<div class="hidden" />
{:else}
	{#each posts as post, index (post.id)}
		<div class="wrapper animate-right" style="animation-delay: {index * 0.2}s;">
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

	.animate-right {
		visibility: hidden; /* initially hidden */
        animation: slide-in-right 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	@keyframes slide-in-right {
		from {
			transform: translateX(100%);
			opacity: 0;
			visibility: visible; /* visible when animation starts */
		}
		to {
			transform: translateX(0);
			opacity: 1;
			visibility: visible; /* remain visible after animation ends */

		}
	}
</style>
