import { lazy, useEffect, useState } from 'react';
import { getTrendingmovies } from '../../api/Api';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './HomePage.module.css';

const MovieList = lazy(() => import('../../components/MovieList/MovieList'));

export default function HomePage() {
  const [trending, setTrending] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchTrending() {
      try {
        setIsLoader(true);
        setIsError(false);
        const results = await getTrendingmovies();
        setTrending(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    fetchTrending();
  }, []);
  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending today !</h1>
      {isLoader && <Loader />}
      {trending.length > 0 && <MovieList movies={trending} />}
      {isError && <ErrorMessage />}
    </div>
  );
}
