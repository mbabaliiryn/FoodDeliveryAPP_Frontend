import { combineReducers } from 'redux';
import categoryReducer from './categories';
import mealReducer from './meals';
import authReducer from './AuthReducer'
import dishReducer from './dish';
import ingredientReducer from './ingredients';


const reducer = combineReducers({
  auth: authReducer,
  categories: categoryReducer,
  meals: mealReducer,
  dish: dishReducer,
  ingredient: ingredientReducer,
});

export default reducer;
