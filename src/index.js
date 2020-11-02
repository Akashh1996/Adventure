import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
// import AdventureDetails from '../src/components/detail/AdventureDetails'
// import AdventureMap from '../src/components/map/AdventureMap'
import AdventureTest from '../src/components/test/AdventureTest'
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
>>>>>>> 9e2cf1bc10aed1dcc4112538721df6e944f23982
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
    <AdventureTest />
  </React.StrictMode>,
  document.getElementById('root')
=======
	<React.StrictMode>
		<BrowserRouter>
			<App />
			<Switch>
				<Route path="/" />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
>>>>>>> 9e2cf1bc10aed1dcc4112538721df6e944f23982
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
