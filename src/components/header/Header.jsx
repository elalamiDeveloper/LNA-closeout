import './header.css';
import { NavBar, Logo, TelLink } from '../../utils/components';

const Header = ({ i18n }) => {
  return (
    <div className="header-container">
      <Logo />
      <NavBar />
      <TelLink i18n={i18n} />
    </div>
  );
};

export default Header;
