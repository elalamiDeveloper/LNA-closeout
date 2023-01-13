import { Link } from 'react-router-dom';

import './logo.css';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
