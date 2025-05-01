import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mb-16">
      <div className="bg-gray-800/80 backdrop-blur-md rounded-lg shadow-xl p-8 border border-cyan-900/50 relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-cyan-500"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-cyan-500"></div>
        
        <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-6 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 glow">
            Sobre a YKZ & FA
          </span>
        </h2>
        
        <div className="space-y-4 text-gray-300 font-rajdhani text-base leading-relaxed">
          <p>
            YKZ e as Forças Armadas representam uma união de elite dentro do Brasil Cidade Real (BCR). Nossa missão é proporcionar uma experiência imersiva e profissional aos cidadãos, estabelecendo um novo padrão de qualidade em serviços de segurança e defesa.
          </p>
          <p>
            Com uma estrutura hierárquica bem definida e treinamento rigoroso, nossas unidades estão preparadas para enfrentar qualquer desafio. Nossos membros são selecionados com base em habilidades técnicas e comprometimento com valores como honra, disciplina e excelência.
          </p>
          <p>
            Sob a liderança visionária de Nocry, expandimos continuamente nosso escopo de operações e aprimoramos nossas capacidades para melhor servir à comunidade BCR.
          </p>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* Recrutamento */}
          <div className="bg-gray-900/70 rounded-lg p-4 flex items-center space-x-4 border border-cyan-900/50 w-full md:w-auto hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-white text-base">Recrutamento</h3>
              <p className="text-gray-400 text-sm">Processo seletivo rigoroso para novos membros.</p>
            </div>
          </div>
          
          {/* Membros Selecionados */}
          <div className="bg-gray-900/70 rounded-lg p-4 flex items-center space-x-4 border border-cyan-900/50 w-full md:w-auto hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-white text-base">Membros Selecionados</h3>
              <p className="text-gray-400 text-sm">Equipe composta por profissionais altamente qualificados.</p>
            </div>
          </div>
          
          {/* Reputação */}
          <div className="bg-gray-900/70 rounded-lg p-4 flex items-center space-x-4 border border-cyan-900/50 w-full md:w-auto hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-white text-base">Reputação</h3>
              <p className="text-gray-400 text-sm">Reconhecidos pela excelência e profissionalismo.</p>
            </div>
          </div>

          {/* Conquistas */}
          <div className="bg-gray-900/70 rounded-lg p-4 flex items-center space-x-4 border border-cyan-900/50 w-full md:w-auto hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-white text-base">Conquistas</h3>
              <p className="text-gray-400 text-sm">Considerada a melhor organização do BCR.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;