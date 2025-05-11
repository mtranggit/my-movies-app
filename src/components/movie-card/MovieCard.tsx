import React from "react";

import type {MovieEntry} from "../../data/movies";
import styles from "./MovieCard.module.css";

interface MovieCardProps {
  movie: MovieEntry;
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
  return (
    <div className={styles.movie_card}>
      <img src={movie.images["Poster Art"].url} alt={movie.title} />
      <h4>{movie.title}</h4>
    </div>
  );
};

export default MovieCard;
