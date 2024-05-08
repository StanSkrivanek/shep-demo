<script>
	/**
	 * @type {any[]}
	 */
	 export let posts = [];
	// pagination base values
	let currentPage = 1;
	export const itemsPerPage = 2;
  
	// Assuming `allPosts` is an array of all your posts
	$: allPosts = posts;

	// Calculate the start and end indices for the current page's items
	$: start = (currentPage - 1) * itemsPerPage;
	$: end = start + itemsPerPage;

	// Get the current page's items
	$: currentPageItems = allPosts.slice(start, end);

	// Calculate the total number of pages
	$: totalPages = Math.ceil(allPosts.length / itemsPerPage);

	/**
	 * @param {number} page
	 */
	function goToPage(page) {
		currentPage = page;
	}

	function goToPreviousPage() {
		if (currentPage > 1) {
			currentPage--;
		}
	}

	function goToNextPage() {
		if (currentPage < totalPages) {
			currentPage++;
		}
	}
</script>

<div class="pagination__w">
	<button on:click={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
	{#each Array(totalPages) as _, i}
		<button class:current={currentPage === i + 1} on:click={() => goToPage(i + 1)}>{i + 1}</button>
	{/each}
	<button on:click={goToNextPage} disabled={currentPage === totalPages}>Next</button>
</div>
