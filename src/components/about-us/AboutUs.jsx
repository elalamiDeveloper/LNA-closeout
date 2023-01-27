import './about-us.css';
import { Slide } from 'react-awesome-reveal';
import { Trans } from 'react-i18next';

import { PrimaryTitle } from '../../utils/components';

const AboutUs = () => {
  return (
    <div
      className="about-us-section container padding-section"
      id="presentation"
    >
      <PrimaryTitle>
        <Trans i18nKey="description.part8">A propos de nous</Trans>
      </PrimaryTitle>
      <Slide cascade damping={0.05}>
        <p>
          <Trans i18nKey="description.part9">
            Créée en 2009 à Lyon, la société
            <strong> LNA CLOSEOUT</strong>, est spécialisée dans le rachat de
            produits en destockage.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="description.part10">
            Après plus de 14 ans d’activité sur le marché français,
            <strong> LNA CLOSEOUT</strong> est maintenant présent dans tous les
            pays d’Europe.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="description.part11">
            Partenaire de plusieurs fabricants, nous developpons un service
            achat adapté pour chaque pays tel que la France, l’Allemagne,
            l'Italie, l’Espagne, etc.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="description.part12">
            Notre centrale d’achat est devenue un partenaire idéal dans le
            domaine du destockage. Notre distribution permet à de nombreux
            fabricants d'écouler leurs stocks avec une grande fluidité et en
            toute discrétion.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="description.part13">
            Nous sommes présents dans plusieurs domaines d’activité tels que le
            jouet, la décoration, la cosmétique, l’hygiène, la maroquinerie,
            etc…
          </Trans>
        </p>
        <p>
          <Trans i18nKey="description.part14">
            Fort de notre expérience, nous avons mis en place un réseau de
            magasins discount, dans la France, qui distribuent les stocks sans
            court-circuiter le marché traditionnel.
          </Trans>
        </p>
      </Slide>
    </div>
  );
};

export default AboutUs;
