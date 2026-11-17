<script lang="ts">
	import { page } from '$app/state';
	import { searchItems } from '#lib/data';
	import { reveal } from '#lib/reveal';

	let q = $state('');

	// ?q= is unavailable during prerendering, so read it only in the browser.
	$effect(() => {
		q = page.url.searchParams.get('q') ?? '';
	});

	const results = $derived(
		q.trim().length < 2
			? []
			: searchItems.filter((item) => {
					const hay = `${item.title} ${item.desc} ${item.type}`.toLowerCase();
					return q
						.trim()
						.toLowerCase()
						.split(/\s+/)
						.every((word) => hay.includes(word));
				})
	);
</script>

<svelte:head>
	<title>Search — ForgeFit</title>
	<meta name="description" content="Search ForgeFit: programs, articles, FAQs, tools and pages." />
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
	<p class="eyebrow" use:reveal>Search ForgeFit</p>
	<h1 class="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-6xl" use:reveal>
		Find it fast
	</h1>

	<form
		class="mt-8 flex flex-col gap-2 sm:flex-row"
		onsubmit={(e) => {
			e.preventDefault();
			const url = new URL(window.location.href);
			url.searchParams.set('q', q);
			window.history.replaceState({}, '', url);
		}}
		use:reveal
	>
		<label class="sr-only" for="search-q">Search the site</label>
		<input
			id="search-q"
			type="search"
			bind:value={q}
			placeholder="Try “nutrition”, “refund”, “BMI”..."
			class="w-full rounded-sm border border-line bg-coal px-4 py-3.5 text-white outline-none placeholder:text-ash focus:border-flame"
		/>
		<button
			type="submit"
			class="shrink-0 rounded-sm bg-flame px-7 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark"
		>
			Search
		</button>
	</form>

	{#if q.trim().length >= 2}
		<p class="mt-8 text-sm text-ash" use:reveal>
			{results.length} result{results.length === 1 ? '' : 's'} for “{q.trim()}”
		</p>
		<div class="mt-4 space-y-3">
			{#each results as r, i}
				<a
					href={r.url}
					class="block rounded-lg border border-line bg-coal p-5 transition hover:border-flame/60"
					use:reveal={i * 40}
				>
					<p class="text-[11px] font-bold tracking-widest text-flame uppercase">{r.type}</p>
					<h2 class="mt-1 font-semibold text-white">{r.title}</h2>
					<p class="mt-1 text-sm text-ash">{r.desc}</p>
				</a>
			{/each}
			{#if results.length === 0}
				<div class="rounded-lg border border-line bg-coal p-6" use:reveal>
					<p class="font-semibold text-white">Nothing found for “{q.trim()}”.</p>
					<p class="mt-2 text-sm text-ash">
						Try a program name (nutrition, group), a topic (protein, motivation) or visit the
						<a class="font-semibold text-flame" href="/faq">FAQ</a>.
					</p>
				</div>
			{/if}
		</div>
	{:else}
		<div class="mt-8" use:reveal>
			<p class="text-sm font-bold tracking-widest text-white uppercase">Popular searches</p>
			<div class="mt-3 flex flex-wrap gap-2">
				{#each ['nutrition', 'pricing', 'group training', 'BMI', 'refund', 'beginner'] as term}
					<button
						type="button"
						class="rounded-full border border-line bg-coal px-4 py-2 text-sm text-bone/85 transition hover:border-flame hover:text-white"
						onclick={() => (q = term)}>{term}</button
					>
				{/each}
			</div>
		</div>
	{/if}
</section>
