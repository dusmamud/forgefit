// FORGEFIT — all site content lives here. Mock values for the demo;
// replace with real coach details, prices and testimonials before launch.

export const site = {
	name: 'FORGEFIT',
	tagline: 'Forge Your Best Self',
	coach: 'Arjun Mehta',
	coachRole: 'Certified Personal Trainer',
	coachCreds: 'ACE Certified · 10+ years · 500+ clients trained',
	phone: '+91 98765 43210',
	email: 'train@forgefit.in',
	city: 'Mumbai, India',
	hours: 'Mon–Sat, 6 AM – 9 PM'
};

export type Program = {
	slug: string;
	num: string;
	title: string;
	tagline: string;
	desc: string;
	image: string;
	price: string;
	duration: string;
	includes: string[];
	bestFor: string;
};

export const programs: Program[] = [
	{
		slug: 'one-on-one-coaching',
		num: '01',
		title: 'One-on-One Coaching',
		tagline: 'Fully personalised training built around you',
		desc: 'Fully personalised training sessions built around your schedule, body, and goals. No templates — just results.',
		image: '/images/program-1on1.jpg',
		price: '₹2,499 / session',
		duration: '60 min · 3× per week recommended',
		includes: [
			'Full movement + fitness assessment',
			'Custom programme, rebuilt every 4 weeks',
			'Form correction on every single rep',
			'WhatsApp check-ins between sessions'
		],
		bestFor: 'Beginners, busy professionals, anyone who wants a coach watching every rep.'
	},
	{
		slug: 'online-programs',
		num: '02',
		title: 'Online Programs',
		tagline: 'Train anywhere, anytime',
		desc: 'Train anywhere, anytime. Custom workout plans and video guidance delivered directly to your device.',
		image: '/images/program-online.jpg',
		price: '₹4,999 / month',
		duration: '4-week blocks · train on your schedule',
		includes: [
			'Personalised plan for home or gym',
			'Video demo for every exercise',
			'Weekly video review of your lifts',
			'Nutrition targets included'
		],
		bestFor: 'Self-starters, travellers, and anyone outside Mumbai who still wants a real coach.'
	},
	{
		slug: 'nutrition-planning',
		num: '03',
		title: 'Nutrition Planning',
		tagline: 'Fuel the transformation',
		desc: 'Fuel your transformation with a personalised nutrition strategy tailored to your goals and lifestyle.',
		image: '/images/program-nutrition.jpg',
		price: '₹3,499 / month',
		duration: 'Ongoing · reviewed every 2 weeks',
		includes: [
			'Indian-food-first meal plans (veg + non-veg)',
			'Calories + protein targets that fit your life',
			'Restaurant and travel eating guides',
			'Monthly body-composition review'
		],
		bestFor: 'Fat loss, muscle gain, or anyone tired of guessing what to eat.'
	},
	{
		slug: 'group-training',
		num: '04',
		title: 'Group Training',
		tagline: 'High-energy small groups',
		desc: 'High-energy small group sessions combining community motivation with expert coaching for maximum output.',
		image: '/images/program-group.jpg',
		price: '₹999 / session',
		duration: '45 min · max 8 people per batch',
		includes: [
			'Small batches — never more than 8',
			'Strength + conditioning in every session',
			'Morning and evening batches',
			'Train with friends, stay accountable'
		],
		bestFor: 'Anyone who trains harder with people around them — and likes paying less for it.'
	}
];

export type Post = {
	slug: string;
	category: string;
	title: string;
	excerpt: string;
	image: string;
	date: string;
	dateISO: string;
	read: string;
	body: string[];
	sources: { label: string; url: string }[];
};

export const posts: Post[] = [
	{
		slug: 'beginner-principles',
		category: 'Training',
		title: '5 Principles Every Beginner Must Know Before Starting',
		excerpt:
			'Breaking into fitness is hard. These five fundamentals will set you up for long-term success from day one.',
		image: '/images/blog-training.jpg',
		date: 'Apr 8, 2026',
		dateISO: '2026-04-08',
		read: '6 min read',
		body: [
			'Most beginners quit in the first six weeks — not because training is hard, but because they start wrong. Too much weight, too many exercises, no plan, no recovery. These five principles fix all of that.',
			'1. Master the movement before adding weight. A clean bodyweight squat beats an ugly 100 kg squat every time. Film your sets, or get a coach to watch them.',
			'2. Train three times a week, not six. Consistency beats intensity in month one. Three solid sessions you actually do will outperform six you skip.',
			'3. Track something. Weight lifted, reps, or even just sessions done. What gets measured gets better — and seeing progress is what keeps you coming back.',
			'4. Eat enough protein. Around 1.6 g per kg of bodyweight is a good starting target. Indian diets make this harder than it sounds, so plan it deliberately.',
			'5. Sleep 7–8 hours. Muscle is built between sessions, not during them. Short sleep kills recovery, hunger control, and motivation in one shot.',
			'Start simple, stay consistent, and add complexity only when the basics are automatic. That is the whole secret.'
		],
		sources: [
			{ label: 'ACE Fitness — American Council on Exercise', url: 'https://www.acefitness.org/' },
			{
				label: 'WHO — Physical activity fact sheet',
				url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity'
			}
		]
	},
	{
		slug: 'eat-before-after-training',
		category: 'Nutrition',
		title: 'What to Eat Before and After Training for Maximum Gains',
		excerpt:
			'Nutrition timing is everything. Learn exactly what to eat and when to maximise your training output.',
		image: '/images/blog-nutrition.jpg',
		date: 'Mar 25, 2026',
		dateISO: '2026-03-25',
		read: '5 min read',
		body: [
			'You can train perfectly and still stall if your food is wrong. Timing matters less than totals — but around training, a little planning goes a long way.',
			'Before training (60–90 minutes): something light and carb-based with a little protein — banana with peanut butter, curd with fruit, or a small sandwich. Avoid heavy, oily food right before a session.',
			'After training (within 2 hours): protein plus carbs. Eggs and toast, chicken and rice, paneer and roti, or a whey shake with a banana. Aim for 25–40 g of protein in this meal.',
			'Hydration counts too. Two litres is a floor, not a target — in Indian summers, most lifters need three or more, plus salt with meals.',
			'The boring truth: hit your daily protein and calories first. Timing is the final 10%, not the first 90%.'
		],
		sources: [
			{ label: 'Academy of Nutrition and Dietetics — EatRight.org Fitness', url: 'https://www.eatright.org/fitness' },
			{ label: 'NHS — Eat well', url: 'https://www.nhs.uk/live-well/eat-well/' }
		]
	},
	{
		slug: 'stay-consistent-motivation',
		category: 'Mindset',
		title: 'How to Stay Consistent When Motivation Runs Out',
		excerpt:
			'Motivation fades. Discipline wins. Here is how to build the mental systems that keep you showing up every day.',
		image: '/images/blog-mindset.jpg',
		date: 'Mar 10, 2026',
		dateISO: '2026-03-10',
		read: '4 min read',
		body: [
			'Motivation is a terrible plan. It shows up on day one and disappears by week three. The people who transform are not more motivated — they have better systems.',
			'First, shrink the commitment. “Go to the gym” becomes “put on shoes and walk in”. On your worst day, you can still do the small version — and small versions keep the streak alive.',
			'Second, fix the time. Same days, same hour, every week. Willpower is a poor alarm clock; a calendar slot is not.',
			'Third, track the streak, not the result. The scale moves slowly. Sessions completed moves every week — and it is fully in your control.',
			'Finally, train with someone. A coach, a batch, a friend. Accountability is the cheapest performance enhancer there is.'
		],
		sources: [
			{
				label: 'WHO — Physical activity fact sheet',
				url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity'
			},
			{ label: 'ACE Fitness — American Council on Exercise', url: 'https://www.acefitness.org/' }
		]
	}
];

export const testimonials = [
	{
		name: 'Rohan Sharma',
		role: 'Lost 14 kg in 5 months',
		image: '/images/client-rohan.jpg',
		quote:
			'I had joined three gyms before and quit all of them. Arjun is the first coach who actually tracked everything — my food, my sleep, my lifts. 14 kilos down, and I have kept it off for a year.'
	},
	{
		name: 'Priya Nair',
		role: 'First pull-up at 34',
		image: '/images/client-priya.jpg',
		quote:
			'As a working mother I thought training was not for me. The online programme fit around my life, and the weekly video reviews kept me honest. I did my first pull-up last month.'
	},
	{
		name: 'Kabir Malhotra',
		role: 'Gained 6 kg lean muscle',
		image: '/images/client-kabir.jpg',
		quote:
			'I was eating everything and gaining nothing. The nutrition plan fixed my protein without making me hate food, and my bench went from 60 to 100 kilos in six months.'
	}
];

export const pricing = [
	{
		name: 'Starter',
		price: '₹4,999',
		per: '/ month',
		blurb: 'For self-starters who want a plan, not a babysitter.',
		features: ['Online programme, rebuilt monthly', 'Video demo for every exercise', 'Nutrition targets included', 'Monthly progress review'],
		cta: 'Start online',
		featured: false
	},
	{
		name: 'Signature 1-on-1',
		price: '₹24,999',
		per: '/ month',
		blurb: 'The full coaching experience. Fastest results, full stop.',
		features: [
			'12 one-on-one sessions / month',
			'Custom nutrition plan + reviews',
			'WhatsApp access between sessions',
			'Body-composition tracking'
		],
		cta: 'Book a free session',
		featured: true
	},
	{
		name: 'Group',
		price: '₹7,999',
		per: '/ month',
		blurb: 'Small-batch energy at a fraction of the price.',
		features: ['Unlimited group batches', 'Max 8 people per batch', 'Morning + evening slots', 'Monthly fitness testing'],
		cta: 'Join a batch',
		featured: false
	}
];

export const faqs = [
	{
		q: 'I have never trained before. Is this for me?',
		a: 'Yes — most of our clients are complete beginners. Your first session is an assessment, not a workout. We start from where you are and build up from there.'
	},
	{
		q: 'Do I need a gym membership?',
		a: 'For 1-on-1 and group training, sessions run at our partner gym in Andheri West and the membership is included. Online programmes work at home or any gym.'
	},
	{
		q: 'What should I bring to my free session?',
		a: 'Workout clothes, shoes, a water bottle, and any medical history that affects training (injuries, conditions, medication). Everything else we provide.'
	},
	{
		q: 'Can I pause or cancel my plan?',
		a: 'Yes. Monthly plans can be paused for up to 2 weeks per quarter, and you can cancel with 7 days notice. Unused 1-on-1 sessions are refundable within 30 days.'
	},
	{
		q: 'Do you offer diet plans for vegetarians?',
		a: 'Yes. Most of our meal plans are built around Indian vegetarian food first — paneer, dal, curd, soya — with non-veg options only if you want them.'
	},
	{
		q: 'What if I have an old injury?',
		a: 'Tell us in your first session. We screen movement, work around the injury, and adjust every exercise — many clients come to us exactly because of a bad knee, back or shoulder.'
	},
	{
		q: 'Can I train with a friend or partner?',
		a: 'Yes. Two people can share a 1-on-1 slot at a small extra charge, and group batches are built for training together. Book one free session and bring them along.'
	},
	{
		q: 'Is there a minimum commitment?',
		a: 'No lock-in on monthly plans — one month at a time, cancel with 7 days notice. Single sessions can be booked one at a time with no commitment at all.'
	}
];

// Transformation stories (mock) — metrics behind the quotes on /results.
export const transformations = [
	{
		name: 'Rohan Sharma',
		image: '/images/client-rohan.jpg',
		programme: '1-on-1 + Nutrition',
		duration: '20 weeks',
		metrics: [
			{ label: 'Weight', from: '92 kg', to: '78 kg' },
			{ label: 'Waist', from: '38 in', to: '32 in' },
			{ label: 'Body fat', from: '31%', to: '21%' }
		]
	},
	{
		name: 'Priya Nair',
		image: '/images/client-priya.jpg',
		programme: 'Online Programme',
		duration: '12 weeks',
		metrics: [
			{ label: 'Pull-ups', from: '0', to: '1 (first ever)' },
			{ label: 'Weight', from: '68 kg', to: '64 kg' },
			{ label: 'Sessions', from: '0 / week', to: '4 / week' }
		]
	},
	{
		name: 'Kabir Malhotra',
		image: '/images/client-kabir.jpg',
		programme: '1-on-1 + Nutrition',
		duration: '24 weeks',
		metrics: [
			{ label: 'Weight', from: '68 kg', to: '74 kg lean' },
			{ label: 'Bench press', from: '60 kg', to: '100 kg' },
			{ label: 'Body fat', from: '18%', to: '13%' }
		]
	}
];

// Who ForgeFit is for (home strip).
export const whoItsFor = [
	{
		title: 'Complete beginners',
		desc: 'Never trained? Most of our clients start here. Assessment first, no judgement, no random workouts.'
	},
	{
		title: 'Busy professionals',
		desc: '60-minute sessions that fit around work. Early mornings, lunch breaks, late evenings — your call.'
	},
	{
		title: 'Fat loss or muscle gain',
		desc: 'A plan with numbers: calories, protein, lifts tracked every week — not guesswork and hope.'
	},
	{
		title: 'Comeback after injury',
		desc: 'Bad knee, bad back, bad shoulder? We screen, adapt every exercise, and rebuild you carefully.'
	}
];

// Coach certifications, shown as issued (mock).
export const certifications = [
	{ name: 'ACE Certified Personal Trainer', issuer: 'American Council on Exercise', year: '2016' },
	{ name: 'Precision Nutrition Level 1', issuer: 'Precision Nutrition', year: '2021' },
	{ name: 'Functional Movement Screen — Level 1', issuer: 'Functional Movement Systems', year: '2019' },
	{ name: 'CPR + AED Certified', issuer: 'Indian Red Cross Society', year: '2025' }
];

// Free 7-day starter plan (lead magnet, /free-guide).
export const freeGuideDays = [
	{
		day: 1,
		title: 'Assess, don’t guess',
		focus: 'Movement screen + baseline',
		detail:
			'Bodyweight squat, hinge, push-up and plank — film each one. Note reps, aches and what feels weak. This is your before photo, in numbers.'
	},
	{
		day: 2,
		title: 'Walk + protein',
		focus: 'Habit day',
		detail:
			'8,000 steps and 1.6 g protein per kg of bodyweight. No gym needed. Most beginners fail here, not on the barbell.'
	},
	{
		day: 3,
		title: 'Full-body session 1',
		focus: 'Squat, push, pull, hinge, core',
		detail:
			'Goblet squat 3×10, push-up 3×8, dumbbell row 3×10 each side, Romanian deadlift 3×10, plank 3×30 s. Rest 90 s between sets.'
	},
	{
		day: 4,
		title: 'Rest + sleep',
		focus: 'Recovery',
		detail:
			'Light walk only. 7–8 hours of sleep tonight — muscle is built between sessions. Prep tomorrow’s food in advance.'
	},
	{
		day: 5,
		title: 'Full-body session 2',
		focus: 'Same moves, slightly heavier',
		detail:
			'Repeat day 3 with one more rep per set or a slightly heavier dumbbell. Small jumps every session — that is progressive overload.'
	},
	{
		day: 6,
		title: 'Conditioning',
		focus: '20 minutes, easy pace',
		detail:
			'Cycling, brisk walking or swimming for 20 minutes at a pace where you can still talk. Heart health without killing your legs.'
	},
	{
		day: 7,
		title: 'Review + next step',
		focus: 'Plan week 2',
		detail:
			'Compare your day-1 numbers with today. Everything should feel easier. Repeat this week with slightly more weight — or book a free session and let a coach build week 2 for you.'
	}
];

// 30-day Forge Challenge (4 weeks, /challenges).
export const challengeWeeks = [
	{
		week: 1,
		title: 'Build the base',
		focus: 'Learn the five lifts, fix your food',
		points: [
			'Three full-body sessions — squat, push, pull, hinge, core',
			'Protein at every meal (target 1.6 g/kg/day)',
			'8,000 steps a day, every day'
		]
	},
	{
		week: 2,
		title: 'Add the load',
		focus: 'Progressive overload starts',
		points: [
			'Every lift goes up a little — one rep or 2.5 kg',
			'First conditioning session: 20 min easy pace',
			'Sleep 7–8 hours — track it, don’t guess it'
		]
	},
	{
		week: 3,
		title: 'Push the pace',
		focus: 'Strength + conditioning together',
		points: [
			'Four sessions this week — add a conditioning day',
			'Meal prep one full day of eating in advance',
			'Retest your day-1 baseline numbers'
		]
	},
	{
		week: 4,
		title: 'Prove it',
		focus: 'Retest week + celebrate',
		points: [
			'Retest all five lifts — compare with week 1',
			'Full week of hitting protein + steps + sleep',
			'Finishers get a free assessment and a month-2 plan'
		]
	}
];

// Pricing comparison matrix (rows: label + one value per plan, in pricing order).
export const comparisonRows = [
	{ label: 'Online programme, rebuilt monthly', values: ['✓', '✓', '✓'] },
	{ label: '1-on-1 sessions / month', values: ['—', '12', '—'] },
	{ label: 'Group batches / month', values: ['—', '—', 'Unlimited'] },
	{ label: 'Nutrition', values: ['Targets', 'Full plan + reviews', '—'] },
	{ label: 'WhatsApp access between sessions', values: ['—', '✓', '—'] },
	{ label: 'Body-composition tracking', values: ['—', '✓', 'Monthly testing'] },
	{ label: 'Monthly progress review', values: ['✓', '✓', '✓'] },
	{ label: 'Pause anytime', values: ['✓', '✓', '✓'] }
];

// Sample day of eating for the nutrition programme (mock).
export const sampleDay = {
	veg: [
		{ meal: 'Breakfast', items: 'Paneer bhurji (150 g) + 2 whole-wheat toasts + fruit' },
		{ meal: 'Lunch', items: 'Dal + 2 rotis + curd (200 g) + salad' },
		{ meal: 'Snack', items: 'Roasted chana (50 g) + buttermilk' },
		{ meal: 'Dinner', items: 'Soya chaap + mixed veg + 1 roti' }
	],
	nonveg: [
		{ meal: 'Breakfast', items: '3-egg omelette + 2 toasts + fruit' },
		{ meal: 'Lunch', items: 'Chicken curry (150 g) + rice + salad' },
		{ meal: 'Snack', items: 'Greek yoghurt (200 g) + nuts' },
		{ meal: 'Dinner', items: 'Fish or chicken (150 g) + veg + 1 roti' }
	]
};

// Client-side search index (/search).
export const searchItems = [
	{ title: 'Home — ForgeFit', desc: 'Certified personal training in Mumbai. First session free.', url: '/', type: 'Page' },
	{ title: 'Programs', desc: '1-on-1 coaching, online programs, nutrition planning, group training.', url: '/programs', type: 'Page' },
	{ title: 'Results', desc: 'Client transformations and testimonials — 500+ clients trained.', url: '/results', type: 'Page' },
	{ title: 'Pricing', desc: 'Starter ₹4,999/mo, Signature 1-on-1 ₹24,999/mo, Group ₹7,999/mo.', url: '/pricing', type: 'Page' },
	{ title: 'About Arjun Mehta', desc: 'ACE Certified personal trainer, 10+ years, 500+ clients.', url: '/about', type: 'Page' },
	{ title: 'Book a free session', desc: 'Pick a programme, a day and a time slot. No payment needed.', url: '/book', type: 'Page' },
	{ title: 'FAQ', desc: 'Beginners, membership, pausing, vegetarian plans, injuries.', url: '/faq', type: 'Page' },
	{ title: 'Fitness tools', desc: 'Free BMI calculator and daily calorie (TDEE) calculator.', url: '/tools', type: 'Page' },
	{ title: 'Free 7-day starter plan', desc: 'A free week of training — assess, lift, recover, repeat.', url: '/free-guide', type: 'Page' },
	{ title: '30-day Forge Challenge', desc: 'Four weeks, four focuses — build the base, add the load, push the pace, prove it.', url: '/challenges', type: 'Page' },
	{ title: 'Contact', desc: '+91 98765 43210, train@forgefit.in, Andheri West, Mumbai.', url: '/contact', type: 'Page' },
	...programs.map((p) => ({ title: p.title, desc: p.desc, url: `/programs/${p.slug}`, type: 'Program' })),
	...posts.map((p) => ({ title: p.title, desc: p.excerpt, url: `/blog/${p.slug}`, type: 'Article' })),
	...faqs.map((f) => ({ title: f.q, desc: f.a, url: '/faq', type: 'FAQ' }))
];

// Weekly group-training timetable (mock) — Mon–Sat batches, Sunday rest.
export const groupSchedule = [
	{ day: 'Monday', sessions: ['6:30 AM · Strength', '8:00 AM · Conditioning', '5:30 PM · Strength', '7:00 PM · Conditioning'] },
	{ day: 'Tuesday', sessions: ['6:30 AM · Strength', '8:00 AM · Conditioning', '5:30 PM · Strength', '7:00 PM · Conditioning'] },
	{ day: 'Wednesday', sessions: ['6:30 AM · Strength', '8:00 AM · Conditioning', '5:30 PM · Strength', '7:00 PM · Conditioning'] },
	{ day: 'Thursday', sessions: ['6:30 AM · Strength', '8:00 AM · Conditioning', '5:30 PM · Strength', '7:00 PM · Conditioning'] },
	{ day: 'Friday', sessions: ['6:30 AM · Strength', '8:00 AM · Conditioning', '5:30 PM · Strength', '7:00 PM · Conditioning'] },
	{ day: 'Saturday', sessions: ['8:00 AM · Strength', '9:30 AM · Conditioning', '5:30 PM · Open gym + coach'] },
	{ day: 'Sunday', sessions: ['Rest day — online check-ins only'] }
];
