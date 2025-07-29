import React from 'react';

export default function ResultSection({
  selectedCards,
  spreadType,
  spreadTypes,
  getCardPositionName,
  resetReading
}) {
  return (
    <div className="p-10 max-w-3xl mx-auto text-white">
    <p className="font-semibold text-base text-yellow-300 mb-6 ">        {spreadTypes.find(s => s.id === spreadType)?.name || ''}
      </p>

      <div className="flex flex-col gap-5 mb-5">
        {selectedCards.map((card, i) => (
          <div
            key={card.id}
            className="bg-gradient-to-r from-indigo-900 via-purple-900 to-purple-900 p-4 rounded shadow"
          >
<h1 className="text-sm mb-3">
  <span className="text-white mr-2">•</span>
  {getCardPositionName(i, spreadType)}
</h1>

            <div className="flex items-center gap-6">
              <div className="flip-wrapper">
                <div className={`flip-card flip-in flip-delay-${i}`}>
                  <div className="flip-card-inner">
                    <img
                      src={card.image}
                      alt={card.name}
className="w-full h-full object-contain rounded-lg "                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-sm">
                  {card.name} ({card.thai})
                </p>
                <p className="text-sm mt-1 max-w-lg">{card.meaning}</p>
              </div>
            </div>
          </div>
        ))}

        <p className="text-xs text-white mt-12 opacity-50 text-center">
               ระบบสุ่ม100% เอาไรมาตรงเอ่ยย ?? แต่ถ้าตรงก็แสดงว่าบังเอิญ</p>
             
      </div>

     {/* ปุ่มอยู่กึ่งกลาง */}
<div className="flex justify-center mt-4">
  <button
    onClick={resetReading}
        className="bg-yellow-400 text-purple-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 hover:scale-105 transition duration-300 block mx-auto"
  >
ดูอีกรอบเพื่อความชัวร์  </button>
</div>

    </div>
  );
}
 