import { fetchLoading, filterMealsByIngredients, fetchingError } from './actionCreators';

const filterByIngredients = ingredient => dispatch => {
  console.log("API CALL")
  dispatch(fetchLoading());
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(res => res.json())
    .then(result => {
      console.log(result,"result");
      dispatch(filterMealsByIngredients(result.meals));
    })
    .catch(err => {
      console.log(err,"error")
      dispatch(fetchingError(err));
    });
};


export default filterByIngredients;
