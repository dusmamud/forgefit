<script lang="ts">
	import { programs } from '#lib/data';
	import { reveal } from '#lib/reveal';
	import { speakableJsonLd } from '#lib/seo';
	import Picture from '#lib/components/Picture.svelte';

	const itemListJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'ForgeFit Programs',
		itemListElement: programs.map((p, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: p.title,
			url: `https://forgefits.pages.dev/programs/${p.slug}`
		}))
	});
</script>

<svelte:head>
	<title>Programs — ForgeFit Personal Training</title>
	<meta
		name="description"
		content="One-on-one coaching, online programs, nutrition planning and small-group training. Every ForgeFit program is built around your goals."
	/>
	{@html `<script type="application/ld+json">${itemListJsonLd}</script>`}
	{@html `<script type="application/ld+json">${speakableJsonLd()}</script>`}
</svelte:head>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<p class="eyebrow" use:reveal>What I offer</p>
	<h1 class="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-7xl" use:reveal>
		Programs<br />built to win
	</h1>
	<p class="speakable mt-5 max-w-2xl leading-relaxed text-ash" use:reveal={100}>
		Four ways to train with ForgeFit. Every program starts with an assessment and a plan built for your body, your
		schedule and your goals — no templates, no fluff.
	</p>

	<div class="mt-12 grid gap-4 sm:grid-cols-2">
		{#each programs as program, i}
			<a
				href="/programs/{program.slug}"
				class="group overflow-hidden rounded-lg border border-line bg-coal transition hover:border-flame/60"
				use:reveal={i * 80}
			>
				<Picture
					base={program.image}
					alt={program.title}
					cls="aspect-[16/9] w-full object-cover transition group-hover:scale-[1.02]"
					loading="lazy"
					width={800}
					height={450}
					sizes="(min-width: 1024px) 600px, 100vw"
				/>
				<div class="p-6">
					<p class="text-xs font-bold tracking-widest text-ember">{program.num}</p>
					<h2 class="mt-2 font-display text-3xl tracking-wide text-white uppercase">{program.title}</h2>
					<p class="mt-2 leading-relaxed text-ash">{program.desc}</p>
					<p class="mt-4 text-sm font-semibold text-white">
						{program.price} <span class="font-normal text-ash">· {program.duration}</span>
					</p>
					<span class="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-ember uppercase">
						See details →
					</span>
				</div>
			</a>
		{/each}
	</div>

	<div class="mt-12 rounded-lg bg-flame-dark p-8 text-center" use:reveal>
		<h2 class="font-display text-3xl tracking-wide text-white uppercase sm:text-4xl">Not sure which one fits?</h2>
		<p class="mx-auto mt-3 max-w-lg text-white/85">
			Book a free session. We assess, we talk, and we tell you honestly which program suits you — even if the
			answer is “none of these yet”.
		</p>
		<a
			href="/book"
			class="mt-6 inline-block rounded-sm bg-ink px-8 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-coal"
		>
			Book a free session →
		</a>
	</div>
</section>
