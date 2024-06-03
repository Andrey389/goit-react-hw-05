import { useEffect, useState } from 'react';
import {
  getTrendingmovies,
  getSearchmovie,
  getMoviedetails,
  getMoviecredits,
  getMoviereviews,
} from '../../Api/Api';
// import MovieList from '../../Components/MovieList/MovieList';

export default function HomePages() {
  useEffect(() => {
    getTrendingmovies();
    getSearchmovie('cars');
    getMoviedetails('95');
    getMoviecredits('22');
    getMoviereviews('1');
  }, []);
  return (
    <div>
      <h1>Trending today !</h1>
      {/* {isLoader && <Loader />} */}
      {/* {movies.length > 0 && <MovieList movies={movies} />} */}
      {/* {isError && <ErrorMessage />} */}
    </div>
  );
}
