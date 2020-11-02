import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { loadDataFromMaps } from '../../actions/adventure-actions';
import sportStore from '../../store/adventure-store'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
    width: '80%',
    height: '80%'
  };
  
const places = [
    {
        name: "Adenture Time",
        prices: "Prices : from 20 to 50",
        rating: "rating: " + 4.1,
        activities: "kayak",
        url: "http://adventuretime.com",
        location: { lat: 41.390103, lng: 2.154007}
        
    },
    {
        name: "Canyon Mari Carmen",
        prices: "Prices : from 20 to 90",
        rating: "rating: " + 5,
        activities: "canyoning",
        url: "http://maricarmenmola.com",
        location: { lat: 41.400090, lng: 2.154007}
    },
    {
        name: "Yep yep yep",
        prices: "Prices : from 20 to 50",
        rating: "rating: " + 3.1,
        activities: "rafting",
        url: "http://yepaeldeporte.com",
        location: { lat: 41.420103, lng: 2.184007}
        
    },
    {
        name: "Que tal adventure",
        prices: "Prices : from 1 to 10",
        rating: "rating: " + 4.5,
        activities: "rafting",
        url: "http://quetaladventures.com",
        location: { lat: 41.400103, lng: 2.164007}
        
    },
    {
        name: "Deportes extremos",
        prices: "Prices : from 10 to 60",
        rating: "rating: " + 3.6,
        activities: "kayak",
        url: "http://adventuretime.com",
        location: { lat: 41.380103, lng: 2.104007}
        
    }
];


export class MapContainer extends Component {
    
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };

      onMouseoverMarker = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      }); 


      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props.name,
        activeMarker: marker,
        showingInfoWindow: true
    });
    
    render() {
      return (
        <Map 
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{lat: 41.390205,lng: 2.154007}}
            onClick={this.onMapClicked}>
            {places.map((ObjMapMarker) => {
                return (
                    <Marker 
                    id={ObjMapMarker}
                    onClick={this.onMarkerClick}
                    onMouseover={this.onMouseoverMarker}
                    name={`${ObjMapMarker.name}`}
                    id={`${ObjMapMarker.name}`}
                    url={`${ObjMapMarker.url}`}
                    prices={`${ObjMapMarker.prices}`}
                    activities={`${ObjMapMarker.activities}`}
                    rating={`${ObjMapMarker.rating}`}
                    position={{lat: `${ObjMapMarker.location.lat}`, lng: `${ObjMapMarker.location.lng}`}}/>
                )})
            } 
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    <h2>{this.state.selectedPlace.activities}</h2>
                    <h3>{this.state.selectedPlace.prices}</h3>
                    <h2>{this.state.selectedPlace.url}</h2>
                    <h3>{this.state.selectedPlace.rating}</h3>
                </div>
            </InfoWindow>
        </Map>
        
      );
    }
}
  

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD6YZ7TzQl_TKgHxHWI9s_9u-NLM1B1nRo'
})(MapContainer);

