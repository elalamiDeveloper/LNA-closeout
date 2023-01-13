import './footer.css';

import { Logo } from '../../utils/components';

const Footer = () => {
  return (
    <div className="footer-container container">
      <Logo />
      <div className="text-container">
        <h3 className="title">Contact:</h3>
        <h4 className="sous-title">Service achat : l.korssia@flashjouet.fr</h4>
        <h4 className="sous-title">
          Service clients : a.korssia@flashjouet.fr
        </h4>
        <p>N°TVA FR63 51 74 10 627</p>
        <p>RCS LYON 517 410 627 000 15</p>
        <p>Capital:10.000€</p>
      </div>

      <div className="text-container">
        <h3 className="title">Bureaux & Show-Room</h3>
        <strong className="title">LNA CLOSEOUT</strong>
        <h4 className="sous-title">ADRESSE:</h4>

        <p>77 Rue Aristide Briand69800 Saint-Priest</p>
      </div>
    </div>
  );
};

export default Footer;
