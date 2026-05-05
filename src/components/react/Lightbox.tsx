import { useState, useEffect, useCallback } from "react";

interface LightboxProps {
  images: string[];
}

export default function Lightbox({ images }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    const handler = (e: Event) => {
      const index = (e as CustomEvent).detail;
      open(index);
    };
    window.addEventListener("open-lightbox", handler);
    return () => window.removeEventListener("open-lightbox", handler);
  }, [open]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, close, prev, next]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox"
    >
      <button
        className="cursor-pointer absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none p-2 z-10"
        onClick={close}
        aria-label="Close"
      >
        ×
      </button>
      <button
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl p-2 z-10"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl p-2 z-10"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next"
      >
        ›
      </button>
      <img
        src={images[currentIndex]}
        alt={`Photo ${currentIndex + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-4 text-white/50 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
