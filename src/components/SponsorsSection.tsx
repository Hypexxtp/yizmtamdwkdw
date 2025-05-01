import React from 'react';

const SponsorsSection: React.FC = () => {
  return (
    <section className="my-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Patrocinadores</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* RKM MOD STORE */}
        <div className="text-center">
          <img
            src="https://media.discordapp.net/attachments/1326663950623838270/1367557653399605319/RKMarcadagua.png?ex=681504d0&is=6813b350&hm=78cf89613906b0a09a87c08e7c2fe51ab6e3bccd03d6eb0e067d86ea994ef60f&=&format=webp&quality=lossless&width=805&height=805"
            alt="RKM MOD STORE"
            className="w-32 h-32 object-contain mx-auto mb-4"
          />
          <h3 className="text-lg font-bold text-white">RKM MOD STORE</h3>
          <a
            href="https://discord.gg/snrXEXt959"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
          >
            Link do Servidor
          </a>
        </div>

        {/* CURSED */}
        <div className="text-center">
          <img
            src="https://cdn.discordapp.com/attachments/1326663950623838270/1367557974326906961/Logo-cursed.png?ex=6815051d&is=6813b39d&hm=bbd00d1890d2fa8aca0cf696c25fd292c22d6448bdb310609d7355e6fa4b560b&"
            alt="CURSED"
            className="w-32 h-32 object-contain mx-auto mb-4"
          />
          <h3 className="text-lg font-bold text-white">CURSED</h3>
          <div className="flex flex-col space-y-2">
            <a
              href="https://cursedgg.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
            >
              Site
            </a>
            <a
              href="https://discord.gg/telas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
