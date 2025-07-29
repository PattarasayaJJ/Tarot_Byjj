import React, { useState, useEffect } from 'react';
import { allCards, spreadTypes } from './data/tarotCards';
import Particle from './components/Particle';
import HomeSection from './components/HomeSection';
import DrawingSection from './components/DrawingSection';
import ResultSection from './components/ResultSection';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedCards, setSelectedCards] = useState([]);
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

  const shuffleCards = (cards) => [...cards].sort(() => Math.random() - 0.5);

  const drawCards = async () => {
    setCurrentSection('drawing');

    await new Promise(res => setTimeout(res, 3000));

    let cardsToDrawFrom;

    if (spreadType === 'love') {
      // เช็คให้แน่ใจ card.id เป็น string ก่อนเรียก startsWith('l')
      cardsToDrawFrom = allCards.filter(
        (card) => typeof card.id === 'string' && card.id.startsWith('l')
      );
    } else {
      cardsToDrawFrom = allCards.filter(
        (card) => !(typeof card.id === 'string' && card.id.startsWith('l'))
      );
    }

    const shuffled = shuffleCards(cardsToDrawFrom);

    let cardsCount = 1;
    if (spreadType === 'celtic') cardsCount = 10;
    else if (spreadType === 'love') cardsCount = 1;

    setSelectedCards(shuffled.slice(0, cardsCount));
    setCurrentSection('result');
  };

  const resetReading = () => {
    setCurrentSection('home');
    setSelectedCards([]);
  };

  const getCardPositionName = (index, type) => {
    if (type === 'single') return 'ดวงวันนี้นะคะนะครับแหม';
    if (type === 'celtic') {
      return [
        '1. สถานการณ์ปัจจุบัน',
        '2. อุปสรรคหรือสิ่งขวางทาง',
        '3. อดีตที่ผ่านมา',
        '4. อดีตที่ผ่านมาไม่นาน',
        '5. สิ่งที่คุณต้องการหรือเป้าหมาย',
        '6. สิ่งที่ลึก ๆ อยู่ในใจ',
        '7. อนาคตอันใกล้',
        '8. ตัวคุณในสถานการณ์นี้',
        '9. สิ่งรอบตัว/คนรอบข้าง',
        '10. ผลลัพธ์สุดท้าย',
      ][index];
    }
    if (type === 'love') {
      return 'ดวงความรักช่วงนี้นะจ๊ะ';
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black relative overflow-hidden text-white">
      <div className="absolute inset-0">
        {particles.map((p) => (
          <Particle key={p.id} particle={p} />
        ))}
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
            spreadType={spreadType}
            spreadTypes={spreadTypes}
            getCardPositionName={getCardPositionName}
            resetReading={resetReading}
          />
        )}
      </div>
    </div>
  );
}

export default App;
