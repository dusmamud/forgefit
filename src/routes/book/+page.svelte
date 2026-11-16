<script lang="ts">
	import { page } from '$app/state';
	import { programs } from '#lib/data';
	import { reveal } from '#lib/reveal';

	const days = ['Tue 17', 'Wed 18', 'Thu 19', 'Fri 20', 'Sat 21', 'Sun 22'];
	const slots = ['6:00 AM', '7:30 AM', '9:00 AM', '11:00 AM', '4:00 PM', '5:30 PM', '7:00 PM', '8:30 PM'];
	const booked = new Set(['Wed 18 · 7:30 AM', 'Fri 20 · 7:00 PM']);

	let program = $state(programs[0].slug);

	// searchParams is unavailable during prerendering, so read it only in the browser.
	$effect(() => {
		const wanted = page.url.searchParams.get('program');
		if (wanted && programs.some((p) => p.slug === wanted)) program = wanted;
	});
	let day = $state(days[0]);
	let slot = $state<string | null>(null);
	let name = $state('');
	let phone = $state('');
	let done = $state(false);

	function submit(event: SubmitEvent) {
		event.preventDefault();
		if (!slot || !name.trim() || !phone.trim()) return;
		done = true;
	}
</script>

<svelte:head>
	<title>Book a Free Session — ForgeFit</title>
	<meta
		name="description"
		content="Book your free 30-minute ForgeFit session: pick a programme, a day and a time slot. No payment needed."
	/>
</svelte:head>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-5">
		<div class="lg:col-span-2" use:reveal>
			<p class="eyebrow">Free 30-minute session</p>
			<h1 class="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-6xl">
				Book your<br />free session
			</h1>
			<p class="mt-5 leading-relaxed text-ash">
				A relaxed chat — not a sales pitch. We assess your movement, talk goals, and hand you an honest plan.
				If it is not for you, walk away with the plan anyway.
			</p>
			<ul class="mt-6 space-y-3 text-sm text-bone/85">
				<li class="flex gap-3"><span class="text-flame">✓</span> Movement + fitness assessment</li>
				<li class="flex gap-3"><span class="text-flame">✓</span> One honest plan, written for you</li>
				<li class="flex gap-3"><span class="text-flame">✓</span> No payment, no commitment</li>
			</ul>
			<p class="mt-8 text-sm text-ash">
				Prefer to talk first? Call <a class="font-semibold text-white" href="tel:+919876543210">+91 98765 43210</a><br />
				Mon–Sat, 6 AM – 9 PM · Andheri West, Mumbai
			</p>
		</div>

		<div class="lg:col-span-3" use:reveal={120}>
			{#if done}
				<div class="rounded-lg border border-flame/50 bg-flame/10 p-8 text-center">
					<p class="font-display text-4xl text-white uppercase">You are booked in 🎉</p>
					<p class="mx-auto mt-3 max-w-md text-bone/85">
						Thanks, {name}! Your free session is set for <strong class="text-white">{day} at {slot}</strong>. We will
						call you on {phone} to confirm.
					</p>
					<a
						href="/programs"
						class="mt-6 inline-block rounded-sm bg-flame px-6 py-3 text-sm font-bold tracking-widest text-white uppercase"
					>
						Browse programs
					</a>
				</div>
			{:else}
				<form
					onsubmit={submit}
					class="rounded-lg border border-line bg-coal p-6 sm:p-8"
					aria-label="Book a free session"
				>
					<label class="block text-xs font-bold tracking-widest text-white uppercase" for="program">
						Programme
					</label>
					<select
						id="program"
						bind:value={program}
						class="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3.5 text-white outline-none focus:border-flame"
					>
						{#each programs as p}
							<option value={p.slug}>{p.title} — {p.price}</option>
						{/each}
					</select>

					<p class="mt-6 text-xs font-bold tracking-widest text-white uppercase">Pick a day</p>
					<div class="mt-2 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Day">
						{#each days as d}
							<button
								type="button"
								onclick={() => (day = d)}
								class="shrink-0 rounded-sm border px-4 py-3 text-sm font-semibold transition {day === d
									? 'border-flame bg-flame text-white'
									: 'border-line bg-ink text-bone/85 hover:border-white/40'}"
								aria-pressed={day === d}
							>
								{d}
							</button>
						{/each}
					</div>

					<p class="mt-6 text-xs font-bold tracking-widest text-white uppercase">Pick a time</p>
					<div class="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="Time slot">
						{#each slots as s}
							{@const key = `${day} · ${s}`}
							{@const isBooked = booked.has(key)}
							<button
								type="button"
								disabled={isBooked}
								onclick={() => (slot = s)}
								class="rounded-sm border px-3 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-35 {slot ===
								s
									? 'border-flame bg-flame text-white'
									: 'border-line bg-ink text-bone/85 hover:border-white/40'}"
								aria-pressed={slot === s}
							>
								{s}{isBooked ? ' · full' : ''}
							</button>
						{/each}
					</div>

					<div class="mt-6 grid gap-4 sm:grid-cols-2">
						<div>
							<label class="block text-xs font-bold tracking-widest text-white uppercase" for="name">Your name</label>
							<input
								id="name"
								bind:value={name}
								required
								placeholder="e.g. Rohan Sharma"
								class="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3.5 text-white outline-none placeholder:text-ash focus:border-flame"
							/>
						</div>
						<div>
							<label class="block text-xs font-bold tracking-widest text-white uppercase" for="phone">Phone</label>
							<input
								id="phone"
								bind:value={phone}
								required
								type="tel"
								placeholder="+91 …"
								class="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3.5 text-white outline-none placeholder:text-ash focus:border-flame"
							/>
						</div>
					</div>

					{#if !slot}
						<p class="mt-4 text-sm text-ember">Pick a time slot above to confirm your booking.</p>
					{/if}
					<button
						type="submit"
						disabled={!slot}
						class="mt-6 w-full rounded-sm bg-flame py-4 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark disabled:cursor-not-allowed disabled:opacity-50"
					>
						Confirm free session
					</button>
					<p class="mt-3 text-center text-xs text-ash">
						Demo booking — no payment is taken and no data leaves your browser.
					</p>
				</form>
			{/if}
		</div>
	</div>
</section>
