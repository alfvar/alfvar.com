<script>
	let carouselID = 1;

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.025);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

	function delay(milliseconds) {
		return new Promise((resolve) => {
			setTimeout(resolve, milliseconds);
		});
	}

	async function carousel() {
		for (let i = 1; i <= 4; i++) {
			carouselID = i;

			await delay(2000);
			carouselID = 0;
			await delay(1000);
			if (i >= 4) {
				i = 0;
				carousel();
			}
		}
	}

	carousel();
</script>

<div class="wrapper">
	<div style="display: flex; justify-content: flex-start;">
		<h2 style="margin-right:0.5rem;">I like</h2>

		{#if carouselID == 1}
			<h2 transition:typewriter>graphic design✨</h2>
		{/if}

		{#if carouselID == 2}
			<h2 transition:typewriter>typography</h2>
		{/if}

		{#if carouselID == 3}
			<h2 transition:typewriter>🍳cast iron cooking</h2>
		{/if}

		{#if carouselID == 4}
			<h2 transition:typewriter>music production🎶</h2>
		{/if}
	</div>

	<p>Actually, I think it's easier to list the things that don't interest me:<br /> 1. Sports</p>
	<p>My name is Alfvar Arvidsson, and I currently live in Halmstad in Sweden.</p>
</div>
