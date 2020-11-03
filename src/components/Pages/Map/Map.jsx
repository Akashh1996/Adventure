import React, { useEffect, useState } from 'react';
import { loadPlaces } from '../../../actions/place-actions';
import placeStore from '../../../store/place-store';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';

const libraries = ["places"];

const mapContainerStyle = {
    width:'100vh',
    height:'100vh',
};
const center = {
    lat: 41.390205,
    lng: 2.154007,
}

function Map() {
    const [place, setDetail] = useState(placeStore.getPlace());
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const [ markerSelected, setMarkerSelected ] = useState({});

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
    };
    
    console.log(place);
    // place?.map((ObjMapMarker) => { return (
    //         console.log(ObjMapMarker.result.name)
    //     ) });
        
        if(loadError) return "Error loading maps";
        if(!isLoaded) return "Loading Maps";
        return  (
            <div>
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={14}
        center={center}
        >  
        {place.map((placeDetail) => {
            return (
                <Marker key={placeDetail.result.name}
                position={placeDetail.result.geometry.location}
                icon={{
                url:'https://trello-attachments.s3.amazonaws.com/5f9fe5242167b873b8f1f631/372x594/69d66633dffceabc33074ec6670c06b1/clipart51531.png',
                scaledSize: new window.google.maps.Size(20,30)}}
                // onMouseOver={()=> setMarkerSelected(placeDetail)}
                /> 
            );
        })}
  
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
        )
} 

export default Map
