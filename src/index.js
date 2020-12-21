import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter  } from 'react-router-dom';
import {createBrowserHistory} from 'history'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <HashRouter history={history}>
      <App />
    </HashRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
