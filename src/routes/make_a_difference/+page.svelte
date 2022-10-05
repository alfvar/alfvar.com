<script>
	import pic1 from '$lib/img/make_a_difference_1.png';
</script>

<div class="wrapper">
	<div class="dark">
		<h2 class="white">Enabling for aid</h2>

		<p class="text text7 textlarge white">
			When Russia invaded Ukraine in the spring of 2022, everyone wanted to help, but the logistics
			of humanitarian organizations only supported donations of money. <br /><br />Individuals who
			wanted to contribute with items or their engagement had nowhere to turn to. Why should all
			kindness go unappreciated?
		</p>
		<br />

		<h4 class="text text7 subtext">
			This is a Design Studio project. That means it was carried through during class for Halmstad
			University. The client is still real and this project evolved organically with the client.
		</h4>
		<br />
		<h4 class="subtext handwriting">time: 5 weeks | team: 6 people</h4>
	</div>
	<div />
	<div class="text7">
		<img
			src={pic1}
			alt="A screenshot showing the landing page for the finished concept."
			class="picture text7"
		/>
		<p class="text text25 subtext smalltext">
			The landing page for the concept. Text elements have been translated from swedish.
		</p>
	</div>

	<div class="maintext segment">
		<div class="text text25 ">
			<h3>Background</h3>

			<p class="text longtext">
				The client for this project was HighFive, an independent growth department of Halmstad
				municipality in Sweden. They wanted to create a platform where people could find ways to
				help, and organizations could find people to help them. This would happen through requests
				for items and skills, and individuals would fulfill them. A few initial questions
				immediately came to mind regarding this concept:
			</p>
			<ul class="handwriting">
				<li class="handwriting">Why doesn't this service exist?</li>
				<li class="handwriting">What do the humanitarian organizations want?</li>
				<li class="handwriting">What do the helpers want?</li>
			</ul>
		</div>
		<div class="segment">
			<div class="text text25">
				<h3 class="handwriting sidetext"><aside>Week 1</aside></h3>

				<h3>Making sense of things</h3>

				<p>
					Following some desktop research, we learned that most humanitarian organizations actually
					contributed in other countries, rather than aiding Swedish refugees when they have arrived
					here. This was the main reason why only monetary donations were accepted.
				</p>

				<div class="text">
					<ul class="handwriting">
						<li
							class="handwriting"
							style="  text-decoration: line-through;
			"
						>
							Why doesn't this service exist?
						</li>
						<li class="handwriting">What do the humanitarian organizations want?</li>
						<li class="handwriting">What do the helpers want?</li>
					</ul>
				</div>

				<p>
					At this point I called up the swedish Red Cross organization to see what type of
					activities they were carrying out locally in Sweden. Here we learned a valuable lesson:
					humanitarian organizations are <b>busy.</b> The person on the other end asked us to e-mail
					our questions, and unfortunately we didn't get a response during the five weeks of the project.
					However, the phone call also gave us the contact details to an employee of Halmstad municipality
					who handled similar cases. There we had greater success, and we were able to get insights on
					how refugees are processed in Sweden and what needs they might have. Progress!
				</p>
			</div>
			<p class="text7 handwriting" style="width:50%; text-align:right; margin-left:auto;">
				In a longer project and with better planning we could have asked the Red Cross for a phone
				call ahead of time!
			</p>

			<div class="text25 segment">
				<ul class="handwriting">
					<li
						class="handwriting"
						style="  text-decoration: line-through;
		"
					>
						Why doesn't this service exist?
					</li>
					<li class="handwriting" style="text-decoration: line-through;">
						What do the humanitarian organizations want?
					</li>
					<li class="handwriting">What do the helpers want?</li>
				</ul>
			</div>
			<div class="text25 segment" />
		</div>
	</div>
</div>

<style>
	.wrapper {
		padding: 0;
	}
	.white {
		color: #fff;
	}

	.segment {
		padding-top: 8rem;
	}

	.dark {
		background-color: rgb(20, 20, 20);
		padding: 4rem 0rem 4rem 0rem;
		border-radius: 0.1em;
	}
	.picture {
		display: block;
		object-fit: cover;
		width: 100%;
		margin: 4rem auto 0;
		border-radius: 0.2em;
		box-shadow: 0 0 0.5em 0.1em rgba(0, 0, 0, 0.1);
	}
	li {
		font-style: normal;
		font-weight: 700;
		font-size: 1.1rem;
		padding-top: 0.4rem;
	}
	.vertline {
		width: 0.15rem;
		background-color: rgb(100, 100, 100);
		height: 20rem;
		margin: 0 1rem;
	}

	.textlarge {
		font-size: 1.5rem;
		text-align: center;
	}

	h2 {
		text-align: center;
		padding-top: 2rem;
	}

	h3 {
		padding-top: 1rem;
	}

	.h4 {
		font-family: forma-djr-text, sans-serif;
		font-weight: 400;
		font-style: normal;
	}
</style>
