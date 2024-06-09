import { lazy, useEffect, useState } from 'react';
import { getTrendingmovies } from '../../bbbbbb/Api';
import Loader from '../../cccccccc/Loader/Loader';
import ErrorMessage from '../../cccccccc/ErrorMessage/ErrorMessage';
import css from './HomePages.module.css';

const MovieList = lazy(() => import('../../cccccccc/MovieList/MovieList'));

export default function HomePages() {
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
