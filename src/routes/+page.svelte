<script>
	import { onMount } from 'svelte';

	let text = 'Pro Tip:';
	let advice = [
		"Practice deep breathing exercises to help calm your mind.",
    "Create a study schedule to manage your time effectively and reduce last-minute cramming.",
    "Stay hydrated and maintain a balanced diet for overall well-being.",
    "Get enough sleep each night to support cognitive function and emotional resilience.",
    "Engage in physical activity or exercise to release built-up tension and boost your mood.",
    "Connect with friends and family for emotional support and a sense of community.",
    "Break down large tasks into smaller, more manageable steps to avoid feeling overwhelmed.",
    "Consider mindfulness or meditation techniques to improve focus and reduce stress.",
    "Take advantage of campus resources like counseling services if you need additional support.",
    "Listen to music or create a playlist of calming tunes to help you relax while studying.",
    "Set realistic goals and celebrate your achievements, no matter how small.",
    "Find a hobby or creative outlet to provide a mental break from academic pressures.",
    "Limit caffeine intake, especially in the hours leading up to bedtime, to improve sleep quality.",
    "Keep a journal to express your thoughts and feelings, helping to process stress.",
    "Attend study groups or collaborate with classmates to share knowledge and support.",
    "Practice self-compassion and acknowledge that it's okay not to be perfect.",
    "Take advantage of nature breaks – spend time outdoors to rejuvenate your mind.",
    "Learn to say no when necessary to avoid overcommitting yourself.",
    "Use positive affirmations to cultivate a positive mindset and reduce self-doubt.",
    "Consider adopting a pet if feasible, as they can provide companionship and reduce stress.",
    "Incorporate humor into your day – laughter is a great stress reliever.",
    "Explore relaxation techniques such as progressive muscle relaxation or guided imagery.",
    "Prioritize self-care activities, such as a warm bath or a favorite hobby, to recharge.",
    "Seek professional help if you find that stress is significantly impacting your well-being.",
    "Celebrate progress, not just perfection, in your academic journey.",
    "Take short breaks to stretch and move around during study sessions.",
    "Establish a designated study space to enhance focus and productivity.",
    "Express gratitude by acknowledging positive aspects of your life daily.",
    "Experiment with aromatherapy or scented candles to create a calming atmosphere.",
    "Challenge negative thoughts with positive affirmations and constructive self-talk.",
		"Include fun activities in your routine to balance work and play.",
    "Take short, energizing walks to refresh your mind and body.",
    "Learn time management techniques to prioritize tasks effectively.",
    "Experiment with different study methods to find what works best for you.",
    "Engage in hobbies that bring you joy and allow you to express yourself.",
    "Practice gratitude by keeping a daily journal of things you're thankful for.",
    "Explore breathing exercises like box breathing or 4-7-8 technique.",
    "Use apps or online resources for guided meditation and relaxation.",
    "Set boundaries for social media use to avoid unnecessary stress.",
    "Embrace the power of saying 'no' to commitments that overwhelm you.",
    "Create a vision board with your goals and aspirations for motivation.",
    "Challenge yourself to learn something new outside of your academic focus.",
    "Plan mini getaways or staycations to break the routine and recharge.",
    "Invest time in building a support network with classmates and friends.",
    "Practice positive visualization to imagine success in your endeavors.",
    "Experiment with different types of study music or ambient sounds.",
    "Schedule regular self-reflection time to assess your well-being and goals.",
    "Try progressive muscle relaxation to release physical tension.",
    "Use a planner or digital tools to stay organized and reduce stress.",
    "Set realistic expectations for yourself and acknowledge your achievements.",
    "Develop a bedtime routine to signal your body that it's time to wind down.",
    "Laugh regularly; Watch a funny movie, read jokes, or share humor with friends.",
    "Explore creative writing or art as a form of self-expression and stress relief.",
    "Engage in volunteer work or community service to foster a sense of purpose.",
    "Connect with mentors or upperclassmen for guidance and support.",
    "Practice the 'Pomodoro Technique': work intensely for 25 minutes, then take a 5-minute break.",
		"Create a positive and motivating study playlist to enhance focus.",
    "Prioritize tasks using the Eisenhower Matrix: urgent, important, not urgent, not important.",
    "Consider aromatherapy with essential oils like lavender or eucalyptus for relaxation.",
    "Practice progressive relaxation by tensing and then releasing different muscle groups.",
    "Attend campus events or join clubs to foster a sense of community and connection.",
    "Establish a morning routine to start your day with a sense of purpose.",
    "Write down your goals and break them into actionable steps.",
    "Limit multitasking to improve efficiency and reduce stress.",
    "Use visualization techniques to picture success in challenging situations.",
    "Learn to delegate tasks and ask for help when needed.",
    "Find a quiet spot for meditation or simply enjoy a moment of silence.",
    "Create a vision board with images representing your aspirations and dreams.",
    "Consider adopting a growth mindset – embrace challenges as opportunities to learn.",
    "Practice good posture to reduce physical tension and improve mood.",
    "Stay mindful of negative self-talk and replace it with positive affirmations.",
    "Experiment with different study environments to find what suits you best.",
    "Explore progressive muscle relaxation to release physical tension.",
    "Take breaks to stretch and move around during long study sessions.",
    "Use a gratitude jar – write down things you're grateful for and read them when needed.",
    "Incorporate mindfulness into everyday activities like eating or walking.",
    "Engage in activities that bring you joy, even if they're not directly related to academics.",
    "Set realistic short-term and long-term goals to stay motivated.",
    "Practice self-compassion and forgive yourself for mistakes.",
    "Consider seeking guidance from a career counselor to align your academic path with your goals.",
    "Explore creative outlets such as drawing, painting, or crafting.",
    "Use positive visualization to imagine overcoming challenges and achieving success.",
		"Experiment with different study techniques, such as the Feynman technique or mind mapping.",
    "Participate in campus or online support groups to share experiences and coping strategies.",
    "Practice mindfulness through activities like yoga or tai chi.",
    "Set realistic boundaries with friends and family to ensure dedicated study time.",
    "Utilize technology for productivity, like task management apps and focus-boosting tools.",
    "Create a personal mantra or affirmation to boost confidence and resilience.",
    "Reward yourself after accomplishing major tasks or milestones.",
    "Establish a regular sleep routine, aiming for consistent sleep and wake times.",
    "Engage in activities that promote laughter, such as watching comedy shows or stand-up performances.",
    "Learn to prioritize self-care without feeling guilty – it's crucial for overall well-being.",
    "Use positive peer pressure by studying with motivated and focused classmates.",
    "Find a mentor or advisor who can provide guidance on academic and personal challenges.",
    "Take advantage of mental health days when needed – it's okay to prioritize your well-being.",
    "Explore relaxation apps for guided imagery, meditation, or calming sounds.",
    "Use sticky notes for positive affirmations or reminders in your study space.",
    "Create a to-do list with both short-term and long-term goals.",
    "Consider volunteering or engaging in community service to foster a sense of purpose.",
    "Explore progressive relaxation by consciously relaxing each part of your body.",
    "Practice the 2-minute rule: if a task takes less than 2 minutes, do it immediately.",
    "Stay connected with family and friends through regular calls or video chats.",
    "Establish a wind-down routine before bed to signal your body it's time to relax.",
    "Set specific, measurable, achievable, relevant, and time-bound (SMART) goals.",
    "Use visualization techniques to mentally prepare for challenging tasks or exams.",
    "Prioritize tasks based on your energy levels – tackle difficult tasks when you're most alert.",
    "Consider creating a study group for collaborative learning and support.",
    "Incorporate mindfulness exercises into your daily routine, such as mindful breathing or body scans.",
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
			font-family: 'Helvetica', sans-serif;
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
			color: #0074b7;
			transition:
				transform 0.3s,
				background-color 1s ease-out;
		}

		#advice {
			top: 900px;
			font-size: 1rem;
			font-weight: 600;
		}

		#a_calendar {
			position: relative;
			top: 35%;
			left: 45%;
			color: white;
			border: 5px solid #7ec8e3;
		}

		#a_courses {
			position: relative;
			top: 35%;
			left: 33%;
			border: 5px solid #7ec8e3;
		}

		a:hover {
			transform: translateY(-10px);
			background-color: #7ec8e3;
		}

		.hidden {
			display: none;
		}

		footer {
			background-color: #d1e2ee;
			color: #3498db;
			text-align: center;
			font-weight: bold;
			padding-top: 20px;
			padding-bottom: 5px;
			width: 100%;
			height: 60px;
		}
	</style>
</head>

<body>
	<main>
		<a class="a" id="advice" href="/">{text}</a>
		<div class="wrap">
			<div class="calendar">
				<a class="a" id="a_calendar" href="/calendar">Calendar</a>
			</div>
			<div class="courses">
				<a class="a" id="a_courses" href="/courses">Course Overview</a>
			</div>
		</div>
		<footer>
			<p>&copy; 2023 HZ Planner. All rights reserved.</p>
		</footer>
	</main>
</body>
