import './activity.css';
import { Slide } from 'react-awesome-reveal';
import { Trans } from 'react-i18next';

import { PrimaryTitle } from '../../utils/components';

const Activity = () => {
  return (
    <div className="about-us-section container padding-section" id="activite">
      <PrimaryTitle>
        <Trans i18nKey="description.part15">Notre activité</Trans>
      </PrimaryTitle>

      <Slide cascade damping={0.05}>
        <p>
          <Trans i18nKey="description.part16">
            Nous achetons exclusivement des lots et des stocks, afin d’alimenter
            en permanence nos chaines de magasins discount. Fabricants,
            producteurs et importateurs sont nos principaux fournisseurs.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="description.part17">
            Nous achetons tout type de stock :
          </Trans>
          <br />
          <Trans i18nKey="description.part18">
            Invendus - Fins de série - Articles déclassés - DLV courtes -
            Surstockage - Surproduction - 2éme choix - Fin de collections
          </Trans>
        </p>
        <p>
          <Trans i18nKey="description.part19">
            Nous rachetons de nombreux articles dans des secteurs d’activités
            très variés :
          </Trans>
        </p>
        <p>
          <Trans i18nKey="description.part20">
            Jeux / jouets - Alimentaire - Boissons - Produits d’Hygiène -
            produits d'entretien - Puériculture - Papeterie Produits de la
            maison - décoration - cadeaux - peinture - Maroquinerie - Bagagerie
            Mode / Textile - Chaussures - Livres - Multimédia - Électroménager -
            produits Hi-tech - Bricolage - Art de la table - Mobilier - Articles
            de sport et loisir - Linge de maison
          </Trans>
        </p>
        <p>
          <Trans i18nKey="description.part21">
            Nous étudions chaque offre avec le plus grand intérêt afin de
            valoriser au mieux les produits et de vous donner le prix le plus
            juste en fonction de notre marché.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="description.part22">
            La vente de ces stocks s’effectue dans un réseau de magasins
            soldeurs.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="description.part23">- Pas de publicité</Trans>
        </p>
      </Slide>
    </div>
  );
};

export default Activity;
