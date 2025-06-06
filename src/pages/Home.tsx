import { useState } from "react";
import { Phone, Star, ChefHat, Heart, Calendar, Package } from "lucide-react";

const TataringHomepage = () => {
  const [activeMenu, setActiveMenu] = useState("paket");

  const paketHemat = [
    {
      name: "Hemat 1",
      items: "Jahir Arsik + Lemon Tea",
      price: "Rp 35.000",
      originalPrice: "Rp 38.000",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&h=200&fit=crop&auto=format",
    },
    {
      name: "Hemat 2",
      items: "B2 Arsik/Tanggo + Lemon Tea",
      price: "Rp 43.000",
      originalPrice: "Rp 45.000",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300&h=200&fit=crop&auto=format",
      popular: true,
    },
    {
      name: "Hemat 3",
      items: "B2 Arsik/Tanggo + Aren Latte",
      price: "Rp 45.000",
      originalPrice: "Rp 50.000",
      image:
        "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300&h=200&fit=crop&auto=format",
    },
  ];

  const makanan = [
    {
      name: "B2 Arsik",
      price: "Rp 35.000",
      description: "Babi segar dengan bumbu arsik yang gurih dan pedas",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop&auto=format",
      popular: true,
    },
    {
      name: "B2 Tanggo-Tanggo",
      price: "Rp 35.000",
      description: "Babi bakar khas Batak dengan bumbu tanggo-tanggo",
      image:
        "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop&auto=format",
    },
    {
      name: "Ikan Jahir Arsik",
      price: "Rp 28.000",
      description: "Ikan mas segar dengan bumbu arsik tradisional khas Batak",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop&auto=format",
    },
  ];

  const minuman = [
    {
      name: "Iced Americano",
      price: "Rp 13.000",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&auto=format",
      popular: true,
    },
    {
      name: "Aren Latte",
      price: "Rp 15.000",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&auto=format",
    },
    {
      name: "Lemon Tea",
      price: "Rp 10.000",
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop&auto=format",
    },
  ];

  const whatsappNumber = "6282274783879";

  const scrollToMenu = () => {
    document
      .getElementById("menu-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Merriweather:wght@400;700&family=Playfair+Display:wght@400;700;900&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen bg-white"
        style={{ fontFamily: "Merriweather, Georgia, serif" }}
      >
        {/* Header dengan Background Pattern */}
        <header className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-700 text-white overflow-hidden">
          {/* Decorative Batak Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white transform rotate-45"></div>
            <div className="absolute top-8 left-20 w-8 h-8 border border-amber-300 transform rotate-12"></div>
            <div className="absolute top-16 right-8 w-12 h-12 border-2 border-amber-300 transform rotate-12"></div>
            <div className="absolute top-4 right-20 w-6 h-6 bg-amber-400 transform rotate-45"></div>
            <div className="absolute bottom-8 left-12 w-20 h-20 border-2 border-white transform -rotate-12"></div>
            <div className="absolute bottom-16 left-32 w-4 h-4 border border-amber-300 transform rotate-45"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-amber-400 transform rotate-45"></div>
            <div className="absolute bottom-12 right-16 w-6 h-6 border border-white transform -rotate-12"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-12 text-center">
            {/* Logo/Brand */}
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-400 rounded-full mb-4 shadow-lg border-4 border-amber-300">
                <ChefHat className="w-10 h-10 text-red-900" />
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
              Nikmati kelezatan masakan tradisional Batak dengan resep turun
              temurun yang telah diwariskan secara autentik
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToMenu}
              className="bg-amber-400 hover:bg-amber-400 text-red-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-amber-300"
              style={{ fontFamily: "Oswald, Arial, sans-serif" }}
            >
              LIHAT MENU KAMI
            </button>
          </div>
        </header>

        {/* Info Bar - Pre Order Info */}
        <div className="bg-black text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">Pre-Order System</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Ready 7 Juni 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+62 822-7478-3879 (Martua)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <section id="menu-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-5xl font-bold text-red-900 mb-4"
                style={{
                  fontFamily: "Bebas Neue, Impact, sans-serif",
                  textShadow: "2px 2px 0 rgba(0,0,0,0.1)",
                }}
              >
                MENU UTAMA
              </h2>
              <p
                className="text-gray-700 text-lg max-w-2xl mx-auto font-medium"
                style={{ fontFamily: "Merriweather, Georgia, serif" }}
              >
                Dipilih dari resep tradisional terbaik keluarga Batak dengan
                bahan-bahan segar pilihan
              </p>
            </div>

            {/* Menu Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-1 shadow-lg border-2 border-red-200 whitespace-nowrap">
                <button
                  onClick={() => setActiveMenu("paket")}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${
                    activeMenu === "paket"
                      ? "bg-red-900 text-white shadow-lg"
                      : "text-red-900 hover:bg-red-50"
                  }`}
                  style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                >
                  PAKET HEMAT
                </button>
                <button
                  onClick={() => setActiveMenu("makanan")}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${
                    activeMenu === "makanan"
                      ? "bg-red-900 text-white shadow-lg"
                      : "text-red-900 hover:bg-red-50"
                  }`}
                  style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                >
                  MAKANAN
                </button>

                <button
                  onClick={() => setActiveMenu("minuman")}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${
                    activeMenu === "minuman"
                      ? "bg-red-900 text-white shadow-lg"
                      : "text-red-900 hover:bg-red-50"
                  }`}
                  style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                >
                  MINUMAN
                </button>
              </div>
            </div>

            {/* Menu Content */}

            {activeMenu === "paket" && (
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {paketHemat.map((paket, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-200"
                  >
                    <div className="relative">
                      <img
                        src={paket.image}
                        alt={paket.name}
                        className="w-full h-48 object-cover"
                      />
                      {paket.popular && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-amber-400 text-red-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                            <Star className="w-3 h-3" fill="currentColor" />
                            <span>Populer</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3
                        className="text-xl font-bold text-red-900 mb-2"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {paket.name}
                      </h3>
                      <p
                        className="text-gray-700 text-sm mb-4 font-medium"
                        style={{ fontFamily: "Merriweather, Georgia, serif" }}
                      >
                        {paket.items}
                      </p>
                      <div className="mb-4">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-2xl font-bold text-red-900"
                            style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                          >
                            {paket.price}
                          </span>

                          <span className="text-gray-400 line-through text-sm">
                            {paket.originalPrice}
                          </span>
                        </div>
                      </div>
                      <button
                        className="w-full bg-amber-400 hover:bg-amber-400 text-red-900 font-bold py-2 rounded-lg transition-all transform hover:scale-105 shadow-md"
                        style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                      >
                        PILIH PAKET
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeMenu === "makanan" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {makanan.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-red-100"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      {item.popular && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-amber-400 text-red-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                            <Star className="w-3 h-3" fill="currentColor" />
                            <span>Populer</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-xl font-bold text-red-900 mb-2"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {item.name}
                      </h3>
                      <p
                        className="text-gray-600 text-sm mb-4 leading-relaxed"
                        style={{ fontFamily: "Merriweather, Georgia, serif" }}
                      >
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span
                          className="text-2xl font-bold text-red-900"
                          style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                        >
                          {item.price}
                        </span>
                        <button
                          className="bg-amber-400 hover:bg-amber-400 text-red-900 font-bold px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md"
                          style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                        >
                          PESAN
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeMenu === "minuman" && (
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {minuman.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-100"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      {item.popular && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-amber-400 text-red-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                            <Star className="w-3 h-3" fill="currentColor" />
                            <span>Populer</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-lg font-bold text-red-900 mb-3"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {item.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span
                          className="text-xl font-bold text-red-900"
                          style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                        >
                          {item.price}
                        </span>
                        <button
                          className="bg-amber-400 hover:bg-amber-400 text-red-900 font-bold px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md"
                          style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                        >
                          PESAN
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* WhatsApp Pre-Order Section */}
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
              Sistem Pre-Order untuk kualitas terbaik! Pesan H-1 untuk
              mendapatkan makanan segar langsung dari dapur kami.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center gap-3 bg-red-800 px-6 py-3 rounded-lg border border-red-700">
                <Calendar className="w-6 h-6 text-amber-400" />
                <div className="text-left">
                  <div className="font-bold">Ready: 7 Juni 2025</div>
                  <div className="text-sm text-red-200">Pesan sekarang!</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-red-800 px-6 py-3 rounded-lg border border-red-700">
                <Heart className="w-6 h-6 text-amber-400" />
                <div className="text-left">
                  <div className="font-bold">Kualitas Premium</div>
                  <div className="text-sm text-red-200">
                    Masakan fresh & autentik
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Halo%20Tataring%20Pasombu%20Sihol,%20saya%20ingin%20pre-order%20makanan%20untuk%20tanggal%207%20Juni%202025`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-green-400"
              style={{ fontFamily: "Oswald, Arial, sans-serif" }}
            >
              <Phone className="w-6 h-6" />
              PRE-ORDER VIA WHATSAPP
            </a>
          </div>
        </section>

        {/* Footer */}
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
                <p className="text-gray-300">Ready: 7 Juni 2025</p>
              </div>
              <div>
                <h4
                  className="font-bold text-amber-400 mb-2"
                  style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                >
                  KONTAK
                </h4>
                <p className="text-gray-300">+62 822-7478-3879</p>
                <p className="text-gray-300">(Martua)</p>
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
      </div>
    </>
  );
};

export default TataringHomepage;
