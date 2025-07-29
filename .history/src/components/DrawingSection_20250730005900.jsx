import React, { useState, useEffect } from 'react';

export default function DrawingSection() {
  const [showMagic, setShowMagic] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMagic(true);
    }, 3000); // 3 วิ ก่อนแสดงผล

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white flex flex-col items-center justify-center h-screen relative overflow-hidden">
      {!showMagic && (
        <>
          <p className="text-2xl mb-4 magic-text">กำลังทำนาย...</p>
          <div className="magic-spinner"></div>
          <p className="text-xs text-white mt-12 opacity-50 text-center">
            โปรดตั้งจิตอธิษฐาน นึกถึงคนเก่า และนับ 1-1000000 ในใจ
          </p>
        </>
      )}

      {/* เอฟเฟกต์วิ้ง */}
      {showMagic && (
        <div className="magic-burst animate-burst"></div>
      )}

      {/* ผลลัพธ์แสดงหลัง burst จบ */}
      {showMagic && (
        <div className="mt-8 z-10 transition-opacity duration-1000 opacity-100">
          <p className="text-2xl font-semibold">🃏 ผลการทำนายจะมาที่นี่!</p>
        </div>
      )}
    </div>
  );
}
