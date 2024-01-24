<script>
	import { cards } from '../stores.js';
</script>

{#each $cards as item}
	<div class="wrapper">
		<h2>{item.title}</h2>
		<p>{item.description}</p>
		<a href={item.url}>Read more →</a>
	</div>
{/each}

<style>
	div {
		padding: 1.5rem 0rem;
		background-color: aqua;

	}
</style>