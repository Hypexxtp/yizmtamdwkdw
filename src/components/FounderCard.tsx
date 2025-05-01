import React from 'react';

const FounderCard: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mb-16">
      <div className="relative bg-gray-800/70 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-cyan-900/50 transform hover:-translate-y-1 transition-transform duration-300 glow-box">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
        <div className="absolute top-0 right-0 h-16 w-16">
          <div className="absolute transform rotate-45 bg-gradient-to-r from-cyan-400 to-blue-600 text-xs text-blue-900 font-bold py-1 right-[-35px] top-[20px] w-[135px] text-center">
            FOUNDER
          </div>
        </div>
        
        {/* Card content */}
        <div className="pt-12 pb-8 px-6 flex flex-col items-center">
          <div className="w-28 h-28 -mt-16 mb-4 relative">
            <div className="absolute inset-0 rounded-full blur-md bg-cyan-400/30"></div>
            <div className="relative z-10">
              <div className="w-28 h-28 p-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full">
                <img 
                  src="https://images-ext-1.discordapp.net/external/whSgabDEs6xLLGt0p2L6aVvKWjorPX69feEXvtxSw6g/https/cdn.discordapp.com/avatars/583031648980041759/a_631ebc1c158d5b3917fa29dcc8ab8bfb.gif?width=115&height=115" 
                  alt="Nocry - Fundador YKZ" 
                  className="w-full h-full object-cover rounded-full border-2 border-gray-800"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-orbitron font-bold text-white tracking-wide mb-1">
            Nocry
          </h3>
          <h4 className="text-lg font-orbitron text-white tracking-wide">
            Fundador YKZ
          </h4>
          
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 my-3 rounded-full"></div>
          
        </div>
      </div>
    </div>
  );
};

export default FounderCard;