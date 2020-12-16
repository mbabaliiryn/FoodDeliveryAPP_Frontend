import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './menu.css';
import App from './App';
import storeReducer from './redux/store';
import { Provider } from 'react-redux';
import axios from 'axios';
import thunk from "redux-thunk";
import { composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';



axios.defaults.baseURL = 'http://localhost:3000';

const store = createStore(
  storeReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);
