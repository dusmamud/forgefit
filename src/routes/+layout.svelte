<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { page } from '$app/state';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	// Per-section OG card, chosen from the current route.
	const ogMap: [RegExp, string][] = [
		[/^\/programs/, 'og-programs.jpg'],
		[/^\/pricing/, 'og-pricing.jpg'],
		[/^\/about/, 'og-about.jpg'],
		[/^\/results/, 'og-results.jpg'],
		[/^\/blog/, 'og-blog.jpg'],
		[/^\/tools/, 'og-tools.jpg']
	];
	const ogFile = $derived(ogMap.find(([re]) => re.test(page.url.pathname))?.[1] ?? 'og-default.jpg');
	const ogUrl = $derived(`https://forgefits.pages.dev/images/og/${ogFile}`);
	const canonical = $derived(`https://forgefits.pages.dev${page.url.pathname}`);

	// Sticky mobile CTA: appears after scrolling past the hero, never on /book itself.
	let showCta = $state(false);
	$effect(() => {
		const onScroll = () => {
			showCta = window.scrollY > 500;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- Preload the display + body fonts (hashed names are content-stable: the
	     font files never change, so the hash survives rebuilds). Without this,
	     the @import chain in layout.css delays font discovery and the hero
	     headline swaps fonts after first paint — the desktop CLS 0.14 culprit. -->
	<link rel="preload" href="/_app/immutable/assets/anton-latin-400-normal.Byf51wtH.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href="/_app/immutable/assets/inter-latin-400-normal.C38fXH4l.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href="/_app/immutable/assets/inter-latin-600-normal.LgqL8muc.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href="/_app/immutable/assets/inter-latin-700-normal.Yt3aPRUw.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
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
	<meta property="og:site_name" content="ForgeFit" />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="ForgeFit — Forge Your Best Self" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="ForgeFit — Forge Your Best Self" />
	<meta
		name="twitter:description"
		content="Certified personal training in Mumbai. Book a free session — no sales pitch, just an honest plan."
	/>
	<meta name="twitter:image" content={ogUrl} />
	<link rel="canonical" href={canonical} />
	<meta name="theme-color" content="#0a0a0b" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "ForgeFit",
			"url": "https://forgefits.pages.dev/",
			"inLanguage": "en",
			"description": "Certified personal training in Mumbai — 1-on-1 coaching, online programs, nutrition planning and small-group training."
		}
	</script>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
			"@id": "https://forgefits.pages.dev/#business",
			"name": "ForgeFit",
			"description": "Certified personal training in Mumbai. 1-on-1 coaching, online programs, nutrition planning and small-group training.",
			"url": "https://forgefits.pages.dev/",
			"image": "https://forgefits.pages.dev/images/og/og-default.jpg",
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
	class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-sm focus:bg-flame-dark focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
>
	Skip to content
</a>
<Header />
<main id="main-content" class="pt-16 pb-16 sm:pt-[72px] sm:pb-0">{@render children()}</main>
<Footer />

<!-- Floating WhatsApp -->
<a
	href="https://wa.me/919876543210?text=Hi%20ForgeFit%2C%20I%20want%20to%20book%20a%20free%20session."
	target="_blank"
	rel="noopener"
	aria-label="Chat with ForgeFit on WhatsApp"
	class="fixed right-5 bottom-20 z-30 grid size-13 place-items-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:scale-105 sm:bottom-5"
>
	<svg viewBox="0 0 24 24" class="size-7 fill-current" aria-hidden="true">
		<path
			d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.5 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3Z"
		/>
	</svg>
</a>

<!-- Sticky mobile CTA -->
{#if showCta && page.url.pathname !== '/book'}
	<div class="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink/95 backdrop-blur-md sm:hidden">
		<div class="flex items-center gap-3 px-4 py-3">
			<a
				href="tel:+919876543210"
				aria-label="Call ForgeFit"
				class="grid size-11 shrink-0 place-items-center rounded-sm border border-white/25 text-white"
			>
				<svg viewBox="0 0 24 24" class="size-5 fill-current" aria-hidden="true">
					<path
						d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z"
					/>
				</svg>
			</a>
			<a
				href="/book"
				class="grow rounded-sm bg-flame-dark py-3 text-center text-sm font-bold tracking-widest text-white uppercase transition active:bg-flame-deep"
			>
				Book a free session
			</a>
		</div>
	</div>
{/if}
