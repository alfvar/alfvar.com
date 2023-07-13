<script>
	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import { isLoading } from '../../../stores.js';

	let slug = $page.params.slug;
	let post = {};
	let long_description = '';
	let body = '';

	onMount(async () => {
		isLoading.set(true);
		const result = await pb.collection('portfolio_posts').getFirstListItem(`slug="${slug}"`);
		post = result;
		long_description = post.long_description;
		body = post.body;
		isLoading.set(false);
	});
</script>

{#if $isLoading}
	<div />
{:else}
	<div class="wrapper animate-appear">
		<div class="dark">
			<h2 class="white">{post.subtitle}</h2>
			<p class="text text7 htmlwhite">
				{@html long_description}
			</p>
		</div>

		<div class="htmlbody">
			{@html body}
		</div>
	</div>
{/if}

<style>
	.wrapper {
		padding: 0;
	}

	.htmlwhite > :global(p) {
		color: #fff;
		font-size: 1.5rem;
		text-align: center;
	}

	.white {
		color: #fff;
	}

	.htmlbody > :global(p),
	.htmlbody > :global(h1),
	.htmlbody > :global(h2),
	.htmlbody > :global(h3),
	.htmlbody > :global(ul li) {
		margin-left: 7%;
		margin-right: 7%;
	}

	.dark {
		background-color: rgb(20, 20, 20);
		padding: 4rem 0rem 10rem 0rem;
		border-radius: 0.1em;
		margin-bottom: 2rem;
	}

	.htmlbody > :global(ul li) {
		font-style: normal;
		padding-top: 0.4rem;
		font-family: felt-tip-roman, sans-serif;
		font-weight: 700;
		font-size: 1.1rem;
	}

	.htmlbody > :global(* img) {
		max-width: 100%;
		height: auto;
		margin: 0 auto;
		border-radius: 0.2rem;
		box-shadow: 0 0 0.5em 0.1em #0000001a;
		display: block;
	}

	:global(.text7) {
		margin-left: 7%;
		margin-right: 7%;
	}
	h2 {
		text-align: center;
		padding-top: 2rem;
	}

	.htmlbody > :global(h3) {
		padding-top: 3rem;
		margin-bottom: -0.75rem;
	}
</style>
