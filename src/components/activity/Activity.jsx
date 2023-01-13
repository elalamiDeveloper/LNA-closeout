import './activity.css';

import { PrimaryTitle } from '../../utils/components';

const Activity = () => {
  return (
    <div className="about-us-section container padding-section" id="activite">
      <PrimaryTitle>Notre activité</PrimaryTitle>
      <p>
        Nous achetons exclusivement des lots, des stocks de produits finis, afin
        d’alimenter en permanence nos chaines de magasins discount. Fabricants,
        producteurs et importateurs sont nos principaux fournisseurs.
      </p>
      <p>
        Nous achetons tout genre de stock : <br />
        Invendus - Fins de série - Articles déclassés - DLV courtes -
        Surstockage - Surproduction - 2éme choix - Fin de collections
      </p>
      <p>
        Nous rachetons de nombreux articles dans des secteurs d’activités très
        variés :
      </p>
      <p>
        Alimentaire - Boissons - Produits d’Hygiène - produits d'entretien -
        Jeux / jouets - Puériculture - Papeterie Produits de la maison -
        décoration - cadeaux - peinture - Maroquinerie - Bagagerie Mode /
        Textile - Chaussures - Livres - Multimédia - Électroménager - produits
        Hi-tech - Bricolage - Art de la table - Mobilier - Articles de sport et
        loisir - Linge de maison
      </p>
      <p>
        Nous étudions chaque offre avec le plus grand intérêt afin de valoriser
        au mieux les produits et de vous donner le prix le plus juste en
        fonction de notre marché.
      </p>
      <p>
        La vente de ces stocks s’effectue dans un réseau de magasins soldeurs.
      </p>
      <p>- Pas de publicité</p>
    </div>
  );
};

export default Activity;
