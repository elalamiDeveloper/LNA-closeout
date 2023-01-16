import { useState, useEffect } from 'react';

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
        <a href="/#presentation">Qui sommes-nous ?</a>
        <a href="/#client">Vous êtes client ?</a>
        <a href="/#activite">Notre activité</a>
        <a href="/#fournisseur">Vous êtes fournisseur ?</a>
        <a href="/#contact">Contactez-nous</a>
      </div>
    </>
  );
};

export default NavBar;
