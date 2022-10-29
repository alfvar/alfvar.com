<script>
	import selfie from '$lib/img/selfie.png';
</script>

<div class="wrapper">
	<h2 class="header">Nice to meet you!</h2>

	<div style="display:flex; ">
		<p>
			My name is Alfvar Arvidsson. I'm a budding <b>UX designer</b> currently doing my bachelor's
			degree at Halmstad University. I'm interested in
			<b>service design, UI design, and UX research,</b>
			to name a few things. You can e-mail me at
			<a href="mailto:hello@alfvar.com" class="p"> hello@alfvar.com </a>
			if you want to get in touch.
			<br />
			<br />
			I love working in teams. I was the guy who went to school on the days when I was finished with my assignment,
			just to hang with my classmates. I tend to get visions of ideas quickly but I always make sure the
			team is on board and understands what I mean before proceeding with anything.
			<br />
			<br />
			I've barely ever found anything that doesn't capture my interest (except sports!). I grew up playing with a digital
			camcorder and Windows Movie Maker, and I focused on different forms of media production all through
			high school.
		</p>

		<img src={selfie} alt="Alfvar" class="drawing" />
	</div>
</div>

<style>
	.drawing {
		margin-top:-0.5rem;
		width: 12rem;
		height: 20rem;
		border-radius: 50%;
		margin-right: -1rem;
	}
</style>
