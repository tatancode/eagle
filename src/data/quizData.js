// Questions are from the official USCIS Naturalization Test
export const quizQuestions = [
  {
    id: 1,
    question: "What is the supreme law of the land?",
    correctAnswer: "the Constitution",
    options: [
      "the Constitution",
      "the Declaration of Independence",
      "the Bill of Rights",
      "Federal Law"
    ]
  },
  {
    id: 2,
    question: "What does the Constitution do?",
    correctAnswer: "sets up the government",
    options: [
      "sets up the government",
      "declares independence from Britain",
      "establishes state laws",
      "creates political parties"
    ]
  },
  {
    id: 3,
    question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    correctAnswer: "We the People",
    options: [
      "We the People",
      "Life and Liberty",
      "God Bless America",
      "United States Constitution"
    ]
  },
  {
    id: 4,
    question: "What is an amendment?",
    correctAnswer: "a change (to the Constitution)",
    options: [
      "a change (to the Constitution)",
      "a federal law",
      "a Supreme Court decision",
      "a presidential order"
    ]
  },
  {
    id: 5,
    question: "What do we call the first ten amendments to the Constitution?",
    correctAnswer: "the Bill of Rights",
    options: [
      "the Bill of Rights",
      "the Constitutional Rights",
      "the Federal Laws",
      "the Human Rights"
    ]
  },
  {
    id: 6,
    question: "What is one right or freedom from the First Amendment?",
    correctAnswer: "speech",
    options: [
      "speech",
      "bear arms",
      "vote",
      "privacy"
    ]
  },
  {
    id: 7,
    question: "How many amendments does the Constitution have?",
    correctAnswer: "twenty-seven (27)",
    options: [
      "twenty-seven (27)",
      "ten (10)",
      "fifty (50)",
      "thirteen (13)"
    ]
  },
  {
    id: 8,
    question: "What did the Declaration of Independence do?",
    correctAnswer: "announced our independence (from Great Britain)",
    options: [
      "announced our independence (from Great Britain)",
      "formed the Constitution",
      "created the first government",
      "ended the Civil War"
    ]
  }
];

export const getRandomQuestions = (count = 10) => {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
