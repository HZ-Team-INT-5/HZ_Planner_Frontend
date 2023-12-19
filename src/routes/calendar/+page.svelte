<script>
  import { onMount } from 'svelte';
  import { Calendar } from '@fullcalendar/core';
  import interactionPlugin from '@fullcalendar/interaction'; // for selectable
  import dayGridPlugin from '@fullcalendar/daygrid';

  let calendar;

  onMount(() => {
    const calendarEl = document.getElementById('calendar');

    if (calendarEl) {
      fetch('http://localhost:3000/get-events')
        .then(response => response.json())
        .then(events => {
          calendar = new Calendar(calendarEl, {
            plugins: [interactionPlugin, dayGridPlugin],
            events: events,
            selectable: true,
            eventColor: 'yellow',
            eventTextColor: 'red',
            eventSourceFailure: function () {
              alert('There was an error while fetching events!');
            },
            dateClick: function (info) {
              openEventForm(info.dateStr);
            }
          });

          calendar.render();
        })
        .catch(error => {
          console.error('Error fetching events:', error);
        });
    }
  });

  function openEventForm(date) {
    const formContainer = document.getElementById('eventFormContainer');
    formContainer.style.display = 'block';
    document.getElementById('eventDate').innerText = date;
  }

  function addEvent() {
    const date = document.getElementById('eventDate').innerText;
    const title = document.getElementById('eventTitle').value;

    calendar.addEvent({
      title,
      start: date
    });

    closeEventForm();
  }

  function closeEventForm() {
    const formContainer = document.getElementById('eventFormContainer');
    formContainer.style.display = 'none';
  }
</script>

<style>
  #calendar {
    max-width: 800px;
    margin: 0 auto;
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
</style>

<div class="calendar-container">
  <div id="calendar"></div>
</div>

<div class="event-form" id="eventFormContainer">
  <h3>Add Event</h3>
  <p>Date: <span id="eventDate"></span></p>
  <div class="form-field">
    <label for="eventTitle">Title:</label>
    <input type="text" id="eventTitle" />
  </div>
  <button on:click={addEvent}>Add Event</button>
  <button on:click={closeEventForm}>Cancel</button>
</div>
