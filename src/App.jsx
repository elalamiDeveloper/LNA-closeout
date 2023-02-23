import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import { v4 as uuidv4 } from 'uuid';

import { addVisiter } from './utils/firebase/firebase';

import Home from './Routes/Home';

const App = () => {
  useEffect(() => {
    const browser = isBrowser ? `${navigator.userAgent}` : 'Unknown';
    const device = isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop';

    const newId = uuidv4();
    const newVisiter = { browser, device, date: new Date(), id: newId };
    addVisiter(newVisiter);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
