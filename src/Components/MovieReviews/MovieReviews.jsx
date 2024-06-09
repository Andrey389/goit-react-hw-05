import { useParams } from 'react-router-dom';
import { getMoviereviews } from '../../Api/Api';
import { useState, useEffect } from 'react';

export default function MovieCast() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const dataReview = await getMoviereviews(movieId);
        setReviews(dataReview);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCast();
  }, [movieId]);
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
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
