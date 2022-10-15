<script>
	import mkd_homepage from '$lib/img/mkd_homepage.png';
	import mkd_stakeholder from '$lib/img/mkd_stakeholder.png';
	import mkd_futurestate from '$lib/img/mkd_futurestate.png';
	import mkd_sitemaps from '$lib/img/mkd_sitemaps.png';
	import mkd_lofihomepage from '$lib/img/mkd_lofihomepage.png';

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
			src={mkd_homepage}
			alt="A screenshot showing the landing page for the finished concept."
			class="picture"
		/>
		<p class="text text25 subtext smalltext">
			The landing page for the concept. Text elements have been translated from swedish.
		</p>
	</div>

	<div class="segment">
		<div class="text text25 ">
			<h3>Background</h3>

			<p class="text longtext">
				The client for this project was HighFive, an independent growth department of Halmstad
				municipality in Sweden. They wanted to create a platform where people could find ways to
				help, and organizations could find people to help them. This would happen through requests
				for items and skills, and individuals would fulfill them.
			</p>
			<p>
				The idea for the project came from the idea that Ukranian refugees in Sweden put a new load
				on the refugee support systems, but the concept we developed can be generalized beyond this
				(hopefully!) temporary use case.
			</p>
		</div>
	</div>
	<div class="segment">
		<div class="text text25 ">
			<h3>My role</h3>
			<p>
				I was the project manager for this project, and I was responsible for time management and
				collaboration both with the client and internally. In Halmstad University's Design Studio
				projects, the team (usually 4-6 people) collaborate on all parts of the project, even though
				each member has a particular responsibility. In this case it means I was part of research,
				ideation, service design concept and UI design.
			</p>
		</div>
	</div>
	<div class="segment text text25">
		<h3 class="handwriting sidetext"><aside>Week 1</aside></h3>

		<h3>Let's research!</h3>

		<p>
			Since the team didn't have any experience with this topic, we decided to begin the project
			with some desktop research. Based on the initial brief we developed three questions that we
			were trying to answer:
		</p>
		<ul class="handwriting">
			<li class="handwriting">Why doesn't this service exist?</li>
			<li class="handwriting">What do the humanitarian organizations want?</li>
			<li class="handwriting">What do the helpers want?</li>
		</ul>
		<p>
			We learned about the goals of humanitarian organizations and how they differ from eachother.
			Most of them operated both in Sweden and in countries in need of aid. Signing up as a
			volunteer also meant similar but slightly different requirements. They usually included
			training that was specific to the organization, and a background check. 
		</p>
	</div>
	<div class="segment text text25">
		<h3>Diving deeper</h3>

		<p>
			At this point we prepared a semistrucutured interview guide, and I called up the swedish Red
			Cross organization to see what type of activities they were carrying out locally in Sweden.
			Here we learned a valuable lesson: humanitarian organizations are <b>busy.</b> The person on
			the other end asked us to e-mail our questions, and unfortunately we didn't get a response
			during the five weeks of the project. <br /> <br />

			However, the phone call also gave us the contact details to an employee of Halmstad
			municipality who handled similar cases. There we had greater success, and we were able to get
			insights on how refugees are processed in Sweden and what needs they might have. Progress!
		</p>
	</div>
	<aside class="text7 handwriting" style="width:50%;">
		In a longer project and with better planning we could have asked the Red Cross for a phone call
		ahead of time!
	</aside>
	<div class="text25 segment">
		<p>
			Further we wanted to clarify what relationship would be appropriate have to HighFive and the
			municipality. We also wanted what type of aid non-volunteers could consider, especially
			regarding activities since HighFive brought this up. For this we developed a survey, based on
			a few general questions we wanted to answer:
		</p>
		<ul class="handwriting">
			<li class="handwriting">
				(How) do people contribute to charity and humanitarian organizations?
			</li>
			<li class="handwriting">Would they rather participate or host activities, or neither?</li>
			<li class="handwriting">Is the municipality a part of this process?</li>
		</ul>
		<p>
			The survey was then was published on social media targeting the general public. The responses
			served as proof that there was a legitimate interest in helping humanitarian organizations.
			Further, slightly more than half of the respondents would rather participate than host
			activities themselves. As for the municipality, the respondents didn't see them playing a
			significant role in the process.
		</p>
	</div>
	<div class="text25 segment">
		<h3>
			A twist <aside class="handwriting">This service does exist!</aside>
		</h3>

		<p>
			After a strong start, we ran into a roadbump. Further iterating on our desktop research we
			found the website Volontärbyrån, or the Volunteer Bureau. Our service already existed. This
			was really disheartening to a few of our group members, who felt like this project work had
			lost its purpose. Though I tried to, I didn't have the authority to convince our group
			otherwise, so I called in a meeting with our class supervisor.
		</p>
	</div>
	<aside class="text7 handwriting" style="max-width:25%; margin-right:1rem;">
		Lesson: Good team spirit is absolutely <u>essential</u> to a good collaborative project.
	</aside>
	<div class="text25">
		<p>
			The supervisor gave us a few good pointers. We ended up using the Volontärbyrån service as a
			starting point for discussion with the client, to further specify what needs Volontärbyrån
			didn't meet, and developing those further. We then made an effort to not replicate parts of
			their service unless we could back it up with our own data. We mostly disregarded the
			Volontärbyrån service from this point forward.
		</p>
	</div>
	<div class="text25 segment">
		<h3 class="handwriting sidetext"><aside>Week 2</aside></h3>
		<h3>Making sense of things</h3>

		<p>
			After gathering data, we decided to use a service design approach to develop a model of the
			current state. We began by mapping out the stakeholders in the current process of integrating
			immigrants into society:
		</p>
	</div>
	<div class="text7">
		<img
			src={mkd_stakeholder}
			alt="A conceptual map of how the process of our conceptual service would work"
			class="drawing"
		/>
	</div>
	<div class="text25">
		<br /> <br />
		<p>
			Based on conversations with our contact at Halmstad municipality and our desktop research, we
			then modelled a journey map of sorts for the different stakeholders. Based on this we could
			see what stage of the process this crowdsourced aid concept could intervene:
		</p>
	</div>
	<div class="text7">
		<img
			src={mkd_futurestate}
			alt="A screenshot showing the landing page for the finished concept."
			class="drawing"
		/>
	</div>
	<div class="text25">
		<p class="subtext smalltext">
			This journey was based on arranging activities, but could be adapted for participation as
			well.
		</p>
	</div>

	<div class="text25 segment">
		<h3>Defining our concept</h3>
		<p>
			In the course each team participated in reoccurring critique sessions, where we would present
			what we had done so far and get feedback from the class. In defining our concept, we used
			these sessions to our advantage and got a lot of good feedback. Eventually we managed to
			define a feature set for our concept:
		</p>

		<ul class="p">
			<li>
				A platform that features different forms of aid requests from humanitarian organizations
			</li>
			<li>
				Different filters for opportunities aimed at item donators, helpers and certified volunteers
			</li>
			<li>A way for organizations to crowdsource labor for good causes</li>
		</ul>
		<p>This could then be used as a foundation for further development of the concept.</p>
	</div>
	<div class="text25">
		<h3 class="handwriting sidetext"><aside>Week 3</aside></h3>
		<br />
		<p>
			This broad feature set was further specified into a list of requirements. This formed the
			basis of flowcharts defining the action flow for each feature, which in turn was the
			foundation for a sitemap:
		</p>
	</div>

	<img src={mkd_sitemaps} alt="The sitemaps for all the pages in the concept." class="drawing" />
	<div class="text25">
		<p class="subtext text smalltext">
			The sitemap for our concept. Here all the actions for executing each feature were specified.
		</p>
	</div>
	<div class="text25 segment">
		<img src={mkd_lofihomepage} alt="The first iteration of the landing page for the concept." class="drawing" />

		</div>
		<div class="text25 segment">
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

	.drawing {
		display: block;
		object-fit: cover;
		width: 100%;
	}
	li {
		font-style: normal;
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
		margin-bottom: -0.75rem;
	}

	.h4 {
		font-family: forma-djr-text, sans-serif;
		font-weight: 400;
		font-style: normal;
	}
</style>
