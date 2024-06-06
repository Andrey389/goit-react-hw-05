import { lazy, useEffect, useState } from 'react';
import { getTrendingmovies } from '../../Api/Api';
import Loader from '../../Components/Loader/Loader';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';

const MovieList = lazy(() => import('../../Components/MovieList/MovieList'));

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
    <div>
      <h1>Trending today !</h1>
      {isLoader && <Loader />}
      {trending.length > 0 && <MovieList movies={trending} />}
      {isError && <ErrorMessage />}
    </div>
  );
}