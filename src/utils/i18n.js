import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fr: {
        translation: {
          part1: 'Qui sommes-nous ?',
        },
      },
      en: {
        translation: {
          description: {
            part1: 'Who We Are ?',
            part2: 'Are you a customer ?',
            part3: 'our activity',
            part4: 'Are you a supplier ?',
            part5: 'contact us',
            part6: 'CENTRAL DISCOUNT PURCHASING OF ALL BRANDS',
            part7:
              'Destocking, Trading, Distribution, Import-Export Toys, home, high-tech, DIY, hygiene, small appliances, cooking, luggage storage, tableware, picture & sound, household linen',
            part8: 'About Us',
            part9:
              'Created in 2009 in Lyon, the company   <strong>LNA CLOSEOUT</strong>, is specialized in the purchase of products in destocking.',
            part10:
              'After more than 14 years of activity on the French market,  <strong> LNA CLOSEOUT  </strong> is now present in all European countries.',
            part11:
              'Partner of several manufacturers, we develop a suitable purchasing service for each country such as France, Germany, Italy, Spain, etc.',
            part12:
              'Our central purchasing office has become an ideal partner in the area of destocking. Our distribution allows many manufacturers to sell their stocks with great fluidity and discretion.',
            part13:
              'We are present in several fields of activity such as decoration, toys, cosmetics, hygiene, leather goods, etc.',
            part14:
              'Based on our experience, we have set up a network of discount stores in France, which distribute stocks without short-circuiting the traditional market.',
            part15: 'Purchase and removal of goods within a week',
          },
        },
      },
    },
  });

export default i18n;
