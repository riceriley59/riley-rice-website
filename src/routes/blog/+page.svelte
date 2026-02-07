<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Blog - My Blog</title>
</svelte:head>

<div class="container">
	<h1>Blog Posts</h1>

	<div class="posts">
		{#each data.posts as post}
			<article class="post-card">
				<a href="/blog/{post.slug}">
					<h2>{post.title}</h2>
					<time>{post.date}</time>
					{#if post.excerpt}
						<p>{post.excerpt}</p>
					{/if}
				</a>
			</article>
		{/each}
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.post-card {
		padding: 1.5rem;
		border: 1px solid #e9ecef;
		border-radius: 8px;
		transition: box-shadow 0.2s;
	}

	.post-card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.post-card a {
		text-decoration: none;
		color: inherit;
	}

	.post-card h2 {
		margin: 0 0 0.5rem 0;
		color: #0066cc;
		font-size: 1.5rem;
	}

	.post-card time {
		color: #666;
		font-size: 0.9rem;
	}

	.post-card p {
		margin-top: 1rem;
		color: #555;
	}
</style>
