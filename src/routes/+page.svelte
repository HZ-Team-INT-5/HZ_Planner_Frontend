<script>
  import { onMount } from 'svelte';

  let text = 'Pro Tip:';
  let advice = ['If you feel burnt out, take a break.',
	'Remember to keep your eyes safe, take breaks every 1 hour.',
	"Don't stand still for too long, move around to keep your body warmed up.",

	];
  let currentAdvice = '';
  let currentIndex = 0;
  let typingSpeed = 120;
  let deletingSpeed = 40;

  onMount(() => {
    typeText();
  });

  function typeText() {
    if (currentIndex < advice.length) {
      currentAdvice = advice[currentIndex];
      currentIndex++;
      typeNextChar(0);
    } else {
      currentIndex = 0;
      typeText();
    }
  }

  function typeNextChar(index) {
    if (index <= currentAdvice.length) {
      text = 'Pro Tip: ' + currentAdvice.slice(0, index);
      setTimeout(() => typeNextChar(index + 1), typingSpeed);
    } else {
      setTimeout(deleteText, 1000);
    }
  }

  function deleteText() {
    deleteNextChar(currentAdvice.length);
  }

  function deleteNextChar(index) {
    if (index >= 0) {
      text = 'Pro Tip: ' + currentAdvice.slice(0, index);
      setTimeout(() => deleteNextChar(index - 1), deletingSpeed);
    } else {
      setTimeout(typeText, 1000);
    }
  }
</script>

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
			height: 100%;
			width: 100%;
		}

		.calendar {
		  background-color: #3498db;
			float: left;
			width: 60%;
			height: 1000px;
		}

		.courses {
			background-color: white;
			float: right;
			width: 40%;
			height: 1000px;
		}

		.a {
			font-size: 2rem;
			font-weight: 600;
			padding: 0.25em 0.25em;
			position: absolute;
			text-decoration: none;
			color: #0074B7;
			transition: transform 0.3s, background-color 1s ease-out;
		}

		a:hover {
			transform: translateY(-10px);
			background-color: #7EC8E3;
		}

		.hidden {
			display: none;
		}

		footer {
			background-color: #d1e2ee;
			color: #3498db;
			text-align: center;
			padding-top: 20px;
			padding-bottom: 5px;
			width: 100%;
			height: 60px;
		}
	</style>
</head>

<body>
	<main>
		<a class="a" style = "top:900px; font-size: 1rem; font-weight: 600;" href="/">{text}</a>
		<div class="wrap">
		    <div class="calendar">
			    <a class="a" style="top: 400px; left: 450px; color: white; border: 5px solid #7EC8E3;" href="/calendar">Calendar</a>
		    </div>
		    <div class="courses">
			    <a class="a" style="top: 400px; left: 1400px; border: 5px solid #7EC8E3" href="/courses">Course Overview</a>
		    </div>
	    </div>
		<footer>
			<p>&copy; 2023 HZ Planner. All rights reserved.</p>
		</footer>
	</main>
</body>
