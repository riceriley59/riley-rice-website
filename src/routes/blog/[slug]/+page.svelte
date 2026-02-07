<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title} - My Blog</title>
</svelte:head>

<div class="container">
	<article class="post">
		<header>
			<h1>{data.metadata.title}</h1>
			<time>{data.metadata.date}</time>
		</header>

		<div class="content">
			<svelte:component this={data.content} />
		</div>
	</article>

	<a href="/blog" class="back-link">← Back to all posts</a>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
	}

	.post header {
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #e9ecef;
	}

	.post h1 {
		font-size: 2.5rem;
		margin: 0 0 0.5rem 0;
	}

	.post time {
		color: #666;
		font-size: 0.9rem;
	}

	.content :global(h1) {
		font-size: 2rem;
		margin-top: 2rem;
	}

	.content :global(h2) {
		font-size: 1.5rem;
		margin-top: 1.5rem;
	}

	.content :global(p) {
		margin: 1rem 0;
		line-height: 1.8;
	}

	.content :global(code) {
		background: #f6f8fa;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-size: 0.9em;
	}

	.content :global(pre) {
		background: #f6f8fa;
		padding: 1rem;
		border-radius: 6px;
		overflow-x: auto;
	}

	.content :global(pre code) {
		background: none;
		padding: 0;
	}

	.back-link {
		display: inline-block;
		margin-top: 3rem;
		color: #0066cc;
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}
</style>
