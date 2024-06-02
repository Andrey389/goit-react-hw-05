import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWVlNjYxNWE0YzViNWUxNmNiYzdkNzc5ZWI3ZDEzNSIsInN1YiI6IjY2NWM5ZjM1YjQyZDQ4NDc4OGNjNTE1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._khN5RgT8x_KTMW1BArPj0IwHNiPXA0mM1sp4pZU2jY',
  },
  params: {
    page: 1,
    include_adult: false,
    language: 'en-US',
  },
};

export async function getApi() {
  const response = await axios.get(`3/trending/movie/day`, options);
  return response.data;
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(`/3/movie/${movieId}`, options);
  return response.data;
}
