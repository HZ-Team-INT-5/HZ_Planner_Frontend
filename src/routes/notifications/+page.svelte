<script lang="ts">
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
	function setAsRead(notif: { desc: string; status: any }) {
		notif.status = 'read';
		notifs = notifs;
		return;
	}
	function setAsUnread(notif: { desc: string; status: any }) {
		notif.status = 'unread';
		notifs = notifs;
		return;
	}
</script>

<body>
	<h2>Notifications 🔔</h2>
	<div></div>
	<ul>
		{#each notifs as notif}
			<!-- todo: add accessibility option for people that don't use a mouse -->
			<div class="notification-parent">
				<div on:click={() => setAsRead(notif)} class="notification_li_div">
					<li class="notification_li {notif.status}">{notif.desc}</li>
				</div>
				{#if notif.status === 'read'}
					<div class="set_as_unread_div">
						<button on:click={() => setAsUnread(notif)} class="set_as_unread_button"
							>Set as unread</button
						>
					</div>
				{/if}
			</div>
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
		margin: 0px;
		background-color: #f0f5f9;
	}
	h2 {
		color: #3798db;
		padding: 10px;
		margin-top: 0px;
		margin-left: 0px;
	}
	.notification-parent {
		display: flex;
	}
	.notification_li_div {
		width: 80%;
		/* backgrond color used for debugging purposes */
		/* background-color:red; */
	}
	.set_as_unread_div {
	}
	.set_as_unread_button {
	}
	.notification_li {
		max-width: 100%;
		list-style-type: none;
		/* border: solid 1px black; */
		border-radius: 5px;
		padding: 5px;
		margin: 2px;
	}
	.unread {
		color: white;
		background-color: rgba(165, 42, 42,0.85);
	}
	.read {
		color: white;
		background-color: rgba(0, 100, 0,0.8);

	}
	.legend {
		margin-left:20px;
		width: min-content;
	}
	.legend th {
		color: #3798db;
	}
	.legend .notification{
		padding: 5px;
		margin: 2px;
		border-radius: 5px;
	}
</style>
