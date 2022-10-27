<script>
	import art1 from '$lib/img/1.jpg';
	import art2 from '$lib/img/2.jpg';
	import art3 from '$lib/img/3.jpg';
	import art4 from '$lib/img/4.jpg';
</script>

<div class="wrapper">
	<h2>Visual</h2>
	<div class="container">
		<div class="box"><img src={art3} alt="art3" /></div>
		<div class="box"><img src={art1} alt="art1" /></div>
		<div class="box"><img src={art2} alt="art2" /></div>
		<div class="box"><img src={art4} alt="art4" /></div>
	</div>
</div>

<style>
	.container {
		margin: 0rem;
		display: flex;
		flex-wrap: wrap;
		margin: 0 -0.5rem;
	}

	.box {
		flex: 1 0 10rem;
		padding: 0.5em;
		justify-content: space-between;
	}

	.box img {
		width: 100%;
		height: 100%;
		box-shadow: 0 0 0.5em 0.1em rgba(0, 0, 0, 0.1);
	}
</style>
