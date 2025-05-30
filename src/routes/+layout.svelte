<script>
	import Header from '$lib/Header.svelte';
	import { isLoading } from '../stores.js'; // import the new store
</script>

<svelte:head>
	<title>Alfvar</title>
	<meta name="viewport" content="width=device-width, initial-scale=1"> 
	<link rel="stylesheet" href="https://use.typekit.net/imz3ygs.css" />
</svelte:head>

<page-wrapper>
	<header>
		<Header />
	</header>
	<div class="bg"></div>

	<main>
		<slot />
		{#if $isLoading}
			<footer class="hidden"></footer>
		{:else}
			<footer class={!$isLoading ? 'animate-appear' : ''}>
				<div>
					<a class="linkedin" href="https://www.linkedin.com/in/alfvar-arvidsson-43388b226/" aria-label="LinkedIn Profile"></a>

					<a class="github" href="https://github.com/alfvar" aria-label="GitHub Profile"></a>

					<a class="smalltext" href="mailto:hello@alfvar.com">hello@alfvar.com</a>
				</div>
				<div><p class="smalltext">Website design and content © 2025 Alfvar Arvidsson</p></div>
			</footer>
		{/if}
	</main>
</page-wrapper>

<style>
	:global(*), :global(*::before), :global(*::after) {
		box-sizing: border-box;
	}


	:global(.animate-right) {
		visibility: hidden; /* initially hidden */
		animation: slide-in-right 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	:global(.animate-appear) {
		visibility: hidden; /* initially hidden */
		animation: appear 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
		overflow: hidden;
	}

	@keyframes slide-in-right {
		0% {
			transform: translateX(100%);
			opacity: 0;
			visibility: visible; /* visible when animation starts */
		}

		100% {
			transform: translateX(0);
			opacity: 1;
			visibility: visible; /* remain visible after animation ends */
		}
	}

	@keyframes appear {
		0% {
			opacity: 0;
			visibility: visible; /* visible when animation starts */
		}

		100% {
			opacity: 1;
			visibility: visible; /* remain visible after animation ends */
		}
	}

	:root {
		--theme-color: #ff6865;
		--primary-text-color: #000;
		--secondary-text-color: #333;
		--tertiary-text-color: #555;
	}
	header {
		margin: auto;
		height: 100%;
	}
	main {
		margin: 0rem;
		height: fit-content;
		margin-top: 1.75rem;
	}

	.bg {
		position: fixed;
		top: -120rem;
		left: -89.6rem;
		width: 100rem;
		height: 200rem;
		background-color: var(--theme-color);
		border-radius: 50%;
		z-index: -1;
	}

	:global(.wrapper) {
		padding: 1.25rem 2rem;
		margin: 0 0 0.5rem;
		backdrop-filter: blur(40px);
		-webkit-backdrop-filter: blur(40px);
		border-style: solid;
		border-color: rgba(255, 255, 255, 0.1);
		border-width: 0.2rem;
		border-radius: 0.2em;
		position: relative;
		max-width: 80rem;
		box-shadow: 0 0 0.5rem 0.1em rgba(0, 0, 0, 0.09);
		width: 100%;
		overflow-x: hidden;
		box-sizing: border-box;
	}

	:global(.picture) {
		display: block;
		object-fit: cover;
		width: 100%;
		margin: 4rem auto 0;
		border-radius: 0.2em;
		box-shadow: 0 0 0.5em 0.1em rgba(0, 0, 0, 0.1);
	}

	:global(.drawing) {
		display: block;
		object-fit: cover;
		width: 100%;
	}

	:global(p, .p) {
		color: var(--secondary-text-color);
		font-family: minion-pro, serif;
		font-style: normal;
		font-size: 1rem;
	}
	:global(ul),
	:global(ol) {
		padding-left: 1.5rem;
		margin-bottom: 1.5rem;
	}

	:global(ul li),
	:global(ol li) {
		color: var(--secondary-text-color);
		font-family: minion-pro, serif;
		font-style: normal;
		font-size: 1rem;
		margin-bottom: 0.8rem;
	}
	
	:global(ul li:last-child),
	:global(ol li:last-child) {
		margin-bottom: 0;
	}

	:global(h1) {
		color: var(--theme-color);
		font-size: 4rem;
		font-family: forma-djr-display, sans-serif;
		font-weight: 900;
		font-style: normal;
		text-align: center;
	}
	:global(h2) {
		font-family: forma-djr-text, sans-serif;
		font-weight: 700;
		font-style: normal;
		font-size: 2rem;
		margin: 0;
		letter-spacing: -1px;
		line-height: 1.9rem;
	}
	:global(h3) {
		font-family: forma-djr-text, sans-serif;
		font-weight: 700;
		font-size: 1.7rem;
		margin: 0;
		font-style: normal;
	}
	:global(h4) {
		font-family: forma-djr-text, sans-serif;
		font-weight: 400;
		font-style: normal;
		text-align: center;
		margin: 0;
		color: var(--secondary-text-color);
		box-sizing: border-box;
	}
	:global(.subtext) {
		color: var(--tertiary-text-color);
		font-style: italic;
	}
	:global(.text7) {
		margin-left: 7%;
		margin-right: 7%;
	}
	:global(.text25) {
		margin-left: 7%;
		margin-right: 7%;
	}

	:global(.smalltext) {
		font-size: 1rem;
		color: var(--secondary-text-color);
	}

	:global(.divider) {
		width: 100%;
		height: 0.2rem;
		margin: 2rem auto;
		color: var(--secondary-text-color);
	}

	:global(.loading) {
		background-color: white;
		color: white;
		background-size: 100% 100%;
		border-radius: 0.2rem;
	}

	:global(.hidden) {
		display: none;
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
		padding-top: 0.5rem;
		max-width: 80rem;
	}
	footer a {
		color: var(--secondary-text-color);
		background-position: center, center;
		background-repeat: no-repeat, no-repeat;
		background-size: contain, contain;
		padding: 0.75rem;
		margin-right: 1rem;

		font-family: forma-djr-text, sans-serif;
		font-weight: 400;
		font-style: normal;
		text-decoration: none;
		list-style-type: none;
	}

	footer .smalltext {
		padding: 0;
	}

	footer .linkedin {
		background-image: url('$lib/img/ico/linkedin.svg');
		background-size: contain;
	}

	footer .github {
		background-image: url('$lib/img/ico/github.svg');
		background-size: contain;
	}

	:global(.underline) {
		text-decoration: underline;
	}

	:global(.sidetext) {
		transform: rotate(-90deg);
		display: inline;
		margin-top: 2rem;
		margin-left: -3.4rem;
		height: 1rem;
		float: left;
	}

	:global(aside, .aside) {
		text-align: right;
		display: inline;
		float: right;
		position: relative;
		max-width: 75vw;
		font-size: 16px;
	}

	:global(.maintext) {
		position: relative;
	}

	:global(.handwriting) {
		font-family: felt-tip-roman, sans-serif;
		font-weight: 700;
		font-size: 1.1rem;
	}

	@media (min-width: 600px) {
		:global(.sidetext) {
			margin-left: -8vw;
		}
		:global(p, .p) {
			font-size: 1.3rem;
		}

		:global(ul li),
		:global(ol li) {
			font-size: 1.3rem;
		}

		:global(h2) {
			font-size: 3rem;
			line-height: 3.5rem;

		}
	}

	@media (min-width: 705px) {
		footer {
			flex-direction: row;
		}

		main {
			width: 88%;
			margin: auto;
			margin-top: 1.75rem;
		}
	}

	@media (min-width: 1200px) {
		page-wrapper {
			display: flex;
			height: fit-content;
			align-items: flex-start;
		}

		.bg {
			top: -130rem;
			left: -58rem;
			width: 100rem;
			height: 200rem;
		}
		:global(.wrapper) {
			margin: 0 0rem 0.5rem 0rem;
		}
		:global(.sidetext) {
			margin-left: -5rem;
			width: 32%;
			transform: rotate(0deg);
			text-align: center;
			margin-top: 0rem;
			margin-left: -35%;
		}

		header {
			margin: 0 4rem;
			margin-bottom: 0;
			position: sticky;
			top: 0;
		}

		main {
			margin-top: 4.75rem;
			width: 100%;
			margin-right: 4rem;
		}

		footer {
			flex-direction: row;
			width: 100%;
			margin: 0rem 3rem 0.5rem 0rem;
		}
	}

	@media print {
		:global(.animate-appear),
		:global(.animate-right) {
			visibility: visible !important;
			animation: none !important;
			opacity: 1 !important;
		}
		:global(.hidden) {
			display: block !important;
			visibility: visible !important;
		}
		.bg {
			display: none !important;
		}
	}
</style>
