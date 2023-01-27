import React from "react";
import styles from "./MovieCard.module.scss";

const MovieCard = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
}) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__image}
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
        alt={title + `poster`}
      />
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{title}</h2>
        <p>
          <small>RELEASE DATE {release_date}</small>
        </p>
        <p>
          <small>RATING {vote_average}</small>
        </p>
        <p className={styles.card__description}>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
