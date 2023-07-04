<script>
	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	let slug = $page.params.slug;
	let post = {};
	let long_description = '';
	let body = '';

	onMount(async () => {
		const result = await pb.collection('portfolio_posts').getFirstListItem(`slug="${slug}"`);
		post = result;
		long_description = post.long_description;
		body = post.body;
		console.log(body);
	});
</script>

<div class="wrapper">
	<div class="dark">
		<h2 class="white">{post.subtitle}</h2>
		<p class="text text7 htmlwhite">
			{@html long_description}
		</p>
	</div>

	<div class="text text7 htmlbody htmltext25">
		{@html body}
	</div>
</div>

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
		padding: 4rem 0rem 4rem 0rem;
		border-radius: 0.1em;
	}

	.htmlbody > :global(ul li) {
		font-style: normal;
		padding-top: 0.4rem;
		font-family: felt-tip-roman, sans-serif;
		font-weight: 700;
		font-size: 1.1rem;
	}

	.htmlbody > :global(* img) {
		object-fit: cover;
		width: 100%;
		margin: 4rem auto 0;
		border-radius: 0.2em;
		box-shadow: 0 0 0.5em 0.1em #0000001a;
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
