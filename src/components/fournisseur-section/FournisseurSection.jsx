import './fournisseur.section.css';
import { Zoom, Slide } from 'react-awesome-reveal';
import { Trans } from 'react-i18next';

import { fournisseurImg } from '../../utils/icons';
import { PrimaryTitle } from '../../utils/components';
import { PrimaryButton } from '../../utils/components';

const FournisseurSection = () => {
  return (
    <div className="fournisseur-section padding-section" id="fournisseur">
      <PrimaryTitle className="title">
        <Trans i18nKey="description.part24">Vous êtes fournisseur ?</Trans>
      </PrimaryTitle>
      <div className="container">
        <div className="text">
          <Slide>
            <p>
              <Trans i18nKey="description.part25">
                Vous avez des fins de séries ou surstock et souhaitez vendre
                l’intégralité de vos produits en gros.
                <strong> LNA CLOSEOUT </strong> sera ravie de collaborer avec
                vous.
                <br />
                Un formulaire de contact est à votre disposition pour nous
                joindre. <br />
                Une réponse sera faite dans un délai de 48 heures (jours
                ouvrés). <br />
              </Trans>
            </p>
          </Slide>
          <PrimaryButton
            type="button"
            onClick={() => (window.location.href = '#contact')}
            className="fournisseur-section-btn"
          >
            <Trans i18nKey="description.part5">Contactez-nous</Trans>
          </PrimaryButton>
        </div>

        <Zoom className="img-container">
          <img src={fournisseurImg} alt="" />
        </Zoom>
      </div>
    </div>
  );
};

export default FournisseurSection;
