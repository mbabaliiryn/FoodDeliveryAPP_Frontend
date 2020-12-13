// import { compose, createStore, applyMiddleware } from "redux";
import authreducer from "./reducers/AuthReducer";
import { combineReducers } from 'redux'
// import thunk from "redux-thunk"

// const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const storeReducer = combineReducers( {
    authreducer,

}
   
    // composeEnhancers(applyMiddleware(thunk))
    );

export default storeReducer;
