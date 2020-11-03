import dispatcher from '../dispatcher/dispatcher'
import axios from 'axios';

export const GOOGLE_API_KEY = 'AIzaSyD6YZ7TzQl_TKgHxHWI9s_9u-NLM1B1nRo';
const GOOGLE_PLACES_DETAILS_ENDPOINT = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?';



const iDPlaces = [
    'ChIJX_6Ylc78pxIRs8q9I7xVbvs',
    'ChIJv7jLmO2BVw0RVmWbFel6aH4',
    'ChIJI8KsuiAEphIRqDI9VXJvwN8',
    'ChIJrYFCuLKuqBIR9xXaZ1sw85E',
    'ChIJYwOqty3nuhIR64SK9_r9YwU'
];


export function loadPlaces() {
	const placesInfo = [];
	iDPlaces.forEach(async (place) => {
		const dataplaceById = await axios.get(GOOGLE_PLACES_DETAILS_ENDPOINT, {
			params: {
				key: GOOGLE_API_KEY,
				placeid: place,
				fields: 'formatted_address,name,place_id,geometry,website,review,price_level,rating'
			}
		});
		placesInfo.push(dataplaceById.data);
		if (placesInfo.length === iDPlaces.length) {
			dispatcher.dispatch({
				type: 'LOAD_PLACE_ID',
				payload: placesInfo
			});
		}
	});
}