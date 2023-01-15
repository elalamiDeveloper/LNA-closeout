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
            ligne ? Avant de commencer notre collaboration, nous vous invitons à
            remplir le formulaire de contact ci-dessous afin de nous en dire
            plus sur votre société et ce que vous recherchez. Nous vous
            donnerons une réponse dans les 48 heures (jours ouvrés).votre
            société et ce que vous cherchez
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
