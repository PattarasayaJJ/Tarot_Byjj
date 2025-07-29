import React from 'react';

export default function HomeSection({
  spreadType, setSpreadType,
  spreadTypes,
  drawCards
}) {
  const filteredSpreadTypes = spreadTypes.filter(type => type.id !== 'three');

  return (
    <div className="p-6 max-w-5xl mx-auto text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-12 font-bold tracking-wide text-white text-center animate-float-around glow-text">
        JEJEY TAROT
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-8 justify-center items-center">
        {filteredSpreadTypes.map(type => (
          <div
            key={type.id}
            onClick={() => setSpreadType(type.id)}
            className={`
              cursor-pointer
              w-40 h-64
              p-4
              rounded-2xl
              border-2
              bg-gradient-to-br from-purple-800 via-purple-900 to-black
              shadow-xl
              flex flex-col justify-between
              transition-transform duration-300
              ${
                spreadType === type.id
                  ? 'border-yellow-400 bg-yellow-400/30 shadow-yellow-400 scale-105'
                  : 'border-white/40 hover:border-yellow-400 hover:shadow-yellow-400 hover:scale-105'
              }
            `}
          >
            <div>
              <h3 className="font-semibold text-base text-yellow-300 mb-1 text-center">
                {type.name}
              </h3>
              <p className="text-purple-300 text-xs text-center">
                {type.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={drawCards}
        className="bg-yellow-400 text-purple-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 hover:scale-105 transition duration-300 block mx-auto"
      >
ดูดวงเล้ยยยย!!      </button>

      <p className="text-xs text-white mt-12 opacity-50 text-center">
               ดูดวงกับ @jjpatts_  อย่าซีเรียสเพราะฉันคือหมอเดา ถ้าตรงแสดงว่าคุณเพ้อเจ้อแล้วแหละ    </p>
             
    </div>
  );
}
