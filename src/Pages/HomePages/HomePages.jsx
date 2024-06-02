import { useEffect, useState } from 'react';
import { getApi } from '../../Api/Api';
import MovieList from '../../Components/MovieList/MovieList';

export default function HomePages() {
  const [movies, setMovies] = useState([]);
  //   const [isLoader, setIsLoader] = useState(false);
  //   const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        // setIsLoader(true);
        // setIsError(false);
        const data = await getApi();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        // setIsError(true);
      } finally {
        // setIsLoader(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div>
      <h1>Trending today !</h1>
      {/* {isLoader && <Loader />} */}
      {movies.length > 0 && <MovieList movies={movies} />}
      {/* {isError && <ErrorMessage />} */}
    </div>
  );
}
