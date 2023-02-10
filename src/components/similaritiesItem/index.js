import styles from "./similaritiesItem.module.scss";

const SimilaritiesItem = ({ similaritiesList }) => {
  return (
    <div className={styles.similatiesSection}>
      {Object.entries(similaritiesList).map(([key, value]) => {
        return (
          <p key={key} className={styles.item}>
            {key}: {value}
          </p>
        );
      })}
    </div>
  );
};

export default SimilaritiesItem;
