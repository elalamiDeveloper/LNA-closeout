import './primary-title.css';

const PrimaryTitle = ({ children, className }) => {
  const classes = `primary-title ${className}`;
  return <h2 className={classes}>{children}</h2>;
};

export default PrimaryTitle;
