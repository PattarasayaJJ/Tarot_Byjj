import React, { useEffect, useRef } from 'react';
import '../\/magic.css';

export default function DrawingSection() {
  const audioRef = useRef(null);

  useEffect(() => {
    // เล่นเสียงตอน component โหลด
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="text-white flex flex-col items-center justify-center h-screen bg-black relative overflow-hidden">
      <div className="stars"></div>

      <p className="text-3xl mb-6 magic-glow animate-pulse tracking-widest z-10 glitch">
        🪄 กำลังทำนายโชคชะตา...
      </p>

      <div className="magic-circle glitch z-10"></div>

      <p className="text-xs text-white mt-12 opacity-70 text-center z-10 animate-fade-in">
        โปรดตั้งจิตอธิษฐาน...  
        <br />นึกถึงคนเก่า และนับ 1 ถึง 1,000,000 ในใจ
      </p>

      {/* เสียงกริ๊ง */}
      <audio ref={audioRef} src="/magic-chime.mp3" preload="auto" />
    </div>
  );
}
