"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address_label'),
      value: "Saray Mahallesi Bebek Sokak No 7 Alanya/Antalya",
    },
    {
      icon: Phone,
      label: t('contact.phone_label'),
      value: "0552 593 35 07",
      href: "tel:+905525933507",
    },
    {
      icon: Mail,
      label: t('contact.email_label'),
      value: "agoraapartotelalanya@gmail.com",
      href: "mailto:agoraapartotelalanya@gmail.com",
    },
    {
      icon: Clock,
      label: t('contact.reception_label'),
      value: t('contact.reception_value'),
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4 block">
              {t('contact.badge')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              {t('contact.title')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t('contact.description')}
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Canlı Google Harita - URL GÜNCELLENDİ */}
          <div className="bg-secondary rounded-sm overflow-hidden min-h-[450px] shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.685360490703!2d31.985692411833113!3d36.54964858113401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc2d005f77174b%3A0x633d9c185b376d8b!2sAgora%20Apart%20Hotel!5e0!3m2!1str!2str!4v1738072490000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={t('contact.map_title')}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}