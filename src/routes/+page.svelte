<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>HZ Planner</title>
		<style>
			/* CSS styles embedded in the <style> tag */
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			body {
				font-family: Arial, sans-serif;
				background-color: #f0f5f9; /* Light background color */
				display: flex;
				flex-direction: column;
				min-height: 100vh; /* Make sure the body covers the entire viewport height */
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
				flex-wrap: wrap; /* Enable wrapping of cards */
				justify-content: center; /* Center cards horizontally */
				gap: 20px; /* Gap between cards */
			}

			.welcome-message {
				width: 100%;
				text-align: center;
				font-size: 24px;
				color: #333333;
				margin-bottom: 20px;
			}
			.logo-container {
				display: flex;
				justify-content: center;
				margin-bottom: 20px; /* Adjust margin as needed */
			}

			.logo-container img {
				max-width: 50%; /* Ensure the logo doesn't exceed its container */
				height: auto;
			}

			.cards-section {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				gap: 20px; /* Space between cards */
			}

			.card {
				background-color: #ffffff;
				border-radius: 8px;
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
				padding: 20px;
				width: calc(33.33% - 20px); /* Three cards in a row with a 20px gap */
				text-align: center;
				margin-bottom: 20px; /* Space between rows */
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
	</head>

	<body>
		<header>
			<div class="navbar">
				<h1>HZ Planner</h1>
				<ul>
					<li><a href="/home">Home</a></li>
					<ul><a class="about" href="/about">About</a></ul>
					<!-- <li><a href="/register">Register</a></li> -->
				</ul>
			</div>
		</header>

		<main>
			<div class="welcome-message">
				<p>Welcome to the HZ Planner for first year ICT students at the HZ!</p>
				<p>Explore the pages of our book below:</p>
			</div>
			<!-- Logo section -->
			<div class="logo-container">
				<img src="logo.jpg" alt="HZ Planner Logo" />
			</div>
			<!-- Cards section -->
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

			<section class="card">
				<h2>Card 6</h2>
				<p>Content for Card 6...</p>
			</section>

			<section class="card">
				<h2>Card 7</h2>
				<p>Content for Card 7...</p>
			</section>

			<section class="card">
				<h2>Card 8</h2>
				<p>Content for Card 8...</p>
			</section>

			<section class="card">
				<h2>Card 9</h2>
				<p>Content for Card 9...</p>
			</section>
        </div>
			<footer>
				<!-- Footer content -->
				<p>&copy; 2023 HZ Planner. All rights reserved.</p>
			</footer>
		</main></body>
</html>
