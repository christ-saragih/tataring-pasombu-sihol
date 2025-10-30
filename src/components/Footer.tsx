import React from "react";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <h3
            className="text-2xl font-bold text-amber-400 mb-2"
            style={{ fontFamily: "Bebas Neue, Impact, sans-serif" }}
          >
            TATARING PASOMBU SIHOL
          </h3>
          <p
            className="text-gray-300 font-medium"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            "Menyajikan Kelezatan Autentik Tanah Batak"
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm mb-6">
          <div>
            <h4
              className="font-bold text-amber-400 mb-2"
              style={{ fontFamily: "Oswald, Arial, sans-serif" }}
            >
              SISTEM
            </h4>
            <p className="text-gray-300">Pre-Order Only</p>
            <p className="text-gray-300">Ready: 14 Juni 2025</p>
          </div>
          <div>
            <h4
              className="font-bold text-amber-400 mb-2"
              style={{ fontFamily: "Oswald, Arial, sans-serif" }}
            >
              KONTAK
            </h4>
            <p className="text-gray-300">
              WA:{" "}
              <a
                href="https://wa.me/6282274783879"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +62 822-7478-3879 (Martua)
              </a>
            </p>

            <p className="text-gray-300">
              IG:{" "}
              <a
                href="https://www.instagram.com/tataring_pasombusihol/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline"
              >
                @tataring_pasombusihol
              </a>
            </p>
          </div>
          <div>
            <h4
              className="font-bold text-amber-400 mb-2"
              style={{ fontFamily: "Oswald, Arial, sans-serif" }}
            >
              CHEF
            </h4>
            <p className="text-gray-300">Putra Terbaik Daerah</p>
            <p className="text-gray-300">Toba, Taput, Humbahas, Asahan</p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-700">
          <p
            className="text-gray-400 text-sm font-medium"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            © 2025 Tataring Pasombu Sihol.{" "}
            <span
              className="text-amber-400 font-bold"
              style={{ fontFamily: "Oswald, Arial, sans-serif" }}
            >
              HORAS!
            </span>{" "}
            dan Selamat Menikmati!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
