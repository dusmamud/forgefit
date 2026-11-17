<script lang="ts">
	import { faqs } from '#lib/data';
	import { speakableJsonLd } from '#lib/seo';

	let openFaq = $state<number | null>(0);

	const faqJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	});
</script>

<svelte:head>
	<title>FAQ — ForgeFit Personal Training</title>
	<meta
		name="description"
		content="ForgeFit frequently asked questions: beginners, gym membership, what to bring, pausing and cancelling, vegetarian diet plans, injuries and more."
	/>
	{@html `<script type="application/ld+json">${faqJsonLd}</script>`}
	{@html `<script type="application/ld+json">${speakableJsonLd()}</script>`}
</svelte:head>

<section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
	<p class="eyebrow">Before you ask</p>
	<h1 class="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-6xl">
		Questions,<br />answered
	</h1>
	<p class="speakable mt-5 leading-relaxed text-ash">
		Everything people usually ask before their first free session. Anything else — call us on
		<a class="font-semibold text-white" href="tel:+919876543210">+91 98765 43210</a> or ask on the
		<a class="font-semibold text-white" href="/contact">contact page</a>.
	</p>

	<div class="mt-10 space-y-3">
		{#each faqs as faq, i}
			<div class="overflow-hidden rounded-lg border border-line bg-coal">
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

	<div class="mt-12 rounded-lg bg-flame p-8 text-center">
		<h2 class="font-display text-3xl tracking-wide text-white uppercase">Still unsure?</h2>
		<p class="mx-auto mt-3 max-w-md text-white/85">
			Book a free 30-minute session. You get an assessment, an honest plan, and answers — no sales pitch.
		</p>
		<a
			href="/book"
			class="mt-6 inline-block rounded-sm bg-ink px-8 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-coal"
		>
			Book a free session →
		</a>
	</div>
</section>
