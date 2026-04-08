"use client";

import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    hotel: [
      { label: t('nav.rooms'), href: "#rooms" },
      { label: t('nav.restaurant'), href: "#dining" },
      { label: t('nav.experiences'), href: "#experiences" },
      { label: t('nav.gallery'), href: "#gallery" },
    ],
    services: [
      { label: t('experiences.item1_title'), href: "#experiences" },
      { label: t('experiences.item2_title'), href: "#experiences" },
      { label: t('experiences.item3_title'), href: "#experiences" },
      { label: "Agora Pub & Restoran", href: "#dining" },
    ],
    info: [
      { label: t('about.welcome'), href: "#about" },
      { label: t('nav.contact'), href: "#contact" },
      { label: "Saray Mah. Bebek Sok. No:7 Alanya", href: "#contact" },
      { label: "0552 593 35 07", href: "tel:+905525933507" },
    ],
    // PAYTR İÇİN ZORUNLU YASAL LİNKLER
    legal: [
      { label: "İptal ve İade Koşulları", href: "/iptal-iade-kosullari" },
      { label: "Mesafeli Satış Sözleşmesi", href: "/mesafeli-satis-sozlesmesi" },
      { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
      { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
    ]
  };

  return (
    <footer className="bg-foreground text-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-serif text-3xl font-medium tracking-wide uppercase">AGORA</span>
              <span className="text-xs uppercase tracking-[0.3em] text-card/60">Apart Hotel</span>
            </Link>
            <p className="text-card/70 leading-relaxed mb-6 max-w-sm">{t('footer.description')}</p>
            
            <div className="flex gap-4 mb-8">
              <a href="https://t.me/AgoraHotel" target="_blank" className="w-10 h-10 rounded-full bg-[#26A5E4] flex items-center justify-center hover:scale-110 transition-transform">
                <img src="https://cdn.simpleicons.org/telegram/white" className="w-5 h-5" alt="Telegram" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61571114631315" target="_blank" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform">
                <img src="https://cdn.simpleicons.org/facebook/white" className="w-5 h-5" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/agora.apart.hotel" target="_blank" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center hover:scale-110 transition-transform">
                <img src="https://cdn.simpleicons.org/instagram/white" className="w-5 h-5" alt="Instagram" />
              </a>
            </div>

            {/* ÖDEME LOGOLARI (PAYTR İÇİN) */}
            <div className="flex gap-6 items-center grayscale opacity-50 mt-10 border-t border-card/10 pt-6">
              <img src="https://cdn.simpleicons.org/visa/white" className="h-5" alt="Visa" />
              <img src="https://cdn.simpleicons.org/mastercard/white" className="h-5" alt="Mastercard" />
              <img src="https://cdn.simpleicons.org/paytr/white" className="h-5" alt="PayTR" />
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wide font-medium mb-4">{t('footer.hotel_title')}</h3>
            <ul className="space-y-3">
              {footerLinks.hotel.map((link, i) => <li key={i}><Link href={link.href} className="text-card/70 hover:text-primary transition-colors text-sm">{link.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wide font-medium mb-4">Kurumsal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-card/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wide font-medium mb-4">{t('footer.info_title')}</h3>
            <ul className="space-y-3">
              {footerLinks.info.map((link, i) => <li key={i}><Link href={link.href} className="text-card/70 hover:text-primary transition-colors text-sm">{link.label}</Link></li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-card/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs uppercase tracking-widest text-card/50">© {new Date().getFullYear()} AGORA APART HOTEL. {t('footer.rights')}</p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-card/50">
            <Link href="/gizlilik-politikasi" className="hover:text-card/80 transition-colors">{t('footer.privacy')}</Link>
            <Link href="/kullanim-kosullari" className="hover:text-card/80 transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}