<script>
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
	<script
		data-name="BMC-Widget"
		data-cfasync="false"
		src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
		data-id="alfvar"
		data-description="Support me on Buy me a coffee!"
		data-message=""
		data-color="#26B0A1"
		data-position="Right"
		data-x_margin="16"
		data-y_margin="16">
	</script>

	<link rel="stylesheet" href="https://use.typekit.net/imz3ygs.css" />
</svelte:head>

<page-wrapper>
	<header>
		<Header />
	</header>

	<main>
		<slot />
		<footer>
			<div>
				<a class="smalltext" href="https://alfvar.gumroad.com/">Gumroad</a>
				<a class="smalltext" href="https://www.linkedin.com/in/alfvar-arvidsson-43388b226/"
					>Linkedin</a
				>
			</div>
			<p class="smalltext">Website design and content © 2022 Alfvar Arvidsson</p>
		</footer>
	</main>
</page-wrapper>

<style>
	header {
		margin: auto;
		height: 100%;
	}
	main {
		margin: 1rem;
		height: fit-content;
		margin-top: 3rem;
	}

	:global(.wrapper) {
		padding: 1.5rem 2rem;
		margin: 1.75rem auto 0.5rem;
		margin-top: 0;
		background-color: #eee;
		border-radius: 0.1em;
	}
	:global(p) {
		color: #333;
		font-family: minion-pro, serif;
		font-style: normal;
		font-size: 1.3rem;
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
		font-size: 3rem;
		margin: 0;
		letter-spacing: -1px;
	}

	:global(h3) {
		font-family: forma-djr-text, sans-serif;
		font-weight: 700;
		font-size: 1.7rem;
		margin: 0;
		line-height: 0.01;

		font-style: normal;
	}

	:global(h4) {
		font-family: forma-djr-text, sans-serif;
		font-weight: 400;
		font-style: normal;
		text-align: center;
		margin: 0;
		color: #333;
		box-sizing: border-box;
	}

	:global(.subtext) {
		color: #555;
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

	:global(a) {
		font-family: forma-djr-text, sans-serif;
		font-weight: 400;
		font-style: normal;
		color: black;
		text-decoration: none;
		list-style-type: none;
	}

	:global(.smalltext) {
		font-size: 1rem;
		color: #333;
	}

	:global(.active) {
		text-decoration: underline;
	}

	:global(.divider) {
		width: 100%;
		height: 1.5px;
		margin: 2rem auto;
		background-color: #333;
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-top: 1.5rem;
	}

	footer a {
		padding-right: 1rem;
		color: #333;
	}

	@media (min-width: 1200px) {
		page-wrapper {
			display: flex;
			height: fit-content;
			overflow: clip;
			align-items: flex-start;
		}
		:global(.wrapper) {
			margin: 1.75rem 0rem 0.5rem 0rem;
		}

		:global(.text7) {
			margin-left: 7%;
			margin-right: 7%;
		}

		:global(.text25) {
			margin-left: 20%;
			margin-right: 20%;
		}

		header {
			margin: 0 4rem;
			margin-bottom: 0;
			position: sticky;
			top: 0;
		}

		main {
			width: 100%;
			margin-right: 4rem;
		}

		footer {
			flex-direction: row;
			width:100%;
			margin: 0rem 3rem 0.5rem 0rem;
		}
	}
</style>
