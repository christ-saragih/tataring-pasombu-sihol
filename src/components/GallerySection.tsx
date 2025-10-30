import React, { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: "memasak" | "packaging" | "pengantaran" | "lainnya";
  caption?: string;
}

type GallerySectionProps = {
  images: GalleryImage[];
};

const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("semua");

  const categories = [
    { value: "semua", label: "Semua Foto" },
    { value: "memasak", label: "Memasak" },
    { value: "packaging", label: "Packaging" },
    { value: "pengantaran", label: "Pengantaran" },
    { value: "lainnya", label: "Lainnya" },
  ];

  const filteredImages =
    filter === "semua"
      ? images
      : images.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "ArrowRight") {
          setSelectedImage((prev) =>
            prev !== null ? (prev + 1) % filteredImages.length : null
          );
        }
        if (e.key === "ArrowLeft") {
          setSelectedImage((prev) =>
            prev !== null
              ? (prev - 1 + filteredImages.length) % filteredImages.length
              : null
          );
        }
        if (e.key === "Escape") {
          setSelectedImage(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, filteredImages.length]);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-12 left-16 w-16 h-16 border-2 border-red-900 transform rotate-45"></div>
        <div className="absolute top-24 right-20 w-12 h-12 border border-amber-400 transform -rotate-12"></div>
        <div className="absolute bottom-16 left-24 w-20 h-20 bg-amber-400 transform rotate-12"></div>
        <div className="absolute bottom-8 right-16 w-8 h-8 border border-red-900 transform rotate-45"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold text-red-900 mb-4"
            style={{
              fontFamily: "Bebas Neue, Impact, sans-serif",
              textShadow: "2px 2px 0 rgba(0,0,0,0.1)",
            }}
          >
            GALERI KEGIATAN KAMI
          </h2>
          <p
            className="text-gray-700 text-lg max-w-2xl mx-auto font-medium"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Dokumentasi keseruan tim kami dalam menyiapkan hidangan terbaik
            untuk Anda
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg border-2 border-red-200 whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-3 rounded-full font-bold transition-all uppercase ${
                  filter === category.value
                    ? "bg-red-900 text-white shadow-lg"
                    : "text-red-900 hover:bg-red-50"
                }`}
                style={{ fontFamily: "Oswald, Arial, sans-serif" }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              {/* Placeholder Image with Size Info */}
              <div
                className="relative bg-gradient-to-br from-gray-200 to-gray-300"
                style={{
                  aspectRatio: `${image.width}/${image.height}`,
                }}
              >
                {/* Size Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 px-4 py-2 rounded-lg">
                    <p
                      className="text-white text-sm font-bold"
                      style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                    >
                      {image.width} × {image.height}px
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-amber-400 text-red-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {categories.find((c) => c.value === image.category)?.label}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full">
                    {image.caption && (
                      <p
                        className="text-white text-sm font-medium leading-relaxed"
                        style={{ fontFamily: "Merriweather, Georgia, serif" }}
                      >
                        {image.caption}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <Camera className="w-4 h-4 text-amber-400" />
                      <span className="text-white text-xs">
                        Klik untuk memperbesar
                      </span>
                    </div>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg transform scale-0 group-hover:scale-100">
                  <Camera className="w-5 h-5 text-red-900" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p
              className="text-gray-500 text-lg"
              style={{ fontFamily: "Merriweather, Georgia, serif" }}
            >
              Tidak ada foto dalam kategori ini
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-red-900 to-amber-600 text-white px-8 py-4 rounded-full shadow-lg">
            <p
              className="font-bold text-lg"
              style={{ fontFamily: "Oswald, Arial, sans-serif" }}
            >
              📸 {images.length}+ Momen Berharga Bersama Pelanggan
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div
            className="max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-2xl"
              style={{
                aspectRatio: `${filteredImages[selectedImage].width}/${filteredImages[selectedImage].height}`,
              }}
            >
              <div className="flex items-center justify-center h-full p-8">
                <div className="text-center">
                  <div className="bg-black/60 px-6 py-3 rounded-lg mb-4">
                    <p
                      className="text-white text-xl font-bold"
                      style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                    >
                      {filteredImages[selectedImage].width} ×{" "}
                      {filteredImages[selectedImage].height}px
                    </p>
                  </div>
                  {filteredImages[selectedImage].caption && (
                    <p
                      className="text-white text-lg font-medium max-w-2xl"
                      style={{ fontFamily: "Merriweather, Georgia, serif" }}
                    >
                      {filteredImages[selectedImage].caption}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full">
              <p className="text-white text-sm font-bold">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
