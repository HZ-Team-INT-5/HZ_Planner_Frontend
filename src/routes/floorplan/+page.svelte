<script>
	let floors = [0, 1, 2, 3, 4];
	let currentPage = 0; // Adjusted starting page to 0
  
	/**
	 * @param {number} page
	 */
	function goToPage(page) {
	  // Adjusted logic to prevent going below floor 0 and above floor 4
	  currentPage = Math.max(0, Math.min(page, floors.length - 1));
	}
  </script>
  
  <div class="container">
	<h1>Building Floor Plans</h1>
	<div class="floor-plan">
	  <img src={`/floor${currentPage}.jpg`} alt={`Floor ${currentPage}`} />
	  <p>Floor {currentPage}</p>
	</div>
  
	<div class="pagination">
	  <button on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 0}>Previous</button>
	  <p class="current-page">Page {currentPage}</p>
	  <button on:click={() => goToPage(currentPage + 1)} disabled={currentPage === floors.length - 1}>Next</button>
	</div>
  </div>

<style>
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
		text-align: center;
	}

	.floor-plan {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 20px;
		background-color: #e6f7ff;
		border: 1px solid #b3d9ff;
		border-radius: 8px;
		padding: 20px;
	}

	img {
		width: 100%;
		max-height: 80vh;
		object-fit: contain;
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
