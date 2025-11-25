import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { BlurFade } from './ui/blur-fade';

interface GalleryItem {
  src: string;
  alt: string;
  category?: string;
}

const galleryItems: GalleryItem[] = [
  { src: '/assets/SON03067.webp', alt: 'Gallery image 1', category: 'Fotografie' },
  { src: '/assets/20230811-SON07808-Verbessert-RR.webp', alt: 'Gallery image 2', category: 'Fotografie' },
  { src: '/assets/SON03143.webp', alt: 'Gallery image 3', category: 'Fotografie' },
  { src: '/assets/20230813-SON08196-Verbessert-RR.webp', alt: 'Gallery image 4', category: 'Fotografie' },
  { src: '/assets/20230811-SON07764.webp', alt: 'Gallery image 5', category: 'Fotografie' },
  { src: '/assets/20230811-SON07819.webp', alt: 'Gallery image 6', category: 'Fotografie' },
  { src: '/assets/20230812-SON08080-Verbessert-RR.webp', alt: 'Gallery image 7', category: 'Fotografie' },
  { src: '/assets/SON03064.webp', alt: 'Gallery image 8', category: 'Fotografie' },
  { src: '/assets/20230701-SON06425.webp', alt: 'Gallery image 9', category: 'Fotografie' },
  { src: '/assets/20230701-SON06592.webp', alt: 'Gallery image 10', category: 'Fotografie' },
  { src: '/assets/20230701-SON06842.webp', alt: 'Gallery image 11', category: 'Fotografie' },
  { src: '/assets/20230701-SON07051-Verbessert-RR.webp', alt: 'Gallery image 12', category: 'Fotografie' },
  { src: '/assets/20230811-SON07825-Verbessert-RR.webp', alt: 'Gallery image 13', category: 'Fotografie' },
  { src: '/assets/20230812-SON07939.webp', alt: 'Gallery image 14', category: 'Fotografie' },
  { src: '/assets/20230812-SON08038.webp', alt: 'Gallery image 15', category: 'Fotografie' },
];

interface LightboxProps {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({ item, index, total, onClose, onNext, onPrev }: LightboxProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  };

  const handleSwipe = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const startX = touch.clientX;
    const endX = touch.changedTouches[touch.length - 1].clientX;
    if (startX - endX > 50) onNext();
    if (endX - startX > 50) onPrev();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      onTouchEnd={handleSwipe}
      tabIndex={0}
    >
      <div
        className="relative w-full h-full flex items-center justify-center px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-lg p-2 transition-colors duration-200"
          aria-label="Close lightbox"
        >
          <X size={28} className="text-white" />
        </button>

        <img
          src={item.src}
          alt={item.alt}
          className="max-w-full max-h-[90vh] object-contain"
        />

        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-colors duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} className="text-white" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-colors duration-200"
          aria-label="Next image"
        >
          <ChevronRight size={32} className="text-white" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm">
          {index + 1} / {total}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < galleryItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <section className="relative pt-40 pb-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.25} inView sessionKey="gallery-header">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}>
              Galerie
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ein Einblick in meine besten Werke
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.5} inView sessionKey="gallery-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square bg-gray-900"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-colors">
                  <ChevronRight size={24} className="text-white" />
                </div>
              </div>
            </div>
          ))}
          </div>
        </BlurFade>
      </div>

      {selectedIndex !== null && (
        <Lightbox
          item={galleryItems[selectedIndex]}
          index={selectedIndex}
          total={galleryItems.length}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
