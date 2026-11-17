<script lang="ts">
	import { posts } from '#lib/data';
	import { reveal } from '#lib/reveal';
	import { speakableJsonLd } from '#lib/seo';

	let category = $state('All');
	const categories = ['All', ...new Set(posts.map((p) => p.category))];
	const filtered = $derived(category === 'All' ? posts : posts.filter((p) => p.category === category));
</script>

<svelte:head>
	<title>Blog — ForgeFit | Training, Nutrition &amp; Mindset</title>
	<meta
		name="description"
		content="ForgeFit articles on training, nutrition and mindset — practical advice from a certified personal trainer, no fluff."
	/>
	{@html `<script type="application/ld+json">${speakableJsonLd()}</script>`}
</svelte:head>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<p class="eyebrow" use:reveal>Knowledge &amp; tips</p>
	<h1 class="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-7xl" use:reveal>
		Forge your<br />mindset
	</h1>
	<p class="speakable mt-5 max-w-2xl leading-relaxed text-ash" use:reveal={100}>
		Short, practical articles on training, nutrition and mindset. Everything here is what I actually tell my
		clients — no filler, no fads.
	</p>

	<div class="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter articles by category" use:reveal>
		{#each categories as c}
			<button
				type="button"
				aria-pressed={category === c}
				class="rounded-full border px-4 py-2 text-sm font-semibold transition {category === c
					? 'border-flame bg-flame text-white'
					: 'border-line bg-coal text-bone/85 hover:border-flame hover:text-white'}"
				onclick={() => (category = c)}>{c}</button
			>
		{/each}
	</div>

	<div class="mt-8 grid gap-4 md:grid-cols-3">
		{#each filtered as post, i}
			<a
				href="/blog/{post.slug}"
				class="card-zoom group overflow-hidden rounded-lg border border-line bg-coal transition hover:border-flame/60"
				use:reveal={i * 100}
			>
				<img
					src={post.image}
					alt={post.title}
					class="aspect-[16/10] w-full object-cover"
					loading="lazy"
					width="800"
					height="500"
				/>
				<div class="p-5">
					<p class="inline-block rounded-sm bg-flame px-2.5 py-1 text-[11px] font-bold tracking-widest text-white uppercase">
						{post.category}
					</p>
					<h2 class="mt-3 text-lg leading-snug font-bold text-white">{post.title}</h2>
					<p class="mt-2 text-sm leading-relaxed text-ash">{post.excerpt}</p>
					<p class="mt-4 flex items-center justify-between text-xs text-ash">
						<span>{post.date} · {post.read}</span>
						<span class="font-bold tracking-widest text-flame uppercase">Read more →</span>
					</p>
				</div>
			</a>
		{/each}
	</div>
</section>
