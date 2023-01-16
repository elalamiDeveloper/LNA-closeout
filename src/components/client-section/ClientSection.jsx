import './client-section.css';

import { clientImg } from '../../utils/icons';
import { PrimaryTitle } from '../../utils/components';
import { PrimaryButton } from '../../utils/components';

const ClientSection = () => {
  return (
    <div className="client-section-container padding-section" id="client">
      <PrimaryTitle className="title">Vous êtes client ?</PrimaryTitle>
      <div className="container">
        <div className="text">
          <p>
            vous cherchez du déstockage pour votre magasin ou votre boutique en
            ligne ?<strong> LNA CLOSEOUT </strong> sera ravi de collaborer avec
            vous.
            <br />
            Un formulaire de contact est à votre disposition pour nous joindre.{' '}
            <br />
            Une réponse sera faite dans un délai de 48 heures (jours ouvrés).{' '}
            <br />
          </p>
          <PrimaryButton
            type="submit"
            onClick={() => (window.location.href = '#contact')}
            className="client-section-btn"
          >
            Contactez-nous
          </PrimaryButton>
        </div>
        <div className="img-container">
          <img src={clientImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
