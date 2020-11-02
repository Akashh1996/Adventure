import './App.css';
import NavBar from './components/Header/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Footer from './components/Footer/Footer';
import Help from './components/Pages/Help/Help';
import Contact from './components/Pages/Contact/Contact';
import Slider from './components/Pages/Home/Slider';
import MapContainer from './components/Pages/Map/Map';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/register" component={Register} />
					<Route path="/Login" component={Login} />
					<Route path="/Help" component={Help} />
					<Route path="/Contact" exact component={Contact} />
					<Route path="/" exact component={Slider} />
					<Route path="/maps" component={MapContainer} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
