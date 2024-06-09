import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchmovie } from '../../api/Api';

import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function MoviesPages() {
  const [searhMovie, setSearchMovie] = useState([]);
  const [isLoadet, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [serchParam, setSearchParam] = useSearchParams();
  const queryMovie = serchParam.get('query') ?? '';

  useEffect(() => {
    async function fetchSearch() {
      if (queryMovie === '') {
        return;
      }
      try {
        setIsLoader(true);
        setIsError(false);
        const dataMovie = await getSearchmovie(queryMovie);
        setSearchMovie(dataMovie);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    fetchSearch();
  }, [queryMovie]);

  const heandleSearch = async query => {
    serchParam.set('query', query);
    setSearchParam(serchParam);
    setSearchMovie([]);
  };

  return (
    <div>
      <SearchForm onSearch={heandleSearch} />
      {isLoadet && <Loader />}
      {searhMovie.length > 0 && <MovieList movies={searhMovie} />}
      {isError && <ErrorMessage />}
    </div>
  );
}
