<script>
	import { onMount } from 'svelte';
	import { Calendar } from '@fullcalendar/core';
	import dayGridPlugin from '@fullcalendar/daygrid';

  // This page uses a module called fullcalendar. If it doesn't display the marked days run: npm install fullcalendar  

	onMount(() => {
  const calendarEl = document.getElementById('calendar');

  if (calendarEl) {
    fetch('http://localhost:3000/get-events')
      .then(response => response.json())
      .then(events => {
        console.log(events);
        const calendar = new Calendar(calendarEl, {
          plugins: [dayGridPlugin],
          events: events,
          eventColor: 'yellow',
          eventTextColor: 'red',
          eventSourceFailure: function () {
            alert('There was an error while fetching events!');
          }
        });

        calendar.render();
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }
});

  </script>
  
  <style>
	#calendar {
	  max-width: 800px;
	  margin: 0 auto;
	}
  </style>
  
  <div id="calendar"></div>
  