import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Navigation from '../Navigation/Navigation';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetalisPage = lazy(() =>
  import('../../pages/MovieDetalisPage/MovieDetalisPage')
);
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));
const NotPage = lazy(() => import('../../pages/NotPage/NotPage'));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetalisPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
