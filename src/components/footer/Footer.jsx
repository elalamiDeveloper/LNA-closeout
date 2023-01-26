import './footer.css';

import { Logo } from '../../utils/components';

const Footer = () => {
  return (
    <div className="footer-container container">
      <Logo className="hidden" />
      <div className="text-container">
        <h3 className="title">Contact:</h3>
        <h4 className="sous-title">Service achat : l.korssia@flashjouet.fr</h4>
        <h4 className="sous-title">
          Service clients : a.korssia@flashjouet.fr
        </h4>
        <p className="hidden">N°TVA FR63 51 74 10 627</p>
        <p className="hidden">RCS LYON 517 410 627 000 15</p>
        <p className="hidden">Capital:10.000€</p>
      </div>

      <div className="text-container">
        <h3 className="title hidden">Siège social</h3>

        <p>90 Rte de grenoble 69800 Saint-Priest</p>

        <h3 className="title hidden">Show-Room</h3>

        <p>77 Rue Aristide Briand 69800 Saint-Priest</p>
      </div>
    </div>
  );
};

export default Footer;
