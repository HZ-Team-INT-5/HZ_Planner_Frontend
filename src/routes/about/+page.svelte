<body>
	<header>
		<div class="navbar">
			<h1>HZ Planner</h1>
			<ul>
				<li><a href="/">Home</a></li>
				<ul><a class="about" href="/about">About</a></ul>
			</ul>
		</div>
	</header>

	<main>
			<div class="logo">
				<img src="logo.jpg" alt="HZ Planner Logo" />
			</div>
		<div class="card-section">
			<div class="card top-card">
				<h1>HZ Planner: Your Ultimate First-Year Survival Guide</h1>
				<p>
					Embark on your academic journey with confidence! HZ Planner is more than just a survival
					guide; it's your indispensable companion to thrive in your first year at HZ University of
					Applied Sciences.
				</p>
			</div>
			<div class="bottom-cards">
				<div class="card left-card">
					<h2>What's Inside: Your Blueprint for Success</h2>
					<p>
						Comprehensive Planner: Stay on top of your schedule with our meticulously designed
						planner, ensuring you never miss a deadline or important event. Seamlessly integrated
						with the school's API, the digital version syncs effortlessly with your daily routine.
					</p>
					<br />
					<p>
						City Hotspots: Discover the pulse of the city surrounding your university. From cozy
						cafes to must-visit landmarks, we've curated a list of hotspots to make your university
						life memorable beyond the classroom.
					</p>
					<br />
					<p>
						Wisdom from previous students: Benefit from the experiences of those who have walked the
						same halls. Gain invaluable insights and practical advice from previous students who've
						conquered the challenges of the first year
					</p>
					<br />
					<p>
						Course & Teacher Information: Navigate your academic terrain with ease. Get a
						comprehensive overview of your courses and insights into the teaching staff, ensuring
						you're well-prepared for every class.
					</p>
				</div>

				<div class="card right-card">
					<h2>Digital Version: Your Personalized Academic Assistant</h2>
					<p>
						Experience a new level of organization with our digital version. Linked directly to the
						school's API, our planner becomes your personalized academic assistant:
					</p>
					<br />
					<p>
						Real-time Notifications: Receive timely alerts via email about upcoming events,
						deadlines, and essential university updates, ensuring you're always in the know.
					</p>
					<br />
					<p>
						Seamless Integration: Effortlessly sync your digital planner with the school's systems,
						ensuring accuracy and consistency in your academic schedule.
					</p>
					<br />
					HZ planner is not just a guide; it's your roadmap to a successful first year. Let the journey
					begin!
					<br />
					Empower yourself with knowledge, conquer challenges, and make your mark at HZ University of
					Applied Sciences.
				</div>
			</div>
		</div>
		<footer>
			<p>&copy; 2023 HZ Planner. All rights reserved.</p>
		</footer>
	</main></body
>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: Arial, sans-serif;
		background-color: #f0f5f9;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		margin: 0;
	}

	header {
		background-color: #3498db;
		color: #ffffff;
		padding: 20px;
		text-align: center;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navbar ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
	}

	.navbar li {
		margin-right: 20px;
	}

	.navbar a {
		text-decoration: none;
		color: #ffffff;
	}

	main {
		flex: 1;
		padding: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}

  .logo {
  width: 25%;
  height: 25%;
}

	.card-section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card {
		background-color: #ffffff;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;
		width: calc(33.33% - 20px);
		text-align: center;
		margin-bottom: 20px;
	}

	.top-card {
		width: 100%;
		margin-bottom: 20px;
	}

	.bottom-cards {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.left-card,
	.right-card {
		width: calc(50% - 10px);
	}

	@media screen and (max-width: 768px) {
		.bottom-cards {
			flex-direction: column;
			align-items: center;
		}

		.left-card,
		.right-card {
			width: 100%;
			margin-bottom: 20px;
		}
	}

	footer {
		background-color: #3498db;
		color: #ffffff;
		text-align: center;
		padding: 15px;
		width: 100%;
		height: 50px;
	}
</style>
