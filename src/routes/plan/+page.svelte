<script>
  let floors = [1, 2, 3, 4, 5];
  let currentPage = 1;

  function goToPage(page) {
    currentPage = page;
  }
</script>

<style>
  /* Business-level styling with blue theme */
  h1 {
    text-align: center;
    color: #0073e6;
    margin-bottom: 20px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f5ff;
    border: 1px solid #b3d9ff;
    border-radius: 8px;
    text-align: center; /* Center content horizontally */
  }

  .floor-plan {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content vertically */
    margin-bottom: 20px;
    background-color: #e6f7ff;
    border: 1px solid #b3d9ff;
    border-radius: 8px;
    padding: 20px;
  }

  img {
    width: 100%; /* Make the image fill the container */
    max-height: 80vh; /* Limit the image height */
    object-fit: contain; /* Preserve aspect ratio */
    border: 1px solid #b3d9ff;
    border-radius: 8px;
  }

  p {
    text-align: center;
    margin-top: 8px;
    color: #0073e6;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  button {
    background-color: #0073e6;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    margin: 0 4px;
    border-radius: 4px;
    cursor: pointer;
  }

  .current-page {
    font-weight: bold;
  }
</style>

<div class="container">
  <h1>Building Floor Plans</h1>
  <div class="floor-plan">
    <img src={`/floor${currentPage}.jpg`} alt={`Floor ${currentPage}`} />
    <p>Floor {currentPage}</p>
  </div>

  <div class="pagination">
    <button on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
    <p class="current-page">Page {currentPage}</p>
    <button on:click={() => goToPage(currentPage + 1)} disabled={currentPage === floors.length}>Next</button>
  </div>
</div>