import './header.css';
import { NavBar, Logo, TelLink } from '../../utils/components';

const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <NavBar />
      <TelLink />
    </div>
  );
};

export default Header;
