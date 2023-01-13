import './footer.css';

import { Logo } from '../../utils/components';
import { CallIcon, HomeIcon } from '../../utils/icons';

const Footer = () => {
  return (
    <div className="footer-container container">
      <Logo />

      <div className="information-container">
        <h3 className="informations-title">Informations Pratiques</h3>
        <div className="informations">
          <div className="information-item">
            <CallIcon className="information-icon" />
            <span>06.09.41.65.58</span>
          </div>

          <div className="information-item">
            <HomeIcon className="information-icon" />
            <span>77 Rue Aristide Briand 69800 Saint Priest</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
