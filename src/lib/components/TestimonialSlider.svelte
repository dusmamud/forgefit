<script lang="ts">
	import { testimonials } from '#lib/data';
	import Picture from '#lib/components/Picture.svelte';

	let i = $state(0);
	let paused = $state(false);
	let timer: ReturnType<typeof setInterval> | undefined = $state();

	const next = () => (i = (i + 1) % testimonials.length);
	const prev = () => (i = (i - 1 + testimonials.length) % testimonials.length);

	$effect(() => {
		if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		timer = setInterval(next, 6000);
		return () => clearInterval(timer);
	});
</script>

<div
	class="relative overflow-hidden rounded-lg border border-line bg-coal"
	role="region"
	aria-roledescription="carousel"
	aria-label="Client testimonials"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
>
	<div class="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" style="transform: translateX(-{i * 100}%)">
		{#each testimonials as t}
			<figure class="flex w-full shrink-0 flex-col p-6 sm:p-8" aria-hidden={testimonials[i] !== t}>
				<p class="text-2xl tracking-widest text-ember" aria-label="5 out of 5 stars">★★★★★</p>
				<blockquote class="mt-4 grow text-lg leading-relaxed text-bone/85">“{t.quote}”</blockquote>
				<figcaption class="mt-6 flex items-center gap-3 border-t border-line pt-5">
					<Picture base={t.image} alt={t.name} cls="size-12 rounded-full object-cover" loading="lazy" width={96} height={96} widths={[200]} sizes="96px" />
					<div>
						<p class="font-semibold text-white">{t.name}</p>
						<p class="text-xs text-ember">{t.role}</p>
					</div>
				</figcaption>
			</figure>
		{/each}
	</div>

	<div class="flex items-center justify-between px-6 pb-5 sm:px-8">
		<div class="flex gap-2" role="tablist" aria-label="Choose testimonial">
			{#each testimonials as _, d}
				<button
					type="button"
					role="tab"
					aria-selected={i === d}
					aria-label="Testimonial {d + 1}"
					class="h-2 rounded-full transition-all {i === d ? 'w-8 bg-flame-dark' : 'w-2 bg-white/25 hover:bg-white/50'}"
					onclick={() => (i = d)}
				></button>
			{/each}
		</div>
		<div class="flex gap-2">
			<button
				type="button"
				aria-label="Previous testimonial"
				class="grid size-10 place-items-center rounded-full border border-line text-white transition hover:border-flame hover:text-ember"
				onclick={prev}>←</button
			>
			<button
				type="button"
				aria-label="Next testimonial"
				class="grid size-10 place-items-center rounded-full border border-line text-white transition hover:border-flame hover:text-ember"
				onclick={next}>→</button
			>
		</div>
	</div>
</div>
