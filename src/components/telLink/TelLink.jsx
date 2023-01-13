import React from 'react';

import './telLink.css';
import { CallIcon } from '../../utils/icons';

const TelLink = () => {
  return (
    <div className="tel-link-container">
      <div className="languages-container">
        <button>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
            alt="drapeau francais"
          />
        </button>
        <button>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
            alt="drapeau francais"
          />
        </button>
      </div>
      <a href="tel:+33609416558" className="tel-container">
        <CallIcon className="icon" />
        <span>06.09.41.65.58</span>
      </a>
    </div>
  );
};

export default TelLink;
