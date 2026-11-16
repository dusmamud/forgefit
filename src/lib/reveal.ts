// Scroll-reveal action: adds .is-visible when the element enters view.
// Respects prefers-reduced-motion via CSS (layout.css forces it visible).
export function reveal(node: HTMLElement, delay = 0) {
	node.style.setProperty('--reveal-delay', `${delay}ms`);
	node.classList.add('reveal');
	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					io.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
	);
	io.observe(node);
	return {
		destroy() {
			io.disconnect();
		}
	};
}
