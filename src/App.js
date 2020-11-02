import './App.css';
import NavBar from './components/Header/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';

function App() {

	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/register" component={Register} />
					<Route path="/Login" component={Login} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
