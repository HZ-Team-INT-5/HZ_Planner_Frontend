<script>
	import Popup from './Popup.svelte';

	let popupVisible = false;
	let dataForPopup = 'Hello from parent!';

	function updateCourseContent(course) {
		let course_content =
			'<p><strong>Course Name:</strong> ' +
			course.title +
			'</p><br><p><strong>Start Date:</strong> ' +
			course.startDate +
			'</p><br><p><strong>End Date:</strong> ' +
			course.endDate +
			'</p><br><p><strong>Main Lecturer:</strong> ' +
			course.mainLecturer +
			'</p><br><p><strong>Learning Outcome:</strong> ' +
			course.learningOutcome + 
			'</p><br><p><strong>Important dates:</strong> ' +
			course.importantDates;

		dataForPopup = course_content;
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
			mainLecturer: 'j0hn Smith',
			learningOutcome: 'Learn Object-Oriented Programming.'
		},
		{
			id: 3,
			title: 'Framework Project (Laravel)',
			startDate: '2023-04-9',
			endDate: '2023-05-9',
			mainLecturer: 'Kim Smoth',
			learningOutcome: 'Create a project using Laravel PHP.'
		},
		{
			id: 4,
			title: 'Data Science',
			startDate: '2023-02-2',
			endDate: '2023-03-3',
			mainLecturer: 'Alice Gek',
			learningOutcome: 'Work with data to create information.'
		},
		{
			id: 5,
			title: 'Introduction to Svelte',
			startDate: '2023-11-1',
			endDate: '2023-12-16',
			mainLecturer: 'Rimmert Smith',
			learningOutcome: 'Understand the basics of Svelte.'
		},
		{
			id: 6,
			title: 'Svelte project',
			startDate: '2023-03-19',
			endDate: '2023-06-9',
			mainLecturer: '1234 Smith',
			learningOutcome: 'Create a project using Svelte.'
		},
		{
			id: 7,
			title: 'Introduction to Svelte',
			startDate: '2023-08-8',
			endDate: '2023-09-4',
			mainLecturer: 'bbbb Smith',
			learningOutcome: 'Understand the basics of Svelte.'
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
		color:black;
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
