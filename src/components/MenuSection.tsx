import React from "react";
import { Star, AlertCircle, Clock } from "lucide-react";

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image: string;
  popular?: boolean;
  available?: boolean;
}

export interface PaketItem {
  name: string;
  items: string;
  price: string;
  originalPrice: string;
  image: string;
  popular?: boolean;
}

type ActiveMenu = "paket" | "makanan" | "minuman";

type MenuSectionProps = {
  activeMenu: ActiveMenu;
  setActiveMenu: (menu: ActiveMenu) => void;
  paketHemat: PaketItem[];
  makanan: MenuItem[];
  minuman: MenuItem[];
  onOrderClick: (item: MenuItem | PaketItem, isPackage?: boolean) => void;
};

const MenuSection: React.FC<MenuSectionProps> = ({
  activeMenu,
  setActiveMenu,
  paketHemat,
  makanan,
  minuman,
  onOrderClick,
}) => {
  return (
    <section
      id="menu-section"
      className="py-16 bg-gradient-to-br from-amber-50 via-white to-red-50"
    >
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
                    onClick={() => onOrderClick(paket, true)}
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
                        Mohon maaf, makanan ini sedang tidak bisa dipesan saat
                        ini
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
                        onClick={() => onOrderClick(item)}
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
                      onClick={() => onOrderClick(item)}
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
  );
};

export default MenuSection;
