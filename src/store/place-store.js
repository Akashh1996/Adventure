import { EventEmitter } from 'events';
import actionTypes from '../actions/action-types';
import dispatcher from '../dispatcher/dispatcher';

const CHANGE = 'CHANGE';
let _placeByID = [];
let _placeByType = [];
let _place;
let _placeData;

export class PlaceStore extends EventEmitter {
	addEventListener(callback) {
		this.on(CHANGE, callback);
	}
	removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}
	emitChange() {
		this.emit(CHANGE);
	}

	getPlace() {
		return _place;
	}

	getPlaceData() {
		return _placeData;
	}
	setPlaceData(value) {
		_placeData = value;
	}

	getPlaceDetailByID(id) {
		_placeByID = _placeData?.find((place) => place.id === id);
		return _placeByID;
	}

	getPlaceByType(type) {
		_placeByType = _placeData?.find((place) => place.type === type);
		return _placeByType;
	}
}

const placeStore = new PlaceStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_PLACE_ID:
			_place = action.payload;
			placeStore.emitChange();
			break;

		case actionTypes.LOAD_PLACE_DATA:
			placeStore.setPlaceData(action.payload);
			placeStore.emitChange();
			break;

		default:
			break;
	}
});

export default placeStore;
