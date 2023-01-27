import './footer.css';

import { Trans } from 'react-i18next';

import { Zoom, Slide } from 'react-awesome-reveal';
import { Logo } from '../../utils/components';

const Footer = () => {
  return (
    <div className="footer-container container">
      <Zoom>
        <Logo className="hidden" />
      </Zoom>
      <div className="text-container">
        <Slide cascade direction={'up'} duration={200}>
          <h3 className="title">Contact:</h3>
          <h4 className="sous-title">
            Service achat / client : constact@lnacloseout.fr
          </h4>

          <p className="hidden">N°TVA FR63 51 74 10 627</p>
          <p className="hidden">RCS LYON 517 410 627 000 15</p>
          <p className="hidden">Capital:10.000€</p>
        </Slide>
      </div>

      <div className="text-container">
        <Slide cascade direction={'up'} duration={200}>
          <h3 className="title hidden">
            <Trans i18nKey="description.part32">Siège social</Trans>
          </h3>
          <p>90 Rte de grenoble 69800 Saint-Priest</p>
          <h3 className="title hidden">Show-Room</h3>
          <p>77 Rue Aristide Briand 69800 Saint-Priest</p> <br />
          <p>sur rdv au 0667781640</p>
        </Slide>
      </div>
    </div>
  );
};

export default Footer;
