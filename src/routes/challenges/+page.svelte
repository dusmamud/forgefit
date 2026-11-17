<script lang="ts">
	import { challengeWeeks } from '#lib/data';
	import { reveal } from '#lib/reveal';
</script>

<svelte:head>
	<title>30-Day Forge Challenge — ForgeFit</title>
	<meta
		name="description"
		content="The 30-day Forge Challenge: four weeks, four focuses. Build the base, add the load, push the pace, prove it. Free to join — start any Monday."
	/>
</svelte:head>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div class="max-w-3xl" use:reveal>
		<p class="eyebrow">Free challenge · Starts any Monday</p>
		<h1 class="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-7xl">
			30 days.<br />Prove it.
		</h1>
		<p class="speakable mt-5 max-w-2xl leading-relaxed text-ash">
			Four weeks, four focuses. No crash diets, no two-a-days — just the basics done properly for 30 days. Join
			free, train with the group, and finishers get a free assessment plus a month-2 plan.
		</p>
		<div class="mt-6 flex flex-wrap gap-3">
			<a
				href="/book?program=group-training"
				class="rounded-sm bg-flame px-7 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark"
			>
				Join the challenge →
			</a>
			<a
				href="/free-guide"
				class="rounded-sm border border-white/25 px-7 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:border-white hover:bg-white/5"
			>
				Start with the free 7-day plan
			</a>
		</div>
	</div>

	<div class="mt-12 grid gap-4 md:grid-cols-2">
		{#each challengeWeeks as w, i}
			<article class="rounded-lg border border-line bg-coal p-6 sm:p-8" use:reveal={i * 80}>
				<div class="flex items-baseline gap-3">
					<span class="font-display text-4xl text-flame">Week {w.week}</span>
					<h2 class="font-display text-2xl tracking-wide text-white uppercase sm:text-3xl">{w.title}</h2>
				</div>
				<p class="mt-1 text-xs font-bold tracking-widest text-flame uppercase">{w.focus}</p>
				<ul class="mt-5 space-y-3 text-sm leading-relaxed text-bone/85">
					{#each w.points as point}
						<li class="flex gap-3"><span class="shrink-0 text-flame">✓</span> {point}</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>

	<div class="mt-12 rounded-lg border border-line bg-coal p-8" use:reveal>
		<h2 class="font-display text-3xl tracking-wide text-white uppercase">The rules</h2>
		<ul class="mt-5 grid gap-3 text-sm leading-relaxed text-bone/85 sm:grid-cols-3">
			<li class="flex gap-3"><span class="shrink-0 text-flame">01</span> Three sessions a week, minimum. Miss one, make it up — don’t skip it.</li>
			<li class="flex gap-3"><span class="shrink-0 text-flame">02</span> Track everything: sessions, protein, steps, sleep. What gets measured gets done.</li>
			<li class="flex gap-3"><span class="shrink-0 text-flame">03</span> No weighing yourself daily. Once a week, same day, same time.</li>
		</ul>
	</div>
</section>
