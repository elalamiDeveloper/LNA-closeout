import './footer.css';

import { Logo } from '../../utils/components';

const Footer = () => {
  return (
    <div className="footer-container container">
      <Logo />
      <div className="text-container">
        <h3>Contact:</h3>
        <h4>Service achat : l.korssia@flashjouet.fr</h4>
        <h4>Service clients : a.korssia@flashjouet.fr</h4>
        <p>N°TVA FR63 51 74 10 627</p>
        <p>RCS LYON 517 410 627 000 15</p>
        <p>Capital:10.000€</p>
      </div>
      <div>
        <h3>Bureaux & Show-Room</h3>
        <h4>ADRESSE:</h4>
        <strong>LNA CLOSEOUT</strong>
        <p>77 Rue Aristide Briand69800 Saint-Priest</p>
      </div>
    </div>
  );
};

export default Footer;
