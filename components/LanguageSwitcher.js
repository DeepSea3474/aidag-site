import { useState } from "react";
import useTranslation from "../lib/useTranslation";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="ml-4">
      <button 
        onClick={() => setLocale("en")} 
        className={locale === "en" ? "font-bold text-blue-600" : "text-gray-600"}>
        EN
      </button>
      <button 
        onClick={() => setLocale("tr")} 
        className={locale === "tr" ? "font-bold text-blue-600 ml-2" : "text-gray-600 ml-2"}>
        TR
      </button>
    </div>
  );
}

