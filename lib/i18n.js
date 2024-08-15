// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';

// i18n
//   .use(HttpApi) // load translation using http -> see /public/locales
//   .use(LanguageDetector) // detect user language
//   .use(initReactI18next) // pass the i18n instance to react-i18next.
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     supportedLngs: ['en', 'fr'],
//     ns: ['common'], // specifying namespaces
//     defaultNS: 'common', // default namespace to use
//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/{{ns}}.json', // path where the translation files are stored
//     },
//   });

// export default i18n;


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Correct path to your translation files
    },
    supportedLngs: ['en', 'fr'],
    fallbackLng: 'fr',
    debug: true,
    ns: ['common'], // specifying namespaces
    defaultNS: 'common', // default namespace to use
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
