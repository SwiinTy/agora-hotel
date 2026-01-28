"use client";

import { useLanguage } from "@/context/LanguageContext";

const languages = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
  { code: 'no', label: 'NO' },
  { code: 'ru', label: 'RU' },
  { code: 'de', label: 'DE' },
  { code: 'fi', label: 'FI' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`text-[10px] font-bold px-2 py-1 rounded transition-all border ${
            language === lang.code 
              ? 'bg-primary text-white border-primary' 
              : 'bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}