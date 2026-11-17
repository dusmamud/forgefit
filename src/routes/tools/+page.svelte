<script lang="ts">
	import { speakableJsonLd } from '#lib/seo';

	// BMI + daily calorie (TDEE) calculators. Fully client-side — nothing leaves the browser.

	// --- BMI ---
	let heightCm = $state(175);
	let weightKg = $state(80);
	const bmi = $derived(weightKg / ((heightCm / 100) * (heightCm / 100)));
	const bmiCategory = $derived(
		bmi < 18.5
			? { label: 'Underweight', note: 'Below 18.5 — you may need to eat more and build muscle.' }
			: bmi < 25
				? { label: 'Healthy', note: '18.5–24.9 — a good place to be. Maintain it with training.' }
				: bmi < 30
					? { label: 'Overweight', note: '25–29.9 — a structured training + nutrition plan will move this steadily.' }
					: { label: 'Obese', note: '30+ — start with a coach assessment and a sustainable plan, not a crash diet.' }
	);

	// --- Calories (Mifflin-St Jeor) ---
	let age = $state(30);
	let sex = $state<'male' | 'female'>('male');
	let activity = $state(1.55);
	const bmr = $derived(
		sex === 'male'
			? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
			: 10 * weightKg + 6.25 * heightCm - 5 * age - 161
	);
	const tdee = $derived(Math.round(bmr * activity));
	const protein = $derived(`${Math.round(weightKg * 1.4)}–${Math.round(weightKg * 2)} g`);

	const activities = [
		{ value: 1.2, label: 'Sedentary — desk job, little exercise' },
		{ value: 1.375, label: 'Light — 1–3 sessions / week' },
		{ value: 1.55, label: 'Moderate — 3–5 sessions / week' },
		{ value: 1.725, label: 'Active — 6–7 sessions / week' },
		{ value: 1.9, label: 'Very active — physical job + training' }
	];

	const field =
		'mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3.5 text-white outline-none focus:border-flame';
	const label = 'block text-xs font-bold tracking-widest text-white uppercase';
</script>

<svelte:head>
	<title>Fitness Tools — BMI &amp; Calorie Calculator — ForgeFit</title>
	<meta
		name="description"
		content="Free ForgeFit tools: check your BMI and estimate daily calories and protein for your goal. Instant, private — nothing leaves your browser."
	/>
	{@html `<script type="application/ld+json">${speakableJsonLd()}</script>`}
</svelte:head>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
	<p class="eyebrow">Free tools</p>
	<h1 class="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-7xl">
		Know your<br />numbers
	</h1>
	<p class="speakable mt-5 max-w-2xl leading-relaxed text-ash">
		Two quick checks before you start training — your BMI and your daily calorie + protein targets. Estimates
		only, not medical advice; your coach fine-tunes them in your first session.
	</p>

	<div class="mt-12 grid gap-4 lg:grid-cols-2">
		<!-- BMI -->
		<div class="rounded-lg border border-line bg-coal p-6 sm:p-8">
			<h2 class="font-display text-3xl tracking-wide text-white uppercase">BMI calculator</h2>
			<p class="mt-2 text-sm text-ash">Body Mass Index — weight relative to height.</p>
			<div class="mt-6 grid gap-4 sm:grid-cols-2">
				<div>
					<label class={label} for="bmi-height">Height (cm)</label>
					<input id="bmi-height" type="number" min="120" max="230" bind:value={heightCm} class={field} />
				</div>
				<div>
					<label class={label} for="bmi-weight">Weight (kg)</label>
					<input id="bmi-weight" type="number" min="30" max="250" bind:value={weightKg} class={field} />
				</div>
			</div>
			<div class="mt-6 rounded-lg bg-ink p-5 text-center">
				<p class="text-xs font-bold tracking-widest text-flame uppercase">Your BMI</p>
				<p class="mt-1 font-display text-6xl text-white">{bmi.toFixed(1)}</p>
				<p class="mt-1 font-semibold text-white">{bmiCategory.label}</p>
				<p class="mt-2 text-sm text-ash">{bmiCategory.note}</p>
			</div>
		</div>

		<!-- Calories -->
		<div class="rounded-lg border border-line bg-coal p-6 sm:p-8">
			<h2 class="font-display text-3xl tracking-wide text-white uppercase">Calorie calculator</h2>
			<p class="mt-2 text-sm text-ash">Daily maintenance calories (TDEE) via Mifflin-St Jeor.</p>
			<div class="mt-6 grid gap-4 sm:grid-cols-2">
				<div>
					<label class={label} for="cal-age">Age</label>
					<input id="cal-age" type="number" min="14" max="90" bind:value={age} class={field} />
				</div>
				<div>
					<label class={label} for="cal-sex">Sex</label>
					<select id="cal-sex" bind:value={sex} class={field}>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
				<div class="sm:col-span-2">
					<label class={label} for="cal-activity">Activity level</label>
					<select id="cal-activity" bind:value={activity} class={field}>
						{#each activities as a}
							<option value={a.value}>{a.label}</option>
						{/each}
					</select>
				</div>
			</div>
			<p class="mt-4 text-xs text-ash">
				Uses the same height and weight as the BMI calculator — change them there and both tools update.
			</p>
			<div class="mt-6 rounded-lg bg-ink p-5 text-center">
				<p class="text-xs font-bold tracking-widest text-flame uppercase">Maintenance calories</p>
				<p class="mt-1 font-display text-6xl text-white">{tdee.toLocaleString('en-IN')}</p>
				<p class="mt-1 text-sm text-ash">kcal / day · protein target {protein} / day</p>
				<p class="mt-2 text-sm text-ash">
					Fat loss: roughly {Math.round(tdee * 0.85).toLocaleString('en-IN')} kcal/day. Muscle gain: roughly
					{Math.round(tdee * 1.1).toLocaleString('en-IN')} kcal/day.
				</p>
			</div>
		</div>
	</div>

	<div class="mt-12 rounded-lg bg-flame p-8 text-center">
		<h2 class="font-display text-3xl tracking-wide text-white uppercase sm:text-4xl">
			Numbers are the easy part
		</h2>
		<p class="mx-auto mt-3 max-w-lg text-white/85">
			Sticking to them is the hard part — that is what a coach is for. Book a free session and we build your
			plan around these numbers.
		</p>
		<a
			href="/book"
			class="mt-6 inline-block rounded-sm bg-ink px-8 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-coal"
		>
			Book a free session →
		</a>
	</div>
</section>
