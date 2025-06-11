import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Star,
  Heart,
  Calendar,
  X,
  AlertCircle,
  Clock,
} from "lucide-react";
import { PiMotorcycle } from "react-icons/pi";

import HeaderBorder from "@/assets/images/header-border-art.png";

import MusikTest from "@/assets/musics/dijou-au-mulak.mp3";

// import Hemat1 from "@/assets/images/menus/paket-hemat1.png";
// import Hemat2 from "@/assets/images/menus/paket-hemat2.png";
// import Hemat3 from "@/assets/images/menus/paket-hemat3.png";

import Hemat1 from "@/assets/images/menus/batch2/hemat1.png";
import Hemat2 from "@/assets/images/menus/batch2/hemat2.png";
import Hemat3 from "@/assets/images/menus/batch2/hemat3.png";

import AyamGota from "@/assets/images/menus/ayam-gota.jpeg";
import B2Kecap from "@/assets/images/menus/b2-kecap.jpeg";
import MieSopMedan from "@/assets/images/menus/mie-sop-medan.jpeg";

import B2Arsik from "@/assets/images/menus/b2-arsik.jpeg";
import B2Tanggo from "@/assets/images/menus/b2-tanggo.jpeg";
import IkanJahirArsik from "@/assets/images/menus/ikan-jahir-arsik.jpeg";

import IcedAmericano from "@/assets/images/menus/iced-americano.png";
import ArenLatte from "@/assets/images/menus/aren-latte.jpeg";
import LemonTea from "@/assets/images/menus/lemon-tea.jpeg";
import CocoPandan from "@/assets/images/menus/coco-pandan.png";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image: string;
  popular?: boolean;
  available?: boolean;
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

  // 3. TAMBAHKAN STATE BARU di dalam komponen Home (setelah state yang sudah ada)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showMusicToast, setShowMusicToast] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 4. TAMBAHKAN useEffect UNTUK MENGELOLA MUSIK (letakkan setelah definisi state)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = (): void => {
      setIsLoading(false);
    };

    const handleEnded = (): void => {
      // Loop musik
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error: Error) => {
          console.log("Loop play error:", error);
        });
      }
    };

    const handleError = (event: Event): void => {
      setIsLoading(false);
      console.log("Error loading audio:", event);
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  // 5. TAMBAHKAN FUNCTION UNTUK TOGGLE MUSIK (letakkan setelah useEffect)
  const toggleMusic = (): void => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setShowMusicToast(true);
      setTimeout(() => setShowMusicToast(false), 2000);
    } else {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setShowMusicToast(true);
            setTimeout(() => setShowMusicToast(false), 2000);
          })
          .catch((error: Error) => {
            console.log("Play prevented:", error);
          });
      }
    }
  };

  const paketHemat: PaketItem[] = [
    {
      name: "Hemat 1",
      items: "Ayam Gota + Lemon Tea",
      price: "Rp 38.000",
      originalPrice: "Rp 40.000",
      image: Hemat1,
    },
    {
      name: "Hemat 2",
      items: "B2 Kecap + Aren Latte",
      price: "Rp 45.000",
      originalPrice: "Rp 48.000",
      image: Hemat2,
      popular: true,
    },
    {
      name: "Hemat 3",
      items: "Mie Sop + Aren Latte",
      price: "Rp 33.000",
      originalPrice: "Rp 55.000",
      image: Hemat3,
    },
  ];

  const makanan: MenuItem[] = [
    {
      name: "Ayam Gota",
      price: "Rp 30.000",
      description:
        "Ayam gota adalah masakan khas Batak Toba yang berbahan dasar ayam kampung yang direbus lalu dicampur dengan gota, andaliman, asam, dan rempah khas lainnya. Rasa pedas dan getir dari andaliman membuat cita rasanya unik.",
      image: AyamGota,
      available: true,
    },
    {
      name: "Mie Sop Medan",
      price: "Rp 20.000",
      description:
        "Mie sop Medan adalah sajian bihun yang disiram kuah kaldu bening gurih, dilengkapi dengan potongan ayam suwir, daun bawang, dan bawang goreng. ditambah kerupuk pelengkap. Rasanya ringan, segar, dan kaya aroma rempah seperti pala dan merica.",
      image: MieSopMedan,
      available: true,
    },
    {
      name: "B2 Kecap",
      price: "Rp 33.000",
      description:
        "Babi kecap merupakan olahan daging babi yang dimasak dengan bumbu manis gurih khas kecap, bawang putih, jahe, dan  diberi tambahan daun salam dan serai. Hidangan ini populer dalam tradisi Batak  biasa disajikan dalam momen perayaan keluarga.",
      image: B2Kecap,
      available: true,
      popular: true,
    },
    {
      name: "B2 Arsik",
      price: "Rp 35.000",
      description:
        "Daging Babi yang dimasak dengan bumbu khas batak seperti rias, andaliman, sereh, kunyit dan bumbu lainnya. Tekstur daging lembut dan gurih.",
      image: B2Arsik,
      popular: true,
      available: false,
    },
    {
      name: "B2 Tanggo-Tanggo",
      price: "Rp 35.000",
      description:
        "Daging babi yang dimasak dengan rempah khas batak, seperti andaliman, asam, lengkuas, dan bumbu lainnya. Tekstur daging lembut dan berkuah gota.",
      image: B2Tanggo,
      available: false,
    },
    {
      name: "Ikan Jahir Arsik",
      price: "Rp 28.000",
      description: "Ikan mas segar dengan bumbu arsik tradisional khas Batak",
      image: IkanJahirArsik,
      available: false,
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
      name: "Kopi Kedanta (Aren Latte)",
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
    {
      name: "Coco Pandan Sipiso-Piso Delight",
      price: "Rp 15.000",
      description:
        "Minuman kopi susu dingin yang memikat dengan sentuhan manis pandan dan kelapa, memberikan aroma tropis yang menyegarkan.",
      image: CocoPandan,
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
    const message = `Halo Tataring Pasombu Sihol! Saya ingin pre-order ${itemType}: ${selectedItem?.name} untuk tanggal 14 Juni 2025. Mohon info lebih lanjut. Terima kasih!`;
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
        <audio
          ref={audioRef}
          preload="auto"
          loop={false} // Kita handle loop manual untuk kontrol yang lebih baik
        >
          <source src={MusikTest} type="audio/mp3" />
          <source src={MusikTest} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        {/* Header dengan Background Pattern */}
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
                <span>Ready 14 Juni 2025</span>
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
                    className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 border-2 ${
                      item.available
                        ? "hover:shadow-xl transform hover:-translate-y-2 border-red-100"
                        : "opacity-75 border-gray-200 cursor-not-allowed"
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`w-full h-48 object-cover ${
                          !item.available ? "grayscale brightness-75" : ""
                        }`}
                      />

                      {/* Badge Popular */}
                      {item.popular && item.available && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-amber-400 text-red-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                            <Star className="w-3 h-3" fill="currentColor" />
                            <span>Populer</span>
                          </div>
                        </div>
                      )}

                      {/* Badge Tidak Tersedia */}
                      {!item.available && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                            <AlertCircle className="w-4 h-4" />
                            <span>TIDAK TERSEDIA</span>
                          </div>
                        </div>
                      )}

                      {/* Overlay gradient untuk makanan tidak tersedia */}
                      {!item.available && (
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          item.available ? "text-red-900" : "text-gray-500"
                        }`}
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {item.name}
                      </h3>

                      <p
                        className={`text-sm mb-4 leading-relaxed ${
                          item.available ? "text-gray-600" : "text-gray-400"
                        }`}
                        style={{ fontFamily: "Merriweather, Georgia, serif" }}
                      >
                        {item.description}
                      </p>

                      {/* Pesan khusus untuk makanan tidak tersedia */}
                      {!item.available && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                          <div className="flex items-center gap-2 text-red-600 text-sm">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">
                              Sedang tidak tersedia
                            </span>
                          </div>
                          <p className="text-red-500 text-xs mt-1">
                            Mohon maaf, makanan ini sedang tidak bisa dipesan
                            saat ini
                          </p>
                        </div>
                      )}

                      <div className="flex justify-between items-center">
                        <span
                          className={`text-2xl font-bold ${
                            item.available ? "text-red-900" : "text-gray-400"
                          }`}
                          style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                        >
                          {item.price}
                        </span>

                        {item.available ? (
                          <button
                            onClick={() => handleOrderClick(item)}
                            className="bg-amber-400 hover:bg-amber-500 text-red-900 font-bold px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md"
                            style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                          >
                            PESAN
                          </button>
                        ) : (
                          <button
                            disabled
                            className="bg-gray-300 text-gray-500 font-bold px-4 py-2 rounded-lg cursor-not-allowed opacity-60"
                            style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                          >
                            TIDAK TERSEDIA
                          </button>
                        )}
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
                  <div className="font-bold">Ready: 14 Juni 2025</div>
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
                      Ready: <strong>14 Juni 2025</strong>
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

      {/* Music Control Button */}
      <div className="fixed bottom-4 right-6 z-50">
        <div className="relative">
          {/* Ripple Animation Ring saat musik playing */}
          {isPlaying && (
            <>
              <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-20 scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-red-500 animate-pulse opacity-30 scale-105"></div>
            </>
          )}

          {/* Main Button */}
          <button
            onClick={toggleMusic}
            disabled={isLoading}
            className={`
        relative w-16 h-16 rounded-full shadow-lg border-3 transition-all duration-300 transform
        ${
          isPlaying
            ? "bg-gradient-to-br from-amber-400 to-amber-500 border-amber-600 hover:scale-110"
            : "bg-gradient-to-br from-gray-600 to-gray-700 border-gray-800 hover:scale-105"
        }
        ${
          isLoading
            ? "opacity-50 cursor-not-allowed"
            : "hover:shadow-xl active:scale-95"
        }
        ${isPlaying ? "animate-spin-slow" : ""}
      `}
            type="button"
            aria-label={isPlaying ? "Matikan musik" : "Nyalakan musik"}
          >
            {/* Loading Spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Music Icons */}
            {!isLoading && (
              <div className="absolute inset-0 flex items-center justify-center text-white">
                {isPlaying ? (
                  <div className="flex flex-col items-center">
                    <div className="flex gap-1 mb-1">
                      <div className="w-1 h-4 bg-red-900 rounded animate-pulse"></div>
                      <div
                        className="w-1 h-6 bg-red-900 rounded animate-pulse"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1 h-3 bg-red-900 rounded animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-1 h-5 bg-red-900 rounded animate-pulse"
                        style={{ animationDelay: "0.075s" }}
                      ></div>
                    </div>
                    <div
                      className="text-xs font-bold text-red-900"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      ♪
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="text-2xl">🎵</div>
                    <div className="text-xs mt-1">OFF</div>
                  </div>
                )}
              </div>
            )}
          </button>

          {/* Tooltip */}
          <div
            className={`
      absolute bottom-full right-0 mb-2 px-3 py-1 bg-black text-white text-xs rounded-lg whitespace-nowrap
      transition-all duration-200 pointer-events-none
      ${isPlaying ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
    `}
          >
            <div
              className="text-center"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              <div className="font-bold text-amber-400">♪ MUSIK BATAK ♪</div>
              <div>Klik untuk {isPlaying ? "matikan" : "nyalakan"}</div>
            </div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
          </div>
        </div>
      </div>

      {/* Music Toast Notification */}
      {showMusicToast && (
        <div className="fixed top-6 right-6 z-50 animate-bounce">
          <div className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-4 py-2 rounded-lg shadow-lg border border-amber-400">
            <div className="flex items-center gap-2">
              <div className="text-lg">{isPlaying ? "🎵" : "🔇"}</div>
              <div
                className="text-sm font-bold"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Musik {isPlaying ? "NYALA" : "MATI"}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
