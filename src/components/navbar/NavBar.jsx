import { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import { MenuIcon } from '../../utils/icons';

const NavBar = () => {
  const [hideBar, setHideBar] = useState(false);

  const onHideNavbarHandler = () => setHideBar((lastValue) => !lastValue);

  return (
    <>
      <div className="burger-menu" onClick={onHideNavbarHandler}>
        <MenuIcon className="burger-menu-icon" />
      </div>
      <div className={`navbar-container ${hideBar ? 'hidden' : ''}`}>
        <a href="/#presentation">Qui sommes-nous ?</a>
        <a href="/#client">Vous êtes client ?</a>
        <a href="/#fournisseur">Vous êtes fournisseur ?</a>
        <a href="/#activite">Notre activité</a>

        <Link to="/contact">Contactez-nous</Link>
      </div>
    </>
  );
};

export default NavBar;
