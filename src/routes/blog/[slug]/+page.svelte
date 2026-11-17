<script lang="ts">
	import { reveal } from '#lib/reveal';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const post = $derived(data.post);
	const others = $derived(data.others);

	const blogJsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: post.title,
			description: post.excerpt,
			image: `https://forgefits.pages.dev${post.image}`,
			datePublished: post.dateISO,
			author: { '@type': 'Person', name: 'Arjun Mehta', jobTitle: 'Certified Personal Trainer' },
			publisher: {
				'@type': 'Organization',
				name: 'ForgeFit',
				url: 'https://forgefits.pages.dev/'
			},
			mainEntityOfPage: `https://forgefits.pages.dev/blog/${post.slug}`,
			articleSection: post.category,
			inLanguage: 'en'
		})
	);
	const breadcrumbJsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://forgefits.pages.dev/' },
				{ '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://forgefits.pages.dev/blog' },
				{
					'@type': 'ListItem',
					position: 3,
					name: post.title,
					item: `https://forgefits.pages.dev/blog/${post.slug}`
				}
			]
		})
	);
</script>

<svelte:head>
	<title>{post.title} — ForgeFit</title>
	<meta name="description" content={post.excerpt} />
	{@html `<script type="application/ld+json">${blogJsonLd}</script>`}
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<article class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
	<p class="eyebrow" use:reveal>{post.category}</p>
	<h1 class="mt-4 text-4xl leading-tight font-bold text-white sm:text-5xl" use:reveal>{post.title}</h1>
	<p class="mt-4 text-sm text-ash" use:reveal={100}>
		{post.date} · {post.read} · by Arjun Mehta, Certified Personal Trainer
	</p>
	<img
		src={post.image}
		alt={post.title}
		class="mt-8 aspect-[16/9] w-full rounded-lg object-cover"
		width="900"
		height="506"
		fetchpriority="high"
	/>
	<div class="mt-8 space-y-5 text-lg leading-relaxed text-bone/85" use:reveal>
		{#each post.body as para}
			<p>{para}</p>
		{/each}
	</div>

	<div class="mt-10 border-t border-line pt-6" use:reveal>
		<h2 class="text-xs font-bold tracking-widest text-white uppercase">Sources</h2>
		<ul class="mt-3 space-y-2 text-sm">
			{#each post.sources as s}
				<li>
					<a class="text-flame hover:text-ember" href={s.url} target="_blank" rel="noopener">{s.label} ↗</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="mt-12 rounded-lg bg-flame p-7 text-center" use:reveal>
		<h2 class="font-display text-3xl tracking-wide text-white uppercase">Want a plan built for you?</h2>
		<p class="mx-auto mt-2 max-w-md text-white/85">
			Reading helps. Coaching changes things. Your first session is free.
		</p>
		<a
			href="/book"
			class="mt-5 inline-block rounded-sm bg-ink px-7 py-3 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-coal"
		>
			Book a free session →
		</a>
	</div>

	<h2 class="mt-14 font-display text-3xl tracking-wide text-white uppercase" use:reveal>More articles</h2>
	<div class="mt-6 grid gap-4 sm:grid-cols-2">
		{#each others as other}
			<a
				href="/blog/{other.slug}"
				class="group overflow-hidden rounded-lg border border-line bg-coal transition hover:border-flame/60"
				use:reveal
			>
				<img
					src={other.image}
					alt={other.title}
					class="aspect-[16/9] w-full object-cover"
					loading="lazy"
					width="600"
					height="338"
				/>
				<div class="p-5">
					<p class="text-[11px] font-bold tracking-widest text-flame uppercase">{other.category}</p>
					<h3 class="mt-2 leading-snug font-bold text-white">{other.title}</h3>
				</div>
			</a>
		{/each}
	</div>
</article>
