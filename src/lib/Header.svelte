<script>
	import { page } from '$app/stores';

	import { onMount } from 'svelte';

	let links = null;

	onMount(() => {
		links = document.querySelectorAll('.topnav a');
	});

	$: if (links != null) {
		links.forEach((link) => {
			if (link.getAttribute('id') === $page.url.pathname) {
				link.classList.add('active');
			} else {
				link.classList.remove('active');
			}
		});
	}
</script>


<div class="navbar-wrapper">
	<h1 class="logo">alfvar</h1>
	<h4>is studying Digital Design and Innovation in Halmstad</h4>
	<div class="divider" />
	<ul class="topnav">
		<a id="/" href="/"><li>Portfolio</li></a>
		<a id="/artwork" href="artwork"><li>Artwork</li></a>
		<a id="/about" href="about"><li>About</li></a>
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
		width: 100%;
		height: 1.75px;
		border-bottom-style: solid;
		border-color: #333;

		margin: 0.5em 0;
	}
	.topnav {
		display: flex;
		justify-content: center;
		margin: 0;
		padding: 0;
		list-style: none;
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
