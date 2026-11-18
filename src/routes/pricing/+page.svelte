<script lang="ts">
	import { pricing, faqs, testimonials, comparisonRows } from '#lib/data';
	import { reveal } from '#lib/reveal';
	import { speakableJsonLd } from '#lib/seo';

	const planPrices: Record<string, number> = { Starter: 4999, 'Signature 1-on-1': 24999, Group: 7999 };
	const itemListJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'ForgeFit Pricing Plans',
		itemListElement: pricing.map((plan, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			item: {
				'@type': 'Product',
				name: `ForgeFit ${plan.name}`,
				description: plan.blurb,
				// Merchant listings REQUIRE an image — its absence made all 3
				// products INVALID in the Rich Results Test (audit 2026-11-18).
				image: `https://forgefits.pages.dev${plan.image}-1200.jpg`,
				offers: {
					'@type': 'Offer',
					price: planPrices[plan.name],
					priceCurrency: 'INR',
					availability: 'https://schema.org/InStock',
					url: 'https://forgefits.pages.dev/pricing'
				}
			}
		}))
	});
</script>

<svelte:head>
	<title>Pricing — ForgeFit Personal Training</title>
	<meta
		name="description"
		content="ForgeFit pricing: Starter online ₹4,999/month, Signature 1-on-1 ₹24,999/month, Group ₹7,999/month. No hidden charges, no joining fee."
	/>
	{@html `<script type="application/ld+json">${itemListJsonLd}</script>`}
	{@html `<script type="application/ld+json">${speakableJsonLd()}</script>`}
</svelte:head>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div class="text-center" use:reveal>
		<p class="eyebrow justify-center">Transparent pricing</p>
		<h1 class="mt-4 font-display text-5xl tracking-wide text-white uppercase sm:text-7xl">Pick your plan</h1>
		<p class="speakable mx-auto mt-4 max-w-lg text-ash">
			No hidden charges, no joining fee, pause anytime. Your first session is free on every plan.
		</p>
	</div>

	<div class="mt-12 grid gap-4 lg:grid-cols-3">
		{#each pricing as plan, i}
			<div
				class="rounded-lg border p-7 {plan.featured
					? 'border-flame bg-flame-dark/10 shadow-[0_0_50px_-12px_#e8380d]'
					: 'border-line bg-coal'}"
				use:reveal={i * 100}
			>
				{#if plan.featured}
					<p class="inline-block rounded-sm bg-flame-dark px-3 py-1 text-[11px] font-bold tracking-widest text-white uppercase">
						Most popular
					</p>
				{/if}
				<h2 class="mt-3 font-display text-3xl tracking-wide text-white uppercase">{plan.name}</h2>
				<p class="mt-4 font-display text-6xl text-white">
					{plan.price} <span class="font-sans text-base font-normal text-ash">{plan.per}</span>
				</p>
				<p class="mt-2 text-ash">{plan.blurb}</p>
				<ul class="mt-6 space-y-3 text-bone/85">
					{#each plan.features as f}
						<li class="flex gap-2.5"><span class="text-ember">✓</span> {f}</li>
					{/each}
				</ul>
				<a
					href="/book"
					class="mt-7 block rounded-sm py-3.5 text-center text-sm font-bold tracking-widest uppercase transition {plan.featured
						? 'bg-flame-dark text-white hover:bg-flame-deep'
						: 'border border-white/25 text-white hover:border-white'}"
				>
					{plan.cta}
				</a>
			</div>
		{/each}
	</div>

	<div class="mx-auto mt-16 max-w-5xl" use:reveal>
		<h2 class="text-center font-display text-3xl tracking-wide text-white uppercase sm:text-4xl">
			Compare plans side by side
		</h2>
		<div class="mt-8 overflow-x-auto rounded-lg border border-line">
			<table class="w-full min-w-[560px] text-left text-sm">
				<thead>
					<tr class="border-b border-line bg-coal text-white">
						<th class="px-5 py-4 font-bold">What is included</th>
						{#each pricing as plan}
							<th class="px-5 py-4 font-bold">{plan.name}<br /><span class="font-normal text-ember">{plan.price}{plan.per}</span></th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each comparisonRows as row, ri}
						<tr class="border-b border-line last:border-0 {ri % 2 === 1 ? 'bg-coal/60' : 'bg-ink'}">
							<td class="px-5 py-3.5 text-bone/85">{row.label}</td>
							{#each row.values as v}
								<td class="px-5 py-3.5 {v === '✓' ? 'font-bold text-ember' : 'text-ash'}">{v}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<div class="mx-auto mt-12 max-w-3xl rounded-lg border border-line bg-coal p-6 text-sm leading-relaxed text-ash" use:reveal>
		<p>
			<strong class="text-white">Single sessions:</strong> 1-on-1 ₹2,499 · Group ₹999. <strong class="text-white"
				>Pause policy:</strong
			> up to 2 weeks per quarter. <strong class="text-white">Cancellation:</strong> 7 days notice; unused 1-on-1 sessions
			refundable within 30 days. Prices include GST. Gym membership included for in-person plans.
		</p>
	</div>

	<div class="mx-auto mt-12 max-w-5xl" use:reveal>
		<h2 class="text-center font-display text-3xl tracking-wide text-white uppercase">What clients say after joining</h2>
		<div class="mt-8 grid gap-4 md:grid-cols-3">
			{#each testimonials as t, i}
				<figure class="rounded-lg border border-line bg-coal p-5" use:reveal={i * 80}>
					<p class="text-lg tracking-widest text-ember" aria-label="5 out of 5 stars">★★★★★</p>
					<blockquote class="mt-3 text-sm leading-relaxed text-bone/85">“{t.quote}”</blockquote>
					<figcaption class="mt-4 text-sm font-semibold text-white">
						{t.name} <span class="font-normal text-ember">· {t.role}</span>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>
