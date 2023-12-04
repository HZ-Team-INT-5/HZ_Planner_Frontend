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
</body>

<style>
	:root {
		/* Page in general */
		--page-background-color: #f0f5f9;
		--font-color: rgb(55, 152, 219);
		/* Notification li variables*/
		--notification-li-border-radius: 5px;
		--notification-li-border-padding: 5px;
		--notification-li-border-margin: 2px;
		--unread-list-style-type: circle;
		/* Notification colors */
		--unread-background-color: rgba(108, 194, 255, 0.85);
		--read-background-color: rgba(0, 0, 0, 0);
		--unread-notification-font-color: black;
		--read-notification-font-color: black;
		/* Legend Table */
		--legend-table-border:1px solid black;
	}
	body {
		margin: 0px;
		background-color: var(--page-background-color);
	}
	h2 {
		color: var(--font-color);
		padding: 10px;
		margin-top: 0px;
		margin-left: 0px;
	}
	.notification-parent {
		display: flex;
	}
	.notification_li_div {
		width: 80%;
		max-width: 800px;
		/* backgrond color used for debugging purposes */
		/* background-color:red; */
	}
	.set_as_unread_div {
	}
	.set_as_unread_button {
	}
	.notification_li {
		max-width: 100%;
		/* border: solid 1px black; */
		border-radius: var(--notification-li-border-radius);
		padding: var(--notification-li-border-padding);
		margin: var(--notification-li-border-margin);
		list-style-position: outside;
	}
	.unread {
		list-style-type: var(--unread-list-style-type);
		font-weight: bold;
		color: var(--unread-notification-font-color);
		background-color: var(--unread-background-color);
	}
	.read {
		list-style-type: none;
		color: var(--read-notification-font-color);
		background-color: var(--read-background-color);
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
	.legend .read-td{
		border-bottom: var(--legend-table-border);
	}
	.legend .notification {
		border-radius: var(--notification-li-border-radius);
		padding: var(--notification-li-border-padding);
		margin: var(--notification-li-border-margin);
	}
	.ul .legend {
		border: 0px;
		margin: 0px;
		padding: 0px;
	}
</style>
