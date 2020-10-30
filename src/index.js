import React from 'react';
import ReactDOM from 'react-dom';
import AdventureDetails from '../src/components/detail/AdventureDetails'
import AdventureMap from '../src/components/map/AdventureMap'
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AdventureMap />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
