import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWVlNjYxNWE0YzViNWUxNmNiYzdkNzc5ZWI3ZDEzNSIsInN1YiI6IjY2NWM5ZjM1YjQyZDQ4NDc4OGNjNTE1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._khN5RgT8x_KTMW1BArPj0IwHNiPXA0mM1sp4pZU2jY';
axios.defaults.params = {
  language: 'en-US',
};

export const getTrendingmovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data.results;
};

export const getSearchmovie = async query => {
  const response = await axios.get('/search/movie', {
    params: { query: query },
  });
  return response.data.results;
};

export const getMoviedetails = async id => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

export const getMoviecredits = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data.cast;
};

export const getMoviereviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data.results;
};
