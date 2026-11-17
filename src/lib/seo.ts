// Shared SEO helpers (AEO/GEO): speakable blocks for voice assistants and AI answers.

/** JSON-LD string for a SpeakableSpecification pointing at .speakable elements on the page. */
export function speakableJsonLd(): string {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		speakable: {
			'@type': 'SpeakableSpecification',
			cssSelector: ['.speakable']
		}
	});
}
