import { useEffect, useRef, useState } from "react";
import { Phone, Calendar, X } from "lucide-react";
import { PiMotorcycle } from "react-icons/pi";

import BackgroundMusic from "@/assets/musics/dijou-au-mulak.mp3";

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

import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";
import PreOrderSection from "../components/PreOrderSection";
import TestimonialSection from "../components/TestimonialSection";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";

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

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: "memasak" | "packaging" | "pengantaran" | "lainnya";
  caption?: string;
}

const Home = () => {
  const [activeMenu, setActiveMenu] = useState<"paket" | "makanan" | "minuman">(
    "paket"
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showMusicToast, setShowMusicToast] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = (): void => setIsLoading(false);

    const handleEnded = (): void => {
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error: Error) =>
          console.log("Loop play error:", error)
        );
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
          .catch((error: Error) => console.log("Play prevented:", error));
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
      originalPrice: "Rp 35.000",
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

  const testimonials: Testimonial[] = [
    {
      name: "Rina Simanjuntak",
      location: "Bogor, Jawa Barat",
      rating: 5,
      comment:
        "Ayam gota-nya luar biasa! Rasa yang autentik seperti masakan nenek di kampung. Bumbu andaliman-nya pas banget, bikin kangen kampung halaman. Pelayanannya juga ramah dan cepat!",
      date: "15 Mei 2025",
    },
    {
      name: "Jonatan Hutabarat",
      location: "Dramaga, Bogor",
      rating: 5,
      comment:
        "Sudah beberapa kali order B2 Kecap, selalu konsisten enak! Dagingnya empuk, bumbu meresap sempurna. Paket hemat 2 jadi favorit saya, worth it banget!",
      date: "10 Mei 2025",
    },
    {
      name: "Maruli Pardede",
      location: "Kota Bogor",
      rating: 5,
      comment:
        "Mie Sop Medan-nya mantap! Kuahnya gurih, mie-nya enak. Harga terjangkau tapi rasa nggak kalah sama rumah makan mahal. Kopi Kedanta juga juara, manis aren-nya pas!",
      date: "8 Mei 2025",
    },
    {
      name: "Delima Siahaan",
      location: "Bogor Tengah",
      rating: 5,
      comment:
        "Pelayanan pre-order sangat profesional. Pesanan datang tepat waktu dan masih hangat. Rasanya benar-benar seperti masakan rumah! Recommended banget untuk yang kangen masakan Batak.",
      date: "5 Mei 2025",
    },
    {
      name: "Robert Sitompul",
      location: "Cibinong, Bogor",
      rating: 5,
      comment:
        "Pertama kali coba langsung jatuh cinta! Porsi banyak, harga ramah di kantong mahasiswa. Aren Latte-nya enak banget, tidak terlalu manis. Pasti bakal langganan!",
      date: "1 Mei 2025",
    },
  ];

  const galleryImages: GalleryImage[] = [
    // Memasak - Proses pembuatan masakan
    {
      id: 1,
      src: "/placeholder-cooking-1.jpg",
      alt: "Tim memasak Ayam Gota",
      width: 800,
      height: 1000,
      category: "memasak",
      caption: "Proses memasak Ayam Gota dengan bumbu andaliman khas Batak",
    },
    {
      id: 2,
      src: "/placeholder-cooking-2.jpg",
      alt: "Memasak B2 Kecap",
      width: 1200,
      height: 800,
      category: "memasak",
      caption: "Menumis B2 Kecap dengan bumbu rempah pilihan",
    },
    {
      id: 3,
      src: "/placeholder-cooking-3.jpg",
      alt: "Persiapan bahan masakan",
      width: 800,
      height: 600,
      category: "memasak",
      caption: "Menyiapkan bahan-bahan segar untuk masakan autentik",
    },
    {
      id: 4,
      src: "/placeholder-cooking-4.jpg",
      alt: "Memasak Mie Sop Medan",
      width: 900,
      height: 1200,
      category: "memasak",
      caption: "Proses membuat kuah Mie Sop Medan yang gurih",
    },
    {
      id: 5,
      src: "/placeholder-cooking-5.jpg",
      alt: "Tim dapur sedang bekerja",
      width: 1000,
      height: 750,
      category: "memasak",
      caption: "Kerjasama tim dapur untuk hasil terbaik",
    },

    // Packaging - Proses pengemasan
    {
      id: 6,
      src: "/placeholder-packaging-1.jpg",
      alt: "Packaging makanan",
      width: 800,
      height: 1000,
      category: "packaging",
      caption: "Pengemasan rapi dan higienis untuk setiap pesanan",
    },
    {
      id: 7,
      src: "/placeholder-packaging-2.jpg",
      alt: "Pengemasan paket hemat",
      width: 1200,
      height: 900,
      category: "packaging",
      caption: "Paket Hemat dikemas dengan packaging premium",
    },
    {
      id: 8,
      src: "/placeholder-packaging-3.jpg",
      alt: "Quality control packaging",
      width: 800,
      height: 800,
      category: "packaging",
      caption: "Pengecekan kualitas sebelum dikirim ke pelanggan",
    },
    {
      id: 9,
      src: "/placeholder-packaging-4.jpg",
      alt: "Packaging minuman",
      width: 600,
      height: 900,
      category: "packaging",
      caption: "Minuman dikemas dengan cup berkualitas dan seal rapi",
    },

    // Pengantaran - Proses delivery
    {
      id: 10,
      src: "/placeholder-delivery-1.jpg",
      alt: "Tim delivery siap antar",
      width: 1000,
      height: 1200,
      category: "pengantaran",
      caption: "Tim delivery kami siap mengantarkan pesanan Anda",
    },
    {
      id: 11,
      src: "/placeholder-delivery-2.jpg",
      alt: "Pengantaran pesanan",
      width: 1200,
      height: 800,
      category: "pengantaran",
      caption: "Pengantaran tepat waktu dengan senyum ramah",
    },
    {
      id: 12,
      src: "/placeholder-delivery-3.jpg",
      alt: "Motor delivery branded",
      width: 900,
      height: 700,
      category: "pengantaran",
      caption: "Armada delivery bersih dan terawat",
    },
    {
      id: 13,
      src: "/placeholder-delivery-4.jpg",
      alt: "Handover pesanan ke customer",
      width: 800,
      height: 1000,
      category: "pengantaran",
      caption: "Serah terima pesanan dengan protokol yang baik",
    },

    // Lainnya - Aktivitas lain
    {
      id: 14,
      src: "/placeholder-other-1.jpg",
      alt: "Foto bersama tim",
      width: 1200,
      height: 800,
      category: "lainnya",
      caption: "Tim Tataring Pasombu Sihol yang solid dan kompak",
    },
    {
      id: 15,
      src: "/placeholder-other-2.jpg",
      alt: "Customer happy",
      width: 800,
      height: 1000,
      category: "lainnya",
      caption: "Senyum puas pelanggan adalah kebahagiaan kami",
    },
    {
      id: 16,
      src: "/placeholder-other-3.jpg",
      alt: "Dapur bersih",
      width: 1000,
      height: 750,
      category: "lainnya",
      caption: "Dapur yang bersih dan higienis adalah prioritas kami",
    },
    {
      id: 17,
      src: "/placeholder-other-4.jpg",
      alt: "Persiapan pre-order",
      width: 900,
      height: 1100,
      category: "lainnya",
      caption: "Persiapan matang untuk setiap sesi pre-order",
    },
    {
      id: 18,
      src: "/placeholder-other-5.jpg",
      alt: "Behind the scenes",
      width: 1100,
      height: 800,
      category: "lainnya",
      caption: "Di balik layar kerja keras tim kami",
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

  const handleWhatsAppPreOrder = () => {
    const message = `Halo Tataring Pasombu Sihol! Saya ingin pre-order untuk tanggal 14 Juni 2025. Mohon info lebih lanjut. Terima kasih!`;
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
        <audio ref={audioRef} preload="auto" loop={false}>
          <source src={BackgroundMusic} type="audio/mp3" />
          <source src={BackgroundMusic} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <HeroSection onCTAClick={scrollToMenu} />

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

        <MenuSection
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          paketHemat={paketHemat}
          makanan={makanan}
          minuman={minuman}
          onOrderClick={handleOrderClick}
        />

        <TestimonialSection testimonials={testimonials} />

        <GallerySection images={galleryImages} />

        <PreOrderSection onPreOrderClick={handleWhatsAppPreOrder} />

        <Footer />

        {/* Modal WhatsApp */}
        {showModal && (
          <div className="fixed inset-0 bg-black/55 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full mx-auto shadow-2xl border-4 border-amber-200">
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
          {isPlaying && (
            <>
              <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-20 scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-red-500 animate-pulse opacity-30 scale-105"></div>
            </>
          )}

          <button
            onClick={toggleMusic}
            disabled={isLoading}
            className={`relative w-16 h-16 rounded-full shadow-lg border-3 transition-all duration-300 transform ${
              isPlaying
                ? "bg-gradient-to-br from-amber-400 to-amber-500 border-amber-600 hover:scale-110"
                : "bg-gradient-to-br from-gray-600 to-gray-700 border-gray-800 hover:scale-105"
            } ${
              isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-xl active:scale-95"
            } ${isPlaying ? "animate-spin-slow" : ""}`}
            type="button"
            aria-label={isPlaying ? "Matikan musik" : "Nyalakan musik"}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

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

          <div
            className={`absolute bottom-full right-0 mb-2 px-3 py-1 bg-black text-white text-xs rounded-lg whitespace-nowrap transition-all duration-200 pointer-events-none ${
              isPlaying
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
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
