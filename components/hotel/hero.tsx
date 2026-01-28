"use client";

import Image from "next/image";
import { Send, Facebook, Instagram, MessageCircle, MapPin, Wifi, Moon, UtensilsCrossed } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { useLanguage } from "../../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Arka Plan Görseli */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-hotel.jpg"
          alt="Agora Apart Hotel Mediterranean View"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* SOL TARAFTAKİ ÖZELLİKLER (FAST WIFI VB.) */}
      <div className="hidden lg:flex flex-col gap-12 absolute left-12 top-1/2 -translate-y-1/2 z-20 border-l border-white/20 pl-6 py-10">
        <div className="flex flex-col gap-2 group cursor-default">
          <Wifi className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-white text-xs font-light tracking-[0.2em] uppercase">{t('hero.feat_wifi')}</span>
        </div>
        <div className="flex flex-col gap-2 group cursor-default">
          <Moon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-white text-xs font-light tracking-[0.2em] uppercase">{t('hero.feat_rooms')}</span>
        </div>
        <div className="flex flex-col gap-2 group cursor-default">
          <UtensilsCrossed className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-white text-xs font-light tracking-[0.2em] uppercase">{t('hero.feat_kitchen')}</span>
        </div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-tight mb-6">
            <span className="block uppercase tracking-tighter">{t('hero.title')}</span>
            <span className="block italic font-light">{t('hero.subtitle')}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-light">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="https://wa.me/905525933507" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 py-7 text-xl rounded-none flex items-center gap-3 shadow-xl">
                <MessageCircle className="w-6 h-6 fill-white" />
                <span className="font-bold uppercase tracking-widest">{t('hero.bookNow')}</span>
              </Button>
            </a>

            <div className="flex gap-4">
              <a href="https://t.me/AgoraHotel" target="_blank" className="bg-white/10 hover:bg-blue-500 p-3 rounded-full backdrop-blur-md transition-all text-white border border-white/10">
                <Send className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61571114631315" target="_blank" className="bg-white/10 hover:bg-blue-700 p-3 rounded-full backdrop-blur-md transition-all text-white border border-white/10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/agora.apart.hotel" target="_blank" className="bg-white/10 hover:bg-pink-600 p-3 rounded-full backdrop-blur-md transition-all text-white border border-white/10">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mini Harita Kartı - DÜZELTİLDİ */}
        <div className="hidden lg:block w-80 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl">
          <div className="flex items-center gap-2 mb-3 text-white">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t('hero.location')}</span>
          </div>
          <div className="h-40 rounded-xl overflow-hidden mb-3 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.370535316315!2d31.9872583!3d36.5451241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dca298f99e3a37%3A0x6a13d2891d4e68e4!2sSaray%2C%20Bebek%20Sk.%20No%3A7%2C%2007400%20Alanya%2FAntalya!5e0!3m2!1str!2str!4v1705842000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-[10px] text-white/70 leading-tight">
            Saray Mah. Bebek Sok. No:7 Alanya / Antalya
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] uppercase tracking-widest font-bold">{t('hero.explore')}</span>
        <div className="w-px h-10 bg-white/20" />
      </div>
    </section>
  );
}