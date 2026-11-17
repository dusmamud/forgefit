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
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
			"name": "ForgeFit",
			"description": "Certified personal training in Mumbai. 1-on-1 coaching, online programs, nutrition planning and small-group training.",
			"url": "https://forgefits.pages.dev/",
			"telephone": "+91-98765-43210",
			"email": "train@forgefit.in",
			"priceRange": "₹999 - ₹24,999",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Mumbai",
				"addressRegion": "Maharashtra",
				"addressCountry": "IN"
			},
			"openingHoursSpecification": {
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				"opens": "06:00",
				"closes": "21:00"
			},
			"aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "200" }
		}
	</script>
</svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-sm focus:bg-flame focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
>
	Skip to content
</a>
<Header />
<main id="main-content" class="pt-16 sm:pt-[72px]">{@render children()}</main>
<Footer />
