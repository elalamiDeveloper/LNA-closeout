import './contact.css';
import { Trans } from 'react-i18next';

import { PrimaryTitle, Header, ContactForm } from '../../utils/components';

const Contact = () => {
  return (
    <div className="contact-container padding-section" id="contact">
      <Header />
      <div className="contact-text">
        <PrimaryTitle>
          <Trans i18nKey="description.part5">Contactez-nous</Trans>
        </PrimaryTitle>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
