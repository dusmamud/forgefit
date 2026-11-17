<script lang="ts">
	import { testimonials, transformations } from '#lib/data';
	import { reveal } from '#lib/reveal';
</script>

<svelte:head>
	<title>Results — ForgeFit Personal Training</title>
	<meta
		name="description"
		content="Real ForgeFit client results: fat loss, muscle gain, first pull-ups. 500+ clients trained, 100% satisfaction."
	/>
</svelte:head>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<p class="eyebrow" use:reveal>Proof, not promises</p>
	<h1 class="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-7xl" use:reveal>
		Results that<br />speak first
	</h1>

	<div class="mt-10 grid gap-4 sm:grid-cols-3" use:reveal>
		<div class="rounded-lg bg-flame p-6 text-center">
			<p class="font-display text-6xl text-white">500+</p>
			<p class="mt-1 text-sm text-white/85">Clients trained</p>
		</div>
		<div class="rounded-lg border border-line bg-coal p-6 text-center">
			<p class="font-display text-6xl text-white">100%</p>
			<p class="mt-1 text-sm text-ash">Client satisfaction</p>
		</div>
		<div class="rounded-lg border border-line bg-coal p-6 text-center">
			<p class="font-display text-6xl text-white">4.9/5</p>
			<p class="mt-1 text-sm text-ash">Average rating · 200+ reviews</p>
		</div>
	</div>

	<div class="mt-16" use:reveal>
		<p class="eyebrow">Transformations</p>
		<h2 class="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white uppercase sm:text-5xl">
			The numbers<br />behind the stories
		</h2>
	</div>

	<div class="mt-10 grid gap-4 md:grid-cols-3">
		{#each transformations as t, i}
			<article class="overflow-hidden rounded-lg border border-line bg-coal" use:reveal={i * 100}>
				<div class="flex items-center gap-4 p-6 pb-0">
					<img src={t.image} alt={t.name} class="size-14 rounded-full object-cover" loading="lazy" width="112" height="112" />
					<div>
						<h3 class="font-display text-xl tracking-wide text-white uppercase">{t.name}</h3>
						<p class="text-xs text-flame">{t.programme} · {t.duration}</p>
					</div>
				</div>
				<ul class="space-y-3 p-6">
					{#each t.metrics as m}
						<li class="flex items-center justify-between gap-3 border-b border-line pb-3 text-sm last:border-0 last:pb-0">
							<span class="text-ash">{m.label}</span>
							<span class="text-bone/85">
								{m.from} <span class="mx-1 text-flame" aria-hidden="true">→</span>
								<strong class="text-white">{m.to}</strong>
							</span>
						</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>

	<div class="mt-16" use:reveal>
		<p class="eyebrow">In their words</p>
		<h2 class="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white uppercase sm:text-5xl">
			What clients<br />say
		</h2>
	</div>

	<div class="mt-10 grid gap-4 md:grid-cols-3">
		{#each testimonials as t, i}
			<figure class="flex flex-col rounded-lg border border-line bg-coal p-6" use:reveal={i * 100}>
				<p class="text-2xl tracking-widest text-flame" aria-label="5 out of 5 stars">★★★★★</p>
				<blockquote class="mt-4 grow leading-relaxed text-bone/85">“{t.quote}”</blockquote>
				<figcaption class="mt-6 flex items-center gap-3 border-t border-line pt-5">
					<img src={t.image} alt={t.name} class="size-12 rounded-full object-cover" loading="lazy" width="96" height="96" />
					<div>
						<p class="font-semibold text-white">{t.name}</p>
						<p class="text-xs text-flame">{t.role}</p>
					</div>
				</figcaption>
			</figure>
		{/each}
	</div>

	<div class="mt-12 rounded-lg bg-flame p-8 text-center" use:reveal>
		<h2 class="font-display text-3xl tracking-wide text-white uppercase sm:text-4xl">Your story could be next</h2>
		<p class="mx-auto mt-3 max-w-lg text-white/85">
			Every result above started with one free session. No experience needed, no fitness level required.
		</p>
		<a
			href="/book"
			class="mt-6 inline-block rounded-sm bg-ink px-8 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-coal"
		>
			Book a free session →
		</a>
	</div>
</section>
