import styles from "./selectedItem.module.scss";

const SelectedItem = ({ src, title }) => {
  return (
    <div className={styles.selectedItem}>
      <figure>
        <img
          src={src}
          alt={title}
          title={title}
          width="100%"
          className={styles.image}
        />
      </figure>
    </div>
  );
};

export default SelectedItem;
