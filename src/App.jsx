import React, { useState, useEffect } from 'react';
import { allCards, spreadTypes } from './data/tarotCards';
import Particle from './components/Particle';
import HomeSection from './components/HomeSection';
import DrawingSection from './components/DrawingSection';
import ResultSection from './components/ResultSection';


function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedCards, setSelectedCards] = useState([]);
  const [userName, setUserName] = useState('');
  const [question, setQuestion] = useState('');
  const [spreadType, setSpreadType] = useState('single');
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.3,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev =>
        prev.map(p => ({
          ...p,
          y: (p.y + p.speed) % 100,
        }))
      );
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const shuffleCards = () => [...allCards].sort(() => Math.random() - 0.5);

  const drawCards = async () => {

    setCurrentSection('drawing');

    await new Promise(res => setTimeout(res, 3000));

    const shuffled = shuffleCards();

    let cardsCount = 1;
    if (spreadType === 'three') cardsCount = 3;
    else if (spreadType === 'celtic') cardsCount = 10;

    setSelectedCards(shuffled.slice(0, cardsCount));
    setCurrentSection('result');
  };

  const resetReading = () => {
    setCurrentSection('home');
    setSelectedCards([]);
    setQuestion('');
  };

  const getCardPositionName = (index, type) => {
    if (type === 'single') return 'คำตอบ';
    if (type === 'three') return ['อดีต', 'ปัจจุบัน', 'อนาคต'][index];
    if (type === 'celtic') {
      return [
        'สถานการณ์ปัจจุบัน', 'ความท้าทาย', 'อดีตที่ห่างไกล', 'อดีตที่ใกล้',
        'อนาคตที่เป็นไปได้', 'อนาคตใกล้', 'แนวทางของคุณ', 'อิทธิพลภายนอก',
        'ความหวังและความกลัว', 'ผลลัพธ์สุดท้าย'
      ][index];
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black relative overflow-hidden text-white">
      <div className="absolute inset-0">
        {particles.map(p => <Particle key={p.id} particle={p} />)}
      </div>

      <div className="relative z-10">
        {currentSection === 'home' && (
         <HomeSection
  spreadType={spreadType}
  setSpreadType={setSpreadType}
  spreadTypes={spreadTypes}
  drawCards={drawCards}
/>

        )}
        {currentSection === 'drawing' && <DrawingSection />}
        {currentSection === 'result' && (
          <ResultSection
            selectedCards={selectedCards}
            userName={userName}
            question={question}
            spreadType={spreadType}
            spreadTypes={spreadTypes}
            getCardPositionName={getCardPositionName}
            drawCards={drawCards}
            resetReading={resetReading}
          />
        )}
      </div>
    </div>
  );
}

export default App;
