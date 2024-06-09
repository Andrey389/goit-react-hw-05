import { useParams } from 'react-router-dom';
import { getMoviecredits } from '../../Api/Api';
import { useState, useEffect } from 'react';

import css from './MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const dataCast = await getMoviecredits(movieId);
        setCasts(dataCast);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCast();
  }, [movieId]);
  return (
    <ul className={css.castUl}>
      {casts.length > 0 &&
        casts.map(cast => (
          <li className={css.castLi} key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
              alt={cast.name}
            />
            <h3>{cast.name}</h3>
            <p>{cast.character}</p>
          </li>
        ))}
    </ul>
  );
}
