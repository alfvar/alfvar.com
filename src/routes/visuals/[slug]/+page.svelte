<script>
	import { page } from '$app/stores';
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	let slug = $page.params.slug;

	let post = {};
	onMount(async () => {
		const result = await pb.collection('artwork').getFirstListItem(`slug="${slug}"`);
		post = result;
	});
</script>

<div class="wrapper">
	<div class="content">
		<img
			src="https://api.alfvar.com/api/files/{post.collectionId}/{post.id}/{post.image}"
			alt={post.title}
		/>
		<h3>"{post.title}"</h3>
	</div>
</div>

<style>
	.wrapper {
		padding: 0rem;
        width:fit-content;
		

	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		width: 100%;
		max-width: 100rem;
	}

	h3 {
		margin: 1rem 0rem;
	}
	img {
		width: 100%;
        height:100%;
        object-fit:contain;

	}

	@media (min-width: 768px) {
		.content {
			align-items: center;
		}
		.wrapper {
			margin:auto;
            width:80vh;
			margin-bottom: 2rem;

		}

	}
</style>
