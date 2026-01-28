"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext"; // Dil sistemini bağladık

export function Experiences() {
  const { t } = useLanguage();

  // Deneyim kartlarını dil anahtarlarıyla eşleştirdik
  const experiencesList = [
    {
      title: t('experiences.item1_title'),
      description: t('experiences.item1_desc'),
      image: "/images/tekne.jpg",
    },
    {
      title: t('experiences.item2_title'),
      description: t('experiences.item2_desc'),
      image: "/images/turkish.jpg",
    },
    {
      title: t('experiences.item3_title'),
      description: t('experiences.item3_desc'),
      image: "/images/transfer.jpg",
    },
  ];

  return (
    <section id="experiences" className="py-24 lg:py-32 bg-foreground text-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-sm uppercase tracking-[0.3em] text-primary/80 font-medium mb-4 block">
            {t('experiences.badge')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 text-card uppercase">
            {t('experiences.title')}
          </h2>
          <p className="text-card/60 text-lg max-w-2xl mx-auto">
            {t('experiences.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiencesList.map((exp, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image 
                  src={exp.image} 
                  alt={exp.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-8 left-8 right-8 text-card">
                  <h3 className="font-serif text-2xl mb-2">{exp.title}</h3>
                  <p className="text-sm text-card/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {exp.description}
                  </p>
                </div>
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-card/20 group-hover:bg-primary transition-colors text-card">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}