import { useParams } from 'react-router-dom';
import { getMoviereviews } from '../../bbbbbb/Api';
import { useState, useEffect } from 'react';

import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const dataReview = await getMoviereviews(movieId);
        setReviews(dataReview);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieReviews();
  }, [movieId]);
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li className={css.reviewsLi} key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <li>
          <p>We don`t have any reviews for this movie</p>
        </li>
      )}
    </ul>
  );
}
