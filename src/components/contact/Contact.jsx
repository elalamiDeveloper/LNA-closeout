import './contact.css';

import {
  PrimaryTitle,
  Header,
  ContactForm,
  Realisation,
} from '../../utils/components';

const Contact = () => {
  return (
    <div className="contact-container padding-section" id="contact">
      <Header />
      <div className="contact-text">
        <PrimaryTitle>Contactez-nous</PrimaryTitle>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
