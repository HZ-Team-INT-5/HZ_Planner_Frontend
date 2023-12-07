<script>
	import Popup from './Popup.svelte';

	let popupVisible = false;
	let dataForPopup = 'Hello from parent!';

	function updateCourseContent(course) {
		let course_content = '';

		Object.keys(course).forEach((key) => {
			//skips id key
			if (key !== 'id') {
				//style key to put space between words and capitalize the first letter
				const styled_key = styleKey(key);
				course_content += `<p><strong>${styled_key}</strong>: ${course[key]}</p><br>`;
			}
		});

		dataForPopup = course_content;
	}

	/**
	 * @param {string} key
	 */
	function styleKey(key) {
		//sets "title" category name to "Course Name"
		if (key === 'title') {
			return 'Course Name';
		}
		key = addSpaceBeforeCapital(key);
		key = key.charAt(0).toUpperCase() + key.slice(1); //changes the first character to upper-case

		return key;
	}

	/**
	 * @param {string} str
	 */
	function addSpaceBeforeCapital(str) {
		let result = '';

		for (let i = 0; i < str.length; i++) {
			const currentChar = str.charAt(i);

			if (currentChar === currentChar.toUpperCase()) {
				// If the current character is a capital letter
				result += ' ' + currentChar; // Add a space before the capital letter in the result
			} else {
				// If the current character is not a capital letter
				result += currentChar; // Simply add the current character to the result
			}
		}

		return result.trim(); // Trim the result to remove leading space (if any)
	}

	function openPopup(course) {
		popupVisible = true;
		updateCourseContent(course);
	}

	let courses = [
		{
			id: 1,
			title: 'Computer Science Basics (CSB)',
			startDate: '2023-08-15',
			endDate: '2023-09-28',
			mainLecturer: 'Loek van der Linde Dutch Lecturer (Wednesdays)Available on Teams loek.linde@hz.nl <br> Gijs van den Abeele Dutch Lecturer (Mondays) Available on Teams <br> Remco Kok Dutch Lecturer (Mondays) Available on Teams <br> Frans Blauw English Lecturer Available on Teams frans.blauw@hz.nl',
			learningOutcome: 'Computer science is the science that describes how a computer operates. As a future IT professional this knowledge is of pivotal importance. For this reason you will study the history and foundations of computer science and how it can be applied practically in your own software.During the upcoming six weeks, you will learn the ins and outs of a computer, from hardware level through to how your operating system works and what actaully happens when you run your own code. All lessons are accompanied by activities to further strengthen your understanding. The knowledge you gain in this course will be relevant to all of your other courses during your career as an IT-professional..',
			importantDates:'The assessment for this course will take place at the end of the block during the exam weeks, on 3 November 2023 from 09:00. The format of the assessment is a written theoretical exam.<br> The second opportunity for the assessment will take place on 1 December 2023 from 09:00.'
		},
		{
			id: 2,
			title: 'Object-Oriented Programming (OOP)',
			startDate: '2023-03-12',
			endDate: '2023-12-31',
			mainLecturer: 'Elio Tolhoek – e.tolhoek@hz.nl <br>Daan de Waard – dan.de.ward@hz.nl  <br> Frans Blauw – frans.blauw@hz.nl ',
			learningOutcome: 'This quarter we will expand our programming skills even more by diving into Object Oriented Programming. .',
			importantDates: '07 Nov 2023	Workshop: Figuring out a Project <br> 10 Nov 2023	Project Kickoff with PABO <br> 11 Dec 2023	School Visit: Paper Prototypes <br> 09 Jan 2024	School Visit: Working Prototypes <br> 12 Jan 2024	Case Study Exam23 <br>  24 Jan 2024	Group Project Assessments (Presentations) <br> 25 Jan 2024	Case Study Exam (Resit)  <br> 30 Jan 2024	Group Project Assessments (Presentations Resit) <br>07 Feb 2024	Game Projects Day'
		},
		{
			id: 3,
			title: 'Framework Project 2 (CU75011V3)',
			startDate: '2023-04-9',
			endDate: '2023-05-9',
			mainLecturer: 'Elio Tolhoek – e.tolhoek@hz.nl <br>Daan de Waard – dan.de.ward@hz.nl  <br> Frans Blauw – frans.blauw@hz.nl',
			learningOutcome: 'To develop software applications such as mobile apps, games or web applications quickly and safely, frameworks such as Unity, Ionic, Zend and Laravel are often used. In order to be able to work within these types of frameworks, you must, in addition to being able to program, also learn how to find your way within the framework: how did the framework come up with how to program certain functions? What are the requirements for your work and project environment? In this quarter you and your group continue to develop your Laravel project. You will now study and apply more complex topics so that you can realize interactions that will help users perform their tasks much better than the standard CRUD functions. A framework usually has many possibilities. It is therefore not possible to learn everything about the framework before you start working with it. A developer will always have to learn new things during development: how can I send an email in Laravel, or have a PDF generated and put it in the email as an attachment? How can I let the user choose between English or Dutch in Laravel? Can I have Laravel send Slack messages? These are just a few questions that you would encounter as a developer. And once you know everything, the framework will no longer be relevant and the next framework will have to be used again..',
	        importantDates: '26/06/2024 <br> (27/06/2024) - Project result presentations <br> (28/06) - Individual project assessments'
		},
		{
			id: 4,
			title: 'Personal Professional Development Exploration',
			startDate: '2023-09-5',
			endDate: '2024-06-3',
			mainLecturer: 'Daphne Heertjes – daphne.heertjes@hz.nl ',
			learningOutcome: 'The Personal Professional Development course covers almost an entire study year and when succeeding grants a total of 12,5 ECs In order obtain the 12,5 ECs you need to have the following <br> Portfolio, checklist + sufficient grading on your Assessment 5.5 <br> Proof by means of a certificate for B2 English level <br> Advice <br>Do not wait until the last moment to start writing your Portfolio and collecting proof, that strategy will surely fail <br> Most of the proof you can easily collect comes from doing project work, making the assignments, and participating in the PPD workshop.'
		},
		{
			id: 5,
			title: 'IT Personality',
			startDate: '2023-09-5',
			endDate: '2024-06-3',
			mainLecturer: 'Jolene Cijsouw- jolene-cijsouw@hz.nl ',
			learningOutcome: 'The exact structure of IT Personality within the HBO-ICT study programme. During the study programme, you will accumulate 11.25EC of IT Personality courses: 2.5EC in your first year,  3.75EC in your second year and 5EC in your third year.To help you out, the HBO-ICT study programme offers some organized activities you can participate in (like the project week) and we offer some (limited) possibilities, such as participation in the student buddy programme. We have defined a happy path for you to follow in which a part of the activities are being organized for you and you have to define the content of the IT Personalty activities yourself to a lesser extent. Of course you can deviate from this happy path if you wish. Keep in mind that of the total of 11.25EC IT Personality study credits at least 1.25 should be obtained in each of the three categories. .'
		},
		{
			id: 6,
			title: 'Program and Career Orientation',
			startDate: '2023-03-19',
			endDate: '2023-06-9',
			mainLecturer: 'Elio Tolhoek – e.tolhoek@hz.nl <br>Daan de Waard – dan.de.ward@hz.nl  <br> Frans Blauw – frans.blauw@hz.nl <br> Daphne Heertjes – daphne.heertjes@hz.nl',
			learningOutcome: 'In this course you will learn to know each other, the teachers, the program and the career opportunities. Based on this knowledge you can, supported by examples and/or reflections, draw some conclusions for the rest of your own study. You will start with hands on practise. Build a Webpage in which you introduce yourself to the program and explain your motivation. The course will have a final assessment with a minimum grade to pass of 5.5.'
		},
		{
			id: 7,
			title: 'Programming Basics ',
			startDate: '2023-08-8',
			endDate: '2023-10-4',
			mainLecturer: 'Elio Tolhoek – e.tolhoek@hz.nl <br>Daan de Waard – dan.de.ward@hz.nl  <br> Frans Blauw – frans.blauw@hz.nl',
			learningOutcome: 'Understand the basics of Programming.'
		}
	];

	let currentPage = 1;
	const pageSize = 6;

	$: startIndex = (currentPage - 1) * pageSize;
	$: endIndex = Math.min(startIndex + pageSize, courses.length);
	$: displayedCourses = courses.slice(startIndex, endIndex);

	/**
	 * @param {number} page
	 */
	function goToPage(page) {
		currentPage = page;
	}
</script>

<main>
	<Popup bind:show={popupVisible} popupData={dataForPopup} />

	<div class="course-grid">
		{#each displayedCourses as course (course.id)}
			<button class="course-card" on:click={openPopup(course)}>
				<h2>{course.title}</h2>
			</button>
		{/each}
	</div>

	{#if courses.length > pageSize}
		<div class="pagination">
			{#each Array.from({ length: Math.ceil(courses.length / pageSize) }, (_, index) => index + 1) as page}
				<button on:click={() => goToPage(page)} class:active={page === currentPage}>
					{page}
				</button>
			{/each}
		</div>
	{/if}
</main>

<style>
	main {
		padding: 20px;
	}

	.course-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	.course-card {
		background-color: #f4f4f4;
		color: black;
		border: 1px solid #ddd;
		padding: 15px;
		width: calc(33.33% - 20px);
		box-sizing: border-box;
		margin-bottom: 20px;
	}

	h2 {
		margin-bottom: 10px;
		font-size: 1.2em;
	}

	p {
		margin: 5px 0;
	}

	.pagination {
		display: flex;
		margin-top: 20px;
	}

	button {
		background-color: #3498db;
		color: white;
		border: none;
		padding: 5px 10px;
		margin-right: 5px;
		cursor: pointer;
	}

	button.active {
		background-color: #2980b9;
	}
</style>
