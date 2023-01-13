/* eslint-disable jsx-a11y/anchor-is-valid */
import './logo.css';
import logo from '../../assets/logo.png';

const Logo = ({ className }) => {
  const classes = `${className} logo-container`;
  return (
    <div className={classes}>
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;
