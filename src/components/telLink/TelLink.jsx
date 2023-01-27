import React from 'react';
import { Zoom } from 'react-awesome-reveal';

import './telLink.css';
import { CallIcon } from '../../utils/icons';

const TelLink = ({ i18n }) => {
  return (
    <div className="tel-link-container">
      <div className="languages-container">
        <button type="submit" onClick={() => i18n.changeLanguage('fr')}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
            alt="drapeau francais"
          />
        </button>
        <button type="submit" onClick={() => i18n.changeLanguage('en')}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
            alt="drapeau francais"
          />
        </button>
      </div>
      <Zoom>
        <a href="tel:+33609416558" className="tel-container">
          <CallIcon className="icon" />
          <span>06.09.41.65.58</span>
        </a>
      </Zoom>
    </div>
  );
};

export default TelLink;
