<script lang="ts">
</script>

<svelte:head>
	<title>About - My Blog</title>
</svelte:head>

<div class="container">
	<h1>About Me</h1>

	<div class="about-content">
		<section class="intro">
			<p class="lead">
				Hi! I'm a developer passionate about building modern web applications
				and sharing what I learn along the way.
			</p>
		</section>

		<section>
			<h2>What I Do</h2>
			<p>
				I specialize in web development with a focus on creating fast,
				user-friendly applications. I love working with modern tools like
				SvelteKit, TypeScript, and exploring new technologies.
			</p>
		</section>

		<section>
			<h2>About This Blog</h2>
			<p>
				This blog is where I share tutorials, tips, and thoughts about web
				development. I built it using SvelteKit and Bun to demonstrate how
				easy it is to create a fast, modern blog from scratch.
			</p>
			<p>
				All posts are written in Markdown, making it simple to add new content
				without touching any code. The entire site is open source and designed
				to be a learning resource for others.
			</p>
		</section>

		<section>
			<h2>Get In Touch</h2>
			<p>
				I'd love to hear from you! Whether you have questions, feedback, or
				just want to connect, feel free to reach out.
			</p>
			<div class="links">
				<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
				<a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
				<a href="mailto:your.email@example.com">Email</a>
			</div>
		</section>
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	.about-content {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	section {
		line-height: 1.8;
	}

	.intro {
		padding: 2rem;
		background: #f8f9fa;
		border-radius: 8px;
		border-left: 4px solid #0066cc;
	}

	.lead {
		font-size: 1.25rem;
		margin: 0;
		color: #333;
	}

	h2 {
		font-size: 1.75rem;
		margin-bottom: 1rem;
		color: #222;
	}

	p {
		margin-bottom: 1rem;
		color: #555;
	}

	.links {
		display: flex;
		gap: 1.5rem;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	.links a {
		color: #0066cc;
		text-decoration: none;
		font-weight: 500;
		padding: 0.5rem 1rem;
		border: 2px solid #0066cc;
		border-radius: 6px;
		transition: all 0.2s;
	}

	.links a:hover {
		background: #0066cc;
		color: white;
	}

	@media (max-width: 640px) {
		.container {
			padding: 1rem;
		}

		h1 {
			font-size: 2rem;
		}

		.intro {
			padding: 1.5rem;
		}

		.lead {
			font-size: 1.1rem;
		}
	}
</style>
