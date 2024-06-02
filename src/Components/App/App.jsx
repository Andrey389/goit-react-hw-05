import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import HomePages from '../../Pages/HomePages/HomePages';
import MoviesPages from '../../Pages/MoviesPages/MoviesPages';

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/movies" element={<MoviesPages />} />
      </Routes>
    </div>
  );
}
