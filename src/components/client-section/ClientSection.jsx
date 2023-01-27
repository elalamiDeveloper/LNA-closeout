import './client-section.css';
import { Zoom, Slide } from 'react-awesome-reveal';
import { Trans } from 'react-i18next';

import { clientImg } from '../../utils/icons';
import { PrimaryTitle } from '../../utils/components';
import { PrimaryButton } from '../../utils/components';

const ClientSection = () => {
  return (
    <div className="client-section-container padding-section" id="client">
      <PrimaryTitle className="title">
        <Trans i18nKey="description.part2">Vous êtes client ?</Trans>
      </PrimaryTitle>
      <div className="container">
        <div className="text">
          <Slide>
            <p>
              <Trans i18nKey="description.part37">
                vous cherchez du déstockage pour votre magasin ou votre boutique
                en ligne ?<strong> LNA CLOSEOUT </strong> sera ravi de
                collaborer avec vous.
                <br />
                Un formulaire de contact est à votre disposition pour nous
                joindre. <br />
                Une réponse sera faite dans un délai de 48 heures (jours
                ouvrés). <br />
              </Trans>
            </p>
          </Slide>
          <PrimaryButton
            type="submit"
            onClick={() => (window.location.href = '#contact')}
            className="client-section-btn"
          >
            <Trans i18nKey="description.part5">Contactez-nous</Trans>
          </PrimaryButton>
        </div>
        <Zoom className="img-container">
          <img src={clientImg} alt="" />
        </Zoom>
      </div>
    </div>
  );
};

export default ClientSection;
