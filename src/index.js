import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './menu.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import axios from 'axios';
import { composeWithDevTools} from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css';


axios.defaults.baseURL = 'http://localhost:3000';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);
