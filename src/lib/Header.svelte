<script>
	import { onMount } from 'svelte';

	import { page } from '$app/stores';

	$: currentPage = $page.url.pathname; 

	const menus = [
		{
			name: 'Work',
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
	<h1 class="logo">alfvar</h1>
	<h4>is studying a Digital Design master at Chalmers</h4>
	<div class="divider" />
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
		width: 15rem;
	}
	.topnav li {
		font-size: 1.2em;
		font-weight: 700;
		padding: 0.1em 0.5em;
		margin: auto;
		text-align: center;
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
			width: fit-content;
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
