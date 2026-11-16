<script lang="ts">
	import { programs, posts, testimonials, pricing, faqs, site } from '#lib/data';
	import { reveal } from '#lib/reveal';

	let openFaq = $state<number | null>(0);
</script>

<!-- ============ HERO ============ -->
<section class="relative overflow-hidden bg-[radial-gradient(90%_90%_at_70%_10%,#7a1d05_0%,#3d0f02_38%,#0a0a0b_78%)]">
	<p
		class="watermark pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 text-[26vw] whitespace-nowrap opacity-100 select-none lg:top-6 lg:text-[19rem]"
		aria-hidden="true"
	>
		FORGEFIT
	</p>

	<div class="relative mx-auto grid max-w-7xl gap-2 px-4 pt-10 pb-0 sm:px-6 lg:min-h-[640px] lg:grid-cols-12 lg:px-8 lg:pt-16">
		<div class="relative z-10 flex flex-col justify-center lg:col-span-7 lg:pb-24">
			<p class="eyebrow" use:reveal>Certified Personal Trainer</p>
			<h1
				class="mt-5 font-display text-[clamp(3rem,11vw,6.5rem)] leading-[0.9] tracking-wide text-white uppercase"
				use:reveal
			>
				Forge your<br />best self
			</h1>
			<p class="mt-5 max-w-md text-base leading-relaxed text-bone/75 sm:text-lg" use:reveal={100}>
				Personal training designed around you — your goals, your pace, your results.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-4" use:reveal={200}>
				<a
					href="/book"
					class="rounded-sm bg-flame px-6 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark"
				>
					Book a free session →
				</a>
				<a
					href="/programs"
					class="rounded-sm border border-white/25 px-6 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:border-white hover:bg-white/5"
				>
					View programs
				</a>
			</div>
			<p class="mt-6 text-sm text-bone/60" use:reveal={300}>
				★ 4.9/5 from 200+ reviews · No joining fee · First session free
			</p>
		</div>

		<div class="relative lg:col-span-5" use:reveal={150}>
			<img
				src="/images/hero-trainer.png"
				alt="ForgeFit head coach {site.coach} — certified personal trainer, arms crossed in a red tank top"
				class="mx-auto w-full max-w-[420px] lg:absolute lg:right-0 lg:bottom-0 lg:max-w-[520px]"
				width="1600"
				height="1600"
				fetchpriority="high"
			/>
		</div>
	</div>

	<!-- Stat cards overlapping the hero bottom -->
	<div class="relative z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:-mt-24 lg:px-8 lg:pb-14">
		<div class="grid gap-4 sm:grid-cols-2 lg:ml-auto lg:max-w-xl">
			<div class="rounded-lg bg-flame/90 p-5 shadow-2xl backdrop-blur" use:reveal>
				<p class="font-display text-5xl text-white">100%</p>
				<p class="mt-2 text-sm leading-snug text-white/85">
					Client Satisfaction Guaranteed — every program is built around your goals.
				</p>
			</div>
			<div class="rounded-lg bg-white/10 p-5 shadow-2xl ring-1 ring-white/15 backdrop-blur" use:reveal={120}>
				<p class="font-display text-5xl text-white">500+</p>
				<p class="mt-2 text-sm leading-snug text-white/85">
					Clients Trained. Real people, real results — from beginners to athletes.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ============ PROGRAMS ============ -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div class="flex flex-wrap items-end justify-between gap-6" use:reveal>
		<div>
			<p class="eyebrow">What I offer</p>
			<h2 class="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white uppercase sm:text-6xl">
				Programs<br />built to win
			</h2>
		</div>
		<div class="max-w-sm">
			<p class="text-sm leading-relaxed text-ash">
				Every program is designed with one goal in mind — getting you the results you came here for. No fluff, no
				filler.
			</p>
			<a
				href="/programs"
				class="mt-4 inline-block rounded-sm bg-flame px-5 py-2.5 text-xs font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark"
			>
				View all programs →
			</a>
		</div>
	</div>

	<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each programs as program, i}
			<a
				href="/programs/{program.slug}"
				class="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-coal transition hover:border-flame/60"
				class:bg-flame={i === 2}
				class:border-flame={i === 2}
				use:reveal={i * 100}
			>
				<img
					src={program.image}
					alt={program.title}
					class="aspect-[16/10] w-full object-cover opacity-90 transition group-hover:scale-[1.03]"
					loading="lazy"
					width="800"
					height="500"
				/>
				<div class="flex grow flex-col p-5">
					<p class="text-xs font-bold tracking-widest {i === 2 ? 'text-white/70' : 'text-flame'}">{program.num}</p>
					<h3 class="mt-2 font-display text-2xl tracking-wide text-white uppercase">{program.title}</h3>
					<p class="mt-2 grow text-sm leading-relaxed {i === 2 ? 'text-white/85' : 'text-ash'}">{program.desc}</p>
					<p class="mt-3 text-xs font-semibold text-ash">{program.price}</p>
					<span
						class="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase {i === 2
							? 'text-white'
							: 'text-flame'}"
					>
						Learn more →
					</span>
				</div>
			</a>
		{/each}
	</div>
</section>

<!-- ============ COACH / ABOUT ============ -->
<section class="border-y border-line bg-coal">
	<div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
		<div class="relative" use:reveal>
			<img
				src="/images/coach.jpg"
				alt="{site.coach} coaching a client in the gym"
				class="aspect-[4/3] w-full rounded-lg object-cover"
				loading="lazy"
				width="800"
				height="600"
			/>
			<div class="absolute -bottom-5 left-5 rounded-md bg-flame px-5 py-4 shadow-xl">
				<p class="font-display text-3xl text-white">10+ yrs</p>
				<p class="text-xs font-semibold tracking-widest text-white/85 uppercase">Coaching experience</p>
			</div>
		</div>
		<div use:reveal={120}>
			<p class="eyebrow">Meet your coach</p>
			<h2 class="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white uppercase sm:text-5xl">
				{site.coach}
			</h2>
			<p class="mt-3 text-sm font-semibold tracking-widest text-flame uppercase">{site.coachCreds}</p>
			<p class="mt-5 leading-relaxed text-ash">
				I spent a decade watching people quit gyms — not from laziness, but from bad plans. So I built ForgeFit
				around one idea: training that fits your life, not the other way round. Every client gets an assessment, a
				plan built for their body, and a coach who actually checks in.
			</p>
			<ul class="mt-6 space-y-3 text-sm text-bone/85">
				<li class="flex gap-3"><span class="text-flame">✓</span> Assessment-first — no random workouts, ever</li>
				<li class="flex gap-3"><span class="text-flame">✓</span> Indian-food-first nutrition that you can sustain</li>
				<li class="flex gap-3"><span class="text-flame">✓</span> Progress tracked every week, plan adjusted monthly</li>
			</ul>
			<a
				href="/about"
				class="mt-7 inline-block rounded-sm border border-white/25 px-6 py-3 text-sm font-bold tracking-widest text-white uppercase transition hover:border-white hover:bg-white/5"
			>
				More about {site.coach.split(' ')[0]}
			</a>
		</div>
	</div>
</section>

<!-- ============ RESULTS ============ -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div class="flex flex-wrap items-end justify-between gap-6" use:reveal>
		<div>
			<p class="eyebrow">Real people, real results</p>
			<h2 class="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white uppercase sm:text-6xl">
				Results that<br />speak first
			</h2>
		</div>
		<a
			href="/results"
			class="rounded-sm bg-flame px-5 py-2.5 text-xs font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark"
		>
			All results →
		</a>
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
</section>

<!-- ============ PRICING TEASER ============ -->
<section class="border-y border-line bg-coal">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div class="text-center" use:reveal>
			<p class="eyebrow justify-center">Transparent pricing</p>
			<h2 class="mt-4 font-display text-4xl tracking-wide text-white uppercase sm:text-6xl">Pick your plan</h2>
			<p class="mx-auto mt-3 max-w-lg text-ash">
				No hidden charges, no joining fee. Pause anytime. Your first session is free, whichever plan you choose.
			</p>
		</div>
		<div class="mt-10 grid gap-4 lg:grid-cols-3">
			{#each pricing as plan, i}
				<div
					class="rounded-lg border p-6 {plan.featured
						? 'border-flame bg-flame/10 shadow-[0_0_50px_-12px_#e8380d]'
						: 'border-line bg-ink'}"
					use:reveal={i * 100}
				>
					{#if plan.featured}
						<p class="inline-block rounded-sm bg-flame px-3 py-1 text-[11px] font-bold tracking-widest text-white uppercase">
							Most popular
						</p>
					{/if}
					<h3 class="mt-3 font-display text-2xl tracking-wide text-white uppercase">{plan.name}</h3>
					<p class="mt-4 font-display text-5xl text-white">
						{plan.price} <span class="font-sans text-sm font-normal text-ash">{plan.per}</span>
					</p>
					<p class="mt-2 text-sm text-ash">{plan.blurb}</p>
					<ul class="mt-5 space-y-2.5 text-sm text-bone/85">
						{#each plan.features as f}
							<li class="flex gap-2.5"><span class="text-flame">✓</span> {f}</li>
						{/each}
					</ul>
					<a
						href="/book"
						class="mt-6 block rounded-sm py-3 text-center text-sm font-bold tracking-widest uppercase transition {plan.featured
							? 'bg-flame text-white hover:bg-flame-dark'
							: 'border border-white/25 text-white hover:border-white'}"
					>
						{plan.cta}
					</a>
				</div>
			{/each}
		</div>
		<p class="mt-6 text-center text-sm">
			<a href="/pricing" class="font-semibold text-flame hover:text-ember">See full pricing details →</a>
		</p>
	</div>
</section>

<!-- ============ BLOG ============ -->
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div class="flex flex-wrap items-end justify-between gap-6" use:reveal>
		<div>
			<p class="eyebrow">Knowledge &amp; tips</p>
			<h2 class="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white uppercase sm:text-6xl">
				Forge your<br />mindset
			</h2>
		</div>
		<a
			href="/blog"
			class="rounded-sm border border-white/25 px-5 py-2.5 text-xs font-bold tracking-widest text-white uppercase transition hover:border-white hover:bg-white/5"
		>
			All articles →
		</a>
	</div>

	<div class="mt-10 grid gap-4 md:grid-cols-3">
		{#each posts as post, i}
			<a
				href="/blog/{post.slug}"
				class="group overflow-hidden rounded-lg border border-line bg-coal transition hover:border-flame/60"
				use:reveal={i * 100}
			>
				<img
					src={post.image}
					alt={post.title}
					class="aspect-[16/10] w-full object-cover transition group-hover:scale-[1.03]"
					loading="lazy"
					width="800"
					height="500"
				/>
				<div class="p-5">
					<p class="inline-block rounded-sm bg-flame px-2.5 py-1 text-[11px] font-bold tracking-widest text-white uppercase">
						{post.category}
					</p>
					<h3 class="mt-3 text-lg leading-snug font-bold text-white">{post.title}</h3>
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

<!-- ============ FAQ ============ -->
<section class="border-t border-line bg-coal">
	<div class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
		<div class="text-center" use:reveal>
			<p class="eyebrow justify-center">Before you ask</p>
			<h2 class="mt-4 font-display text-4xl tracking-wide text-white uppercase sm:text-5xl">Questions, answered</h2>
		</div>
		<div class="mt-10 space-y-3">
			{#each faqs as faq, i}
				<div class="overflow-hidden rounded-lg border border-line bg-ink" use:reveal={i * 60}>
					<button
						type="button"
						class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white"
						aria-expanded={openFaq === i}
						onclick={() => (openFaq = openFaq === i ? null : i)}
					>
						{faq.q}
						<span class="shrink-0 text-xl text-flame" aria-hidden="true">{openFaq === i ? '−' : '+'}</span>
					</button>
					{#if openFaq === i}
						<p class="px-5 pb-5 text-sm leading-relaxed text-ash">{faq.a}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============ FINAL CTA ============ -->
<section class="bg-[radial-gradient(80%_120%_at_50%_0%,#7a1d05_0%,#0a0a0b_70%)]">
	<div class="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:py-28" use:reveal>
		<h2 class="font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-7xl">
			Your first session<br />is free
		</h2>
		<p class="mx-auto mt-4 max-w-md text-ash">
			30 minutes. One assessment. One honest plan. No sales pitch, no pressure — if it is not for you, walk away
			with the plan anyway.
		</p>
		<a
			href="/book"
			class="mt-8 inline-block rounded-sm bg-flame px-8 py-4 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark"
		>
			Book a free session →
		</a>
	</div>
</section>
