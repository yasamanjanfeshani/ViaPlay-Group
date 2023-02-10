import styles from "./movieList.module.scss";
import MovieItem from "../movieItem";

const MovieList = ({ callBackMovieDetail, products, selected }) => {
  return (
    <div className={styles.listMovie}>
      {products &&
        products.map((value, index) => {
          return (
            <MovieItem
              data={value}
              key={index}
              callBackMovieDetail={(data) => callBackMovieDetail(data)}
              selected={selected}
            />
          );
        })}
    </div>
  );
};

export default MovieList;
