<script>
	import { onMount } from 'svelte';
	import { Calendar } from '@fullcalendar/core';
	import dayGridPlugin from '@fullcalendar/daygrid';

	// This page uses a module called fullcalendar. If it doesn't display the marked days run: npm install fullcalendar

	onMount(() => {
		const calendarEl = document.getElementById('calendar');

		if (calendarEl) {
			fetch('http://localhost:3000/get-events')
				.then((response) => response.json())
				.then((events) => {
					console.log(events);
					const calendar = new Calendar(calendarEl, {
						plugins: [dayGridPlugin],
						events: events,
						eventColor: '#E4F6F8',
						eventTextColor: '#0074B7',
						eventSourceFailure: function () {
							alert('There was an error while fetching events!');
						}
					});

					calendar.render();
				})
				.catch((error) => {
					console.error('Error fetching events:', error);
				});
		}
	});
</script>

<div id="calendar"></div>
<footer>
	<p>&copy; 2023 HZ Planner. All rights reserved.</p>
</footer>

<style>
	#calendar {
		font-family: Arial, sans-serif;
		max-width: 800px;
		margin: 0 auto;
		margin-top: 50px;
	}
	footer {
		font-family: Arial, sans-serif;

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
