import React, { useEffect, useState } from 'react';
import { loadPlaces, loadPlacesData } from '../../../actions/place-actions';
import { Link } from 'react-router-dom';
import placeStore from '../../../store/place-store';
import './Map.css';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow
} from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = 'AIzaSyD6YZ7TzQl_TKgHxHWI9s_9u-NLM1B1nRo';

const libraries = ['places'];

const mapContainerStyle = {
	width: '100%',
	height: '87vh'
};

const center = {
	lat: 42.357209,
	lng: 2.802071
};

const options = {
	disableDefaultUI: true,
	zoomControl: true
};

function Map() {
	const [placeApi, setPlaceApi] = useState(placeStore.getPlace());
	const [places, setPlaces] = useState(placeStore.getPlaceData());
	const [markerSelected, setMarkerSelected] = useState(null);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: GOOGLE_MAPS_API_KEY,
		libraries
	});

	function handleChange() {
		setPlaceApi(placeStore.getPlace());
		setPlaces(placeStore.getPlaceData());
	}

	useEffect(() => {
		placeStore.addEventListener(handleChange);
		if (!placeApi) {
			loadPlaces();
		}
		if (!places) {
			loadPlacesData();
		}
		return () => {
			placeStore.removeEventListener(handleChange);
		};
	}, [placeApi, places]);

	if (loadError) return 'Error loading maps';
	if (!isLoaded) return 'Loading Maps';

	return (
		<>
			{places && (
				<div>
					<GoogleMap
						mapContainerStyle={mapContainerStyle}
						zoom={7}
						center={center}
						options={options}
					>
						<div className="buttonBlock">
							<button style={{ color: 'green', margin: '5px' }}>Rafting</button>
							<button style={{ color: 'rgb(102, 22, 109)', margin: '5px' }}>
								Paragliding
							</button>
							<button style={{ color: 'red', margin: '5px' }}>Canyoning</button>
						</div>
						{places.map((placeDetail) => {
							return (
								<Marker
									data-test-id={`marker__${placeDetail.name}`}
									key={placeDetail.name}
									id={placeDetail.id}
									photos={placeDetail.photos[0]['photo1']}
									name={placeDetail.name}
									type={placeDetail.type}
									price={placeDetail.price}
									rating={placeDetail.rating}
									address={placeDetail.address}
									position={placeDetail.location}
									phone={placeDetail.phone_number}
									website={placeDetail.url}
									icon={{
										url: placeDetail.icon_style,
										scaledSize: new window.google.maps.Size(20, 30)
									}}
									onClick={() => setMarkerSelected(placeDetail)}
								/>
							);
						})}

						{markerSelected && (
							<InfoWindow
								position={markerSelected.location}
								onCloseClick={() => {
									setMarkerSelected(null);
								}}
							>
								<div className="infowindow">
									<h1>{markerSelected.name}</h1>
									<figcaption>{markerSelected.type}</figcaption>
									<br></br>
									<h2>Nota del sitio : {markerSelected.rating}</h2>
									<h2>Dirección : {markerSelected.address}</h2>
									<h2>{markerSelected.phone_number}</h2>
									<h3>Precios entre {markerSelected.price}</h3>
									<a href={`${markerSelected.url}`}>{markerSelected.url}</a>
									<br></br>
									<br></br>
									<Link to={`/detail/${markerSelected.id}`}>Más detalles</Link>
								</div>
							</InfoWindow>
						)}
					</GoogleMap>
				</div>
			)}
		</>
	);
}

export default Map;
