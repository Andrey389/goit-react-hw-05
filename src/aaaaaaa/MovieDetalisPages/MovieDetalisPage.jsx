import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviedetails } from '../../bbbbbb/Api';
import Loader from '../../cccccccc/Loader/Loader';

import css from './MovieDetalisPage.module.css';

const MovieFilm = lazy(() => import('../../cccccccc/MovieFilm/MovieFilm'));

export default function MovieDetalisPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoader, setLoader] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state ?? '/movies');

  useEffect(() => {
    async function openMovieDetalis() {
      try {
        setLoader(true);
        const dataDetalis = await getMoviedetails(movieId);
        setMovie(dataDetalis);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    openMovieDetalis();
  }, [movieId]);

  return (
    <div className={css.container}>
      <p>
        <Link className={css.btnLink} to={backLink.current}>
          Go back
        </Link>
      </p>
      {isLoader && <Loader />}
      {movie && <MovieFilm movie={movie} />}
      <div className={css.container}>
        <h2 className={css.title}>Additional information</h2>
        <ul className={css.ulLink}>
          <li>
            <Link className={css.btnLink} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.btnLink} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
