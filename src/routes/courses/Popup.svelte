<script lang="ts">
	export let show: boolean = false;
    export let popupData: string; 

	function closePopup() {
	  show = false;
	}
</script>

<div class="popup" style={show ? 'display: block;' : 'display: none;'}>
	<div class="popup-content">
		<span class="close" on:click={closePopup}>&times;</span>
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
        margin:auto auto;
        justify-content: center;
		align-items: center;
		background: #fff;
		padding: 20px;
		border-radius: 5px;
		position: relative;
	}

	.close {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
</style>
