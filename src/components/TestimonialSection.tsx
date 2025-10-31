import React, { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
}

type TestimonialSectionProps = {
  testimonials: Testimonial[];
};

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-12 w-16 h-16 border-2 border-red-900 transform rotate-45"></div>
        <div className="absolute top-20 right-16 w-20 h-20 border border-amber-400 transform -rotate-12"></div>
        <div className="absolute bottom-12 left-20 w-12 h-12 bg-red-900 transform rotate-12"></div>
        <div className="absolute bottom-16 right-12 w-8 h-8 border border-amber-400 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold text-red-900 mb-4"
            style={{
              fontFamily: "Bebas Neue, Impact, sans-serif",
              textShadow: "2px 2px 0 rgba(0,0,0,0.1)",
            }}
          >
            TESTIMONI PELANGGAN
          </h2>
          <p
            className="text-gray-700 text-lg max-w-2xl mx-auto font-medium"
            style={{ fontFamily: "Merriweather, Georgia, serif" }}
          >
            Apa kata mereka yang telah merasakan kelezatan masakan autentik
            Batak kami
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-amber-200 relative">
            {/* Decorative Quote Icon */}
            <div className="absolute top-6 left-6 w-20 h-20 bg-amber-400 rounded-full opacity-10 flex items-center justify-center">
              <Quote className="w-12 h-12 text-red-900" />
            </div>

            <div className="p-8 md:p-12 relative">
              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonials[currentIndex].rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <div className="relative mb-8">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-amber-400 opacity-30" />
                <p
                  className="text-gray-700 text-lg md:text-xl text-center leading-relaxed italic px-6"
                  style={{ fontFamily: "Merriweather, Georgia, serif" }}
                >
                  {testimonials[currentIndex].comment}
                </p>
                <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-amber-400 opacity-30 transform rotate-180" />
              </div>

              {/* Customer Info */}
              <div className="text-center border-t-2 border-amber-100 pt-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <span
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "Oswald, Arial, sans-serif" }}
                    >
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>

                  {/* Name and Date */}
                  <div className="text-center md:text-left">
                    <h4
                      className="text-xl font-bold text-red-900"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {testimonials[currentIndex].name}
                    </h4>
                    <p
                      className="text-gray-600 text-sm mt-1"
                      style={{ fontFamily: "Merriweather, Georgia, serif" }}
                    >
                      {testimonials[currentIndex].date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="bg-red-900 hover:bg-red-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-3 bg-red-900"
                      : "w-3 h-3 bg-gray-300 hover:bg-amber-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-red-900 hover:bg-red-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonial Grid - Additional Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                index === currentIndex ? "ring-2 ring-amber-200" : ""
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <div className="p-6">
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Comment Preview */}
                <p
                  className="text-gray-600 text-sm text-center mb-4 line-clamp-3 leading-relaxed"
                  style={{ fontFamily: "Merriweather, Georgia, serif" }}
                >
                  "{testimonial.comment}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-amber-100 pt-4 text-center">
                  <h5
                    className="font-bold text-red-900 text-sm"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {testimonial.name}
                  </h5>
                  <p className="text-gray-500 text-xs">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-red-900 to-amber-600 text-white px-8 py-4 rounded-full shadow-lg">
            <p
              className="font-bold text-lg"
              style={{ fontFamily: "Oswald, Arial, sans-serif" }}
            >
              ⭐ 30+ Pelanggan Puas dengan Layanan Kami
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
