<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	$: currentPage = $page.url.pathname; 

	const menus = [
		{
			name: 'Design Work',
			path: '/work'
		},
		{
			name: 'Visuals',
			path: '/visuals'
		},
		{
			name: 'About',
			path: '/about'
		}
	];
</script>

<div class="navbar-wrapper">
	<a href="/work"><h1 class="logo">alfvar</h1></a>
	<h4>is looking for opportunities within interaction design</h4>
	<div class="divider"> </div>
	<ul class="topnav">
		{#each menus as { path, name }}
			<li>
				<a
					data-sveltekit-prefetch
					style="font-weight:bold"
					class:active={path !== '/' ? currentPage.match(path) : path === currentPage}
					href={path}
					>{name}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.navbar-wrapper {
		text-align: center;
		margin: auto;
	}
	.logo {
		margin: auto;
		font-size: 32vw;
		margin-top: -0.4rem;
		margin-bottom: -1rem;
		display: block;
		color:black;
	}

	.divider {
		margin: 0.5em 0;
		width: 100%;
	}
	.topnav {
		display: flex;
		margin: 0 auto;
		padding: 0;
		list-style: none;
		width: fit-content;
		justify-content: center;
	}
	.topnav li {
		font-size: 1.2em;
		font-weight: 700;
		padding: 0.1em 0.5em;
		margin: auto;
		text-align: center;
	}
	
	a {
		font-family: forma-djr-text, sans-serif;
		font-weight: 400;
		font-style: normal;
		color: black;
		text-decoration: none;
		list-style-type: none;
	}

	.active {
		text-decoration: underline;
	}

	@media (min-width: 400px) {
		.logo {
			font-size: 8rem;
			display: block;
		}
	}

	@media (min-width: 1200px) {
		.navbar-wrapper {
			height: 100vh;
		}

		.topnav {
			display: block;
			margin: 4em auto;
		}
		.topnav li {
			margin: 1.5em;
			font-size: 1.5em;
		}

		.divider {
			display: none;
		}
	}
</style>
