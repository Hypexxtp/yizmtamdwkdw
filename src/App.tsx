import React from 'react';
import Header from './components/Header';
import DiscordWidget from './components/DiscordWidget';
import LogoSection from './components/LogoSection';
import FounderCard from './components/FounderCard';
import SponsorsCard from './components/SponsorsCard'; // New import
import AboutSection from './components/AboutSection';
import Notification from './components/Notification';
import Background from './components/Background';
import VehiclesSection from './components/VehiclesSection';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white font-techMono overflow-hidden">
      <Background />
      <div className="container mx-auto px-4 pb-16 relative z-10">
        <DiscordWidget />
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
         
        </h1>
        <Header />
        <LogoSection />
        <FounderCard />
        <SponsorsCard /> {/* New SponsorsCard component */}
        <VehiclesSection />
        <AboutSection />
        <Notification />
      </div>
    </div>
  );
}

export default App;