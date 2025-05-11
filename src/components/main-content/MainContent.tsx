import {useState} from "react";

import {programTitleMap, programTypeList, type MovieEntry, type MoviesData, type ProgramType} from "../../data/movies";
import {useFetch} from "../../hooks/useFetch";
import {toTitleCase} from "../../utils/toTitleCase";
import MovieList from "../movie-list";
import ProgramList from "../program-list";
import styles from "./MainContent.module.css";

const MAX_ENTRIES = 21;
const MOVIES_URL = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"; // Replace with actual API URL

function MainContent() {
  const {data: moviesData, loading, error} = useFetch<MoviesData>(MOVIES_URL);
  const [filter, setFilter] = useState<ProgramType | undefined>(undefined);

  if (loading) {
    return (
      <main>
        <h1 className={styles.pageTitle}>Popular Titles</h1>
        <div className={styles.pageContent}>
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h1 className={styles.pageTitle}>Popular Titles</h1>
        <div className={styles.pageContent}>
          <p>Oops, something went wrong...</p>
        </div>
      </main>
    );
  }

  let movies: MovieEntry[] = moviesData?.entries || [];
  movies = movies
    .filter((movie) => movie.programType === filter)
    .filter((movie) => movie.releaseYear >= 2010)
    .sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    })
    .slice(0, MAX_ENTRIES);

  if (filter) {
    return (
      <main>
        <h1 className={styles.pageTitle}>{toTitleCase(`Popular ${programTitleMap[filter]}`)}</h1>
        <MovieList movies={movies} />
      </main>
    );
  }

  return (
    <main>
      <h1 className={styles.pageTitle}>Popular Titles</h1>
      <ProgramList programTypeList={programTypeList} onProgramTypeSelect={(type) => setFilter(type)} />
    </main>
  );
}

export default MainContent;
