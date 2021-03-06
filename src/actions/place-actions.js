import dispatcher from '../dispatcher/dispatcher';
import axios from 'axios';
import actionTypes from './action-types';

const GOOGLE_API_KEY = 'AIzaSyD6YZ7TzQl_TKgHxHWI9s_9u-NLM1B1nRo';
const GOOGLE_PLACES_DETAILS_ENDPOINT =
	'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?';

const iDPlaces = [
	'ChIJX_6Ylc78pxIRs8q9I7xVbvs',
	'ChIJv7jLmO2BVw0RVmWbFel6aH4',
	'ChIJI8KsuiAEphIRqDI9VXJvwN8',
	'ChIJrYFCuLKuqBIR9xXaZ1sw85E',
	'ChIJYwOqty3nuhIR64SK9_r9YwU'
];

export async function loadPlacesData() {
	try {
		const adventures = await axios('/adventures.json');

		dispatcher.dispatch({
			type: actionTypes.LOAD_PLACE_DATA,
			payload: adventures.data
		});
	} catch (error) {
		dispatcher.dispatch({
			type: 'Error'
		});
	}
}

export async function loadMyProfile() {
	try {
		const myprofile = await axios('/myprofile.json');

		dispatcher.dispatch({
			type: actionTypes.LOAD_MY_PROFILE,
			payload: myprofile.data
		});
	} catch (error) {
		dispatcher.dispatch({
			type: 'Error'
		});
	}
}

export async function loadPlaces() {
	const placesInfo = [];
	iDPlaces.forEach(async (place) => {
		try {
			const dataplaceById = await axios(GOOGLE_PLACES_DETAILS_ENDPOINT, {
				params: {
					key: GOOGLE_API_KEY,
					placeid: iDPlaces,
					fields:
						'formatted_address,name,place_id,geometry,website,review,price_level,rating'
				}
			});
			placesInfo.push(dataplaceById.data);
			dispatcher.dispatch({
				type: actionTypes.LOAD_PLACE_ID,
				payload: placesInfo
			});
		} catch (error) {
			dispatcher.dispatch({
				type: 'Error'
			});
		}
	});
}
