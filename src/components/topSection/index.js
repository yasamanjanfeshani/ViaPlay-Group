import Comparison from "../comparison";
import styles from "./topSection.module.scss";

const TopSection = ({ selected, resetSelectedMovies }) => {
  return (
    <div className={styles.topSection}>
      {selected.length > 0 ? (
        <Comparison
          selected={selected}
          resetSelectedMovies={resetSelectedMovies}
        />
      ) : (
        <p className={styles.subTitle}>
          Select two movies below to see their similarities
        </p>
      )}
    </div>
  );
};

export default TopSection;
