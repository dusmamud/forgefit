<script lang="ts">
	import { freeGuideDays } from '#lib/data';
	import { reveal } from '#lib/reveal';

	let email = $state('');
	let gotIt = $state(false);
</script>

<svelte:head>
	<title>Free 7-Day Starter Plan — ForgeFit</title>
	<meta
		name="description"
		content="ForgeFit's free 7-day starter plan: assess, lift, recover, repeat. No gym membership needed to start. Get the plan in your inbox."
	/>
</svelte:head>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div class="max-w-3xl" use:reveal>
		<p class="eyebrow">Free guide · No payment</p>
		<h1 class="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-7xl">
			Your first 7 days,<br />planned free
		</h1>
		<p class="speakable mt-5 max-w-2xl leading-relaxed text-ash">
			A full week of training for a complete beginner — two lifting sessions, one conditioning day, and the food
			and sleep habits that make them work. No gym membership needed to start; dumbbells or even water bottles
			will do.
		</p>
	</div>

	<div class="mt-12 grid gap-4 lg:grid-cols-2">
		{#each freeGuideDays as d, i}
			<article class="rounded-lg border border-line bg-coal p-6" use:reveal={i * 60}>
				<div class="flex items-baseline gap-3">
					<span class="font-display text-4xl text-ember">Day {d.day}</span>
					<h2 class="font-display text-2xl tracking-wide text-white uppercase">{d.title}</h2>
				</div>
				<p class="mt-1 text-xs font-bold tracking-widest text-ember uppercase">{d.focus}</p>
				<p class="mt-3 text-sm leading-relaxed text-bone/85">{d.detail}</p>
			</article>
		{/each}
	</div>

	<div class="mt-12 grid gap-6 rounded-lg bg-flame-dark p-8 lg:grid-cols-2 lg:items-center" use:reveal>
		<div>
			<h2 class="font-display text-3xl tracking-wide text-white uppercase sm:text-4xl">
				Get the plan as a printable PDF
			</h2>
			<p class="mt-3 max-w-md text-white/85">
				Drop your email and we will send the 7-day plan as a one-page printable, plus one useful email a week.
				No spam.
			</p>
		</div>
		{#if gotIt}
			<p class="rounded-sm bg-ink/20 px-5 py-4 font-semibold text-white">
				Done — the plan is on its way to {email}. Day 1 starts tomorrow.
			</p>
		{:else}
			<form
				class="flex flex-col gap-2 sm:flex-row"
				onsubmit={(e) => {
					e.preventDefault();
					if (email.includes('@')) gotIt = true;
				}}
			>
				<label class="sr-only" for="guide-email">Email address</label>
				<input
					id="guide-email"
					type="email"
					required
					bind:value={email}
					placeholder="you@example.com"
					class="w-full rounded-sm border border-white/30 bg-ink/20 px-4 py-3.5 text-white outline-none placeholder:text-white/60 focus:border-white"
				/>
				<button
					type="submit"
					class="shrink-0 rounded-sm bg-ink px-6 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-coal"
				>
					Send me the plan
				</button>
			</form>
		{/if}
	</div>
	<p class="mt-3 text-center text-xs text-ash">Demo signup — nothing is sent anywhere yet.</p>

	<div class="mt-10 text-center" use:reveal>
		<p class="text-ash">Finished the 7 days? Keep going with a coach.</p>
		<a
			href="/book"
			class="mt-4 inline-block rounded-sm bg-flame-dark px-8 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-flame-deep"
		>
			Book a free session →
		</a>
	</div>
</section>
