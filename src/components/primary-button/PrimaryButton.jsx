import './primary-btn.css';

const PrimaryButton = ({ children, type, onClick, className }) => {
  const classes = `primary-button ${className}`;
  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
