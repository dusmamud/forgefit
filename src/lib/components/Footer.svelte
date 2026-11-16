<script lang="ts">
	import { site } from '#lib/data';
</script>

<footer class="border-t border-white/10 bg-coal">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
			<div>
				<a href="/" class="flex items-center gap-2.5">
					<span class="grid size-9 place-items-center rounded-md bg-flame font-display text-lg text-white">F</span>
					<span class="font-display text-xl tracking-wide text-white">
						FORGE<span class="text-flame">FIT</span>
					</span>
				</a>
				<p class="mt-4 max-w-xs text-sm leading-relaxed text-ash">
					{site.tagline}. Personal training designed around you — your goals, your pace, your results.
				</p>
				<p class="mt-4 text-sm text-ash">
					{site.city}<br />
					{site.hours}
				</p>
			</div>

			<nav aria-label="Explore">
				<h3 class="text-xs font-bold tracking-widest text-white uppercase">Explore</h3>
				<ul class="mt-4 space-y-2.5 text-sm text-ash">
					<li><a class="hover:text-white" href="/programs">Programs</a></li>
					<li><a class="hover:text-white" href="/results">Results</a></li>
					<li><a class="hover:text-white" href="/pricing">Pricing</a></li>
					<li><a class="hover:text-white" href="/blog">Blog</a></li>
					<li><a class="hover:text-white" href="/about">About</a></li>
				</ul>
			</nav>

			<nav aria-label="Programs">
				<h3 class="text-xs font-bold tracking-widest text-white uppercase">Programs</h3>
				<ul class="mt-4 space-y-2.5 text-sm text-ash">
					<li><a class="hover:text-white" href="/programs/one-on-one-coaching">One-on-One Coaching</a></li>
					<li><a class="hover:text-white" href="/programs/online-programs">Online Programs</a></li>
					<li><a class="hover:text-white" href="/programs/nutrition-planning">Nutrition Planning</a></li>
					<li><a class="hover:text-white" href="/programs/group-training">Group Training</a></li>
				</ul>
			</nav>

			<div>
				<h3 class="text-xs font-bold tracking-widest text-white uppercase">Book a free session</h3>
				<p class="mt-4 text-sm leading-relaxed text-ash">
					No sales pitch. 30 minutes, one assessment, one honest plan.
				</p>
				<a
					href="/book"
					class="mt-4 inline-block rounded-sm bg-flame px-5 py-2.5 text-xs font-bold tracking-widest text-white uppercase transition hover:bg-flame-dark"
				>
					Book now
				</a>
				<p class="mt-4 text-sm text-ash">
					<a class="hover:text-white" href="tel:+919876543210">{site.phone}</a><br />
					<a class="hover:text-white" href="mailto:train@forgefit.in">{site.email}</a>
				</p>
			</div>
		</div>

		<div class="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ash sm:flex-row sm:items-center sm:justify-between">
			<p>© 2026 ForgeFit. All rights reserved.</p>
			<p class="flex gap-5">
				<a class="hover:text-white" href="/privacy">Privacy Policy</a>
				<a class="hover:text-white" href="/terms">Terms</a>
			</p>
		</div>
	</div>
</footer>
