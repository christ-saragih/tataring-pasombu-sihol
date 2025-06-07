import { useState } from "react";
import { Phone, Star, Heart, Calendar, X } from "lucide-react";
import { PiMotorcycle } from "react-icons/pi";

import Hemat1 from "@/assets/images/menus/paket-hemat1.png";
import Hemat2 from "@/assets/images/menus/paket-hemat2.png";
import Hemat3 from "@/assets/images/menus/paket-hemat3.png";

import B2Arsik from "@/assets/images/menus/b2-arsik.jpeg";
import B2Tanggo from "@/assets/images/menus/b2-tanggo.jpeg";
import IkanJahirArsik from "@/assets/images/menus/ikan-jahir-arsik.jpeg";

import IcedAmericano from "@/assets/images/menus/iced-americano.jpeg";
import ArenLatte from "@/assets/images/menus/aren-latte.jpeg";
import LemonTea from "@/assets/images/menus/lemon-tea.jpeg";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image: string;
  popular?: boolean;
}

interface PaketItem {
  name: string;
  items: string;
  price: string;
  originalPrice: string;
  image: string;
  popular?: boolean;
}

interface SelectedItem extends MenuItem {
  isPackage?: boolean;
  items?: string;
  originalPrice?: string;
}

const Home = () => {
  const [activeMenu, setActiveMenu] = useState<"paket" | "makanan" | "minuman">(
    "paket"
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  const paketHemat: PaketItem[] = [
    {
      name: "Hemat 1",
      items: "Jahir Arsik + Lemon Tea",
      price: "Rp 35.000",
      originalPrice: "Rp 38.000",
      image: Hemat1,
    },
    {
      name: "Hemat 2",
      items: "B2 Arsik/Tanggo + Lemon Tea",
      price: "Rp 43.000",
      originalPrice: "Rp 45.000",
      image: Hemat2,
      popular: true,
    },
    {
      name: "Hemat 3",
      items: "B2 Arsik/Tanggo + Aren Latte",
      price: "Rp 45.000",
      originalPrice: "Rp 50.000",
      image: Hemat3,
    },
  ];

  const makanan: MenuItem[] = [
    {
      name: "B2 Arsik",
      price: "Rp 35.000",
      description:
        "Daging Babi yang dimasak dengan bumbu khas batak seperti rias, andaliman, sereh, kunyit dan bumbu lainnya. Tekstur daging lembut dan gurih.",
      image: B2Arsik,
      popular: true,
    },
    {
      name: "B2 Tanggo-Tanggo",
      price: "Rp 35.000",
      description:
        "Daging babi yang dimasak dengan rempah khas batak, seperti andaliman, asam, lengkuas, dan bumbu lainnya. Tekstur daging lembut dan berkuah gota.",
      image: B2Tanggo,
    },
    {
      name: "Ikan Jahir Arsik",
      price: "Rp 28.000",
      description: "Ikan mas segar dengan bumbu arsik tradisional khas Batak",
      image: IkanJahirArsik,
    },
  ];

  const minuman: MenuItem[] = [
    {
      name: "Iced Americano",
      price: "Rp 13.000",
      description:
        "Minuman kopi hitam dingin yang menyegarkan dengan cita rasa pahit khas espresso, cocok untuk penyuka kopi tanpa gula.",
      image: IcedAmericano,
    },
    {
      name: "Aren Latte",
      price: "Rp 15.000",
      description:
        "Perpaduan lembut antara kopi dan susu, dipadukan dengan manis alami dari gula aren yang khas dan nikmat.",
      image: ArenLatte,
      popular: true,
    },
    {
      name: "Lemon Tea",
      price: "Rp 10.000",
      description:
        "Teh segar dengan sentuhan lemon yang asam manis, cocok untuk dinikmati saat cuaca panas.",
      image: LemonTea,
    },
  ];

  const whatsappNumber = "6282274783879";

  const scrollToMenu = () => {
    document
      .getElementById("menu-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOrderClick = (
    item: MenuItem | PaketItem,
    isPackage: boolean = false
  ) => {
    const selectedItemData: SelectedItem = {
      ...item,
      isPackage,
      description: "description" in item ? item.description : undefined,
      items: "items" in item ? item.items : undefined,
      originalPrice: "originalPrice" in item ? item.originalPrice : undefined,
    };
    setSelectedItem(selectedItemData);
    setShowModal(true);
  };

  const handleWhatsAppOrder = () => {
    const itemType = selectedItem?.isPackage ? "paket" : "menu";
    const message = `Halo Tataring Pasombu Sihol! Saya ingin pre-order ${itemType}: ${selectedItem?.name} untuk tanggal 7 Juni 2025. Mohon info lebih lanjut. Terima kasih!`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setShowModal(false);
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
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Ready 7 Juni 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <PiMotorcycle className="w-5 h-5 text-amber-400" />
                <span className="font-semibold">Bogor Kota - Dramaga</span>
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
                        onClick={() => handleOrderClick(paket, true)}
                        className="w-full bg-amber-400 hover:bg-amber-500 text-red-900 font-bold py-2 rounded-lg transition-all transform hover:scale-105 shadow-md"
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
                        className="w-full h-48"
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
                          onClick={() => handleOrderClick(item)}
                          className="bg-amber-400 hover:bg-amber-500 text-red-900 font-bold px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md"
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
                        className="w-full h-48"
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
                      <p
                        className="text-gray-600 text-sm mb-4 leading-relaxed"
                        style={{ fontFamily: "Merriweather, Georgia, serif" }}
                      >
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span
                          className="text-xl font-bold text-red-900"
                          style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                        >
                          {item.price}
                        </span>
                        <button
                          onClick={() => handleOrderClick(item)}
                          className="bg-amber-400 hover:bg-amber-500 text-red-900 font-bold px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md"
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
                <PiMotorcycle className="w-7 h-7 text-amber-400" />
                <div className="text-left">
                  <div className="font-bold">Antar Area Bogor</div>
                  <div className="text-sm text-red-200">
                    Bogor Kota - Dramaga
                  </div>
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

        {/* Modal WhatsApp */}
        {showModal && (
          <div className="fixed inset-0 bg-black/55 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full mx-auto shadow-2xl border-4 border-amber-200">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-red-900 to-amber-700 text-white p-6 rounded-t-2xl relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute right-4 top-4 text-white hover:text-amber-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-400 rounded-full mb-3 shadow-lg">
                    <Phone className="w-8 h-8 text-red-900" />
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: "Bebas Neue, Impact, sans-serif" }}
                  >
                    PEMESANAN VIA WHATSAPP
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <h4
                    className="text-lg font-bold text-red-900 mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {selectedItem?.name}
                  </h4>
                  <p
                    className="text-gray-600 text-sm mb-4"
                    style={{ fontFamily: "Merriweather, Georgia, serif" }}
                  >
                    Saat ini pemesanan hanya dapat dilakukan melalui WhatsApp
                    untuk memberikan pelayanan terbaik dan memastikan
                    ketersediaan makanan.
                  </p>

                  <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-red-900" />
                      <span
                        className="font-bold text-red-900"
                        style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                      >
                        PRE-ORDER SYSTEM
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Ready: <strong>7 Juni 2025</strong>
                      <br />
                      Area: <strong>Bogor Kota - Dramaga</strong>
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                    style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                  >
                    <Phone className="w-6 h-6" />
                    <span>PESAN VIA WHATSAPP</span>
                  </button>

                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-xl transition-all duration-300"
                    style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                  >
                    TUTUP
                  </button>
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <p className="text-xs text-gray-500 mb-2">
                    Hubungi langsung:
                  </p>
                  <p
                    className="font-bold text-red-900"
                    style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                  >
                    +62 822-7478-3879 (Martua)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
