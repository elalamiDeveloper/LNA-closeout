import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
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
          part5: 'Contact us',
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
          /////////////////////////////////////////////////////////////
          part15: 'Our activity',
          part16:
            'We exclusively buy lots and stocks, in order to permanently supply our chains of discount stores. Manufacturers, producers and importers are our main suppliers.',
          part17: 'We buy all kinds of stock: ',
          part18:
            'Unsold - End of series - Downgraded items - Short DLV - Overstock - Overproduction - 2nd choice - End of collections',
          part19: 'We buy many articles in a wide variety of industries:',
          part20:
            'Food - Beverages - Hygiene products - Maintenance products - Games/ toys - Childcare - Stationery Home products - decoration - gifts - paint - Leather goods - Luggage Storage Fashion/ Textile - Shoes - Books - Multimedia - Home appliances - Hi-tech products - DIY - Tableware - Furniture - Sports and leisure articles - Household linen',
          part21:
            'We study each offer with the greatest interest in order to make the best use of the products and to give you the most fair price according to our market.',
          part22: 'These stocks are sold in a network of discount stores.',
          part23: '- No advertising',
          ////////////////////////////////////////////////////
          part24: 'Are you a supplier?',
          part25:
            'You have end of series or overstock and want to sell all your products wholesale. <strong> LNA CLOSEOUT </strong>will be happy to collaborate with you. A contact form is available to contact us.<br /> A response will be made within 48 hours (working days).<br /> You have end of series or overstock and want to sell all your products wholesale. <strong> LNA CLOSEOUT </strong> will be happy to collaborate with you.`A contact form is available to contact us. A response will be made within 48 hours (working days).',
          part26: 'Name',
          part27: 'Phone',
          part28: 'customer or supplier',
          part29: 'customer',
          part30: 'supplier',
          part31: 'Send',
          part32: 'Head office',
          part33:
            'Copyright © 2023 Nk-Formation. Privacy Policy Legal Notices.',
          part34: 'Purchase and removal of goods within a week',
          part35: 'We answer you in less than',
          part36: 'Redemption of all stocks',
          part37:
            'you are looking for destocking for your store or online store?<strong> LNA CLOSEOUT</strong> will be happy to collaborate with you. <br /> A contact form is available to contact us. <br /> A response will be made within 48 hours (working days).',
        },
      },
    },
  },
});

export default i18n;
