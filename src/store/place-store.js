import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

const CHANGE = 'CHANGE';
let _place;

export class PlaceStore extends EventEmitter {
	getPlace() {
		return _place;
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

const placeStore = new PlaceStore();

dispatcher.register((action) => {
	switch (action.type) {
		case 'LOAD_PLACE_ID':
			_place = action.payload;
			placeStore.emitChange();
			break;
	}
});

export default placeStore;
