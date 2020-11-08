import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

const CHANGE = 'CHANGE';
let _myprofile;

export class UserStore extends EventEmitter {
	getMyProfile() {
		return _myprofile;
	}
	setUserProfile(value) {
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
		case 'LOAD_MY_PROFILE':
			userStore.setUserProfile(action.payload);
			userStore.emitChange();
			break;

		default:
			break;
	}
});

export default userStore;
