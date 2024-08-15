module.exports = {
  i18n: {
    locales: ['en', 'fr'], // Add your supported languages here
    defaultLocale: 'fr', // Default language
    localeDetection: false, 
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
    // Optionally, you can add other configurations like locale detection, etc.
  };