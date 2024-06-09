import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Navigation = lazy(() => import('../Navigation/Navigation'));
const HomePages = lazy(() => import('../../Pages/HomePages/HomePages'));
const MoviesPages = lazy(() => import('../../Pages/MoviesPages/MoviesPages'));
const MovieDetalisPages = lazy(() =>
  import('../../Pages/MovieDetalisPages/MovieDetalisPage')
);
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));
const NotPages = lazy(() => import('../../Components/NotPages/NotPages'));

export default function App() {
  return (
    <div>
      <Suspense>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/movies" element={<MoviesPages />} />
          <Route path="/movies/:movieId" element={<MovieDetalisPages />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotPages />} />
        </Routes>
      </Suspense>
    </div>
  );
}
