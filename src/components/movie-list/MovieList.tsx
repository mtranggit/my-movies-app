import React from "react";

import type {MovieEntry} from "../../data/movies";
import MovieCard from "../movie-card";
import styles from "./MovieList.module.css";

interface MovieListProps {
  movies: MovieEntry[];
}

const MovieList: React.FC<MovieListProps> = ({movies}) => {
  if (movies.length === 0) {
    return <h2 style={{color: "blue"}}>No movies to display.</h2>;
  }
  return (
    <div className={styles.movie__list}>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
