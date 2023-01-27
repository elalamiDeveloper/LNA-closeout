import { useState, useEffect } from 'react';
import { JackInTheBox } from 'react-awesome-reveal';
import { Trans } from 'react-i18next';

import './navbar.css';
import { MenuIcon } from '../../utils/icons';

const NavBar = () => {
  const [hideBar, setHideBar] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 1270) setHideBar(false);
  }, []);

  const onHideNavbarHandler = () => setHideBar((lastValue) => !lastValue);
  const hideBarFN = () => {
    if (window.innerWidth > 1270) return;
    onHideNavbarHandler();
  };
  return (
    <>
      <div className="burger-menu" onClick={onHideNavbarHandler}>
        <MenuIcon className="burger-menu-icon" />
      </div>
      <div className={`navbar-container ${hideBar ? 'hidden' : ''}`}>
        <JackInTheBox style={{ width: '100%' }}>
          <a href="/#presentation" onClick={hideBarFN}>
            <Trans i18nKey="description.part1">Qui sommes-nous ?</Trans>
          </a>
        </JackInTheBox>
        <JackInTheBox style={{ width: '100%' }}>
          <a href="/#client" onClick={hideBarFN}>
            <Trans i18nKey="description.part2">Vous êtes client ?</Trans>
          </a>
        </JackInTheBox>
        <JackInTheBox style={{ width: '100%' }}>
          <a href="/#activite" onClick={hideBarFN}>
            <Trans i18nKey="description.part3">Notre activité</Trans>
          </a>
        </JackInTheBox>
        <JackInTheBox style={{ width: '100%' }}>
          <a href="/#fournisseur" onClick={hideBarFN}>
            <Trans i18nKey="description.part4">Vous êtes fournisseur ?</Trans>
          </a>
        </JackInTheBox>
        <JackInTheBox style={{ width: '100%' }}>
          <a href="/#contact" onClick={hideBarFN}>
            <Trans i18nKey="description.part5">Contactez-nous</Trans>
          </a>
        </JackInTheBox>
      </div>
    </>
  );
};

export default NavBar;
