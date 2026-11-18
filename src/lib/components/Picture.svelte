<script lang="ts">
	// Responsive <picture>: AVIF -> WebP -> JPG/PNG fallback, sized srcset.
	// `base` is the image path without extension or size suffix, e.g. '/images/program-1on1'.
	// Files expected: {base}-{w}.avif / .webp / .jpg for each width in `widths`.
	// `fallback` overrides the <img> src — used for the hero, whose PNG fallback
	// keeps the transparency (no JPG, and no AVIF: this ffmpeg build drops alpha).
	let {
		base,
		alt,
		width,
		height,
		sizes = '100vw',
		widths = [800, 1200],
		cls = '',
		loading,
		fetchpriority,
		fallback,
		style
	}: {
		base: string;
		alt: string;
		width: number | string;
		height: number | string;
		sizes?: string;
		widths?: number[];
		cls?: string;
		loading?: 'lazy' | 'eager';
		fetchpriority?: 'high' | 'low' | 'auto';
		fallback?: string;
		style?: string;
	} = $props();

	function srcset(ext: string): string {
		return widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(', ');
	}
	const imgSrc = $derived(fallback ?? `${base}-${Math.min(...widths)}.jpg`);
</script>

<!-- display:contents keeps the <img> a direct layout child of wherever this
     component is placed — the card/grid/hero sizing behaves exactly as if
     the <img> were written inline. -->
<picture style="display: contents">
	{#if !fallback}
		<source type="image/avif" srcset={srcset('avif')} {sizes} />
	{/if}
	<source type="image/webp" srcset={srcset('webp')} {sizes} />
	<img src={imgSrc} {alt} {width} {height} class={cls} {loading} {fetchpriority} {style} />
</picture>
