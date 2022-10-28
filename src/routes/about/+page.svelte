<script>
	import selfie from '$lib/img/selfie.png';
</script>

<div class="wrapper">
	<h2 class="header">Nice to meet you!</h2>

	<div style="display:flex; ">
		<p>
			My name is Alfvar Arvidsson. I'm a budding UX designer currently doing my bachelor's degree at
			Halmstad University. I'm interested in service design, UI design, and UX research, to name a
			few things. You can e-mail me at <a
				style="display:block, padding:1rem;"
				href="mailto:hello@alfvar.com"
			>
				hello@alfvar.com
			</a>
			if you want to get in touch.

			<br />
			<br />

			I've barely ever found anything that doesn't capture my interest. I'll tell you more things here when the website is finished!
		</p>

		<img src={selfie} alt="Alfvar" class="drawing" />
	</div>
</div>

<style>
	a {
		text-decoration: none;
		background-color: white;
		border-color: #333;
		color: #333;
		border-style: solid;
		border-width: 1px;
		border-radius: 0.2rem;
	}

	.drawing {
		width: 12vw;
		height: 20vw;
		border-radius: 50%;
		margin-right: -1rem;
	}
	@media (min-width: 1200px) {
		.drawing {
			width: 15rem;
			height: 20rem;
			margin-left: -2rem;
			margin-right: -2rem;
		}
	}
</style>
