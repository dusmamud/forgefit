<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ForgeFit — Personal Training in Mumbai | Forge Your Best Self</title>
	<meta
		name="description"
		content="Personal training designed around you — your goals, your pace, your results. 1-on-1 coaching, online programs, nutrition planning and small-group training in Mumbai."
	/>
	<meta property="og:title" content="ForgeFit — Forge Your Best Self" />
	<meta
		property="og:description"
		content="Certified personal training in Mumbai. Book a free session — no sales pitch, just an honest plan."
	/>
	<meta property="og:type" content="website" />
	<meta name="theme-color" content="#0a0a0b" />
</svelte:head>

<Header />
<main class="pt-16">{@render children()}</main>
<Footer />
