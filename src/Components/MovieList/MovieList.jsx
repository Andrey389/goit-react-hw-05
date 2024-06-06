import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(({ id }) => {
        <li key={id}>
          <Link>{`/movies/${id}`}</Link>
        </li>;
      })}
    </ul>
  );
}
