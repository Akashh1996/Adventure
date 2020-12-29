import NavBar from './components/Header/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Contact from './components/Pages/Contact/Contact';
import Slider from './components/Pages/Home/Slider';
import Map from './components/Pages/Map/Map';
import Profile from './components/Pages/Profile/Profile';
import DetailSlider from './components/Pages/Detail/DetailSlider';
import Photos from './components/Pages/Photos/Photos';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/profile" component={Profile} />
					<Route path="/Contact" exact component={Contact} />
					<Route path="/maps" component={Map} />
					<Route path="/" exact component={Slider} />
					<Route path="/photos" component={Photos} />
					<Route path="/detail/:id" exact component={DetailSlider} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
