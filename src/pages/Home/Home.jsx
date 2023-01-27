import MovieSearch from "../../components/MovieSearch/MovieSearch";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Movie Search</h1>
      <MovieSearch />
    </div>
  );
};

export default Home;
