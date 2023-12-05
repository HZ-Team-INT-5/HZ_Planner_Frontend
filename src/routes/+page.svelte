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
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
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

		.wrap {
			width: 100%;
		}

		.calendar {
		    background-color: #3498db;
			float: left;
			width: 65%;
			height: 1000px;
		}

		.courses {
			background-color: white;
			float: right;
			width: 35%;
			height: 1000px;
		}

		.hidden {
			display: none;
		}

		footer {
			background-color: #d1e2ee;
			color: #3498db;
			text-align: center;
			padding-top: 10px;
			padding-bottom: 5px;
			width: 100%;
			height: 60px;
		}
	</style>
</head>

<body>
	<main>
		<div class="wrap">
		    <div class="calendar">
			    <a href="/calendar">Calendar</a>
		    </div>
		    <div class="courses">
			    <a href="/courses">Course Overview</a>
		    </div>
	    </div>
		<footer>
			<p>&copy; 2023 HZ Planner. All rights reserved.</p>
		</footer>
	</main>
</body>
