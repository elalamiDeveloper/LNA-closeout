import {
  Header,
  Hero,
  AboutUs,
  Gallery,
  ClientSection,
  FournisseurSection,
  Activity,
  Footer,
  Realisation,
} from '../utils/components';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Gallery />

      <ClientSection />
      <Activity />
      <FournisseurSection />
      <Footer />
      <Realisation />
    </>
  );
};

export default Home;
