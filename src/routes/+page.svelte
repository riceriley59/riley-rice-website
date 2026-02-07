<script lang="ts">
</script>

<svelte:head>
	<title>My Blog</title>
</svelte:head>

<div class="container">
	<h1>Welcome to My Blog</h1>
	<p>A simple blog built with SvelteKit and Bun.</p>
	<a href="/blog">View all posts →</a>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.25rem;
		color: #666;
		margin-bottom: 2rem;
	}

	a {
		color: #0066cc;
		text-decoration: none;
		font-weight: 500;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
