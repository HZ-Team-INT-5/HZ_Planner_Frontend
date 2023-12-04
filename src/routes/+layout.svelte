<header>
	<div class="navbar">
		<h1><a href="/">HZ Planner</a></h1>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a class="about" href="/about">About</a></li>
		</ul>
	</div>
</header>

<slot />

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	header {
		background-color: #3498db;
		color: #ffffff;
		padding: 20px;
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
		color: #ffffff;
	}
</style>
