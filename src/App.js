// import '@fontsource/poppins/300.css';
// import '@fontsource/poppins/400.css';
// import '@fontsource/poppins/600.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Headers from './shared/Headers';
import LandingPage from './pages/LandingPage';
import RoboticWarehouse from './pages/RoboticWarehouse';
import AboutUs from './pages/AboutUs';
import Grocery from './pages/Microfulfillment/Grocery';
import Ecommerce from './pages/Microfulfillment/Ecommerce';

const App = () => {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/grocery" element={<Grocery />} />
        <Route exact path="/ecommerce" element={<Ecommerce />} />
        <Route exact path="/warehouse" element={<RoboticWarehouse />} />
        <Route exact path="/team" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
