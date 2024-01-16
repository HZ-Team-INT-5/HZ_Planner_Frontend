<header>
	<div class="navbar">
		<h1><a href="/">HZ Planner</a></h1>
		<img class=img src="logo.jpg" alt="HZ Planner Logo">
		<ul>
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

	h1 {
		padding-left: 10px;
	}

	img {
		width: 15%;
		margin-left: 110px;
		position: static;
	}

	header {
		font-family: Arial, sans-serif;
		position: sticky;
		background-color: #d1e2ee;
		color: #3498db;
		padding-top: 15px;
		padding-bottom: 5px;
		text-align: center;
		top: 0;
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
		font-size: 20px;
	}

	.navbar a {
		font-weight: 600;
		text-decoration: none;
		color: #3498db;
	}
</style>
