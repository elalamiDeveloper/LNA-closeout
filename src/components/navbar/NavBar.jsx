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

  return (
    <>
      <div className="burger-menu" onClick={onHideNavbarHandler}>
        <MenuIcon className="burger-menu-icon" />
      </div>
      <div className={`navbar-container ${hideBar ? 'hidden' : ''}`}>
        <JackInTheBox>
          <a href="/#presentation">
            <Trans i18nKey="description.part1">Qui sommes-nous ?</Trans>
          </a>
        </JackInTheBox>
        <JackInTheBox>
          <a href="/#client">
            <Trans i18nKey="description.part2">Vous êtes client ?</Trans>
          </a>
        </JackInTheBox>
        <JackInTheBox>
          <a href="/#activite">
            <Trans i18nKey="description.part3">Notre activité</Trans>
          </a>
        </JackInTheBox>
        <JackInTheBox>
          <a href="/#fournisseur">
            <Trans i18nKey="description.part4">Vous êtes fournisseur ?</Trans>
          </a>
        </JackInTheBox>
        <JackInTheBox>
          <a href="/#contact">
            <Trans i18nKey="description.part5">Contactez-nous</Trans>
          </a>
        </JackInTheBox>
      </div>
    </>
  );
};

export default NavBar;
