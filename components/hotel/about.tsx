"use client";

import { Waves, Utensils, Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext"; // Dil sistemini dahil ettik

export function About() {
  const { t } = useLanguage();

  // İkonları ve dil anahtarlarını eşleştirdik
  const features = [
    {
      icon: Waves,
      title: t('about.feature1_title'),
      description: t('about.feature1_desc'),
    },
    {
      icon: Utensils,
      title: t('about.feature2_title'),
      description: t('about.feature2_desc'),
    },
    {
      icon: Clock,
      title: t('about.feature3_title'),
      description: t('about.feature3_desc'),
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <span className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4 block">
          {t('about.welcome')}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-8">
          {t('about.title')}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto mb-20">
          {t('about.description')}
        </p>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}