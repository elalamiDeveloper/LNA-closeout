import './realisation.css';
import { Trans } from 'react-i18next';

const Realisation = () => {
  return (
    <div className="realisation-container">
      <Trans i18nKey="description.part33">
        Copyright © 2023
        <a href="https://www.nkformationfrance.fr/"> Nk-Formation </a>.
        Politique de confidentialité Mentions légales.
      </Trans>
    </div>
  );
};

export default Realisation;
