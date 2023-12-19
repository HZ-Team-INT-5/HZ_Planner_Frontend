<script>
	import { enhance } from '$app/forms'
	export let form
</script>

<form method="post" use:enhance>
  <input name="email" value={form?.email ?? ''}/>
  <input type="password" name="password"/>
  <button type="submit">Sign up</button>
</form>