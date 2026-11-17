<script lang="ts">
	// Animated count-up number: 0 -> value when scrolled into view.
	// Jumps straight to the final value under prefers-reduced-motion.
	let { value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number } = $props();

	let shown = $state(0);
	let el: HTMLSpanElement | undefined = $state();

	$effect(() => {
		if (!el) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			shown = value;
			return;
		}
		let raf = 0;
		const io = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting) return;
				io.disconnect();
				const start = performance.now();
				const dur = 1400;
				const tick = (t: number) => {
					const p = Math.min(1, (t - start) / dur);
					const eased = 1 - Math.pow(1 - p, 3);
					shown = value * eased;
					if (p < 1) raf = requestAnimationFrame(tick);
					else shown = value;
				};
				raf = requestAnimationFrame(tick);
			},
			{ threshold: 0.4 }
		);
		io.observe(el);
		return () => {
			io.disconnect();
			cancelAnimationFrame(raf);
		};
	});
</script>

<span bind:this={el}>{shown.toFixed(decimals)}{suffix}</span>
