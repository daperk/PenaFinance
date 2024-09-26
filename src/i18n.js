// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import enTranslations from './locales/en/translation.json';
import esTranslations from './locales/es/translation.json';

// Initialize i18next
i18n
  .use(LanguageDetector)  // Detects the user's language
  .use(initReactI18next)   // Passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
    },
    fallbackLng: 'en',      // Default language if no match
    interpolation: {
      escapeValue: false,    // React already handles escaping
    },
    detection: {
      order: ['localStorage', 'navigator'], // Detect language from browser or localStorage
    }
  });

export default i18n;
