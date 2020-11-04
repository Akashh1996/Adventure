import dispatcher from '../dispatcher/dispatcher';
import axios from 'axios';

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

export function loadUser(userName = 'Señora') {
	const userPro = {
		name: userName,
		picture:
			'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/75238076/original/d274960485df2a5b8b3e9960c2c9dda01eb8237d/ask-20-random-strangers-to-choose-your-best-profile-picture.jpg'
	};
	dispatcher.dispatch({
		type: 'LOAD_USER',
		payload: userPro
	});
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
				type: 'LOAD_PLACE_ID',
				payload: placesInfo
			});
		} catch (error) {
			console.log(error);
		}
	});
}

// export function addFavorites(bestPlace) {
// 	const updateFavorites = loadFavorites();
// 	updateFavorites.push(bestPlace);
// }
// click en favorites.
// El objeto en el que estoy se suma al array de objetos de favoritos
