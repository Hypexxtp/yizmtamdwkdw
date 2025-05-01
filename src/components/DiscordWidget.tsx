import React from 'react';

const DiscordWidget: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-30">
      <a
        href="https://discord.gg/ykzmta"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/50 overflow-hidden shadow-lg glow-box p-3 transition-all duration-300 hover:bg-gray-700/90">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
            >
              <circle cx="9" cy="12" r="1"/>
              <circle cx="15" cy="12" r="1"/>
              <path d="M7.5 7.2c2.3-1.7 6.7-1.7 9 0"/>
              <path d="M7.5 16.8c2.3 1.7 6.7 1.7 9 0"/>
              <path d="M16 8s1.5-1 2-1c1.5 0 2 2 2 2l-1 6c-.5 2-2 2-2 2"/>
              <path d="M8 8s-1.5-1-2-1c-1.5 0-2 2-2 2l1 6c.5 2 2 2 2 2"/>
            </svg>
            <span className="font-medium text-cyan-100 group-hover:text-white transition-colors duration-300">
              Discord YKZ
            </span>
          </div>
        </div>
      </a>
      <a
        href="https://instagram.com/ykzmta"
        target="_blank"
        rel="noopener noreferrer"
        className="block group mt-3"
      >
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/50 overflow-hidden shadow-lg glow-box p-3 transition-all duration-300 hover:bg-gray-700/90">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-pink-400 group-hover:text-pink-300 transition-colors duration-300"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
            <span className="font-medium text-pink-100 group-hover:text-white transition-colors duration-300">
              Instagram YKZ
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DiscordWidget;