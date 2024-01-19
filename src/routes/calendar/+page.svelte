<script>
	import { onMount } from 'svelte';
	import { Calendar } from '@fullcalendar/core';
	import interactionPlugin from '@fullcalendar/interaction';
	import dayGridPlugin from '@fullcalendar/daygrid';

	let calendar;
	let formData = {
		title: '',
		start: ''
	};

	onMount(() => {
		const calendarEl = document.getElementById('calendar');

		if (calendarEl) {
			fetch('http://localhost:3000/events')
				.then((response) => response.json())
				.then((events) => {
					events = events.map((event) => ({
						...event,
						id: event.id
					}));
					calendar = new Calendar(calendarEl, {
						plugins: [interactionPlugin, dayGridPlugin],
						events: events,
						selectable: true,
						editable: true,
						eventColor: 'lightblue',
						eventTextColor: 'darkblue',
						eventSourceFailure: function () {
							alert('There was an error while fetching events!');
						},
						dateClick: function (info) {
							openEventForm(info.dateStr);
						},
						eventClick: function (info) {
							const eventId = info.event.id;
							openEventForm(info.event.start, info.event.title, eventId);
						}
					});

					calendar.render();
				})
				.catch((error) => {
					console.error('Error fetching events:', error);
				});
		}
	});
	function formatDate(date) {
		if (typeof date === 'string') {
			date = new Date(date);
		}
		if (date instanceof Date && !isNaN(date)) {
			return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
		} else {
			console.error('Invalid date:', date);
			return '';
		}
	}

	function openEventForm(date, title, eventId) {
		const formContainer = document.getElementById('eventFormContainer');
		formContainer.style.display = 'block';
		const formattedDate = formatDate(date);
		document.getElementById('eventDate').innerText = formattedDate;
		document.getElementById('eventTitle').value = title;

		formData.start = date;
		formData.title = title;
		formData.id = eventId;
	}

	async function addOrUpdateEvent() {
		const title = document.getElementById('eventTitle').value;
		const startdate = formData.start;

		if (formData.id) {
			await editEvent(title, startdate);
		} else {
			await addEventToBackend(title, startdate);
			await postNotificationData(title, startdate);
		}

		closeEventForm();
	}

	async function postNotificationData(title, startdate) {
		const options = {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		};


		startdate= new Date(startdate).toLocaleDateString('en-UK', options);
		
		let desc = `Event ${title} has been set for ${startdate}.`;

		let notif = { desc: desc, user_id: '1' };
		console.log(notif);
		try {
			const response = await fetch(`http://localhost:3000/notifications/1`, { // /1 is the user id
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
	async function addEventToBackend(title, startdate) {
		try {
			const response = await fetch('http://localhost:3000/events', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ title, start: startdate })
			});

			if (response.ok) {
				console.log('Event added successfully to backend');
				const calendarEl = document.getElementById('calendar');
				if (calendarEl) {
					fetch('http://localhost:3000/events')
						.then((response) => response.json())
						.then((events) => {
							events = events.map((event) => ({
								...event,
								id: event.id
							}));
							calendar = new Calendar(calendarEl, {
								plugins: [interactionPlugin, dayGridPlugin],
								events: events,
								selectable: true,
								editable: true,
								eventColor: 'lightblue',
								eventTextColor: 'darkblue',
								eventSourceFailure: function () {
									alert('There was an error while fetching events!');
								},
								dateClick: function (info) {
									openEventForm(info.dateStr);
								},
								eventClick: function (info) {
									const eventId = info.event.id;
									openEventForm(info.event.start, info.event.title, eventId);
								}
							});

							calendar.render();
						})
						.catch((error) => {
							console.error('Error fetching events:', error);
						});
				}
			} else {
				console.error('Failed to add event to backend');
			}
		} catch (error) {
			console.error('Error adding event to backend:', error);
		}
	}

	function closeEventForm() {
		const formContainer = document.getElementById('eventFormContainer');
		formContainer.style.display = 'none';
	}

	async function editEvent(title, eventId) {
		try {
			const eventId = formData.id;
			const response = await fetch(`http://localhost:3000/events/${eventId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ title })
			});

			if (response.ok) {
				console.log('Event title updated successfully');
				const calendarEvent = calendar.getEventById(eventId);

				if (calendarEvent) {
					calendarEvent.setProp('title', title);
				}
			} else {
				console.error('Failed to update event title');
			}
		} catch (error) {
			console.error('Error updating event title:', error);
		}
	}
	async function deleteEvent() {
		const eventId = formData.id;

		try {
			const response = await fetch(`http://localhost:3000/events/${eventId}`, {
				method: 'DELETE'
			});

			if (response.ok) {
				console.log('Event deleted successfully');
				calendar.getEventById(eventId).remove();
			} else {
				console.error('Failed to delete event');
			}
		} catch (error) {
			console.error('Error deleting event:', error);
		}
	}
</script>

<div style="display: flex;">
	<div id="calendar" style="flex: 1;"></div>

	<div class="event-form" id="eventFormContainer" style="display: none;">
		<h3><span id="eventDate"></span></h3>
		<div class="form-field">
			<label for="eventTitle">Description:</label>
			<input type="text" id="eventTitle" />
		</div>
		<button on:click={() => addOrUpdateEvent()}>{formData.id ? 'Save' : 'Add'}</button>
		{#if formData.id}
			<button on:click={deleteEvent}>Delete Event</button>
		{/if}
		<button on:click={closeEventForm}>Cancel</button>
	</div>
</div>
<footer>
	<p>&copy; 2023 HZ Planner. All rights reserved.</p>
</footer>

<style>
	#calendar {
		font-family: 'Helvetica', sans-serif;
		max-width: 800px;
		margin: 0 auto;
		margin-top: 50px;
		display: flex;
	}

	.event-form {
		display: none;
		position: absolute;
		right: 20px;
		top: 100px;
		width: 300px;
		padding: 20px;
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 5px;
		z-index: 1000;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.form-field {
		margin-bottom: 10px;
	}

	.calendar-container {
		position: relative;
		flex: 1;
	}
	footer {
		font-family: Arial, sans-serif;
		font-weight: bold;
		position: sticky;
		background-color: #d1e2ee;
		color: #3498db;
		text-align: center;
		padding-top: 20px;
		padding-bottom: 5px;
		margin-top: 75px;
		width: 100%;
		height: 60px;
	}
</style>
