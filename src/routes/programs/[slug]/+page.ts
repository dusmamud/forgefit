import { error } from '@sveltejs/kit';
import { programs } from '#lib/data';
import type { PageLoad } from './$types';

export const prerender = true;

export function entries() {
	return programs.map((p) => ({ slug: p.slug }));
}

export const load: PageLoad = ({ params }) => {
	const program = programs.find((p) => p.slug === params.slug);
	if (!program) error(404, 'Program not found');
	return { program, others: programs.filter((p) => p.slug !== params.slug) };
};
