"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

const galleryImages = [
  { src: "/images/onyuz.jpg", alt: "Agora Apart Hotel" },
  { src: "/images/havuz.jpg", alt: "Havuz" },
  { src: "/images/restaurant2.jpg", alt: "Restoran" },
  { src: "/images/havuz1.jpg", alt: "Güneşlenme" },
  { src: "/images/restaurant3.jpg", alt: "Lezzetler" },
  { src: "/images/havuz2.jpg", alt: "Gece Havuzu" },
  { src: "/images/restaurant4.jpg", alt: "Sunum" },
  { src: "/images/restaurant5.jpg", alt: "İç Mekan" },
  { src: "/images/street.jpg", alt: "Sokak" },
];

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4 block">{t('hero.explore')}</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground uppercase">{t('gallery.title')}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden group shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}