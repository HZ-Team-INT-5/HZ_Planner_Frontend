<script context="module">
  let isVisible = false;
  let message = '';
  let callback;

  export function showConfirmation(msg, cb) {
    message = msg;
    callback = cb;
    isVisible = true;
    console.log(isVisible);
  }

  function handleConfirm() {
    callback();
    closeConfirmation();
  }

  function handleCancel() {
    closeConfirmation();
  }

  function closeConfirmation() {
    isVisible = false;
    message = '';
    callback = null;
  }
</script>

{#if isVisible}
  <div class="confirmation-overlay">
    <div class="confirmation-dialog">
      <p>{message}</p>
      <button on:click={handleConfirm}>Confirm</button>
      <button on:click={handleCancel}>Cancel</button>
    </div>
  </div>
{/if}

<style>
  .confirmation-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .confirmation-dialog {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
</style>