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

	/**
	 * This will fetch to the API gateway
	 */
	import { onMount } from 'svelte';

	let courses = [];

	async function fetchData() {
		try {
			const response = await fetch('http://localhost:3000/courses');
			const data = await response.json();
			courses = data;
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	onMount(() => {
		fetchData();
	});

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
	<div class="course-grid">
		{#each displayedCourses as course (course.id)}
			<div class="course-card">
				<h2>{course.title}</h2>
				<p><strong>Start Date:</strong> {course.startDate}</p>
				<p><strong>End Date:</strong> {course.endDate}</p>
				<p><strong>Main Lecturer:</strong> {course.mainLecturer}</p>
				<p><strong>Learning Outcome:</strong> {course.learningOutcome}</p>
			</div>
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
