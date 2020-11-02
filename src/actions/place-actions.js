import dispatcher from '../dispatcher/dispatcher'
import axios from 'axios';

export const GOOGLE_API_KEY = 'AIzaSyD6YZ7TzQl_TKgHxHWI9s_9u-NLM1B1nRo';
const GOOGLE_PLACES_DETAILS_ENDPOINT = 'https://maps.googleapis.com/maps/api/place/details/json?';
const GOOGLE_PLACES_SEARCH_ENDPOINT = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?';


/*     Places API     */
export function getPlacesByName(placeName) {
	const dataplaceByName = axios.get(GOOGLE_PLACES_SEARCH_ENDPOINT, {
		params: {
			key: GOOGLE_API_KEY,
			input: placeName,
			inputtype: 'textquery',
            fields: "photo,formatted_address,id,name,place_id,geometry,type"
		}
    });
    dispatcher.dispatch({
        type: 'LOAD_PLACE_NAME',
        payload: dataplaceByName
    });
}

export function getPlaceByID() {
	const dataplaceById = axios.get(GOOGLE_PLACES_DETAILS_ENDPOINT, {
		params: {
			key: GOOGLE_API_KEY,
			placeid: `ChIJgUbEo8cfqokR5lP9_Wh_DaM`,
            fields: "photo,formatted_address,id,name,place_id,geometry,type"
		}
    });
    dispatcher.dispatch({
        type: 'LOAD_PLACE_ID',
        payload: dataplaceById
    });
}

/*     Geocoding API     */
const GOOGLE_GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json?';

export function getAddressFromCoord(lat, lng) {
	const addressFromCoord = axios.get(GOOGLE_GEOCODE_ENDPOINT, {
		params: {
			key: GOOGLE_API_KEY,
			latlng: lat + ',' + lng
		}
    });
    dispatcher.dispatch({
        type: 'LOAD_ADRESS_FROMCOORD',
        payload: addressFromCoord
    });
}

export function getCoordFromAddress(address) {
	const coordFromAddress = axios.get(GOOGLE_GEOCODE_ENDPOINT, {
		params: {
			key: GOOGLE_API_KEY,
			address: address
        }
    });
    dispatcher.dispatch({
        type: 'LOAD_COORD',
        payload: coordFromAddress
    });
}

	
    
 
    

