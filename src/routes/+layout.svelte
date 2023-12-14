<header>
	<div class="navbar">
		<h1><a href="/">HZ Planner</a></h1>
		<ul>
			<li><img src="logo.jpg" alt="HZ Planner Logo"></li>
			<li><a href="/">Home</a></li>
			<li><a class="about" href="/about">About</a></li>
			<li><a href="/notifications">Notifications</a></li>
		</ul>
	</div>
</header>

<slot />
<script>
	import { onMount } from 'svelte';
import { fetchCalendarData } from './db';

onMount(async () => {
  try {
    await fetchCalendarData();
    // Do other things after fetching data if needed
  } catch (error) {
    // Handle errors
  }
});
</script>
<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	img {
		height: 80%;
		width: 15%;
		padding: 0;
	}
	header {
		background-color: #d1e2ee;
		color: #3498db;
		padding-top: 15px;
		padding-bottom: 5px;
		text-align: center;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navbar ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
	}

	.navbar li {
		margin-right: 20px;
	}

	.navbar a {
		text-decoration: none;
		color: #3498db;
	}
</style>
