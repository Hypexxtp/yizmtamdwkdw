import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-16 text-center">
      <div className="mb-8 h-8 flex justify-center items-center">
        <div className="text-xl md:text-2xl tracking-widest">
          <span className="text-cyan-400 font-mono"></span>
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-2 tracking-wider">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 glow">YKZ / FA - BCR</span>
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
    </header>
  );
};

export default Header;