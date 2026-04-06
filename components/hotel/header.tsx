"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { t, currentLanguage, setLanguage } = useLanguage() as any;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/905525933507";

  const languages = [
    { code: 'tr', label: 'TR', flag: 'https://flagcdn.com/w40/tr.png' },
    { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'no', label: 'NO', flag: 'https://flagcdn.com/w40/no.png' },
    { code: 'ru', label: 'RU', flag: 'https://flagcdn.com/w40/ru.png' },
    { code: 'de', label: 'DE', flag: 'https://flagcdn.com/w40/de.png' },
    { code: 'fi', label: 'FI', flag: 'https://flagcdn.com/w40/fi.png' },
  ];

  const navLinks = [
    { href: "#rooms", label: t('nav.rooms') },
    { href: "#dining", label: t('nav.restaurant') },
    { href: "#experiences", label: t('nav.experiences') },
    { href: "#gallery", label: t('nav.gallery') },
    { href: "#contact", label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-2xl font-medium tracking-[0.2em] text-foreground uppercase">AGORA</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground -mt-1">Apart Hotel</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              {languages.map((lang) => (
                <button 
                  key={lang.code} 
                  onClick={() => setLanguage(lang.code)} 
                  className={`flex items-center gap-1 p-1 px-2 rounded border transition-all ${currentLanguage === lang.code ? "bg-primary text-primary-foreground border-primary" : "bg-secondary/40 text-muted-foreground border-transparent hover:border-border"}`}
                >
                  <img src={lang.flag} alt={lang.label} className="w-4 h-3 object-cover rounded-sm shadow-sm" />
                  <span className="text-[10px] font-bold">{lang.label}</span>
                </button>
              ))}
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 h-9 flex items-center gap-2 text-xs">
                <MessageCircle className="w-4 h-4 fill-white" />
                {t('hero.bookNow')}
              </Button>
            </a>
          </div>

          <button type="button" className="lg:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBİL DİL ÇUBUĞU - HER ZAMAN GÖRÜNÜR */}
      <div className="lg:hidden border-t border-border/10 bg-background/50 py-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-center gap-2 px-4 min-w-max">
          {languages.map((lang) => (
            <button 
              key={lang.code} 
              onClick={() => setLanguage(lang.code)} 
              className={`flex items-center gap-1.5 p-1.5 px-3 rounded-full border transition-all ${currentLanguage === lang.code ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-foreground border-border/40"}`}
            >
              <img src={lang.flag} alt={lang.label} className="w-4 h-3 rounded-sm" />
              <span className="text-[11px] font-bold">{lang.label}</span>
            </button>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border h-screen fixed inset-0 top-[115px] z-50">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="py-5 text-lg text-foreground border-b border-border/50 last:border-0" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-8 flex flex-col gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-full py-7 text-xl">
                  <MessageCircle className="w-6 h-6 fill-white mr-2" />
                  {t('hero.bookNow')}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}