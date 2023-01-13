import './contact.css';

import {
  PrimaryTitle,
  Header,
  ContactForm,
  Realisation,
} from '../../utils/components';

const Contact = () => {
  return (
    <div className="contact-container">
      <Header />
      <div className="contact-text">
        <PrimaryTitle>Contactez-nous</PrimaryTitle>
        <ContactForm />
        <Realisation />
      </div>
    </div>
  );
};

export default Contact;
