/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';

import './logo.css';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;
