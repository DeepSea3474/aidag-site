import { useState } from "react";
import en from "../public/locales/en/common.json";
import tr from "../public/locales/tr/common.json";

const translations = { en, tr };

export default function useTranslation() {
  const [locale, setLocale] = useState("en");
  const t = (key) => translations[locale][key] || key;
  return { t, locale, setLocale };
}

