import React, { useEffect, useState } from 'react';

const Notification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show notification after a short delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    
    // Hide notification after some time
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);
    
    // Clean up timers
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  
  return (
    <div 
      className={`fixed bottom-4 right-4 z-40 max-w-sm w-full md:w-96 ${
        isVisible 
          ? 'notification-enter' 
          : 'notification-exit hidden'
      }`}
    >
      <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/50 shadow-lg overflow-hidden glow-box">
        <div className="relative">
          {/* Top colored bar */}
          <div className="h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
          
          {/* Content */}
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-xl">🎉</span>
                </div>
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium text-white">
                  Caso vá comprar algo no BCR, utilize o cupom <span className="font-bold text-cyan-400">NOCRY</span>!
                </p>
                <div className="mt-3 flex space-x-3">
                  <a
                    href="https://brasilcidadereal.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-300"
                  >
                    Ir para o BCR
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsVisible(false)}
                    className="inline-flex items-center px-3 py-2 border border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-200 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
                  >
                    Fechar
                  </button>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-200 focus:outline-none"
                  onClick={() => setIsVisible(false)}
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;