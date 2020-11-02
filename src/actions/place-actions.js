import dispatcher from '../dispatcher/dispatcher'
import axios from 'axios';

export const GOOGLE_API_KEY = 'AIzaSyD6YZ7TzQl_TKgHxHWI9s_9u-NLM1B1nRo';
const GOOGLE_PLACES_DETAILS_ENDPOINT = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?';



export async function getPlaceByID() {
	const dataplaceById = await axios.get(GOOGLE_PLACES_DETAILS_ENDPOINT, {
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


