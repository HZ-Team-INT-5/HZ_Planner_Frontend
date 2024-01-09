<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import axios from 'axios';

  let formData = {
    username: '',
    password: '',
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5173/api/login', formData);
      console.log('Login successful!', response.data);

      // Redirect to a protected page after successful login
      navigate('/'); // Replace '/dashboard' with your desired route
    } catch (error) {
      console.error('Login failed', error);
    }
  };
</script>

<main>
  <h1>Login Page</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={formData.username} />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={formData.password} />

    <button type="submit">Login</button>
  </form>
</main>
