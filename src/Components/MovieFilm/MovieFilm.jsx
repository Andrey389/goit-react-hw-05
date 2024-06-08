import css from './MovieFilm.module.css';

export default function MovieFilm({
  movie: {
    genres,
    poster_path,
    title,
    original_title,
    release_date,
    vote_average,
    overview,
  },
}) {
  return (
    <div className={css.container}>
      <div>
        {poster_path ? (
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`poster ${title}`}
          />
        ) : (
          <div>{title}</div>
        )}
      </div>
      <div className={css.contText}>
        <h1 className={css.title}>
          {original_title} {release_date}
        </h1>
        <p className={css.text}>User Score: {vote_average}</p>
        <h2 className={css.title}>Overview</h2>
        <p className={css.text}>{overview}</p>
        <h2 className={css.title}>Genres</h2>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
