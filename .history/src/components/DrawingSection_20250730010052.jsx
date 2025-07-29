import React, { useState, useEffect } from 'react';
import './DrawingSection.css'; // อย่าลืมสร้างไฟล์นี้นะ

export default function DrawingSection() {
  const [showMagic, setShowMagic] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMagic(true);
    }, 3000); // แสดง burst หลัง 3 วินาที

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white flex flex-col items-center justify-center h-screen bg-black relative overflow-hidden">
      {!showMagic && (
        <>
          <p className="text-2xl mb-4 magic-text">กำลังทำนาย...</p>
          <div className="magic-spinner"></div>
          <p className="text-xs text-white mt-12 opacity-50 text-center">
            โปรดตั้งจิตอธิษฐาน นึกถึงคนเก่า และนับ 1-1000000 ในใจ
          </p>
        </>
      )}

      {showMagic && (
        <>
          <div className="magic-burst animate-burst"></div>
          <div className="mt-8 z-10 text-center animate-fade-in">
            <p className="text-3xl font-bold text-purple-300">✨ ผลการทำนายปรากฏแล้ว ✨</p>
          </div>
        </>
      )}
    </div>
  );
}
