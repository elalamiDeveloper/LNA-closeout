import './about-us.css';
import { PrimaryTitle } from '../../utils/components';

const AboutUs = () => {
  return (
    <div
      className="about-us-section container padding-section"
      id="presentation"
    >
      <PrimaryTitle>A propos de nous</PrimaryTitle>
      <p>
        Créée en 2009 à Lyon, la société
        <strong> LNA CLOSEOUT</strong>, est spécialisée dans le rachat de
        produits en déstockage.
      </p>
      <p>
        Après plus de 14 ans d’activité sur le marché français,
        <strong> LNA CLOSEOUT</strong> est maintenant présent dans tous les pays
        d’Europe.
      </p>
      <p>
        Partenaire de plusieurs fabricants, nous développant un service achat
        adapté pour chaque pays tel que la France, l’Allemagne, l'Italie,
        l’Espagne, etc.
      </p>
      <p>
        Notre centrale d’achat est devenue un partenaire idéal dans le domaine
        du déstockage. Notre distribution permet à de nombreux fabricant
        d'écouler leurs stocks avec une grande fluidité et en toute discrétion.
      </p>
      <p>
        Nous sommes présent dans plusieurs domaines d’activité tel que la
        décoration, le jouet, la cosmétique, l’hygiène, la maroquinerie, etc…
      </p>
      <p>
        Fort de notre expérience, nous avons mis en place un réseau de magasins
        discount, dans la France, qui distribuent les stocks sans
        court-circuiter le marché traditionnel.
      </p>
    </div>
  );
};

export default AboutUs;
