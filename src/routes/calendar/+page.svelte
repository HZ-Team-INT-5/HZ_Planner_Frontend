<script>
	const date = new Date();

	const today = {
		dayNumber: date.getDate(),
		month: date.getMonth(),
		year: date.getFullYear()
	};

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	let monthIndex = date.getMonth();
	$: month = monthNames[monthIndex];

	let year = date.getFullYear();

	$: firstDayIndex = new Date(year, monthIndex, 1).getDay();
	$: numberOfDays = new Date(year, monthIndex + 1, 0).getDate();

	$: calendarCellsQty = numberOfDays + firstDayIndex;

	const goToNextMonth = () => {
		if (monthIndex >= 11) {
			year += 1;
			return (monthIndex = 0);
		}
		return (monthIndex += 1);
	};

	const goToPrevMonth = () => {
		if (monthIndex <= 0) {
			year -= 1;
			return (monthIndex = 11);
		}
		return (monthIndex -= 1);
	};

	$: console.log(
		`${month}, ${today.dayNumber}, ${year}, FIRST DAY index is ${firstDayIndex}, MONTH index is ${monthIndex}, No. of days: ${numberOfDays}`
	);

	$: showEventMenu = false;
	$: selectedDay = null;

	const openEventMenu = (/** @type {any} */ day) => {
	    selectedDay = day;
	    showEventMenu = true;
	};

	const closeEventMenu = () => {
	    showEventMenu = false;
	    // Reset selectedDay when the menu is closed
	    selectedDay = null;
	};
</script>

<div class="month">
	<ul>
		<button class="prev" on:click={goToPrevMonth}>&#10094;</button>
		<button class="next" on:click={goToNextMonth}>&#10095;</button>
		<button on:click={() => openEventMenu(null)}>
			{month}<br />
			<span style="font-size:18px">{year}</span>
	</button>	
	</ul>
</div>

<ul class="weekdays">
	<li>Su</li>
	<li>Mo</li>
	<li>Tu</li>
	<li>We</li>
	<li>Th</li>
	<li>Fr</li>
	<li>Sa</li>
</ul>

<ul class="days">
	{#each Array(calendarCellsQty) as _, i}
			{#if i < firstDayIndex || i >= numberOfDays + firstDayIndex}
					<li>&nbsp;</li>
			{:else}
					<li
							class:active={i === today.dayNumber + (firstDayIndex - 1) &&
									monthIndex === today.month &&
									year === today.year}
							on:click={() => openEventMenu(i - firstDayIndex + 1)}
							on:keydown={() => {}}
					>
							{i - firstDayIndex + 1}
					</li>
			{/if}
	{/each}
</ul>

{#if showEventMenu && selectedDay !== null}
	<div class="event-menu">
		<h2>Event Details</h2>
		<form>
			<label for="eventName">Name of event:</label>
			<input type="text" id="eventName" name="eventName" />

			<label for="startTime">Start time:</label>
			<input type="text" id="startTime" name="startTime" placeholder="HH:mm" />

			<label for="endTime">End time:</label>
			<input type="text" id="endTime" name="endTime" placeholder="HH:mm" />

			<label for="additionalInfo">Additional information:</label>
			<textarea id="additionalInfo" name="additionalInfo"></textarea>

			<button type="button" on:click={closeEventMenu}>Cancel</button>
			<button type="submit">Save</button>
		</form>
	</div>
{/if}

<style>
	ul {
		list-style-type: none;
	}

	/* Month header */
	.month {
		padding: 30px 25px;
		width: auto;
		background: rgb(26, 177, 188);
		text-align: center;
	}

	/* Month list */
	.month ul {
		margin: 0;
		padding: 0;
	}

	.month ul li {
		color: white;
		font-size: 20px;
		text-transform: uppercase;
		letter-spacing: 3px;
		cursor: pointer;
	}

	/* Previous button inside month header */
	.month .prev {
		float: left;
		padding-top: 10px;
		cursor: pointer;
	}

	/* Next button */
	.month .next {
		float: right;
		padding-top: 10px;
		cursor: pointer;
	}

	/* Weekdays (Mon-Sun) */
	.weekdays {
		margin: 0;
		padding: 10px 0;
		background-color: #ddd;
	}

	.weekdays li {
		display: inline-block;
		width: 14%;
		color: #666;
		text-align: center;
	}

	/* Days (1-31) */
	.days {
		padding: 10px 0;
		background: #eee;
		margin: 0;
	}

	.days li {
		list-style-type: none;
		display: inline-block;
		border: 1px solid black;
		padding: 9px;
		width: 13.2%;
		height: 100px;
		text-align: center;
		margin-bottom: 1px;
		font-size: 1.2rem;
		color: #777;
		cursor: pointer;
	}

	/* Highlight the "current" day */
	.active {
		padding: 5px;
		background: rgb(26, 177, 188);
		color: white !important;
	}

	/* Event menu */
	.event-menu {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		padding: 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		z-index: 1000;
	}

	.event-menu h2 {
		text-align: center;
	}

	.event-menu label {
		display: block;
		margin-top: 10px;
	}

	.event-menu input,
	.event-menu textarea {
		width: 100%;
		padding: 8px;
		margin-top: 5px;
		margin-bottom: 15px;
		box-sizing: border-box;
	}

	.event-menu button {
		background: rgb(26, 177, 188);
		color: white;
		padding: 10px 20px;
		border: none;
		cursor: pointer;
		margin-right: 10px;
	}

	.event-menu button:hover {


		background: #135d63;
	}
</style>
