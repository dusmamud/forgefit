<script lang="ts">
	import { site } from '#lib/data';
	import { reveal } from '#lib/reveal';

	let name = $state('');
	let sent = $state(false);
</script>

<svelte:head>
	<title>Contact — ForgeFit Personal Training, Mumbai</title>
	<meta
		name="description"
		content="Contact ForgeFit: {site.phone}, {site.email}. Andheri West, Mumbai. {site.hours}."
	/>
</svelte:head>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<div class="grid gap-10 lg:grid-cols-2">
		<div use:reveal>
			<p class="eyebrow">Get in touch</p>
			<h1 class="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-6xl">
				Talk to a<br />real coach
			</h1>
			<p class="mt-5 max-w-md leading-relaxed text-ash">
				Questions about training, injuries, food, or which programme fits? Message us — a coach replies, not a
				bot.
			</p>
			<div class="mt-8 space-y-4">
				<div class="rounded-lg border border-line bg-coal p-5">
					<p class="text-xs font-bold tracking-widest text-flame uppercase">Phone / WhatsApp</p>
					<a href="tel:+919876543210" class="mt-1 block text-lg font-semibold text-white">{site.phone}</a>
				</div>
				<div class="rounded-lg border border-line bg-coal p-5">
					<p class="text-xs font-bold tracking-widest text-flame uppercase">Email</p>
					<a href="mailto:train@forgefit.in" class="mt-1 block text-lg font-semibold text-white">{site.email}</a>
				</div>
				<div class="rounded-lg border border-line bg-coal p-5">
					<p class="text-xs font-bold tracking-widest text-flame uppercase">Studio</p>
					<p class="mt-1 text-white">Andheri West, Mumbai</p>
					<p class="text-sm text-ash">{site.hours}</p>
				</div>
			</div>
		</div>

		<div use:reveal={120}>
			{#if sent}
				<div class="rounded-lg border border-flame/50 bg-flame/10 p-8 text-center">
					<p class="font-display text-3xl text-white uppercase">Message received ✓</p>
					<p class="mt-3 text-bone/85">
						Thanks, {name}! A coach will get back to you within one working day.
					</p>
				</div>
			{:else}
				<form
					class="rounded-lg border border-line bg-coal p-6 sm:p-8"
					onsubmit={(e) => {
						e.preventDefault();
						sent = true;
					}}
				>
					<label class="block text-xs font-bold tracking-widest text-white uppercase" for="c-name">Your name</label>
					<input
						id="c-name"
						bind:value={name}
						required
						class="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3.5 text-white outline-none focus:border-flame"
					/>
					<label class="mt-5 block text-xs font-bold tracking-widest text-white uppercase" for="c-msg">Message</label>
					<textarea
						id="c-msg"
						required
						rows="5"
						placeholder="Hi, I want to start training for fat loss…"
						class="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3.5 text-white outline-none placeholder:text-ash focus:border-flame"
					></textarea>
					<button
						type="submit"
						class="mt-6 w-full rounded-sm bg-flame py-4 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark"
					>
						Send message
					</button>
					<p class="mt-3 text-center text-xs text-ash">Demo form — nothing is sent anywhere yet.</p>
				</form>
			{/if}
		</div>
	</div>
</section>
