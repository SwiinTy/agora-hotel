"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

// Başlangıç değerini boş bırakmıyoruz ki site asla çökmesin
const LanguageContext = createContext<LanguageContextType>({
  language: 'tr',
  setLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('tr');
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    fetch(`/locales/${language}.json`)
      .then(res => res.json())
      .then(data => setTranslations(data))
      .catch(err => {
        console.error("Dil dosyası okunamadı, JSON boş olabilir:", err);
        setTranslations({});
      });
  }, [language]);

  const t = (path: string) => {
    const value = path.split('.').reduce((obj, key) => obj?.[key], translations);
    return value || path; 
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);