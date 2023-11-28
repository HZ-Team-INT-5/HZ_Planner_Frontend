<script lang=ts>
	let notifs = [
		{
			desc: 'Upcoming Lesson on 28/12/23 on "Introduction to Svelte" has been changed from 10:30 to 10:45',
			status: 'unread'
		},
		{ desc: 'Reminder: make sure to study for the upcoming UX exam', status: 'read' },
		{
			desc: 'Reminder: sign up for the upcoming Job Event on Friday 1st of October, it could help you to find an internship!',
			status: 'unread'
		}
	];
	function setAsRead(notif: { desc: string; status: any; }){
		notif.status='read';
		notifs=notifs;
		return;
	}
</script>

<body>
	<h1>Notifications Page 🔔</h1>
	<div></div>
	<ul>
		{#each notifs as notif}
			<div on:click={()=>{setAsRead(notif)}} ><li class="notification {notif.status}">{notif.desc}</li></div>
		{/each}
	</ul>

	<br />
	<br />
	<table class="legend">
		<th>Legend</th>
		<tr>
			<p class="notification read">Read notifications</p>
		</tr>
		<tr>
			<p class="notification unread">Unread notifications</p>
		</tr>
	</table>
</body>

<style>
	body {
		margin:0px;
		background-color: #f0f5f9;
	}
	h1 {
		background-color: #3798db;
		color: white;
		padding: 10px;
		margin-top: 0px;
		margin-left: 0px;
	}
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
	.legend th {
		/* background-color: #3798DB;
		color:white; */
		color: #3798db;
	}
</style>
