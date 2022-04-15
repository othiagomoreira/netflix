import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Browse } from './pages/Browse';
import { Login } from './pages/login';

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
};
