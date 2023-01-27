import { useState } from "react";
import axios from "axios";
import styles from "./MovieSearch.module.scss";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(movies);

  return (
    <form className={styles.form} onSubmit={getMovies}>
      <label htmlFor="query" className={styles.form__label}>
        Movie name
      </label>
      <input
        type="text"
        placeholder="Insert a movie name"
        name="query"
        className={styles.form__input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className={styles.form__button}>
        Search
      </button>
    </form>
  );
};

export default MovieSearch;
