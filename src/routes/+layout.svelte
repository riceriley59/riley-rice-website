<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="app">
	<nav>
		<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
		<a href="/about" class:active={$page.url.pathname.startsWith('/about')}>About</a>
		<a href="/blog" class:active={$page.url.pathname.startsWith('/blog')}>Blog</a>
	</nav>

	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; 2026 Riley Rice</p>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		line-height: 1.6;
		color: #333;
	}

	:global(*) {
		box-sizing: border-box;
	}

	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	nav {
		background: #f8f9fa;
		padding: 1rem 2rem;
		border-bottom: 1px solid #e9ecef;
	}

	nav a {
		margin-right: 1.5rem;
		text-decoration: none;
		color: #333;
		font-weight: 500;
	}

	nav a:hover {
		color: #0066cc;
	}

	nav a.active {
		color: #0066cc;
		border-bottom: 2px solid #0066cc;
	}

	main {
		flex: 1;
		padding: 2rem;
	}

	footer {
		background: #f8f9fa;
		padding: 2rem;
		text-align: center;
		border-top: 1px solid #e9ecef;
		margin-top: 4rem;
	}

	footer p {
		margin: 0;
		color: #666;
		font-size: 0.9rem;
	}
</style>
