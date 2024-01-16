<script>
	import { goto } from '$app/navigation';
	import Popup from './Popup.svelte';
	import {showConfirmation} from './ConfirmationDialog.svelte';

	let popupVisible = false;
	let dataForPopup = 'Hello from parent!';

	function updateNotifContent(notif) {
		let notif_content = `<center><h3><strong>Details:</h3></strong><br/><br/><p style="font-size:large">`;
		notif_content +=
			notif.desc +
			`</p><br/><br/><p style="font-size:small"><strong>Time:</strong> ${notif.creationTime}</p>`;
		/*Object.keys(notif).forEach((key) => {
			//style key to put space between words and capitalize the first letter
			// const styled_key = styleKey(key);
			notif_content += `<p><strong>${key}</strong>: ${notif[key]}</p><br>`;
		});*/

		dataForPopup = notif_content;
	}

	function openPopup(notif) {
		popupVisible = true;
		updateNotifContent(notif);
		setAsRead(notif);
	}
	function handleDelete() {
		showConfirmation('Are you sure you want to delete?', () => {
			deleteData(notif);
			console.log('Deleted!');
		});
	}

	import { onMount } from 'svelte';

	let notifs = [];

	async function fetchData() {
		try {
			const response = await fetch('http://localhost:3000/notifications/1'); // notifications/1 is the user id which will later be determined by the session
			const data = await response.json();
			notifs = data;
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	async function postData(notif) {
		try {
			const response = await fetch(`http://localhost:3000/notifications/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(notif)
			});
			const result = await response.json();
			console.log('Success:', result);
		} catch (error) {
			console.error('Error posting data:', error);
		}
	}
	let dataToPost = [
		{ desc: 'The exam schedule has been published.', user_id: 1 },
		{
			desc: 'The exam results have been published. Make sure to register for the retake if you have failed the course as it will not be done automatically!',
			user_id: 1
		}
	];

	async function deleteData(notif) {
		try {
			const response = await fetch(`http://localhost:3000/notifications/${notif.id}`, {
				method: 'DELETE'
			});

			const result = await response.json();
			console.log('Success:', result);
			fetchData();
		} catch (error) {
			console.error('Error deleting data:', error);
		}
	}

	async function putData(notif) {
		let notifForSupabase = { ...notif }; //create a copy of the notification to update the database because it has added properties that are not in the db
		delete notifForSupabase.creationTime;
		delete notifForSupabase.timeElapsed;

		try {
			const response = await fetch(`http://localhost:3000/notifications/${notif.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(notifForSupabase)
			});

			const result = await response.json();
			//console.log("Success:", result);
		} catch (error) {
			console.error('Error putting data:', error);
		}
	}
	onMount(() => {
		fetchData();
	});
	/*let notifs = [
		{
			desc: 'Upcoming Lesson on 28/12/23 on "Introduction to Svelte" has been changed from 10:30 to 10:45',
			status: 'unread',
			creationTime: '12/12/2023',
			timeElapsed: '2 minutes ago'
			// time:'2 minutes ago'
			// database stores the creation time
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'read' },
		{
			desc: 'Reminder: sign up for the upcoming Job Event on Friday 1st of October, it could help you to find an internship!',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'unread' },
		{ desc: 'Your grades for the last assignment are available', status: 'read' },
		{ desc: "Don't forget to submit your project proposal", status: 'unread' },
		{ desc: 'You have a meeting with your advisor next week', status: 'unread' },
		{ desc: "Congratulations! You've been selected for the internship program", status: 'read' },
		{ desc: 'Reminder: Pay your tuition fees by the end of the month', status: 'unread' },
		{ desc: 'Explore the new library resources available for your course', status: 'read' },
		{
			desc: 'Important announcement: Class schedule changes starting next month',
			status: 'unread'
		},
		{ desc: 'Check out the upcoming workshops on career development', status: 'read' },
		{ desc: 'Reminder: Return library books by the due date', status: 'unread' },
		{
			desc: 'Upcoming Lesson on 28/12/23 on "Introduction to Svelte" has been changed from 10:30 to 10:45',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'read' },
		{
			desc: 'Reminder: sign up for the upcoming Job Event on Friday 1st of October, it could help you to find an internship!',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'unread' },
		{ desc: 'Your grades for the last assignment are available', status: 'read' },
		{ desc: "Don't forget to submit your project proposal", status: 'unread' },
		{ desc: 'You have a meeting with your advisor next week', status: 'unread' },
		{ desc: "Congratulations! You've been selected for the internship program", status: 'read' },
		{ desc: 'Reminder: Pay your tuition fees by the end of the month', status: 'unread' },
		{ desc: 'Explore the new library resources available for your course', status: 'read' },
		{
			desc: 'Important announcement: Class schedule changes starting next month',
			status: 'unread'
		},
		{ desc: 'Check out the upcoming workshops on career development', status: 'read' },
		{ desc: 'Reminder: Return library books by the due date', status: 'unread' },
		{
			desc: 'Upcoming Lesson on 28/12/23 on "Introduction to Svelte" has been changed from 10:30 to 10:45',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'read' },
		{
			desc: 'Reminder: sign up for the upcoming Job Event on Friday 1st of October, it could help you to find an internship!',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'unread' },
		{ desc: 'Your grades for the last assignment are available', status: 'read' },
		{ desc: "Don't forget to submit your project proposal", status: 'unread' },
		{ desc: 'You have a meeting with your advisor next week', status: 'unread' },
		{ desc: "Congratulations! You've been selected for the internship program", status: 'read' },
		{ desc: 'Reminder: Pay your tuition fees by the end of the month', status: 'unread' },
		{ desc: 'Explore the new library resources available for your course', status: 'read' },
		{
			desc: 'Important announcement: Class schedule changes starting next month',
			status: 'unread'
		},
		{ desc: 'Check out the upcoming workshops on career development', status: 'read' },
		{ desc: 'Reminder: Return library books by the due date', status: 'unread' },
		{
			desc: 'Upcoming Lesson on 28/12/23 on "Introduction to Svelte" has been changed from 10:30 to 10:45',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'read' },
		{
			desc: 'Reminder: sign up for the upcoming Job Event on Friday 1st of October, it could help you to find an internship!',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'unread' },
		{ desc: 'Your grades for the last assignment are available', status: 'read' },
		{ desc: "Don't forget to submit your project proposal", status: 'unread' },
		{ desc: 'You have a meeting with your advisor next week', status: 'unread' },
		{ desc: "Congratulations! You've been selected for the internship program", status: 'read' },
		{ desc: 'Reminder: Pay your tuition fees by the end of the month', status: 'unread' },
		{ desc: 'Explore the new library resources available for your course', status: 'read' },
		{
			desc: 'Important announcement: Class schedule changes starting next month',
			status: 'unread'
		},
		{ desc: 'Check out the upcoming workshops on career development', status: 'read' },
		{ desc: 'Reminder: Return library books by the due date', status: 'unread' },
		{
			desc: 'Upcoming Lesson on 28/12/23 on "Introduction to Svelte" has been changed from 10:30 to 10:45',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'read' },
		{
			desc: 'Reminder: sign up for the upcoming Job Event on Friday 1st of October, it could help you to find an internship!',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'unread' },
		{ desc: 'Your grades for the last assignment are available', status: 'read' },
		{ desc: "Don't forget to submit your project proposal", status: 'unread' },
		{ desc: 'You have a meeting with your advisor next week', status: 'unread' },
		{ desc: "Congratulations! You've been selected for the internship program", status: 'read' },
		{ desc: 'Reminder: Pay your tuition fees by the end of the month', status: 'unread' },
		{ desc: 'Explore the new library resources available for your course', status: 'read' },
		{
			desc: 'Important announcement: Class schedule changes starting next month',
			status: 'unread'
		},
		{ desc: 'Check out the upcoming workshops on career development', status: 'read' },
		{ desc: 'Reminder: Return library books by the due date', status: 'unread' },
		{
			desc: 'Upcoming Lesson on 28/12/23 on "Introduction to Svelte" has been changed from 10:30 to 10:45',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'read' },
		{
			desc: 'Reminder: sign up for the upcoming Job Event on Friday 1st of October, it could help you to find an internship!',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'unread' },
		{ desc: 'Your grades for the last assignment are available', status: 'read' },
		{ desc: "Don't forget to submit your project proposal", status: 'unread' },
		{ desc: 'You have a meeting with your advisor next week', status: 'unread' },
		{ desc: "Congratulations! You've been selected for the internship program", status: 'read' },
		{ desc: 'Reminder: Pay your tuition fees by the end of the month', status: 'unread' },
		{ desc: 'Explore the new library resources available for your course', status: 'read' },
		{
			desc: 'Important announcement: Class schedule changes starting next month',
			status: 'unread'
		},
		{ desc: 'Check out the upcoming workshops on career development', status: 'read' },
		{ desc: 'Reminder: Return library books by the due date', status: 'unread' },
		{
			desc: 'Upcoming Lesson on 28/12/23 on "Introduction to Svelte" has been changed from 10:30 to 10:45',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'read' },
		{
			desc: 'Reminder: sign up for the upcoming Job Event on Friday 1st of October, it could help you to find an internship!',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'unread' },
		{ desc: 'Your grades for the last assignment are available', status: 'read' },
		{ desc: "Don't forget to submit your project proposal", status: 'unread' },
		{ desc: 'You have a meeting with your advisor next week', status: 'unread' },
		{ desc: "Congratulations! You've been selected for the internship program", status: 'read' },
		{ desc: 'Reminder: Pay your tuition fees by the end of the month', status: 'unread' },
		{ desc: 'Explore the new library resources available for your course', status: 'read' },
		{
			desc: 'Important announcement: Class schedule changes starting next month',
			status: 'unread'
		},
		{ desc: 'Check out the upcoming workshops on career development', status: 'read' },
		{ desc: 'Reminder: Return library books by the due date', status: 'unread' },
		{
			desc: 'Upcoming Lesson on 28/12/23 on "Introduction to Svelte" has been changed from 10:30 to 10:45',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'read' },
		{
			desc: 'Reminder: sign up for the upcoming Job Event on Friday 1st of October, it could help you to find an internship!',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'unread' },
		{ desc: 'Your grades for the last assignment are available', status: 'read' },
		{ desc: "Don't forget to submit your project proposal", status: 'unread' },
		{ desc: 'You have a meeting with your advisor next week', status: 'unread' },
		{ desc: "Congratulations! You've been selected for the internship program", status: 'read' },
		{ desc: 'Reminder: Pay your tuition fees by the end of the month', status: 'unread' },
		{ desc: 'Explore the new library resources available for your course', status: 'read' },
		{
			desc: 'Important announcement: Class schedule changes starting next month',
			status: 'read'
		},
		{ desc: 'Check out the upcoming workshops on career development', status: 'read' },
		{ desc: 'Reminder: Return library books by the due date', status: 'read' },
		{
			desc: 'Upcoming Lesson on 28/12/23 on "Introduction to Svelte" has been changed from 10:30 to 10:45',
			status: 'read'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'read' },
		{
			desc: 'Reminder: sign up for the upcoming Job Event on Friday 1st of October, it could help you to find an internship!',
			status: 'read'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'read' },
		{ desc: 'Your grades for the last assignment are available', status: 'read' },
		{ desc: "Don't forget to submit your project proposal", status: 'read' },
		{ desc: 'You have a meeting with your advisor next week', status: 'read' },
		{ desc: "Congratulations! You've been selected for the internship program", status: 'read' },
		{ desc: 'Reminder: Pay your tuition fees by the end of the month', status: 'read' },
		{ desc: 'Explore the new library resources available for your course', status: 'read' },
		{
			desc: 'Important announcement: Class schedule changes starting next month',
			status: 'read'
		},
		{ desc: 'Check out the upcoming workshops on career development', status: 'read' },
		{ desc: 'Reminder: Return library books by the due date', status: 'read' }
	];*/

	function setAsRead(notif) {
		notif.status = 'READ';
		putData(notif);
		notifs = notifs;
		return;
	}
	function setAsUnread(notif) {
		notif.status = 'UNREAD';
		putData(notif);
		notifs = notifs;
		return;
	}

	let currentPage = 1;

	function nextPage() {
		currentPage += 1;
	}

	function prevPage() {
		currentPage -= 1;
	}

	function goToPage(number) {
		if (number >= 1 && number <= totalPages) {
			currentPage = number;
		}
	}
	let itemsPerPage = 10;

	const options = ['10', '30', '50', '100'];

	$: totalItems = notifs.length;
	$: totalPages = Math.ceil(totalItems / itemsPerPage);
	$: displayedNotifs = notifs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
</script>

<main>
	<Popup bind:show={popupVisible} popupData={dataForPopup} />

	<h2>Notifications 🔔</h2>

	<div style="display: flex; justified-content: center; align-items: center; flex-direction: column; gap: 5px;">
	<!-- Choice for items per page -->
	<label for="choiceBox">Number of items per page:</label>
	<select
		id="choiceBox"
		on:change={() => {
			goToPage(1);
		}}
		bind:value={itemsPerPage}
	>
		{#each options as option (option)}
			<option value={option}>{option}</option>
		{/each}
	</select>
	<!-- DIV FOR CENTERING ELEMENTS -->
	<br /><br />

	<!-- Notifications -->
	<ul>
		{#each displayedNotifs as notif}
			<div class="notification-parent">
				<button on:click={() => openPopup(notif)} class="notification_li_button">
					<li class="notification_li {notif.status}">
						{notif.desc}
						<!-- <br /><br /><span class="notif-time">2 minutes ago</span> -->
						<br /><span class="notif-time">{notif.timeElapsed}</span>
					</li>
				</button>
				{#if notif.status === 'READ'}
					<div class="set_as_unread_div">
						<button on:click={() => setAsUnread(notif)} class="set_as_unread_button"
							>Set as unread</button
						>
					</div>
					
				{/if}
				&nbsp;
				<button on:click={() => handleDelete(notif)} class="delete_button">
					<img src="can.png" alt="delete" height="16" />
				</button>
			</div>
		{/each}
	</ul>

	<!-- Pagination -->
	<div>
	<button on:click={prevPage} disabled={currentPage === 1}>Previous</button>
	<button
		class:current-page={currentPage === 1}
		on:click={() => {
			goToPage(1);
		}}>1</button
	>
	{#if currentPage - 1 > 1}
		...
	{/if}

	{#if currentPage != 1 && currentPage != totalPages}
		<button class="current-page">{currentPage}</button>
	{/if}

	{#if totalPages - currentPage > 1}
		...
	{/if}

	{#if totalPages > 1}
		<button
			class:current-page={currentPage === totalPages}
			on:click={() => {
				goToPage(totalPages);
			}}>{totalPages}</button
		>
	{/if}
	<button on:click={nextPage} disabled={currentPage >= totalPages}>Next</button>
	<br />
	<br />

	<button on:click={postData(dataToPost)}>Post Data</button>
	<br />

	<!-- Legend Table -->
	<table class="legend">
		<th>Legend</th>

		<tr>
			<td class="read-td">
				<ul>
					<li class="notification read">Read notifications</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>
				<ul>
					<li class="notification unread">Unread notifications</li>
				</ul>
			</td>
		</tr>
	</table>
	</div>
</main>

<style>
	:root {
		/* Page in general */
		--page-background-color: #white;
		--font-color: rgb(55, 152, 219);
		/* Notification li variables*/
		--notification-li-border-radius: 5px;
		--notification-li-border-padding: 5px;
		--notification-li-border-margin: 2px;
		--unread-list-style-type: '●';
		/* Notification colors */
		--unread-background-color: rgba(0, 166, 255, 0.85);
		--read-background-color: rgba(231, 230, 230, 0.868);
		--unread-notification-font-color: white;
		--read-notification-font-color: black;
		/* Legend Table */
		--legend-table-border: 1px solid black;
	}

	main {
		background-color: var(--page-background-color);
		font-family: Arial, sans-serif;
		font-size: 1.5rem;
	}

	h2 {
		color: var(--font-color);
		padding: 10px;
		margin-top: 0px;
		margin-left: 0px;
		text-align: center;
	}

	.current-page {
		font-weight: bold;
		text-decoration: underline;
	}

	.notification-parent {
		display: flex;
	}

	.notification_li_button {
		width: 80%;
		max-width: 800px;
		/* transparent background color and border*/
		background-color: rgba(0, 0, 0, 0);
		border: 1px solid rgba(0, 0, 0, 0);
		text-align: left;
		font-size: 1rem;
	}

	.notification_li {
		max-width: 100%;
		border-radius: var(--notification-li-border-radius);
		padding: var(--notification-li-border-padding);
		margin: var(--notification-li-border-margin);
		height: 3.5em;
		list-style-type: none;
	}
	.UNREAD {
		font-weight: bold;
		color: var(--unread-notification-font-color);
		background-color: var(--unread-background-color);
	}
	.UNREAD::before {
		/* unread-list-style manually set to have the background rather than the font color */
		content: var(--unread-list-style-type);
		color: var(--unread-background-color);
		display: inline-block;
		width: 2em;
		margin-left: -2em;
	}
	.READ {
		color: var(--read-notification-font-color);
		background-color: var(--read-background-color);
	}
  
	.notif-time{
		font-size:smaller;
		font-weight:normal;
	}
	.UNREAD .notif-time {
		color: rgb(228, 228, 228);
	}
	.READ .notif-time {
		color: gray;
	}

	.legend {
		margin-left: 20px;
		width: max-content;
		border: var(--legend-table-border);
	}

	.legend th {
		color: var(--font-color);
		border-bottom: var(--legend-table-border);
	}

	.legend .read-td {
		border-bottom: var(--legend-table-border);
	}

	.legend .notification {
		font-size: small;
		border-radius: var(--notification-li-border-radius);
		padding: var(--notification-li-border-padding);
		margin: var(--notification-li-border-margin);
		list-style-type: none;
	}
	.delete_button {
		margin-top: 7px;
		height: 21px;
	}
</style>
