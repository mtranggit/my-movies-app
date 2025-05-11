import {useState} from "react";

import type {MovieEntry, MoviesData, ProgramType} from "./data/movies";
import {useFetch} from "./hooks/useFetch";

const MAX_ENTRIES = 21;
const MOVIES_URL = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"; // Replace with actual API URL

function App() {
  const {data: moviesData, loading, error} = useFetch<MoviesData>(MOVIES_URL);
  const [filter, setFilter] = useState<ProgramType | undefined>(undefined);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops, something went wrong...</p>;
  let filteredMovies: MovieEntry[] = moviesData?.entries || [];

  if (filter != undefined) {
    filteredMovies = filteredMovies
      .filter((movie) => movie.programType === filter)
      .filter((movie) => movie.releaseYear >= 2010)
      .sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      })
      .slice(0, MAX_ENTRIES);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops, something went wrong...</p>;

  return (
    <>
      <h1>Movies Listing</h1>
      <div>
        <button onClick={() => setFilter("movie")}>Movies</button>
        <button onClick={() => setFilter("series")}>Series</button>
        <button onClick={() => setFilter(undefined)}>All</button>
      </div>

      <h2>Hello My Movies App!</h2>

      {filteredMovies.length === 0 && <p>No movies found.</p>}
      {filteredMovies.length > 0 && (
        <div>
          {filteredMovies.map((movie) => (
            <div key={movie.title}>
              <h2>{movie.title}</h2>
              <p>{movie.releaseYear}</p>
              <p>{movie.programType}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
