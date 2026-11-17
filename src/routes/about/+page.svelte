<script lang="ts">
	import { site, certifications } from '#lib/data';
	import { reveal } from '#lib/reveal';
	import { speakableJsonLd } from '#lib/seo';

	const personJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: site.coach,
		jobTitle: site.coachRole,
		description:
			'ACE Certified personal trainer in Mumbai with 10+ years of experience and 500+ clients trained. Specialities: strength training, fat loss, muscle gain, nutrition planning and online coaching.',
		worksFor: { '@type': 'ProfessionalService', name: 'ForgeFit', url: 'https://forgefits.pages.dev/' },
		knowsAbout: ['Strength training', 'Fat loss', 'Muscle gain', 'Nutrition planning', 'Online coaching'],
		address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' }
	});
</script>

<svelte:head>
	<title>About {site.coach} — ForgeFit</title>
	<meta
		name="description"
		content="Meet {site.coach}, {site.coachRole} at ForgeFit Mumbai. {site.coachCreds}."
	/>
	{@html `<script type="application/ld+json">${personJsonLd}</script>`}
	{@html `<script type="application/ld+json">${speakableJsonLd()}</script>`}
</svelte:head>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-2 lg:items-center">
		<div class="relative" use:reveal>
			<img
				src="/images/coach.jpg"
				alt="{site.coach} coaching a client in the gym"
				class="aspect-[4/3] w-full rounded-lg object-cover"
				width="800"
				height="600"
				fetchpriority="high"
			/>
			<div class="absolute -bottom-5 left-5 rounded-md bg-flame px-5 py-4 shadow-xl">
				<p class="font-display text-3xl text-white">500+</p>
				<p class="text-xs font-semibold tracking-widest text-white/85 uppercase">Clients trained</p>
			</div>
		</div>
		<div use:reveal={120}>
			<p class="eyebrow">Meet your coach</p>
			<h1 class="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-6xl">
				{site.coach}
			</h1>
			<p class="mt-3 text-sm font-semibold tracking-widest text-flame uppercase">{site.coachCreds}</p>
			<p class="speakable mt-5 leading-relaxed text-ash">
				I spent a decade watching people quit gyms — not from laziness, but from bad plans. So I built ForgeFit
				around one idea: training that fits your life, not the other way round. Every client gets an assessment, a
				plan built for their body, and a coach who actually checks in.
			</p>
			<p class="mt-4 leading-relaxed text-ash">
				Before ForgeFit I coached at two of Mumbai's busiest gyms, working with everyone from first-timers to
				competitive athletes. The lesson was always the same: the programme matters less than whether someone
				actually sticks to it — and people stick to plans built around their real life.
			</p>
			<div class="mt-8 grid grid-cols-3 gap-2 text-center sm:gap-4">
				<div class="rounded-lg border border-line bg-coal p-3 sm:p-4">
					<p class="font-display text-2xl text-white sm:text-3xl">10+</p>
					<p class="mt-1 text-[11px] text-ash sm:text-xs">Years coaching</p>
				</div>
				<div class="rounded-lg border border-line bg-coal p-3 sm:p-4">
					<p class="font-display text-2xl text-white sm:text-3xl">500+</p>
					<p class="mt-1 text-[11px] text-ash sm:text-xs">Clients trained</p>
				</div>
				<div class="rounded-lg border border-line bg-coal p-3 sm:p-4">
					<p class="font-display text-2xl text-white sm:text-3xl">4.9★</p>
					<p class="mt-1 text-[11px] text-ash sm:text-xs">Average rating</p>
				</div>
			</div>
			<a
				href="/book"
				class="mt-8 inline-block rounded-sm bg-flame px-6 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark"
			>
				Train with {site.coach.split(' ')[0]} →
			</a>
		</div>
	</div>

	<div class="mt-20" use:reveal>
		<p class="eyebrow">Certifications — as issued</p>
		<h2 class="mt-4 font-display text-4xl tracking-wide text-white uppercase sm:text-5xl">Qualified, not just loud</h2>
		<div class="mt-8 grid gap-4 sm:grid-cols-2">
			{#each certifications as c, i}
				<div class="rounded-lg border border-line bg-coal p-6" use:reveal={i * 80}>
					<p class="font-display text-xl tracking-wide text-white uppercase">{c.name}</p>
					<p class="mt-2 text-sm text-ash">{c.issuer} · {c.year}</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="mt-20" use:reveal>
		<p class="eyebrow">How coaching works</p>
		<h2 class="mt-4 font-display text-4xl tracking-wide text-white uppercase sm:text-5xl">Three steps. No mystery.</h2>
		<div class="mt-8 grid gap-4 md:grid-cols-3">
			<div class="rounded-lg border border-line bg-coal p-6">
				<p class="font-display text-4xl text-flame">01</p>
				<h3 class="mt-3 font-display text-2xl tracking-wide text-white uppercase">Assess</h3>
				<p class="mt-2 text-sm leading-relaxed text-ash">
					A free 30-minute session: movement screen, goals, injuries, food habits. We find your real starting
					point.
				</p>
			</div>
			<div class="rounded-lg border border-line bg-coal p-6">
				<p class="font-display text-4xl text-flame">02</p>
				<h3 class="mt-3 font-display text-2xl tracking-wide text-white uppercase">Plan</h3>
				<p class="mt-2 text-sm leading-relaxed text-ash">
					A programme and nutrition targets built for your body and schedule — rebuilt every 4 weeks as you
					progress.
				</p>
			</div>
			<div class="rounded-lg border border-line bg-coal p-6">
				<p class="font-display text-4xl text-flame">03</p>
				<h3 class="mt-3 font-display text-2xl tracking-wide text-white uppercase">Progress</h3>
				<p class="mt-2 text-sm leading-relaxed text-ash">
					Weekly check-ins, tracked lifts, monthly body-composition reviews. When progress stalls, the plan
					changes — not the goal.
				</p>
			</div>
		</div>
	</div>
</section>
