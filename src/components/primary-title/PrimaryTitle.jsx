import './primary-title.css';
import { Zoom } from 'react-awesome-reveal';

const PrimaryTitle = ({ children, className }) => {
  const classes = `primary-title ${className}`;

  return (
    <Zoom>
      <h2 className={classes}>{children}</h2>;
    </Zoom>
  );
};

export default PrimaryTitle;
