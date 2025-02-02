import React, { useState } from 'react';
import {
  FaBook,
  FaBookmark,
  FaTag,
  FaUser,
  FaBell,
  FaCog,
  FaPlus,
  FaArrowLeft,
} from 'react-icons/fa';
import {
  topics,
  americanGovernmentTopics,
  topicContent,
} from './data/mockData';
import Timeline from './components/Timeline';
import Quiz from './components/Quiz';

const Sidebar = () => (
  <div className="h-full w-32 bg-sidebar-navy flex flex-col text-white">
    <div className="p-4 mb-8">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        <FaUser size={20} className="text-white" />
      </div>
    </div>
    <div className="flex-1 flex flex-col space-y-2">
      <div className="nav-item relative">
        <div className="w-1 h-8 bg-white absolute left-0"></div>
        <FaBook size={20} />
      </div>
      <div className="nav-item">
        <FaBookmark size={20} />
      </div>
      <div className="nav-item">
        <FaTag size={20} />
      </div>
    </div>
    <div className="p-4">
      <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200">
        <FaPlus size={20} className="text-white" />
      </button>
    </div>
  </div>
);

const Header = ({ title, onBack }) => (
  <nav className="bg-dashboard-blue text-white p-6 flex justify-between fixed top-0 w-full">
    {onBack && (
      <button onClick={onBack} className="mr-4">
        <FaArrowLeft
          size={20}
          className="hover:text-[#B52048] transition-colors duration-200"
        />
      </button>
    )}
    <h1 className="text-2xl font-bold">{title}</h1>
    <div className="flex items-center space-x-6">
      <FaBell
        size={20}
        className="cursor-pointer hover:text-[#B52048] transition-colors duration-200"
      />
      <FaCog
        size={20}
        className="cursor-pointer hover:text-[#B52048] transition-colors duration-200"
      />
    </div>
  </nav>
);

const TopicCard = ({ title, onClick }) => {
  const getRandomShape = () => {
    const shapes = [
      'M10 0 A10 10 0 1 1 10 20 A10 10 0 1 1 10 0', // full star
    ];
    return shapes[Math.floor(Math.random() * shapes.length)];
  };

  const getRandomColor = () => {
    const colors = ['#B52048'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const shape = getRandomShape();
  const color = getRandomColor();

  return (
    <div className="topic-card" onClick={onClick}>
      <svg width="40" height="40" viewBox="0 0 20 20" className="mb-2">
        <path d={shape} fill={color} />
      </svg>
      <span className="text-sm text-center font-medium">{title}</span>
    </div>
  );
};

const QuizTile = ({ onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="text-xl font-semibold text-[#B52048]">Practice Quiz</div>
      <svg
        className="w-8 h-8 text-[#B52048]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    </div>
    <p className="text-gray-600 mb-4">
      Test your knowledge with interactive quizzes on American Government
      topics.
    </p>
    <div className="flex items-center text-[#B52048]">
      <span>Start Quiz</span>
      <svg
        className="w-5 h-5 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </div>
);

const HighlightedText = ({ text }) => {
  // Regular expression to match text within square brackets
  const parts = text.split(/(\[[^\]]+\])/g);

  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('[') && part.endsWith(']')) {
          // Remove the brackets and highlight the text
          const highlightedText = part.slice(1, -1);
          return (
            <span key={index} className="text-[#B52048] font-medium">
              {highlightedText}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};

const TopicPage = ({ topic, onBack }) => {
  const content = topicContent[topic];

  if (!content) return null;

  return (
    <div className="flex-1 animate-fade-in">
      <Header title={content.title} onBack={onBack} />
      <div className="p-8">
        <div className="flex flex-col items-center gap-8 mb-8">
          {content.image && (
            <div className="w-full md:w-2/3 lg:w-1/2 flex justify-center">
              <img
                src={content.image}
                alt={content.imageAlt || content.title}
                className="w-full h-auto rounded-lg shadow-md object-cover max-w-3xl"
              />
            </div>
          )}
          <div className="w-full max-w-3xl">
            <p className="text-lg text-gray-600">{content.description}</p>
          </div>
        </div>

        {topic === 'American History' && <Timeline />}

        <div className="space-y-8 max-w-5xl mx-auto">
          {content.sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-6 text-dashboard-blue">
                {section.title}
              </h2>
              <div className="space-y-6">
                {section.content.map((subsection, i) => (
                  <div
                    key={i}
                    className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0"
                  >
                    <h3 className="font-medium text-gray-800 mb-4">
                      {subsection.title}
                    </h3>
                    <ul className="space-y-2">
                      {subsection.items.map((item, j) => (
                        <li key={j} className="text-gray-600 flex items-start">
                          <span className="text-[#B52048] mr-2">•</span>
                          <HighlightedText text={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header title="Your Dashboard" />
      <div className="flex flex-row flex-1">
        <div
          id="sidenav"
          className="h-screen w-32 bg-sidebar-navy flex flex-col text-white"
        >
          <div className="p-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <FaUser size={20} className="text-white" />
            </div>
          </div>
          <div className="flex-1 flex flex-col space-y-2">
            <div className="nav-item relative">
              <div className="w-1 h-8 bg-white absolute left-0"></div>
              <FaBook size={20} />
            </div>
            <div className="nav-item">
              <FaBookmark size={20} />
            </div>
            <div className="nav-item">
              <FaTag size={20} />
            </div>
          </div>
          <div className="p-4">
            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200">
              <FaPlus size={20} className="text-white" />
            </button>
          </div>
        </div>
        <section id="main-section" className="flex-1 ml-16 pt-20">
          {showQuiz ? (
            <div className="p-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <Quiz onClose={() => setShowQuiz(false)} />
              </div>
            </div>
          ) : selectedTopic ? (
            <TopicPage
              topic={selectedTopic}
              onBack={() => setSelectedTopic(null)}
            />
          ) : (
            <>
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Topics</h2>
                  <div className="flex overflow-x-auto scrollbar-hide pb-4">
                    {topics.map((topic) => (
                      <TopicCard
                        key={topic.id}
                        {...topic}
                        onClick={() => handleTopicSelect(topic.title)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Practice & Review
                  </h2>
                  <div className="max-w-2xl">
                    <QuizTile onClick={() => setShowQuiz(true)} />
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
