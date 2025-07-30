// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: {
          welcome: "Xush kelibsiz",
          login: "Kirish",
          logout: "Chiqish"
        }
      },
      ru: {
        translation: {
          welcome: "Добро пожаловать",
          login: "Войти",
          logout: "Выйти"
        }
      }
    },
    lng: 'uz', // boshlang'ich til
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
