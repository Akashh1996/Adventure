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
import authStore from '../../../store/auth-store';

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
			{places && placeApi && (
				<div>
					<GoogleMap
						mapContainerStyle={mapContainerStyle}
						zoom={7}
						center={center}
					>
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
						{/* {placeApi?.map((placeDetail) => {
					return (
						<Marker
							key={placeDetail.result.name}
							position={placeDetail.result.geometry.location}
							icon={{
								url:
									'https://trello-attachments.s3.amazonaws.com/5f9fe5242167b873b8f1f631/372x594/69d66633dffceabc33074ec6670c06b1/clipart51531.png',
								scaledSize: new window.google.maps.Size(20, 30)
							}}
							// onMouseOver={()=> setMarkerSelected(placeDetail)}
						/>
					);
				})}
 */}
						{markerSelected && (
							<InfoWindow
								position={markerSelected.location}
								onCloseClick={() => {
									setMarkerSelected(null);
								}}
							>
								<div className="infowindow">
									<h3>{markerSelected.name}</h3>
									<figcaption>{markerSelected.type}</figcaption>
									<h6>Nota del sitio : {markerSelected.rating}</h6>
									<h6>Dirección : {markerSelected.address}</h6>
									<h5>{markerSelected.phone_number}</h5>
									<h6>Precios entre {markerSelected.price}</h6>
									<h6>{markerSelected.url}</h6>
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
