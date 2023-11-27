<script>
    let floors = [1, 2, 3, 4, 5];
    let currentPage = 1;
  
    function goToPage(page) {
      currentPage = page;
    }
  </script>
  
  <style>
    .floor-plans {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  
    .floor-plan {
      flex: 0 1 calc(20% - 20px);
      margin-bottom: 20px;
      background-color: #e6f7ff;
      border: 1px solid #b3d9ff;
      border-radius: 8px;
      padding: 10px;
    }
  
    img {
      width: 100%;
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
  
  <div class="floor-plans">
    {#each floors as floor (floor)}
      {#if floor >= (currentPage - 1) * 5 && floor < currentPage * 5}
        <div class="floor-plan">
          <img src={`floor-plans/floor${floor}.jpg`} alt={`Floor ${floor}`} />
          <p>Floor {floor}</p>
        </div>
      {/if}
    {/each}
  
    <div class="pagination">
      <button on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
      <p class="current-page">Page {currentPage}</p>
      <button on:click={() => goToPage(currentPage + 1)} disabled={currentPage === Math.ceil(floors.length / 5)}>Next</button>
    </div>
  </div>