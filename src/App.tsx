import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import OurCraft from './pages/OurCraft';
import Origins from './pages/Origins';
import Menu from './pages/Menu';
import Spaces from './pages/Spaces';
import Reserve from './pages/Reserve';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="our-craft" element={<OurCraft />} />
        <Route path="origins" element={<Origins />} />
        <Route path="menu" element={<Menu />} />
        <Route path="spaces" element={<Spaces />} />
        <Route path="reserve" element={<Reserve />} />
      </Route>
    </Routes>
  );
}

export default App;