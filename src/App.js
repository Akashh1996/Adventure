import './App.css';
import NavBar from './components/Header/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/" />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
