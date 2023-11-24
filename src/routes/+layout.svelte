<nav>
	<p>The HZ Planner</p>
	<a href="/">Home</a>
	<a href="/login">Profile</a>
</nav>

<slot></slot>

<style>
    
    nav {
        width: 100%;
        margin-bottom: 0px;
        display: flex;
        border: 1px solid black;
    }

    p {
        width: 90%;
        padding-left: 20px;
    }

    a {
        width: 5%;
        padding-right: 0px;
    }
</style>