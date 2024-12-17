"use client"

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useState } from 'react';
import i18n from '@lib/i18n';
import '../../styles/language.css'

// Define the structure for each language object
interface Language {
  name: string;
  flag: string;
}

// Define the type for the languages object
const languages: Record<string, Language> = {
  en: { name: "English", flag: "/img/flags/gb.png" },
  fr: { name: "Français", flag: "/img/flags/fr.png" },
};

export default function LanguageSwitcher() {
  // const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<string>(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLang(lng);
  };

  return (
    <div className="relative inline-block select-wrapper mt-8">
      <select
        value={selectedLang}
        onChange={(e) => changeLanguage(e.target.value)}
        className="appearance-none bg-transparent outline-none cursor-pointer text-black"
      >
        {Object.keys(languages).map((lang) => (
          <option key={lang} value={lang}>
            {languages[lang].name}
          </option>
        ))}
      </select>
      <div className="absolute left-0 top-0 transform -translate-y-[2.5rem] flex space-x-2 flags">
        {Object.keys(languages).map((lang) => (
          <Image
            key={lang}
            src={languages[lang].flag}
            alt={languages[lang].name}
            width={24}
            height={24}
            className={`transition-transform ${
              selectedLang === lang ? "scale-110" : "scale-100 opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

