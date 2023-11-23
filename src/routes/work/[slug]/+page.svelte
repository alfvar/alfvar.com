<script>
	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	import { isLoading } from '../../../stores.js';
	import uni from '$lib/img/ico/uni.svg';
	import timeframe from '$lib/img/ico/time.svg';
	import participants from '$lib/img/ico/2people.svg';

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
		<div>
			<p class="text text7 projectheader">
				{@html long_description}
			</p>
		</div>
		<div class="projectfeatures text7" style="padding-bottom: 0rem;">
			{#if post.institution != ''}
				<div class="project_property">
					<img src={uni} alt="University icon" style="width: 1rem; height: 1rem;" />
					<p class="smalltext">{post.institution}</p>
				</div>
			{:else}{/if}
			{#if post.project_timeframe != ''}
				<div class="project_property">
					<img src={timeframe} alt="Clock icon" style="width: 1rem; height: 1rem;" />
					<p class="smalltext">{post.project_timeframe}</p>
				</div>
			{:else}{/if}
			{#if post.participant_amount != ''}
				<div class="project_property">
					<img src={participants} alt="Icon with 2 people" style="width: 1rem; height: 1rem;" />
					<p class="smalltext">{post.participant_amount}</p>
				</div>
			{:else}{/if}
		</div>
		<div class="htmlbody" style="margin-top:4rem;">
			{@html body}
		</div>
	</div>
{/if}

<style>
	.wrapper {
		padding: 0;
		padding-top: 2rem;
	}

	.projectfeatures {
		padding-top: -2rem;
		display: flex;
		flex-direction: row;
		align-items: left;
		max-width: 80rem;
		gap: 1rem;
	}

	.project_property {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.3rem;
	}

	.project_property > * {
		color: #aaa;
		font-family: forma-djr-text, sans-serif;
		font-weight: 400;
		font-style: normal;
		text-align: center;
	}
	.htmlbody > :global(p),
	.htmlbody > :global(h1),
	.htmlbody > :global(h2),
	.htmlbody > :global(h3),
	.htmlbody > :global(blockquote),
	.htmlbody > :global(ul li) {
		margin-left: 7%;
		margin-right: 7%;
	}

	.htmlbody > :global(blockquote p) {
		padding-top: 0.4rem;
		font-family: felt-tip-roman, sans-serif;
		font-weight: 700;
		font-size: 1.1rem;
		transform: rotate(-0.6deg);
		width: 100%;
		padding-bottom: 2rem;
	}

	.htmlbody > :global(ul li) {
		font-style: normal;
		font-family: minion-pro, serif;
		font-style: normal;
		font-size: 1rem;
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
	h2 {
		text-align: center;
		padding-top: 2rem;
	}

	.htmlbody > :global(h3) {
		padding-top: 3rem;
		margin-bottom: -0.75rem;
	}

	@media (min-width: 800px) {
		.htmlbody > :global(blockquote p) {
			width: 60%;
		}
	}
</style>
