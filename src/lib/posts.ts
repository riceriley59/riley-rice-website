export type Post = {
	title: string;
	date: string;
	slug: string;
	excerpt?: string;
};

export async function getPosts(): Promise<Post[]> {
	const postFiles = import.meta.glob('$lib/posts/*.md');
	const posts = await Promise.all(
		Object.entries(postFiles).map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as any;
			const slug = path.split('/').pop()?.replace('.md', '') || '';
			return {
				...metadata,
				slug
			};
		})
	);

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
