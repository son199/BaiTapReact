import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cateReducer from "./reducers/cate";
// creatr root reducer
const reducer = combineReducers({
  // toàn bộ state của store :
  // key : reducer
  // mỗi 1 reducer con là 1 file
  categories: cateReducer
});
// create store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
