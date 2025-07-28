import React from 'react';

export default function ResultSection({
  selectedCards,
  spreadType,
  spreadTypes,
  getCardPositionName,
  resetReading
}) {
  return (
    <div className="p-6 max-w-3xl mx-auto text-white">
      <p className="mb-6">
        ชนิดการดูไพ่: {spreadTypes.find(s => s.id === spreadType)?.name || ''}
      </p>

      <div className="flex flex-col gap-5 mb-5">
        {selectedCards.map((card, i) => (
          <div
            key={card.id}
            className="bg-purple-800 p-4 rounded shadow"
          >
            {/* ตำแหน่งไพ่ */}
            <h1 className="text-sm mb-3">{getCardPositionName(i, spreadType)}</h1>

            {/* ไพ่ + คำทำนาย */}
            <div className="flex items-center gap-6">
              <div className="flip-wrapper">
                <div className={`flip-card flip-in flip-delay-${i}`}>
                  <div className="flip-card-inner">
                    <img
                      src={card.image}
                      alt={card.name}
className="w-full h-full object-contain rounded-lg"                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-lg">
                  {card.name} ({card.thai})
                </p>
                <p className="text-sm mt-1 max-w-lg">{card.meaning}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={resetReading}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-800"
        >
          ดูอีกครั้ง
        </button>
      </div>
    </div>
  );
}
