import { useEffect, useState } from "react";
import styles from "./comparison.module.scss";
import SimilaritiesItem from "../similaritiesItem";
import useFinalSimilarMovies from "../../utils/useFinalSimilarMovies";
import SelectedItem from "../selectedItem";
import Button from "../button";

const Comparison = ({ selected, resetSelectedMovies }) => {
  const [isSimilar, setIsSimilar] = useState(false);
  const similaritiesList = useFinalSimilarMovies(selected);

  useEffect(() => {
    //when the list of similarities change, save the status to return Yes or No
    similaritiesStatus();
  }, [similaritiesList]);

  const similaritiesStatus = () => {
    //base on document the necessary key that must be exist is, "year" and "parentalRating" and the length more than 2
    if (
      similaritiesList &&
      similaritiesList.hasOwnProperty("year") &&
      similaritiesList.hasOwnProperty("parentalRating") &&
      Object.keys(similaritiesList).length > 2
    ) {
      setIsSimilar(true);
    } else {
      setIsSimilar(false);
    }
  };

  return (
    <div className={styles.comparison} data-testid="comparison-component">
      <div data-testid="selected-item-0">
        <SelectedItem
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/240x320.png?text=${selected[0].title}`}
          title={selected[0].title}
        />
      </div>
      {selected.length === 2 && (
        <div className={styles.comparisonBox}>
          {isSimilar ? (
            <p className={styles.result} data-testid="result">
              Yes
            </p>
          ) : (
            <p className={styles.result} data-testid="result">
              No
            </p>
          )}
          <Button
            handleClick={() => resetSelectedMovies()}
            title="Clear Selection"
          />
          {isSimilar && (
            <div data-testid="similarities-item">
              <SimilaritiesItem similaritiesList={similaritiesList} />
            </div>
          )}
        </div>
      )}
      {selected.length === 2 && (
        <div data-testid="selected-item-1">
          <SelectedItem
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/240x320.png?text=${selected[1].title}`}
            title={selected[1].title}
          />
        </div>
      )}
    </div>
  );
};

export default Comparison;
