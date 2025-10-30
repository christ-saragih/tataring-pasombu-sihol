import React from "react";
import HeaderBorder from "@/assets/images/header-border-art.png";

type HeroSectionProps = {
  onCTAClick: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  return (
    <header className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-700 text-white overflow-hidden">
      {/* Kiri */}
      <img
        src={HeaderBorder}
        alt="Header Border Art"
        className="absolute left-0 top-0 h-full z-0 opacity-30"
      />

      {/* Kanan */}
      <img
        src={HeaderBorder}
        alt="Header Border Art"
        className="absolute right-0 top-0 h-full transform -scale-x-100 z-0 opacity-30"
      />

      {/* Decorative Batak Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-16 w-16 h-16 border-2 border-white transform rotate-45"></div>
        <div className="absolute top-8 left-28 w-8 h-8 border border-amber-300 transform rotate-12"></div>
        <div className="absolute top-16 right-16 w-12 h-12 border-2 border-amber-300 transform rotate-12"></div>
        <div className="absolute top-4 right-20 w-6 h-6 bg-amber-400 transform rotate-45"></div>
        <div className="absolute bottom-8 left-16 sm:left-24 w-20 h-20 border-2 border-white transform -rotate-12"></div>
        <div className="absolute bottom-16 left-40 w-4 h-4 border border-amber-300 transform rotate-45"></div>
        <div className="absolute bottom-4 right-24 w-8 h-8 bg-amber-400 transform rotate-45"></div>
        <div className="absolute bottom-12 right-16 w-6 h-6 border border-white transform -rotate-12"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 text-center">
        {/* Logo/Brand */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center mb-4">
            <img
              src="/logo-tataring.svg"
              alt="Logo Tataring Pasombu Sihol"
              className="w-32 h-32 md:w-36 md:h-36 rounded-full shadow-lg"
            />
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-2 tracking-wider text-amber-100"
            style={{
              fontFamily: "Bebas Neue, Impact, sans-serif",
              textShadow: "3px 3px 0 rgba(0,0,0,0.5)",
            }}
          >
            TATARING
          </h1>
          <h2
            className="text-2xl md:text-4xl font-bold text-amber-200 mb-2"
            style={{
              fontFamily: "Bebas Neue, Impact, sans-serif",
              textShadow: "2px 2px 0 rgba(0,0,0,0.5)",
            }}
          >
            PASOMBU SIHOL
          </h2>
        </div>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl mb-2 font-bold text-amber-100"
          style={{ fontFamily: "Oswald, Arial, sans-serif" }}
        >
          "HORAS! Cita Rasa Autentik Tanah Batak"
        </p>
        <p
          className="text-base md:text-lg mb-8 text-amber-200 max-w-2xl mx-auto"
          style={{ fontFamily: "Merriweather, Georgia, serif" }}
        >
          Nikmati kelezatan masakan tradisional Batak dengan resep turun temurun
          yang telah diwariskan secara autentik
        </p>

        {/* CTA Button */}
        <button
          onClick={onCTAClick}
          className="bg-amber-400 hover:bg-amber-400 text-red-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-amber-300"
          style={{ fontFamily: "Oswald, Arial, sans-serif" }}
        >
          LIHAT MENU KAMI
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
