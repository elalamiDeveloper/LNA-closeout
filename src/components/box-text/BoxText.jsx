import './box-text.css';

const BoxText = ({ children, className }) => {
  const classes = `${className} box-text-container`;
  return <div className={classes}>{children}</div>;
};

export default BoxText;
