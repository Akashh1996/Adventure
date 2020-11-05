import React from 'react';
const API_KEY = 'AIzaSyD6YZ7TzQl_TKgHxHWI9s_9u-NLM1B1nRo';
let divStyle = { height: '500px', border: '1px solid red' };
const placeRequests = [
	{
		placeId: 'ChIJX_6Ylc78pxIRs8q9I7xVbvs',
		fields: ['name', 'formatted_address', 'place_id', 'geometry']
	},
	{
		placeId: 'ChIJv7jLmO2BVw0RVmWbFel6aH4',
		fields: ['name', 'formatted_address', 'place_id', 'geometry']
	},
	{
		placeId: 'ChIJI8KsuiAEphIRqDI9VXJvwN8',
		fields: ['name', 'formatted_address', 'place_id', 'geometry']
	},
	{
		placeId: 'ChIJrYFCuLKuqBIR9xXaZ1sw85E',
		fields: ['name', 'formatted_address', 'place_id', 'geometry']
	},
	{
		placeId: 'ChIJYwOqty3nuhIR64SK9_r9YwU',
		fields: ['name', 'formatted_address', 'place_id', 'geometry']
	}
];

class Map extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src =
			`https://maps.googleapis.com/maps/api/js?key=` +
			API_KEY +
			`&libraries=geometry,places`;
		script.id = 'googleMaps';
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
		script.addEventListener('load', (e) => {
			this.onScriptLoad();
		});
	}

	onScriptLoad() {
		const MAP = new window.google.maps.Map(
			document.getElementById(this.props.id),
			this.props.options
		);
		const INFO_WINDOW = new window.google.maps.InfoWindow();
		const SERVICE = new window.google.maps.places.PlacesService(MAP);
		let markers = [];

		placeRequests.map((request) => {
			SERVICE.getDetails(request, (place, status) => {
				let marker = new window.google.maps.Marker({
					map: MAP,
					position: place.geometry.location,
					title: place.formatted_address
				});
				markers = [...markers, marker];
				marker.addListener('click', () => {
					INFO_WINDOW.setContent(place.name);
					INFO_WINDOW.open(MAP, marker);
				});
			});
		});
	}

	render() {
		return <div className="map" id={this.props.id} style={divStyle} />;
	}
}

export default Map;

// function Map() {
//     const [loadMap, setLoadMap] = useState(placeStore.getMap())

// 	function handleChange() {
//         setLoadMap(placeStore.getMap())
//         const scripthtml = document.createElement('script')
//         scripthtml = setLoadMap;
//         document.body.appendChild(scripthtml)
// 	}

// 	useEffect(() => {
//         placeStore.addEventListener(handleChange);

// 		if (!loadMap) {
//             loadMap();

// 		return () => {
// 			placeStore.removeEventListener(handleChange);
// 		};
// 	}, [loadMap]);
