import './hero.css';
import { JackInTheBox } from 'react-awesome-reveal';
import { Trans } from 'react-i18next';

const Hero = () => {
  return (
    <div className="hero-section">
      <JackInTheBox style={{ zIndex: 100 }}>
        <div className="text">
          <h2>
            <Trans i18nKey="description.part6">
              CENTRALE D'ACHAT DISCOUNT DE TOUTES MARQUES
            </Trans>
          </h2>
          <p>
            <Trans i18nKey="description.part7">
              Déstockage, Trading, Distribution, Import-Export Jouets, maison,
              high-tech, bricolage, hygiène, petit-électroménager, cuisson,
              bagagerie, art de la table , image & son , Linge de maison
            </Trans>
          </p>
        </div>
      </JackInTheBox>
    </div>
  );
};

export default Hero;
