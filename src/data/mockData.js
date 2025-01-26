export const topics = [
	{ id: 1, title: 'American Government', icon: 'government' },
	{ id: 2, title: 'American History', icon: 'history' },
	{ id: 3, title: 'Integrated Civics', icon: 'civics' },
];

export const americanGovernmentTopics = [
	{
		id: 1,
		title: 'Principles of American Democracy',
		rank: '1st',
		icon: 'democracy',
	},
	{ id: 2, title: 'System of Government', rank: '2nd', icon: 'system' },
	{ id: 3, title: 'Rights and Responsibilities', rank: '3rd', icon: 'rights' },
];

export const topicContent = {
	'American Government': {
		title: 'American Government',
		description:
			'Understanding the fundamental principles, structure, and functioning of the American government system, including its three branches and the rights and responsibilities of citizens.',
		image: '/assets/patriot-1800.webp',
		imageAlt:
			'Historical patriotic illustration representing American government',
		sections: [
			{
				title: 'Principles of American Democracy',
				content: [
					{
						title: 'Constitutional Foundation',
						items: [
							'The [Constitution] is the supreme law of the land',
							'The Constitution begins with "[We the People]," emphasizing self-government',
							'Establishes and defines the [government structure]',
							'Protects [basic rights] of Americans',
							'Contains [27 amendments], with the first ten known as the [Bill of Rights]',
							'Written in [1787] at the Constitutional Convention',
						],
					},
					{
						title: 'Fundamental Rights',
						items: [
							'[First Amendment] freedoms: [Speech], [Religion], [Assembly], [Press], [Petition]',
							'[Declaration of Independence] rights: [Life], [Liberty], [Pursuit of happiness]',
							'Freedom of [expression] and [petition]',
							'Right to [bear arms]',
						],
					},
					{
						title: 'Economic and Legal System',
						items: [
							'[Capitalist/market economy] system',
							'[Rule of law] ensures everyone must follow the law',
							'No one is [above the law], including leaders',
						],
					},
				],
			},
			{
				title: 'System of Government',
				content: [
					{
						title: 'Executive Branch',
						items: [
							'Led by the [President] who serves [4-year terms]',
							'President is [Commander in Chief] of military',
							'President [signs or vetoes] bills',
							'[Cabinet] advises the President',
							'[Vice President] becomes President if President cannot serve',
							'[Speaker of the House] is next in line after Vice President',
							'Cabinet includes Secretaries of State, Defense, Treasury, Attorney General, etc.',
						],
					},
					{
						title: 'Legislative Branch',
						items: [
							'[Congress] makes federal laws',
							'[Senate]: [100 members], two per state, [6-year terms]',
							'[House of Representatives]: [435 members] based on state population, [2-year terms]',
							'Each Senator represents all people of their state',
						],
					},
					{
						title: 'Judicial Branch',
						items: [
							'[Supreme Court] is the highest court',
							'Reviews and [explains laws]',
							'Resolves [disputes]',
							'Decides if laws are [constitutional]',
						],
					},
				],
			},
			{
				title: 'Rights and Responsibilities',
				content: [
					{
						title: 'Citizen Rights',
						items: [
							'[Voting] in federal elections (18 and older)',
							'Running for [federal office]',
							'Freedom of [expression], [speech], [assembly]',
							'Right to [bear arms]',
						],
					},
					{
						title: 'Citizen Responsibilities',
						items: [
							'Serving on a [jury]',
							'[Voting] in federal elections',
							'Paying [taxes] by April 15',
							'Registering for [Selective Service] (males 18-26)',
							'[Defending] the Constitution',
							'Being [loyal] to the United States',
						],
					},
				],
			},
		],
	},
	'American History': {
		title: 'American History',
		description:
			'Explore the key events, figures, and movements that shaped the United States, from its founding through modern times.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg/1200px-Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg',
		imageAlt: 'Declaration of Independence painting by John Trumbull',
		sections: [
			{
				title: 'Colonial Period and Independence',
				content: [
					{
						title: 'Path to Independence',
						items: [
							'The [13 colonies] were established between 1607 and 1732',
							'[Taxation without representation] led to growing tensions',
							'The [Boston Tea Party] occurred in 1773',
							'[First Continental Congress] met in 1774',
							'[Revolutionary War] began in 1775',
						],
					},
				],
			},
		],
	},
	'Integrated Civics': {
		title: 'Integrated Civics',
		description:
			'Understanding American geography, symbols, holidays, and the integration of various aspects of American civic life.',
		sections: [
			{
				title: 'Geography',
				content: [
					{
						title: 'Natural Features',
						items: [
							'Major rivers: Mississippi and Missouri',
							'Oceans: Atlantic and Pacific',
							'Major mountain ranges: Rocky Mountains and Appalachian Mountains',
						],
					},
					{
						title: 'Political Geography',
						items: [
							'50 states and their capitals',
							'Territories like Puerto Rico, U.S. Virgin Islands',
							'Borders with Canada and Mexico',
						],
					},
				],
			},
			{
				title: 'American Symbols and Holidays',
				content: [
					{
						title: 'National Symbols',
						items: [
							'The American flag',
							'The Statue of Liberty',
							'The Liberty Bell',
							'The bald eagle',
						],
					},
					{
						title: 'National Holidays',
						items: [
							'Independence Day (July 4)',
							"Presidents' Day",
							'Memorial Day',
							'Veterans Day',
							'Thanksgiving Day',
						],
					},
				],
			},
		],
	},
};
