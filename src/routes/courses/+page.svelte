<script>
	import Popup from './Popup.svelte';

	let popupVisible = false;
	let dataForPopup = 'Hello from parent!';
	let lang = 'en';

	function 	translate() {
	  if (lang == 'en') lang = 'nl';
	  else lang = 'en';
	}

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
	  if (key === 'title') {
	    return 'Course Name';
	  }
	  if (key == 'startdate') {
	    return 'Start Date';
	  }
	  if (key == 'coursecode') {
	    return 'Course Code';
	  }
	  if (key == 'mainlecturer') {
	    return 'Main Lecturer';
	  }
	  if (key == 'learningoutcome') {
	    return 'Learning Outcome';
	  }
	  if (key == 'importantevents') {
	    return 'Important Events';
	  }
	  if (key == 'language') {
	    return 'Language';
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
</script>

<main>
	<Popup bind:show={popupVisible} popupData={dataForPopup} />

	<div>
		<button style="margin-left: 5px;" type="button" on:click={translate}>
			Translate to {#if lang == 'en'}
				Dutch <img src="dutchFlag.png" alt="English Flag" style="width: 1em; height: 1em; position: relative; top: 2px;">
			{:else}
				English <img src="englishFlag.png" alt="Dutch Flag" style="width: 1em; height: 1em; position: relative; top: 2px;">
			{/if}
		</button>
			</div>

	<div class="course-grid">
		{#each courses as course (course.id)}
			{#if course.language == lang}
				<button class="course-card" on:click={openPopup(course)}>
					<h2>{course.title}</h2>
				</button>
			{/if}
		{/each}
	</div>

	<footer>
		<p>&copy; 2023 HZ Planner. All rights reserved.</p>
	</footer>
</main>

<style>
	main {
		height: 100vh;
		font-family: 'Helvetica', sans-serif;
	}

	.course-grid {
		display: flex;
		height: 75%;
		flex-wrap: wrap;
		gap: 15px;
	}

	.course-card {
		background-color: #f4f4f4;
		color: black;
		border: 1px solid #ddd;
		width: calc(33.33% - 20px);
		box-sizing: border-box;
		height: 225px;
	}

	h2 {
		margin-bottom: 10px;
		font-size: 1.5em;
	}

	p {
		margin: 5px;
	}

	button {
		background-color: #3498db;
		color: white;
		border: none;
		padding: 10px 15px;
		margin-right: 5px;
		cursor: pointer;
		margin-left: 5px;
	}

	footer {
			position: fixed;
			bottom: 0;
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
