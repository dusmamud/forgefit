<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head><title>Page not found — ForgeFit</title></svelte:head>

<section class="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:py-32">
	<p class="font-display text-8xl text-flame">{page.status}</p>
	<h1 class="mt-4 font-display text-4xl tracking-wide text-white uppercase sm:text-5xl">
		{#if page.status === 404}
			This page did not make it through the workout
		{:else}
			Something went wrong
		{/if}
	</h1>
	<p class="mx-auto mt-4 max-w-md text-ash">
		{#if page.status === 404}
			The page you are looking for does not exist or was moved. Head back home or book a free session instead.
		{:else}
			{page.error?.message ?? 'An unexpected error happened. Please try again.'}
		{/if}
	</p>
	<div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
		<a
			href="/"
			class="rounded-sm bg-flame px-8 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark"
		>
			Back to home
		</a>
		<a
			href="/book"
			class="rounded-sm border border-white/25 px-8 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition hover:border-white hover:bg-white/5"
		>
			Book a free session
		</a>
	</div>
</section>
