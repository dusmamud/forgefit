<script lang="ts">
	import { pricing, faqs } from '#lib/data';
	import { reveal } from '#lib/reveal';
</script>

<svelte:head>
	<title>Pricing — ForgeFit Personal Training</title>
	<meta
		name="description"
		content="ForgeFit pricing: Starter online ₹4,999/month, Signature 1-on-1 ₹24,999/month, Group ₹7,999/month. No hidden charges, no joining fee."
	/>
</svelte:head>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div class="text-center" use:reveal>
		<p class="eyebrow justify-center">Transparent pricing</p>
		<h1 class="mt-4 font-display text-5xl tracking-wide text-white uppercase sm:text-7xl">Pick your plan</h1>
		<p class="mx-auto mt-4 max-w-lg text-ash">
			No hidden charges, no joining fee, pause anytime. Your first session is free on every plan.
		</p>
	</div>

	<div class="mt-12 grid gap-4 lg:grid-cols-3">
		{#each pricing as plan, i}
			<div
				class="rounded-lg border p-7 {plan.featured
					? 'border-flame bg-flame/10 shadow-[0_0_50px_-12px_#e8380d]'
					: 'border-line bg-coal'}"
				use:reveal={i * 100}
			>
				{#if plan.featured}
					<p class="inline-block rounded-sm bg-flame px-3 py-1 text-[11px] font-bold tracking-widest text-white uppercase">
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
						<li class="flex gap-2.5"><span class="text-flame">✓</span> {f}</li>
					{/each}
				</ul>
				<a
					href="/book"
					class="mt-7 block rounded-sm py-3.5 text-center text-sm font-bold tracking-widest uppercase transition {plan.featured
						? 'bg-flame text-white hover:bg-flame-dark'
						: 'border border-white/25 text-white hover:border-white'}"
				>
					{plan.cta}
				</a>
			</div>
		{/each}
	</div>

	<div class="mx-auto mt-12 max-w-3xl rounded-lg border border-line bg-coal p-6 text-sm leading-relaxed text-ash" use:reveal>
		<p>
			<strong class="text-white">Single sessions:</strong> 1-on-1 ₹2,499 · Group ₹999. <strong class="text-white"
				>Pause policy:</strong
			> up to 2 weeks per quarter. <strong class="text-white">Cancellation:</strong> 7 days notice; unused 1-on-1 sessions
			refundable within 30 days. Prices include GST. Gym membership included for in-person plans.
		</p>
	</div>
</section>
