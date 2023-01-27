import { useTranslation } from 'react-i18next';

import {
  Header,
  Hero,
  AboutUs,
  Gallery,
  ClientSection,
  FournisseurSection,
  Activity,
  Footer,
  Contact,
  Realisation,
} from '../utils/components';

const Home = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Header i18n={i18n} />
      <Hero />
      <AboutUs />
      <Gallery />
      <ClientSection />
      <Activity />
      <FournisseurSection />
      <Contact />
      <Footer />
      <Realisation />
    </>
  );
};

export default Home;
