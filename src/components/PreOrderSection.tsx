import React from "react";
import { PiBowlSteam, PiCalendarDot, PiMotorcycle, PiPhoneOutgoing } from "react-icons/pi";

type PreOrderSectionProps = {
  onPreOrderClick: () => void;
};

const PreOrderSection: React.FC<PreOrderSectionProps> = ({
  onPreOrderClick,
}) => {
  return (
    <section className="py-16 bg-red-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white transform rotate-45"></div>
        <div className="absolute top-20 right-12 w-16 h-16 border border-amber-300 transform -rotate-12"></div>
        <div className="absolute bottom-12 left-16 w-12 h-12 bg-amber-400 transform rotate-12"></div>
        <div className="absolute bottom-8 right-8 w-8 h-8 border border-white transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2
          className="text-3xl md:text-5xl font-bold mb-6"
          style={{
            fontFamily: "Bebas Neue, Impact, sans-serif",
            textShadow: "3px 3px 0 rgba(0,0,0,0.3)",
          }}
        >
          PRE-ORDER SEKARANG!
        </h2>
        <p
          className="text-xl mb-8 text-red-100 max-w-2xl mx-auto font-medium"
          style={{ fontFamily: "Merriweather, Georgia, serif" }}
        >
          Sistem Pre-Order untuk kualitas terbaik! Pesan H-1 untuk mendapatkan
          makanan segar langsung dari dapur kami.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
          <div className="flex items-center gap-3 bg-red-800 px-6 py-3 rounded-lg border border-red-700">
            <PiCalendarDot className="w-7 h-7 text-amber-400" />
            <div className="text-left">
              <div className="font-bold">Ready: 14 Juni 2025</div>
              <div className="text-sm text-red-200">Pesan sekarang!</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-red-800 px-6 py-3 rounded-lg border border-red-700">
            <PiMotorcycle className="w-7 h-7 text-amber-400" />
            <div className="text-left">
              <div className="font-bold">Antar Area Bogor</div>
              <div className="text-sm text-red-200">Bogor Kota - Dramaga</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-red-800 px-6 py-3 rounded-lg border border-red-700">
            <PiBowlSteam className="w-7 h-7 text-amber-400" />
            <div className="text-left">
              <div className="font-bold">Kualitas Premium</div>
              <div className="text-sm text-red-200">
                Masakan fresh & autentik
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onPreOrderClick}
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-green-400"
          style={{ fontFamily: "Oswald, Arial, sans-serif" }}
        >
          <PiPhoneOutgoing  className="w-7 h-7" />
          PRE-ORDER VIA WHATSAPP
        </button>
      </div>
    </section>
  );
};

export default PreOrderSection;
