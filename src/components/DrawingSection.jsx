import React from 'react';

export default function DrawingSection() {
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-[200px]">
      <p className="text-2xl mb-4 magic-text">กำลังทำนาย...</p>
      <div className="magic-spinner"></div>
    </div>
  );
}
