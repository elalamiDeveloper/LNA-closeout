import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home';
import Contact from './Routes/contact/Contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
