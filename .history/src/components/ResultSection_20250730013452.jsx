import React from 'react';

export default function ResultSection({
  selectedCards,
  spreadType,
  getCardPositionName,
  resetReading
}) {
  return (
    <div className="p-10 max-w-3xl mx-auto text-white">

       <h1 className="text-3xl mb-12 mt-20  tracking-wide text-white text-center animate-float-around glow-text">
        ดูดวงกับน้องเจเจ
      </h1>
    

      <div className="flex flex-col gap-5 mb-5">
        {selectedCards.map((card, i) => (
          <div
            key={card.id}
className="bg-gradient-to-br from-purple-950 via-purple-900 to-gray-900 bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border"
          >
<p className="text-sm mb-5">
  <span className="text-white mr-2">•</span>
  {getCardPositionName(i, spreadType)}
</p>

            <div className="flex items-center gap-3">
              <div className="flip-wrapper">
                <div className={`flip-card flip-in flip-delay-${i}`}>
                 <div className="flip-card-inner overflow-hidden rounded-lg">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-contain "
                  />
                  </div>

                </div>
              </div>

              <div>
                <p className="font-bold text-sm max-w-xs">
                  {card.name} ({card.thai})
                </p>
                <p className="text-sm mt-1 max-w-lg">{card.meaning}</p>
              </div>
            </div>
          </div>
        ))}

        <p className="text-xs text-white mt-12 opacity-50 text-center">
              ไพ่ยิปซีมีอำนาจลึกลับไม่ควรดูเกินวันละ 100 ครั้ง</p>
             
      </div>

     {/* ปุ่มอยู่กึ่งกลาง */}
<div className="flex justify-center mt-4">
   <button
  onClick={resetReading}
  className="
    bg-yellow-400 
    text-purple-900 
    font-extrabold 
    px-8 py-3 
    rounded-full 
    shadow-[0_0_15px_rgba(250,204,21,0.8)] 
    hover:bg-yellow-300 
    hover:scale-110 
    transition 
    duration-300 
    ease-in-out 
    animate-pulse
    relative
    overflow-hidden
  "
>
  <span className="relative z-10">กดเพื่อดูคำทำนายยย</span>

  <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <span className="block w-6 h-full bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-50 animate-shimmer"></span>
  </span>
</button>
</div>

    </div>
  );
}
 