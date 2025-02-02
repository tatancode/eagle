const TIMELINE_IMAGES = {
  declaration:
    'https://upload.wikimedia.org/wikipedia/commons/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg',
  constitution:
    'https://upload.wikimedia.org/wikipedia/commons/9/95/Constitution_signatures.jpg',
  billOfRights:
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Bill_of_Rights.jpg',
  supremeCourt:
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Marbury_vs_Madison_page8.1.1.jpg',
  amendment13:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/13th_Amendment_Pg1of1_AC.jpg/320px-13th_Amendment_Pg1of1_AC.jpg',
  womensSuffrage:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Women%27s_Suffrage_Headquarters_Cleveland.jpg/320px-Women%27s_Suffrage_Headquarters_Cleveland.jpg',
  brownVBoard:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Little_Rock_integration_protest.jpg/320px-Little_Rock_integration_protest.jpg',
  civilRights:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Martin_Luther_King_-_March_on_Washington.jpg/320px-Martin_Luther_King_-_March_on_Washington.jpg',
  votingRights:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Voting_Rights_Act_Signing.jpg/320px-Voting_Rights_Act_Signing.jpg',
};

export const timelineEvents = [
  {
    year: 1776,
    title: 'Declaration of Independence',
    description: 'The United States declares independence from Great Britain',
    image: TIMELINE_IMAGES.declaration,
    category: 'Founding',
    keyFigures: ['Thomas Jefferson', 'John Adams', 'Benjamin Franklin'],
    impact: 'Established the United States as an independent nation',
  },
  {
    year: 1787,
    title: 'Constitution Signed',
    description: 'The U.S. Constitution is written and signed in Philadelphia',
    image: TIMELINE_IMAGES.constitution,
    category: 'Founding',
    keyFigures: ['James Madison', 'George Washington'],
    impact: 'Created the framework for American government',
  },
  {
    year: 1791,
    title: 'Bill of Rights Ratified',
    description: 'First ten amendments to the Constitution are ratified',
    image: TIMELINE_IMAGES.billOfRights,
    category: 'Rights',
    keyFigures: ['James Madison'],
    impact: 'Guaranteed fundamental rights for American citizens',
  },
  {
    year: 1803,
    title: 'Marbury v. Madison',
    description: 'Established judicial review by the Supreme Court',
    image: TIMELINE_IMAGES.supremeCourt,
    category: 'Legal',
    keyFigures: ['John Marshall'],
    impact: 'Gave Supreme Court power to review laws for constitutionality',
  },
  {
    year: 1865,
    title: '13th Amendment',
    description: 'Abolition of slavery in the United States',
    image: TIMELINE_IMAGES.amendment13,
    category: 'Rights',
    keyFigures: ['Abraham Lincoln'],
    impact: 'Ended slavery throughout the United States',
  },
  {
    year: 1920,
    title: '19th Amendment',
    description: "Women's right to vote is guaranteed",
    image: TIMELINE_IMAGES.womensSuffrage,
    category: 'Rights',
    keyFigures: ['Susan B. Anthony', 'Elizabeth Cady Stanton'],
    impact: 'Granted women the right to vote',
  },
  {
    year: 1954,
    title: 'Brown v. Board of Education',
    description:
      'Racial segregation in public schools declared unconstitutional',
    image: TIMELINE_IMAGES.brownVBoard,
    category: 'Rights',
    keyFigures: ['Thurgood Marshall', 'Earl Warren'],
    impact: 'Ended legal racial segregation in public schools',
  },
  {
    year: 1964,
    title: 'Civil Rights Act',
    description: 'Landmark civil rights and labor law in the United States',
    image: TIMELINE_IMAGES.civilRights,
    category: 'Rights',
    keyFigures: ['Lyndon B. Johnson', 'Martin Luther King Jr.'],
    impact:
      'Outlawed discrimination based on race, color, religion, sex, or national origin',
  },
  {
    year: 1971,
    title: '26th Amendment',
    description: 'Voting age set to 18',
    image: TIMELINE_IMAGES.votingRights,
    category: 'Rights',
    keyFigures: [],
    impact: 'Guaranteed voting rights for citizens 18 and older',
  },
];
