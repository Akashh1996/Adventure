import { EventEmitter } from 'events';
import actionTypes from '../actions/action-types';
import dispatcher from '../dispatcher/dispatcher';

const CHANGE = 'CHANGE';
let _myprofile;

export class UserStore extends EventEmitter {
	getMyProfile() {
		return _myprofile;
	}

	setMyProfile(value) {
		_myprofile = value;
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
		case actionTypes.LOAD_MY_PROFILE:
			userStore.setMyProfile(action.payload);
			userStore.emitChange();
			break;

		default:
			break;
	}
});

export default userStore;
