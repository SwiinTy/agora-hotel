"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher"; // Dil seçici eklendi
import { useLanguage } from "@/context/LanguageContext"; // Dil sistemi eklendi

export function Header() {
  const { t } = useLanguage(); // Çeviri fonksiyonunu çağırdık
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/905525933507";

  // Menü isimlerini dilden dile değişecek şekilde güncelledik
  const navLinks = [
    { href: "#rooms", label: t('nav.rooms') },
    { href: "#dining", label: t('nav.restaurant') },
    { href: "#experiences", label: t('nav.experiences') },
    { href: "#gallery", label: t('nav.gallery') },
    { href: "#contact", label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-2xl font-medium tracking-[0.2em] text-foreground uppercase">
              AGORA
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground -mt-1">
              Apart Hotel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA - Dil Seçici Entegre Edildi */}
          <div className="hidden lg:flex items-center gap-6">
            <LanguageSwitcher /> {/* 6 Dil Butonları Burada */}
            
            <a
              href="tel:+905525933507"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>0552 593 35 07</span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 fill-white" />
                {t('hero.bookNow')} {/* Dilden dile değişen buton yazısı */}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-4">
            {/* Mobil Menüde Dil Seçici */}
            <div className="py-4 border-b border-border/50">
              <LanguageSwitcher />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-4 text-base tracking-wide text-foreground border-b border-border/50 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 flex flex-col gap-4">
              <a
                href="tel:+905525933507"
                className="flex items-center justify-center gap-2 py-3 text-sm font-medium border border-border rounded-md"
              >
                <Phone className="w-4 h-4" />
                <span>0552 593 35 07</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-full py-6 text-lg">
                  <MessageCircle className="w-5 h-5 fill-white mr-2" />
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