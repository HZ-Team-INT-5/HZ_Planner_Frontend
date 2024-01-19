<script lang="ts">
	export let show: boolean = false;
	export let popupData: string;

	function closePopup() {
		show = false;
	}
	
	const handle_keydown = (e) => {
		if (e.key === 'Escape') return closePopup();
	};
</script>

<svelte:window on:keydown={handle_keydown} on:click|self|preventDefault={closePopup} />

<div
	class="popup"
	on:click|self|preventDefault={closePopup}
	style={show ? 'display: block;' : 'display: none;'}
>
	<div class="popup-content">
		<span role="button" on:keydown={handle_keydown} class="close-button" on:click={closePopup}
			>&times;</span
		>
		<p>{@html popupData}</p>
	</div>
</div>

<style>
	.popup {
		font-family: 'Helvetica', sans-serif;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: none;
		justify-content: center;
		align-items: center;
	}

	.popup-content {
		top: 10%;
		left: auto;
		width: 70%;
		margin: auto auto;
		justify-content: center;
		align-items: center;
		background: #fff;
		padding: 20px;
		border-radius: 5px;
		position: relative;
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
</style>
