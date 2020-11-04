import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

const CHANGE = 'CHANGE';
let _user;
let _favorites = [
	{
		id: 1,
		phone_number: '628 77 35 08',
		address: 'Avinguda de la Generalitat, 1, 25560 Sort, Lleida',
		location: { lat: 42.412571, lng: 1.132111 },
		name: 'Rafting Catalunya',
		url: 'https://raftingcatalunya.es/',
		type: 'rafting',
		price: '40€-80€',
		photos: [
			{
				photo1:
					'https://raftingcatalunya.es/images/rafting/descenso-de-un-rio-en-rafting.jpg',
				photo2:
					'https://raftingcatalunya.es/images/rafting/grupo-de-ninos-haciendo-rafting.jpg',
				photo3:
					'https://raftingcatalunya.es/images/rafting/rafting-por-los-rios-de-catalunya.jpg',
				photo4:
					'https://raftingcatalunya.es/images/rafting/pasando-por-debajo-de-un-puente-en-rafting.jpg',
				photo5:
					'https://raftingcatalunya.es/images/rafting/familia-haciendo-rafting-en-catalunya.jpg'
			}
		],
		rating: 4.8
	}
];

export class UserStore extends EventEmitter {
	getUser() {
		return _user;
	}

	getMyFavorites() {
		return _favorites;
	}

	addEventListener(callback) {
		this.on(CHANGE, callback);
	}
	removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}
	emitChange() {
		this.emit(CHANGE);
	}
}

const userStore = new UserStore();

dispatcher.register((action) => {
	switch (action.type) {
		case 'LOAD_USER':
			_user = action.payload;
			userStore.emitChange();
			break;

		case 'LOAD_FAVORITES':
			_favorites = action.payload;
			userStore.emitChange();
			break;
		default:
			break;
	}
});

export default userStore;
