import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

const CHANGE = 'CHANGE';
let _place;
let _placeData = [];
let _placeByID = [];

export class PlaceStore extends EventEmitter {
	getPlace() {
		return _place;
	}

	getPlaceData() {
		return _placeData;
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
	getPlaceDetailByID(id) {
		_placeByID = _placeData.find((place) => place.id === id);
		return _placeByID;
	}
}

const placeStore = new PlaceStore();

dispatcher.register((action) => {
	switch (action.type) {
		case 'LOAD_PLACE_ID':
			_place = action.payload;
			placeStore.emitChange();
			break;

		case 'LOAD_PLACE_DATA':
			_placeData = action.payload;
			placeStore.emitChange();
			break;

		default:
			break;
	}
});

export default placeStore;

