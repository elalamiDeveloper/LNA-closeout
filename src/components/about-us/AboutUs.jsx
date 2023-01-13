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
        Créée en 2009, dans le cœur du quartier des affaires à Lyon, la société
        <strong> LNA CLOSEOUT</strong>, est spécialisée dans le rachat de
        produits en déstockage.
      </p>
      <p>
        Après plus de 14 ans d’activité sur le marché français,
        <strong> LNA CLOSEOUT</strong> est maintenant présent dans tous les pays
        d’Europe. Partenaire des plus importants fabricants de produits finis,
        elle développe un service achat adapté pour chaque pays tel que
        l’Allemagne, l'Italie, l’Autriche, l’Espagne, la Pologne, etc.
      </p>
      <p>
        Notre centrale d’achat est devenue un partenaire idéal dans le domaine
        du jouet. Notre distribution permet à de nombreux fabricant d'écouler
        leurs stocks avec une grande fluidité et en toute discrétion.
      </p>
      <p>
        Nous sommes présent dans plusieurs domaines d’activité tel que la
        décoration, le jouet, la cosmétique, l’hygiène, la maroquinerie, etc…
      </p>
      <p>
        Fort de notre expérience, nous avons mis en place un réseau de magasins
        discount, dans la France, et qui distribuent les stocks sans
        court-circuiter le marché traditionnel.
      </p>
    </div>
  );
};

export default AboutUs;
