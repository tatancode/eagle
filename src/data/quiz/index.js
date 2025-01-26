import { americanDemocracyQuestions } from './americanDemocracy';
import { systemOfGovernmentQuestions } from './systemOfGovernment';
import { rightsAndResponsibilitiesQuestions } from './rightsAndResponsibilities';
import { colonialPeriodQuestions } from './colonialPeriod';
import { recentHistoryQuestions } from './recentHistory';
import { geographyQuestions } from './geography';
import { holidayQuestions } from './holidays';
import { symbolQuestions } from './symbols';
import { civilWarQuestions } from './civilWar';
import { modernHistoryQuestions } from './modernHistory';
import { governmentQuestions } from './government';
import { citizenshipQuestions } from './citizenship';
import { constitutionQuestions } from './constitution';
import { foundersQuestions } from './founders';
import { amendmentQuestions } from './amendments';

// Combine all questions
export const allQuestions = [
  ...americanDemocracyQuestions,
  ...systemOfGovernmentQuestions,
  ...rightsAndResponsibilitiesQuestions,
  ...colonialPeriodQuestions,
  ...recentHistoryQuestions,
  ...geographyQuestions,
  ...holidayQuestions,
  ...symbolQuestions,
  ...civilWarQuestions,
  ...modernHistoryQuestions,
  ...governmentQuestions,
  ...citizenshipQuestions,
  ...constitutionQuestions,
  ...foundersQuestions,
  ...amendmentQuestions
];

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Function to get random questions with randomized options
export const getRandomQuestions = (count = 10) => {
  const shuffled = shuffleArray([...allQuestions]);
  return shuffled.slice(0, count).map(question => ({
    ...question,
    options: shuffleArray([...question.options])
  }));
};
