"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

const SCREENSHOTS = [
  { src: "/images/game/ss1.png", alt: "The Freak Circus — Character Scene 1" },
  { src: "/images/game/ss2.png", alt: "The Freak Circus — Character Scene 2" },
  { src: "/images/game/ss3.png", alt: "The Freak Circus — Character Scene 3" },
  { src: "/images/game/ss4.jpg", alt: "The Freak Circus — Gameplay Screenshot 1" },
  { src: "/images/game/ss5.jpg", alt: "The Freak Circus — Gameplay Screenshot 2" },
  { src: "/images/game/ss6.jpg", alt: "The Freak Circus — Gameplay Screenshot 3" },
];

export function ScreenshotGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % SCREENSHOTS.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display text-2xl sm:text-[28px] text-[#E8ECF0] mb-2">Game Gallery</h2>
        <p className="font-body text-sm text-[#8A8F98] mb-8">
          Screenshots from The Freak Circus — Horror Visual Novel by Garula
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SCREENSHOTS.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative group overflow-hidden rounded-lg border border-[#1E1E2A] hover:border-[#00F0FF]/30 transition-all aspect-video"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#12121A]/0 group-hover:bg-[#12121A]/40 transition-colors flex items-center justify-center">
                <Expand
                  size={24}
                  className="text-[#00F0FF] opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-[#12121A]/95 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#1E1E2A] border border-[#2E2E3A] flex items-center justify-center text-[#8A8F98] hover:text-[#E8ECF0] transition-colors"
            >
              <X size={20} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1E1E2A] border border-[#2E2E3A] flex items-center justify-center text-[#8A8F98] hover:text-[#00F0FF] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            <img
              src={SCREENSHOTS[currentIndex].src}
              alt={SCREENSHOTS[currentIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1E1E2A] border border-[#2E2E3A] flex items-center justify-center text-[#8A8F98] hover:text-[#00F0FF] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-sm text-[#8A8F98]">
              {currentIndex + 1} / {SCREENSHOTS.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
