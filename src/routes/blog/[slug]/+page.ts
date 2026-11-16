import { error } from '@sveltejs/kit';
import { posts } from '#lib/data';
import type { PageLoad } from './$types';

export const prerender = true;

export function entries() {
	return posts.map((p) => ({ slug: p.slug }));
}

export const load: PageLoad = ({ params }) => {
	const post = posts.find((p) => p.slug === params.slug);
	if (!post) error(404, 'Article not found');
	return { post, others: posts.filter((p) => p.slug !== params.slug) };
};
