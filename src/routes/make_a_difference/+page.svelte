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

	<div class="maintext">
		<div class="text text25">
			<h3>Background</h3>

			<p class="text longtext">
				The client for this project was HighFive, an independent growth department of Halmstad
				municipality in Sweden. Their response to the invasion was quick, so this project was very
				relevant to current events. Despite this, the implications could go way further than this
				(hopefully) temporary use case. HighFive wanted to create a platform where people could find
				ways to help, and organizations could find people to help them. This would happen through
				requests for items and skills, and individuals would fulfill them. A few initial questions
				immediately came to mind regarding this concept:
			</p>
		</div>
		<div class="text text25">
			<ul class="handwriting">
				<li class="handwriting">Why doesn't this service exist?</li>
				<li class="handwriting">What do the humanitarian organizations want?</li>
				<li class="handwriting">What do the helpers want?</li>
			</ul>
		</div>

		<div class="text text25">
			<h3 class="handwriting sidetext"><aside>Week 1</aside></h3>

			<h3>Making sense of things</h3>

			<p>
				Following some desktop research, we learned that most humanitarian organizations actually
				contributed in other countries, rather than aiding Swedish refugees when they have arrived
				here. Since money is relatively easy to move, individuals didn't receive the opportunity to
				contribute with other things. Though the question remained, why should all these people who
				were willing to contribute go unappreciated?
			</p>
			<p>
				Since the brief was rather loosely defined, we decided to discuss a more defined problem
				specification together with the client. We discussed what an unique value proposition would
				be and compared the concept to existing services. From this we concluded that the concept
				shouldn't be constrained to Halmstad county.
			</p>
			<p>
				The goal as now clearly defined. We wanted to create a platform that would <span
					class="underline">make it easier</span
				>
				for humanitarian organizations <span class="underline">to share help requests</span> and for
				people to fulfill them. It was also important that the platform would make it easier for people
				to find out what they could do to help.
			</p>
			<p>
				Further desktop research ensured we had a good understanding of the process of aiding
				refugees and the stakeholders involved. This made it clear that we needed to focus on
				specific touchpoints in the process, since several organizations are involved in the
				process.
			</p>
			<p>
				We also published an online survey to grasp the public's attitude towards aiding refugees,
				which we successfully collected. This data didn't provide any new insights, but we still
				learned what not to pursue further. All data gathering still leads somewhere.
			</p>
			<h3 class="handwriting sidetext">Week 2</h3>
			<h3>Identifying stakeholders</h3>
			<p>
				Since the more obvious stakeholders of the concept had different needs and interests, we
				decided to make maps of their journeys toward a successfully executed activity or donation.
			</p>
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
	.maintext {
		margin-top: 6rem;
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
