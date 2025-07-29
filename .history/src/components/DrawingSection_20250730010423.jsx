import React from 'react';
import '../style/magic.css'

export default function DrawingSection() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen bg-black relative overflow-hidden">
      {/* พาร์ติเคิลพื้นหลัง */}
      <div className="stars"></div>

      {/* ข้อความเวทย์มนต์ */}
      <p className="text-3xl mb-6 magic-glow animate-pulse tracking-widest z-10">
        🪄 กำลังทำนายโชคชะตา...
      </p>

      {/* สปินเนอร์เวทย์มนตร์ */}
      <div className="magic-circle z-10"></div>

      {/* คำแนะนำ */}
      <p className="text-xs text-white mt-12 opacity-70 text-center z-10 animate-fade-in">
        โปรดตั้งจิตอธิษฐาน...  
        <br />นึกถึงคนเก่า และนับ 1 ถึง 1,000,000 ในใจ
      </p>
    </div>
  );
}