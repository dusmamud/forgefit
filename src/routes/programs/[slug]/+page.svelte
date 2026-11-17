<script lang="ts">
	import { groupSchedule } from '#lib/data';
	import { reveal } from '#lib/reveal';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const program = $derived(data.program);
	const others = $derived(data.others);
</script>

<svelte:head>
	<title>{program.title} — ForgeFit</title>
	<meta name="description" content="{program.tagline}. {program.desc}" />
</svelte:head>

<section class="relative overflow-hidden">
	<img
		src={program.image}
		alt={program.title}
		class="h-[320px] w-full object-cover opacity-60 sm:h-[420px]"
		width="1200"
		height="600"
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
						<span class="font-bold text-flame">✓</span> {item}
					</li>
				{/each}
			</ul>
			<h2 class="mt-10 font-display text-3xl tracking-wide text-white uppercase">Best for</h2>
			<p class="mt-4 leading-relaxed text-ash">{program.bestFor}</p>
		</div>

		<aside class="h-fit rounded-lg border border-line bg-coal p-6 lg:sticky lg:top-24" use:reveal={120}>
			<p class="text-xs font-bold tracking-widest text-flame uppercase">Pricing</p>
			<p class="mt-2 font-display text-4xl text-white">{program.price}</p>
			<p class="mt-2 text-sm text-ash">{program.duration}</p>
			<a
				href="/book?program={program.slug}"
				class="mt-6 block rounded-sm bg-flame py-3.5 text-center text-sm font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark"
			>
				Book a free session
			</a>
			<p class="mt-4 text-center text-xs leading-relaxed text-ash">
				Free 30-minute assessment included.<br />No payment needed to book.
			</p>
		</aside>
	</div>

	{#if program.slug === 'group-training'}
		<div class="mt-16" use:reveal>
			<h2 class="font-display text-3xl tracking-wide text-white uppercase">Weekly schedule</h2>
			<p class="mt-2 max-w-xl text-sm leading-relaxed text-ash">
				Small batches, never more than 8 people. Book your batch from the <a class="font-semibold text-flame" href="/book?program=group-training">booking page</a> — pick a day and a slot.
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
				<img
					src={other.image}
					alt={other.title}
					class="aspect-[16/9] w-full object-cover"
					loading="lazy"
					width="600"
					height="338"
				/>
				<div class="p-5">
					<h3 class="font-display text-xl tracking-wide text-white uppercase">{other.title}</h3>
					<p class="mt-1 text-sm text-ash">{other.price}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
