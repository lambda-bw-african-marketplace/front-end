import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import {Provider} from 'react-redux';
import {userReducer} from './reducers/userReducer'
import {BrowserRouter as Router} from 'react-router-dom';



const store=createStore(userReducer,applyMiddleware(thunk,logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
