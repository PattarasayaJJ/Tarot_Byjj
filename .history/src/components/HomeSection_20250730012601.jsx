import React, { useState } from 'react';
import nongjjImg from '../assets/nongjjtarot.png';


export default function HomeSection({
  spreadType, setSpreadType,
  spreadTypes,
  drawCards
}) {
  const [showBio, setShowBio] = useState(false);
  const filteredSpreadTypes = spreadTypes.filter(type => type.id !== 'three');

  return (
    <div className="p-6 max-w-5xl mx-auto text-white min-h-screen flex flex-col justify-center items-center relative">
      {/* ปุ่มมุมขวาบน */}
      <button
        onClick={() => setShowBio(true)}
className="absolute top-6 right-6 text-sm bg-purple-900 bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-70 transition"
      >
        กดอ่านหน่อยจิ
      </button>

      {showBio && (
       <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
  <div className="bg-white text-purple-900 rounded-xl p-6 w-full max-w-xs shadow-lg relative">
  <button
    onClick={() => setShowBio(false)}
    className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-black"
  >
    &times;
  </button>

  <img
    src={nongjjImg}
    alt="น้องเจเจ"
    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
  />

  <h2 className="text-xl font-bold mb-2 text-center">รู้จักน้องเจเจ ให้มากขึ้น!</h2>

  <p className="text-xs mb-4 text-center">
    สวัสดี น้องเจเจเอง 👻 หมอเดา 
    
    ใครไม่มีก็ดูฟรีไปนะจ๊ะ โค้ดที่เขียนระบบสุ่ม100% ไม่มีการเซตไว้ ดูขำๆอย่าซีเรียส
  </p>

  <p className="text-xs text-gray-500 text-center">@jjpatts_</p>
</div>

</div>

      )}

      <h1 className="text-3xl mb-12 mt-20  tracking-wide text-white text-center animate-float-around glow-text">
        ดูดวงกับน้องเจเจ
      </h1>

      <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
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
        กดเพื่อดูคำทำนายยย
      </button>

      <p className="text-xs text-white mt-12 opacity-50 text-center">
        ดูดวงกับ @jjpatts_  อย่าซีเรียสเพราะฉันคือหมอเดา ถ้าตรงแสดงว่าคุณเพ้อเจ้อแล้วแหละ
      </p>
    </div>
  );
}
