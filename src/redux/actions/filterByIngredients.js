import { fetchLoading, filterMealsByIngredients, fetchingError, setIngredients } from './actionCreators';

const filterByIngredients = ingredient => dispatch => {
  console.log("API CALL")
  dispatch(fetchLoading());
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(res => res.json())
    .then(result => {
      dispatch(filterMealsByIngredients(result.meals));
    })
    .catch(err => {
      dispatch(fetchingError(err));
    });
};


export default filterByIngredients;
