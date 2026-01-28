"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, Maximize, Wifi, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../../context/LanguageContext";

// Hata almamak için odanın yapısını tanımladık
interface RoomProps {
  name: string;
  description: string;
  images: string[];
  guests: number;
  size: string;
  whatsappUrl: string;
}

function RoomCard({ room, t }: { room: RoomProps, t: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-card rounded-sm overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
      {/* Image Slider */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {room.images && room.images.length > 0 ? (
          <Image
            src={room.images[currentIndex]}
            // "Görsel" kelimesini de dile bağladık: t('rooms.image')
            alt={`${room.name} - ${t('rooms.image')} ${currentIndex + 1}`}
            fill
            className="object-cover transition-all duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">No Image</div>
        )}
        
        {/* Navigasyon Okları */}
        <button 
          onClick={(e) => { e.preventDefault(); prevSlide(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={(e) => { e.preventDefault(); nextSlide(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Görsel Noktaları (Dots) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {room.images.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-white scale-125" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* İçerik */}
      <div className="p-8">
        <h3 className="font-serif text-2xl text-foreground mb-3">{room.name}</h3>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed min-h-[60px]">{room.description}</p>

        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
          <span className="flex items-center gap-2"><Users className="w-4 h-4" />{room.guests} {t('rooms.guests')}</span>
          <span className="flex items-center gap-2"><Maximize className="w-4 h-4" />{room.size}</span>
          <span className="flex items-center gap-2"><Wifi className="w-4 h-4" />{t('rooms.wifi')}</span>
        </div>

        <a href={room.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg tracking-widest uppercase">
            {t('rooms.book')}
          </Button>
        </a>
      </div>
    </div>
  );
}

export function Rooms() {
  const { t } = useLanguage();

  const rooms: RoomProps[] = [
    {
      name: t('rooms.room1_name'),
      description: t('rooms.room1_desc'),
      images: ["/images/dag1.jpg", "/images/dag2.jpg", "/images/dag3.jpg", "/images/dag4.jpg"],
      guests: 4,
      size: "45 m²",
      whatsappUrl: "https://wa.me/905525933507",
    },
    {
      name: t('rooms.room2_name'),
      description: t('rooms.room2_desc'),
      images: ["/images/standart1.jpg", "/images/standart2.jpg", "/images/standart3.jpg", "/images/standart4.jpg", "/images/standart5.jpg"],
      guests: 3,
      size: "40 m²",
      whatsappUrl: "https://wa.me/905525933507",
    },
  ];

  return (
    <section id="rooms" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4 block">
            {t('rooms.description')}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            {t('rooms.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}