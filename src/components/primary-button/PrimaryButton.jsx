import './primary-btn.css';
import { JackInTheBox } from 'react-awesome-reveal';

const PrimaryButton = ({ children, type, onClick, className }) => {
  const classes = `btn-container ${className}`;
  return (
    <JackInTheBox className={classes}>
      <button className="primary-button" type={type} onClick={onClick}>
        {children}
      </button>
    </JackInTheBox>
  );
};

export default PrimaryButton;
