import React from 'react';

const VehiclesSection: React.FC = () => {
  return (
    <section className="my-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Equipamentos</h2>
      
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-700 text-left bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="border border-gray-700 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-center">
                YKZ
              </th>
              <th className="border border-gray-700 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-center">
                Forças Armadas
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="border border-gray-700 px-6 py-3 text-center">Ônibus Marcopolo</td>
              <td className="border border-gray-700 px-6 py-3 text-center">ROCAM</td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="border border-gray-700 px-6 py-3 text-center">Toyota Supra AT-80 MK4</td>
              <td className="border border-gray-700 px-6 py-3 text-center">Speed Porsche GT3RS</td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="border border-gray-700 px-6 py-3 text-center">Mercedes-Benz AMG-C63</td>
              <td className="border border-gray-700 px-6 py-3 text-center">Blindado</td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="border border-gray-700 px-6 py-3 text-center">Nissan 240SX</td>
              <td className="border border-gray-700 px-6 py-3 text-center">S10</td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="border border-gray-700 px-6 py-3 text-center">Dodge Challenger</td>
              <td className="border border-gray-700 px-6 py-3 text-center">Trailblazer</td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="border border-gray-700 px-6 py-3 text-center">BMW M2</td>
              <td className="border border-gray-700 px-6 py-3 text-center">Corola</td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="border border-gray-700 px-6 py-3 text-center">Nissan Skyline GTR</td>
              <td className="border border-gray-700 px-6 py-3 text-center">Super-Tucano</td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="border border-gray-700 px-6 py-3 text-center">BMW M3 Touring</td>
              <td className="border border-gray-700 px-6 py-3 text-center">Helicóptero H125</td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="border border-gray-700 px-6 py-3 text-center">6 Skins exclusivas da YKZ</td>
              <td className="border border-gray-700 px-6 py-3 text-center">C-17A Globemaster</td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="border border-gray-700 px-6 py-3 text-center"></td>
              <td className="border border-gray-700 px-6 py-3 text-center">GRIPEN F-39E</td>
            </tr>
            <tr className="hover:bg-gray-700 transition-colors">
              <td className="border border-gray-700 px-6 py-3 text-center"></td>
              <td className="border border-gray-700 px-6 py-3 text-center">6 Skins exclusivas das Forças Armadas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default VehiclesSection;
