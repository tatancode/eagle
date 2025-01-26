import React, { useState, useRef, useEffect } from 'react';
import { timelineEvents } from '../data/timelineData';

const TimelineEvent = ({ event, isSelected, onClick }) => (
  <div 
    className={`cursor-pointer transition-all duration-300 ${
      isSelected ? 'scale-105' : 'hover:scale-105'
    }`}
    onClick={onClick}
  >
    <div className="relative">
      <div className={`w-4 h-4 rounded-full ${
        isSelected ? 'bg-[#B52048]' : 'bg-gray-400'
      } absolute left-1/2 -translate-x-1/2 -translate-y-1/2`} />
      <div className={`h-40 w-64 rounded-lg overflow-hidden shadow-lg mx-4 ${
        isSelected ? 'border-2 border-[#B52048]' : ''
      }`}>
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-24 object-cover"
        />
        <div className="p-3 bg-white">
          <div className="font-bold text-[#B52048]">{event.year}</div>
          <div className="font-medium text-sm truncate">{event.title}</div>
        </div>
      </div>
    </div>
  </div>
);

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (selectedEvent) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [selectedEvent]);

  const handleScroll = (direction) => {
    if (timelineRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      timelineRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-8">
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Timeline */}
        <div 
          ref={timelineRef}
          className="overflow-x-auto scrollbar-hide relative"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex items-center relative min-w-max py-8">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300" />
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                event={event}
                isSelected={selectedEvent?.year === event.year}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Event Details */}
      {selectedEvent && (
        <div className={`mt-8 bg-white rounded-xl p-6 shadow-lg ${
          isAnimating ? 'animate-fade-in' : ''
        }`}>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <div className="text-2xl font-bold text-[#B52048] mb-2">
                {selectedEvent.year} - {selectedEvent.title}
              </div>
              <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
              {selectedEvent.keyFigures.length > 0 && (
                <div className="mb-4">
                  <div className="font-semibold text-gray-800 mb-2">Key Figures:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.keyFigures.map((figure, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {figure}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <div className="font-semibold text-gray-800 mb-2">Historical Impact:</div>
                <p className="text-gray-600">{selectedEvent.impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
