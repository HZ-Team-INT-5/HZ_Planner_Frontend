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
			fetch('http://localhost:3002/events')
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
						eventColor: 'yellow',
						eventTextColor: 'red',
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
		let desc = `Don't forget ${title} on  ${startdate}`;
		let notif = { desc: desc, user_id: '1' };
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

	async function addEventToBackend(title, startdate) {
		try {
			const response = await fetch('http://localhost:3002/events', {
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
					fetch('http://localhost:3002/events')
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
								eventColor: 'yellow',
								eventTextColor: 'red',
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
			const response = await fetch(`http://localhost:3002/events/${eventId}`, {
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

</script>
  
<style>
	#calendar {
	  max-width: 800px;
	  margin: 0 auto;
    margin-top: 50px;
	}
</style>
  
<div id="calendar"></div>
  
