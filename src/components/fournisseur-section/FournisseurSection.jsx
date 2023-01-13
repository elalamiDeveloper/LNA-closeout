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
            Vous avez des fins de séries ou un surstock et souhaitez vendre
            l’intégralité de vos invendus en gros ?
            <strong> LNA CLOSEOUT </strong> sera ravi de collaborer avec vous.
            Avant de démarrer notre partenariat, nous vous invitons à prendre
            contact avec nous via le formulaire de contact ci-après et de nous
            en dire un peu plus sur votre entreprise, votre/vos marque(s) ainsi
            que le type de produits et la quantité que vous souhaitez vendre.
            Nous vous donnerons une réponse dans un délai de 48 heures (jours
            ouvrés).
          </p>
          <PrimaryButton
            type="button"
            onClick={() => (window.location.href = '/contact')}
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
