import { useEffect, useState } from "react";
import styles from "./movieItem.module.scss";

const MovieItem = ({ data, callBackMovieDetail, selected }) => {
  const [selectedStatus, setSelectedStatus] = useState(false);

  useEffect(() => {
    //save selected status for marked with border-color
    if (selected.indexOf(data) >= 0) {
      setSelectedStatus(true);
    } else {
      setSelectedStatus(false);
    }
  }, [selected]);

  return (
    <div className={styles.card} onClick={() => callBackMovieDetail(data)}>
      <figure>
        <img
          width="100%"
          className={`${styles.image} ${selectedStatus ? styles.border : null}`}
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/400x200.png?text=${data.title}`}
          title={data.title}
          alt={data.title}
        />
      </figure>
    </div>
  );
};

export default MovieItem;
