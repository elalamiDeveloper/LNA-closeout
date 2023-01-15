import './fournisseur.section.css';

import { fournisseurImg } from '../../utils/icons';
import { PrimaryTitle } from '../../utils/components';
import { PrimaryButton } from '../../utils/components';

const FournisseurSection = () => {
  return (
    <div className="fournisseur-section padding-section" id="fournisseur">
      <PrimaryTitle className="title">Vous êtes fournisseur ?</PrimaryTitle>
      <div className="container">
        <div className="text">
          <p>
            Vous avez des fins de séries ou surstock et souhaitez vendre
            l’intégralité de vos produits en gros .
            <strong> LNA CLOSEOUT </strong> sera ravi de collaborer avec vous.
            Un formulaire de contact est à votre disposition pour nous joindre.
            Une réponse sera faite dans un délai de 48 heures (jours ouvrés).
          </p>
          <PrimaryButton
            type="button"
            onClick={() => (window.location.href = '#contact')}
            className="fournisseur-section-btn"
          >
            Contactez-nous
          </PrimaryButton>
        </div>

        <div className="img-container">
          <img src={fournisseurImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FournisseurSection;
