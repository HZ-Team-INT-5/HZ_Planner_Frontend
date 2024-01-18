<script>
  export let isOpen;
  export let onConfirm;
  export let onCancel;

  function confirm() {
    onConfirm();
  }

  function cancel() {
    onCancel();
  }
</script>

{#if isOpen}
  <div class="overlay">
    <div class="dialog">
      <p>Are you sure you want to delete this notification?</p>
      <button on:click={confirm}>Yes</button>
      <button on:click={cancel}>No</button>
    </div>
  </div>
{/if}

<style>
  .overlay {
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

  .dialog {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
</style>
