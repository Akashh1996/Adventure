import React, { useEffect, useState } from 'react';
import { loadPlaces } from '../../../actions/place-actions';
import placeStore from '../../../store/place-store';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow
} from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = 'AIzaSyD6YZ7TzQl_TKgHxHWI9s_9u-NLM1B1nRo';

const libraries = ['places'];

const directPlaces = [
	{
		name: 'Adenture Time',
		prices: 'Prices : from 20 to 50',
		rating: 'rating: ' + 4.1,
		activities: 'kayak',
		url: 'http://adventuretime.com',
		location: { lat: 41.390103, lng: 2.154007 }
	},
	{
		name: 'Canyon Mari Carmen',
		prices: 'Prices : from 20 to 90',
		rating: 'rating: ' + 5,
		activities: 'canyoning',
		url: 'http://maricarmenmola.com',
		location: { lat: 41.40009, lng: 2.154007 }
	},
	{
		name: 'Yep yep yep',
		prices: 'Prices : from 20 to 50',
		rating: 'rating: ' + 3.1,
		activities: 'rafting',
		url: 'http://yepaeldeporte.com',
		location: { lat: 41.420103, lng: 2.184007 }
	},
	{
		name: 'Que tal adventure',
		prices: 'Prices : from 1 to 10',
		rating: 'rating: ' + 4.5,
		activities: 'rafting',
		url: 'http://quetaladventures.com',
		location: { lat: 41.400103, lng: 2.164007 }
	},
	{
		name: 'Deportes extremos',
		prices: 'Prices : from 10 to 60',
		rating: 'rating: ' + 3.6,
		activities: 'kayak',
		url: 'http://adventuretime.com',
		location: { lat: 41.380103, lng: 2.104007 }
	}
];

const mapContainerStyle = {
	width: '100vh',
	height: '100vh'
};
const center = {
	lat: 41.390205,
	lng: 2.154007
};

function Map() {
	const [place, setDetail] = useState(placeStore.getPlace());
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: GOOGLE_MAPS_API_KEY,
		libraries
	});
	const [markerSelected, setMarkerSelected] = useState({});

	useEffect(() => {
		placeStore.addEventListener(handleChange);
		if (!place) {
			loadPlaces();
		}
		return () => {
			placeStore.removeEventListener(handleChange);
		};
	}, [place]);

	function handleChange() {
		setDetail(placeStore.getPlace());
	}

	// console.log(place);
	// place?.map((ObjMapMarker) => {
	// 	return console.log(ObjMapMarker.result.name);
	// });

	if (loadError) return 'Error loading maps';
	if (!isLoaded) return 'Loading Maps';
	return (
		<div>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={14}
				center={center}
			>
				{directPlaces.map((placeDetail) => {
					console.log('hola', placeDetail);
					return (
						<Marker
							data-test-id={`marker__${placeDetail.name}`}
							key={placeDetail.name}
							address={placeDetail.address}
							position={placeDetail.location}
							icon={{
								url:
									'https://trello-attachments.s3.amazonaws.com/5f9fe5242167b873b8f1f631/372x594/69d66633dffceabc33074ec6670c06b1/clipart51531.png',
								scaledSize: new window.google.maps.Size(20, 30)
							}}
							// onMouseOver={()=> setMarkerSelected(placeDetail)}
						/>
					);
				})}
				{/* {place?.map((placeDetail) => {
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

				{/* {   
            markerSelected.geometry.location && 
            (
            <InfoWindow
            position={markerSelected.geometry.location}
            clickable={true}
            onMouseDown={() => setMarkerSelected({})}
            >
            <div>
                <h1>{markerSelected.name}</h1>
                <h2>{markerSelected.place_id}</h2>
            </div>
            </InfoWindow>
            )
         } */}
			</GoogleMap>
		</div>
	);
}

export default Map;
