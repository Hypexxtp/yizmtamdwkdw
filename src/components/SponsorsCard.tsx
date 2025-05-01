import React from 'react';

const SponsorsCard: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mb-16">
      <div className="relative bg-gray-800/70 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-cyan-900/50 transform hover:-translate-y-1 transition-transform duration-300 glow-box">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
        <div className="absolute top-0 right-0 h-16 w-16">
          <div className="absolute transform rotate-45 bg-gradient-to-r from-cyan-400 to-blue-600 text-xs text-blue-900 font-bold py-1 right-[-35px] top-[20px] w-[135px] text-center">
            PATROCINADORES
          </div>
        </div>

        {/* Card content */}
        <div className="pt-12 pb-8 px-6 flex flex-col items-center">
          <h3 className="text-xl font-orbitron font-bold text-white tracking-wide mb-4">
            Patrocinadores
          </h3>

          {/* RKM MOD STORE */}
          <div className="w-full flex items-center space-x-4 mb-6">
            <img
              src="https://media.discordapp.net/attachments/1326663950623838270/1367557653399605319/RKMarcadagua.png?ex=681504d0&is=6813b350&hm=78cf89613906b0a09a87c08e7c2fe51ab6e3bccd03d6eb0e067d86ea994ef60f&=&format=webp&quality=lossless&width=805&height=805"
              alt="RKM MOD STORE"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h4 className="text-white font-medium">RKM</h4>
              <a
                href="https://discord.gg/snrXEXt959"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                Link do Servidor
              </a>
            </div>
          </div>

          {/* CURSED */}
          <div className="w-full flex items-center space-x-4 mb-6">
            <img
              src="https://cdn.discordapp.com/attachments/1326663950623838270/1367557974326906961/Logo-cursed.png?ex=6815051d&is=6813b39d&hm=bbd00d1890d2fa8aca0cf696c25fd292c22d6448bdb310609d7355e6fa4b560b&"
              alt="CURSED"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h4 className="text-white font-medium">CURSED</h4>
              <div className="flex flex-col space-y-1">
                <a
                  href="https://cursedgg.store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  Site
                </a>
                <a
                  href="https://discord.gg/snrXEXt959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>

          {/* MOD STORE */}
          <div className="w-full flex items-center space-x-4">
            <img
              src="https://cdn.discordapp.com/attachments/1342244412272545873/1367561176669487112/MOD-White.png?ex=68150818&is=6813b698&hm=524f1776e4ea8458fa2e81e7f1604b3cf3783de61fc926eae058c10b3b4cd3f9&" // Replace with the pasted image URL
              alt="MOD STORE"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h4 className="text-white font-medium">MOD STORE</h4>
              <a
                href="https://discord.gg/Z4qG4nFXqw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                Link do Servidor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsCard;
