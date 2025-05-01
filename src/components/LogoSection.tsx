import React from 'react';

const LogoSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-12">
      <div className="w-36 h-36 md:w-44 md:h-44 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
        <div className="relative bg-gray-800/50 rounded-full p-2 border border-cyan-900/50 transform transition-transform duration-500 group-hover:scale-105">
          <img 
            src="https://images-ext-1.discordapp.net/external/VLyu4AO7MmBOcivd9lfPkmyNLG5vW8nhSjVOSx0852Q/%3Fsize%3D2048/https/cdn.discordapp.com/icons/1292994958210502698/a_eab681e7fac845a015bb4f41eeedcbc9.gif?width=175&height=175" 
            alt="YKZ Logo" 
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 px-4 py-1 rounded-full text-center border border-cyan-900/50">
          <span className="text-sm font-medium tracking-wide font-orbitron text-cyan-400">YKZ</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="w-16 h-1 md:w-1 md:h-16 bg-gradient-to-r md:bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
      </div>
      
      <div className="w-36 h-36 md:w-44 md:h-44 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
        <div className="relative bg-gray-800/50 rounded-full p-2 border border-cyan-900/50 transform transition-transform duration-500 group-hover:scale-105">
          <img 
            src="https://media.discordapp.net/attachments/1326663950623838270/1367239281525133372/5.png?ex=6813dc4e&is=68128ace&hm=e340a05d58f062d713b170b342189bb1b8ff3ba28f0ab9ea2778eb1ee88bc0b8&=&format=webp&quality=lossless&width=315&height=315" 
            alt="Forças Armadas Logo" 
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 px-4 py-1 rounded-full text-center border border-cyan-900/50">
          <span className="text-sm font-medium tracking-wide font-orbitron text-cyan-400">FA</span>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;