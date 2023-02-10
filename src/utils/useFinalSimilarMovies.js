const useFinalSimilarMovies = (movies) => {
  let similarities = {};

  for (let i = 0; i < movies.length; i++) {
    for (let j = i + 1; j < movies.length; j++) {
      let commonProperties = 0;

      // Compare production year
      if (movies[i].production.year === movies[j].production.year) {
        commonProperties++;
        similarities[`year`] = movies[i].production.year;
      }

      // Compare parental rating
      if (movies[i].parentalRating === movies[j].parentalRating) {
        commonProperties++;
        similarities[`parentalRating`] = movies[i].parentalRating;
      }

      // Compare IMDB rating
      if (
        movies[i].imdb &&
        movies[j].imdb &&
        Math.round(movies[i].imdb.rating) === Math.round(movies[j].imdb.rating)
      ) {
        commonProperties++;
        similarities[`imdb`] = Math.round(movies[i].imdb.rating);
      }

      // Compare actors
      if (movies[i].people.actors && movies[j].people.actors) {
        let actorsInCommon = movies[i].people.actors.filter((actor) =>
          movies[j].people.actors.includes(actor)
        );
        if (actorsInCommon.length > 0) {
          commonProperties++;
          similarities[`actors`] = actorsInCommon;
        }
      }

      // Compare duration
      if (
        movies[i].duration.milliseconds < 3600000 &&
        movies[j].duration.milliseconds < 3600000
      ) {
        commonProperties++;
        similarities[`duration`] = "under an hour";
      } else if (
        movies[i].duration.milliseconds >= 3600000 &&
        movies[i].duration.milliseconds < 7200000 &&
        movies[j].duration.milliseconds >= 3600000 &&
        movies[j].duration.milliseconds < 7200000
      ) {
        commonProperties++;
        similarities[`duration`] = "from 1 hour, but less than 2";
      } else if (
        movies[i].duration.milliseconds >= 7200000 &&
        movies[j].duration.milliseconds >= 7200000
      ) {
        commonProperties++;
        similarities[`duration`] = "2 hours or longer";
      }
    }
  }
  return similarities;
};

export default useFinalSimilarMovies;
