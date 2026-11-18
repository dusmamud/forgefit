<script lang="ts">
	import { groupSchedule, sampleDay } from '#lib/data';
	import { reveal } from '#lib/reveal';
	import Picture from '#lib/components/Picture.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const program = $derived(data.program);
	const others = $derived(data.others);

	const serviceJsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: program.title,
			description: program.desc,
			// One canonical business entity (defined in +layout.svelte) — a
			// duplicated nested block reads as a second, sparse business in
			// Rich Results. Reference it by @id instead.
			provider: { '@id': 'https://forgefits.pages.dev/#business' },
			areaServed: 'Mumbai, India',
			url: `https://forgefits.pages.dev/programs/${program.slug}`
		})
	);
	const breadcrumbJsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://forgefits.pages.dev/' },
				{ '@type': 'ListItem', position: 2, name: 'Programs', item: 'https://forgefits.pages.dev/programs' },
				{
					'@type': 'ListItem',
					position: 3,
					name: program.title,
					item: `https://forgefits.pages.dev/programs/${program.slug}`
				}
			]
		})
	);
</script>

<svelte:head>
	<title>{program.title} — ForgeFit</title>
	<meta name="description" content="{program.tagline}. {program.desc}" />
	{@html `<script type="application/ld+json">${serviceJsonLd}</script>`}
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<section class="relative overflow-hidden">
	<Picture
		base={program.image}
		alt={program.title}
		cls="h-[320px] w-full object-cover opacity-60 sm:h-[420px]"
		width={1200}
		height={600}
		sizes="100vw"
		fetchpriority="high"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"></div>
	<div class="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
		<p class="eyebrow" use:reveal>Program {program.num}</p>
		<h1 class="mt-3 font-display text-5xl leading-[0.9] tracking-wide text-white uppercase sm:text-7xl" use:reveal>
			{program.title}
		</h1>
		<p class="mt-3 max-w-xl text-lg text-bone/85" use:reveal={100}>{program.tagline}.</p>
	</div>
</section>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-10 lg:grid-cols-3">
		<div class="lg:col-span-2" use:reveal>
			<p class="text-lg leading-relaxed text-bone/90">{program.desc}</p>
			<h2 class="mt-10 font-display text-3xl tracking-wide text-white uppercase">What is included</h2>
			<ul class="mt-5 space-y-3">
				{#each program.includes as item}
					<li class="flex gap-3 rounded-lg border border-line bg-coal px-5 py-4 text-bone/90">
						<span class="font-bold text-ember">✓</span> {item}
					</li>
				{/each}
			</ul>
			<h2 class="mt-10 font-display text-3xl tracking-wide text-white uppercase">Best for</h2>
			<p class="mt-4 leading-relaxed text-ash">{program.bestFor}</p>
		</div>

		<aside class="h-fit rounded-lg border border-line bg-coal p-6 lg:sticky lg:top-24" use:reveal={120}>
			<p class="text-xs font-bold tracking-widest text-ember uppercase">Pricing</p>
			<p class="mt-2 font-display text-4xl text-white">{program.price}</p>
			<p class="mt-2 text-sm text-ash">{program.duration}</p>
			<a
				href="/book?program={program.slug}"
				class="mt-6 block rounded-sm bg-flame-dark py-3.5 text-center text-sm font-bold tracking-widest text-white uppercase transition hover:bg-flame-deep"
			>
				Book a free session
			</a>
			<p class="mt-4 text-center text-xs leading-relaxed text-ash">
				Free 30-minute assessment included.<br />No payment needed to book.
			</p>
		</aside>
	</div>

	{#if program.slug === 'nutrition-planning'}
		<div class="mt-16" use:reveal>
			<h2 class="font-display text-3xl tracking-wide text-white uppercase">A sample day of eating</h2>
			<p class="mt-2 max-w-xl text-sm leading-relaxed text-ash">
				Real Indian food, not a supplement list. Your plan is built around your calories and protein target —
				this is what one day can look like.
			</p>
			<div class="mt-6 grid gap-4 md:grid-cols-2">
				{#each [{ label: 'Vegetarian', meals: sampleDay.veg }, { label: 'Non-vegetarian', meals: sampleDay.nonveg }] as option}
					<div class="rounded-lg border border-line bg-coal p-6">
						<h3 class="font-display text-2xl tracking-wide text-white uppercase">{option.label}</h3>
						<ul class="mt-4 space-y-3 text-sm">
							{#each option.meals as m}
								<li class="border-b border-line pb-3 last:border-0 last:pb-0">
									<p class="text-xs font-bold tracking-widest text-ember uppercase">{m.meal}</p>
									<p class="mt-1 leading-relaxed text-bone/85">{m.items}</p>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if program.slug === 'group-training'}
		<div class="mt-16" use:reveal>
			<h2 class="font-display text-3xl tracking-wide text-white uppercase">Weekly schedule</h2>
			<p class="mt-2 max-w-xl text-sm leading-relaxed text-ash">
				Small batches, never more than 8 people. Book your batch from the <a class="font-semibold text-ember" href="/book?program=group-training">booking page</a> — pick a day and a slot.
			</p>
			<div class="mt-6 overflow-hidden rounded-lg border border-line">
				{#each groupSchedule as row, i}
					<div class="grid gap-1 border-b border-line bg-coal px-5 py-4 last:border-0 sm:grid-cols-[140px_1fr] sm:gap-4 {i % 2 === 1 ? 'bg-smoke/60' : ''}">
						<p class="font-display text-lg tracking-wide text-white uppercase">{row.day}</p>
						<p class="text-sm leading-relaxed text-bone/85">{row.sessions.join(' · ')}</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<h2 class="mt-16 font-display text-3xl tracking-wide text-white uppercase" use:reveal>Other programs</h2>
	<div class="mt-6 grid gap-4 sm:grid-cols-3">
		{#each others as other, i}
			<a
				href="/programs/{other.slug}"
				class="group overflow-hidden rounded-lg border border-line bg-coal transition hover:border-flame/60"
				use:reveal={i * 80}
			>
				<Picture
					base={other.image}
					alt={other.title}
					cls="aspect-[16/9] w-full object-cover"
					loading="lazy"
					width={600}
					height={338}
					sizes="(min-width: 1024px) 400px, 100vw"
				/>
				<div class="p-5">
					<h3 class="font-display text-xl tracking-wide text-white uppercase">{other.title}</h3>
					<p class="mt-1 text-sm text-ash">{other.price}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
