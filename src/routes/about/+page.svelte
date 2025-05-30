<script>
	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import { isLoading } from '../../stores.js';
	import uni from '$lib/img/ico/uni.svg';
	import timeframe from '$lib/img/ico/time.svg';
	import participants from '$lib/img/ico/2people.svg';

	let slug = $page.params.slug;
	let post = {};
	let long_description = '';
	let body = '';

	onMount(async () => {
		isLoading.set(true);
		const result = await pb.collection('portfolio_posts').getFirstListItem(`slug="about"`);
		post = result;
		long_description = post.long_description;
		body = post.body;

		isLoading.set(false);
	});
</script>

{#if $isLoading}
	<div> </div>
{:else}
	<div class="wrapper animate-appear">
		<div class="htmlbody" style="margin-top:2rem;">
			{@html body}
		</div>
	</div>
{/if}

<style>
	.wrapper {
		padding: 0;
		}

	.htmlbody > :global(p),
	.htmlbody > :global(h1),
	.htmlbody > :global(h2),
	.htmlbody > :global(h3),
	.htmlbody > :global(blockquote),
	.htmlbody > :global(ul li),
	.htmlbody > :global(ol li) {
		margin-left: 7%;
		margin-right: 7%;
	}

	.htmlbody > :global(blockquote p) {
		padding-top: 0.4rem;
		font-family: felt-tip-roman, sans-serif;
		font-weight: 700;
		font-size: 1.1rem;
		transform: rotate(-0.6deg);
		width:60%;
		padding-bottom: 2rem;

	}


	.htmlbody > :global(ul),
	.htmlbody > :global(ol) {
		margin-bottom: 1.5rem;
	}
	.htmlbody > :global(ul li),
	.htmlbody > :global(ol li) {
		font-style: normal;
		font-family: minion-pro, serif;
		font-size: 1rem;
		margin-bottom: 0.8rem;
		/* Add proper margin for list items */
		margin-left: calc(7% + 2.5rem);
		margin-right: 7%;
	}
	
	.htmlbody > :global(ul li:last-child),
	.htmlbody > :global(ol li:last-child) {
		margin-bottom: 0;
	}

	.htmlbody > :global(* img) {
		max-width: 100%;
		height: auto;
		margin: 0 auto;
		border-radius: 0.2rem;
		display: block;
	}

	:global(.text7) {
		margin-left: 7%;
		margin-right: 7%;
	}
	.htmlbody > :global(h2) {
		text-align: center;
		padding-top: 0rem;
	}
	.htmlbody > :global(h3) {
		padding-top: 3rem;
		margin-bottom: -0.75rem;
	}
	
	@media (min-width: 600px) {
		.htmlbody > :global(p),
		.htmlbody > :global(ul li),
		.htmlbody > :global(ol li) {
			font-size: 1.3rem;
		}
	}
</style>
