<script>
	/**
	 * @type {any[]}
	 */
	let notes = [];
	let currentNote = '';
	let currentPage = 1;
	let searchPage = '';
	const itemsPerPage = 10;

	function addNote() {
		if (currentNote.trim() === '') {
			return;
		}

		notes = [...notes, currentNote];
		currentNote = '';
	}

	/**
	 * @param {{ key: string; }} event
	 */
	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			addNote();
		}
	}

	function nextPage() {
		currentPage += 1;
	}

	function prevPage() {
		currentPage -= 1;
	}

	function goToPage() {
		const pageNumber = parseInt(searchPage, 10);
		if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
			currentPage = pageNumber;
		}
		searchPage = '';
	}

	/**
	 * @param {{ key: string; }} event
	 */
	function handleGoToPage(event) {
		if (event.key === 'Enter') {
			goToPage();
		}
	}

	$: totalItems = notes.length;
	$: totalPages = Math.ceil(totalItems / itemsPerPage);
	$: displayedNotes = notes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
</script>

<main>
	<input bind:value={currentNote} on:keydown={handleKeyPress} />
	<button on:click={addNote}>Add Note</button>

	<table>
		{#each displayedNotes as note}
			<tr><td>{note}</td></tr>
		{/each}
	</table>

	<div class="pagination">
		<button on:click={prevPage} class="pagination-btn" disabled={currentPage === 1}>Previous</button
		>
		<span>{currentPage}/{totalPages}</span>
		<button on:click={nextPage} class="pagination-btn" disabled={currentPage === totalPages}
			>Next</button
		>
	</div>

	<div class="page-selector">
		<span>Go to Page:</span>
		<input bind:value={searchPage} type="number" placeholder="Page" on:keydown={handleGoToPage} />
		<button on:click={goToPage} class="pagination-btn">Go</button>
	</div>
</main>

<style>
	main {
		font-family: 'Arial', sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		margin: 0;
		background-color: #87cefa;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		border-radius: 10px;
		background-color: #ffffff;
	}

	input {
		padding: 10px;
		margin-bottom: 10px;
		font-size: 16px;
	}

	button {
		padding: 10px;
		font-size: 16px;
		cursor: pointer;
	}

	table {
		margin-top: 20px;
		border-collapse: collapse;
		width: 100%;
		max-width: 400px;
		margin-left: auto;
		margin-right: auto;
		background-color: #ffffff;
	}

	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: center;
		background-color: #f0f8ff;
	}

	tr:nth-child(even) td {
		background-color: #87cefa;
	}

	.pagination {
		display: flex;
		align-items: center;
		margin-top: 10px;
		margin-bottom: 5px;
	}

	.pagination-btn {
		margin: 0 5px;
		padding: 5px 10px;
		font-size: 14px;
		cursor: pointer;
	}

	.page-selector {
		display: flex;
		align-items: center;
	}

	.page-selector input {
		width: 50px;
		text-align: center;
	}
</style>
