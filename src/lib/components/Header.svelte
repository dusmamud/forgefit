<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/data';

	let open = $state(false);
	let scrolled = $state(false);
	let progress = $state(0);

	const links = [
		{ href: '/programs', label: 'Programs' },
		{ href: '/results', label: 'Results' },
		{ href: '/pricing', label: 'Pricing' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];

	function close() {
		open = false;
	}

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 16;
			const max = document.documentElement.scrollHeight - window.innerHeight;
			progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	// Lock body scroll + Esc to close while the mobile menu is open.
	$effect(() => {
		if (!open) return;
		document.body.style.overflow = 'hidden';
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') close();
		};
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKey);
		};
	});
</script>

<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300 {open || scrolled
		? 'border-b border-white/10 bg-ink/90 shadow-lg shadow-black/40 backdrop-blur-md'
		: 'border-b border-transparent bg-transparent'}"
>
	<!-- Scroll progress bar -->
	<div class="absolute inset-x-0 top-0 h-[3px] bg-transparent" aria-hidden="true">
		<div class="h-full bg-flame transition-[width] duration-100" style="width: {progress * 100}%"></div>
	</div>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
		<a href="/" class="flex shrink-0 items-center gap-2.5" onclick={close} aria-label="ForgeFit home">
			<span class="grid size-9 place-items-center rounded-md bg-flame font-display text-lg text-white shadow-[0_0_20px_-4px_#e8380d]">F</span>
			<span class="font-display text-xl tracking-[0.08em] text-white sm:text-2xl">
				FORGE<span class="text-flame">FIT</span>
			</span>
		</a>

		<nav class="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Main">
			{#each links as link}
				{@const active = page.url.pathname === link.href}
				<a
					href={link.href}
					aria-current={active ? 'page' : undefined}
					class="group relative py-2 text-[13px] font-semibold tracking-widest uppercase transition {active
						? 'text-white'
						: 'text-bone/75 hover:text-white'}"
				>
					{link.label}
					<span
						class="absolute -bottom-0.5 left-0 h-[2px] bg-flame transition-all duration-300 {active
							? 'w-full'
							: 'w-0 group-hover:w-full'}"
						aria-hidden="true"
					></span>
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2.5 sm:gap-3">
			<a
				href="/book"
				class="rounded-sm bg-flame px-3.5 py-2 text-[11px] font-bold tracking-widest text-white uppercase shadow-[0_0_24px_-6px_#e8380d] transition hover:bg-flame-dark sm:px-5 sm:py-2.5 sm:text-xs"
			>
				Book now
			</a>
			<button
				type="button"
				class="grid size-11 shrink-0 place-items-center rounded-sm border border-white/15 text-white transition hover:border-white/40 lg:hidden"
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
				aria-controls="mobile-menu"
				onclick={() => (open = !open)}
			>
				<span class="relative block h-3.5 w-5" aria-hidden="true">
					<span
						class="absolute top-0 left-0 h-[2px] w-full bg-white transition-all duration-300 {open
							? 'top-[6px] rotate-45'
							: ''}"
					></span>
					<span
						class="absolute top-[6px] left-0 h-[2px] w-full bg-white transition-all duration-300 {open
							? 'opacity-0'
							: ''}"
					></span>
					<span
						class="absolute top-[12px] left-0 h-[2px] w-full bg-white transition-all duration-300 {open
							? 'top-[6px] -rotate-45'
							: ''}"
					></span>
				</span>
			</button>
		</div>
	</div>

	<!-- Thin red hairline tying the header to the hero -->
	<div class="h-px w-full bg-gradient-to-r from-flame via-flame/40 to-transparent" aria-hidden="true"></div>
</header>

{#if open}
	<div
		id="mobile-menu"
		class="fixed inset-0 z-40 overflow-y-auto bg-ink/[0.985] pt-24 pb-10 lg:hidden"
		role="dialog"
		aria-modal="true"
		aria-label="Menu"
	>
		<nav aria-label="Mobile">
			<ul class="px-6">
				{#each links as link, i}
					<li class="menu-item border-b border-white/8" style="animation-delay: {i * 60}ms">
						<a
							href={link.href}
							onclick={close}
							class="flex items-baseline gap-4 py-4 font-display text-4xl tracking-wide text-bone uppercase transition hover:text-flame"
						>
							<span class="font-sans text-xs font-bold tracking-widest text-flame">0{i + 1}</span>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<div class="menu-item px-6 pt-8" style="animation-delay: 380ms">
			<a
				href="/book"
				onclick={close}
				class="block rounded-sm bg-flame px-6 py-4 text-center text-sm font-bold tracking-widest text-white uppercase shadow-[0_0_32px_-8px_#e8380d]"
			>
				Book a free session
			</a>
			<p class="mt-6 text-center text-sm text-ash">
				<a class="font-semibold text-white" href="tel:+919876543210">{site.phone}</a>
				<span class="mx-2 text-white/25">·</span>
				<a class="text-white" href="mailto:train@forgefit.in">{site.email}</a>
			</p>
			<p class="mt-2 text-center text-xs text-ash">{site.hours} · {site.city}</p>
		</div>
	</div>
{/if}
