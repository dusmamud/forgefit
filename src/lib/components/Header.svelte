<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/data';

	let open = $state(false);
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
</script>

<header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<a href="/" class="flex items-center gap-2.5" onclick={close} aria-label="ForgeFit home">
			<span class="grid size-9 place-items-center rounded-md bg-flame font-display text-lg text-white">F</span>
			<span class="font-display text-xl tracking-wide text-white">
				FORGE<span class="text-flame">FIT</span>
			</span>
		</a>

		<nav class="hidden items-center gap-8 lg:flex" aria-label="Main">
			{#each links as link}
				<a
					href={link.href}
					class="text-[13px] font-semibold tracking-widest text-bone/80 uppercase transition hover:text-white"
					class:text-white={page.url.pathname === link.href}
					class:text-flame={page.url.pathname === link.href}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-3">
			<a
				href="/book"
				class="hidden rounded-sm bg-flame px-5 py-2.5 text-xs font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark sm:inline-block"
			>
				Book now
			</a>
			<button
				type="button"
				class="grid size-11 place-items-center rounded-sm border border-white/15 text-white lg:hidden"
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
				onclick={() => (open = !open)}
			>
				{#if open}
					<span class="text-xl leading-none" aria-hidden="true">✕</span>
				{:else}
					<span class="text-xl leading-none" aria-hidden="true">☰</span>
				{/if}
			</button>
		</div>
	</div>

	{#if open}
		<nav class="border-t border-white/10 bg-ink px-4 py-4 lg:hidden" aria-label="Mobile">
			<ul class="space-y-1">
				{#each links as link}
					<li>
						<a
							href={link.href}
							onclick={close}
							class="block rounded-sm px-3 py-3 font-display text-2xl tracking-wide text-bone uppercase transition hover:bg-smoke hover:text-white"
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li class="pt-3">
					<a
						href="/book"
						onclick={close}
						class="block rounded-sm bg-flame px-5 py-3.5 text-center text-sm font-bold tracking-widest text-white uppercase"
					>
						Book a free session
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>
