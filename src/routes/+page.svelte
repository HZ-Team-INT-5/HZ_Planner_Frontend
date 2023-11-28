<head>
	<meta charset="UTF-8" />
	<title>HZ Planner</title>
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

		main {
			flex: 1;
			padding: 20px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 20px;
		}

		.welcome-message {
			width: 100%;
			text-align: center;
			font-size: 24px;
			color: #333333;
			margin-bottom: -150px;
		}
		.logo-container {
			display: flex;
			justify-content: center;
			margin-bottom: 20px;
		}

		.logo-container img {
			max-width: 100%;
			height: auto;
		}

		.cards-section {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 20px;
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

		footer {
			background-color: #3498db;
			color: #ffffff;
			text-align: center;
			padding: 15px;
			width: 100%;
			height: 50px;
		}

		.hidden {
			display: none;
		}
	</style>
</head>

<body>
	<main>
		<div class="welcome-message">
			<p>Welcome to the HZ Planner for first year ICT students at the HZ!</p>
			<p>Explore the pages of our book below:</p>
		</div>
		<div class="logo-container">
			<img src="logo.jpg" alt="HZ Planner Logo" />
		</div>
		<div class="cards-section">
			<section class="card">
				<h2>Calendar</h2>
				<a class="calendar" href="/calendar">Calendar</a>
			</section>

			<section class="card">
				<h2>Course Overview</h2>
				<a class="courses" href="/courses">Course Overview</a>
			</section>

			<section class="card">
				<h2>Notes</h2>
				<a class="notes" href="/notes">Notes</a>
			</section>

			<section class="card">
				<h2>Floor Plan</h2>
				<a class="floorplan" href="/floorplan">Floor Plan</a>
			</section>

			<section class="card">
				<h2>Notifications</h2>
				<a class="notifications" href="/notifications">Notifications</a>
			</section>

			<section class="card, hidden">
				<h2>Card 6</h2>
				<p>Content for Card 6...</p>
			</section>

			<section class="card, hidden">
				<h2>Card 7</h2>
				<p>Content for Card 7...</p>
			</section>

			<section class="card, hidden">
				<h2>Card 8</h2>
				<p>Content for Card 8...</p>
			</section>

			<section class="card, hidden">
				<h2>Card 9</h2>
				<p>Content for Card 9...</p>
			</section>
		</div>
		<footer>
			<p>&copy; 2023 HZ Planner. All rights reserved.</p>
		</footer>
	</main></body
>
