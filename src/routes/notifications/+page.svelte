<script>
	let notifs = [
		{
			desc: 'Upcoming Lesson on 28/12/23 on "Introduction to Svelte" has been changed from 10:30 to 10:45',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'read' },
		{
			desc: 'Reminder: sign up for the upcoming Job Event on Friday 1st of, it could help you to find internship!',
			status: 'unread'
		}
	];
</script>

<h1>Notifications Page 🔔</h1>
<div></div>
<ul>
	{#each notifs as notif}
		<li class="notification {notif.status}">{notif.desc}</li>
	{/each}
</ul>

<br />
<br />
<table>
	<th>Legend</th>
	<tr>
		<p class="notification read legend">Read notifications</p>
	</tr>
	<tr>
		<p class="notification unread legend">Unread notifications</p>
	</tr>
</table>

<style>
	.notification {
		list-style-type: none;
		border: solid 1px black;
		padding: 5px;
		margin: 2px;
	}
	.unread {
		color: white;
		background-color: brown;
	}
	.read {
		color: white;
		background-color: darkgreen;
	}
	.legend {
		width: min-content;
	}
</style>
