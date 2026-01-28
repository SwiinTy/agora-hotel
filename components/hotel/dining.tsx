"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export function Dining() {
  const { t } = useLanguage();

  return (
    <section id="dining" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden">
            <Image
              src="/images/restaurant.jpg" 
              alt="Otel Restaurant"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:py-8">
            <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
              {t('restaurant.badge')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              {t('restaurant.title')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('restaurant.description')}
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6">
                <h3 className="font-serif text-xl text-foreground">{t('restaurant.feature1')}</h3>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6">
                <h3 className="font-serif text-xl text-foreground">{t('restaurant.feature2')}</h3>
              </div>

              <div className="border-l-2 border-primary/30 pl-6">
                <h3 className="font-serif text-xl text-foreground">{t('restaurant.feature3')}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}