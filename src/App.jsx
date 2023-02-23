import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'UA-258174985-1';
ReactGA.initialize(TRACKING_ID);

import Home from './Routes/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
