import NavBar from './components/Header/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/Pages/Contact/Register';
import Footer from './components/Footer/Footer';
import Help from './components/Pages/Help/Help';
import Slider from './components/Pages/Home/Slider';
import Map from './components/Pages/Map/Map';
import Profile from './components/Pages/Profile/Profile';
import DetailSlider from './components/Pages/Detail/DetailSlider';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/profile" component={Profile} />
					<Route path="/register" component={Register} />
					<Route path="/Help" component={Help} />
					<Route path="/maps" component={Map} />
					<Route path="/" exact component={Slider} />
					<Route path="/detail/:id" exact component={DetailSlider} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
