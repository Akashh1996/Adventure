import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let user;

class AuthStore extends EventEmitter {
	emitChange() {
		this.emit(CHANGE);
	}
	addEventListener(callback) {
		this.on(CHANGE, callback);
	}
	removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}
	getUser() {
		return user;
	}

	setUser(value) {
		user = value;
	}
}

const authStore = new AuthStore();

dispatcher.register((action) => {
	debugger;
	switch (action.type) {
		case actionTypes.AUTH_LOGIN:
			// user = action.payload;
			authStore.setUser(action.payload);
			authStore.emitChange();
			break;
		case actionTypes.AUTH_LOGOUT:
			// user = null;
			authStore.setUser(null);
			authStore.emitChange();
			break;
		case actionTypes.AUTH_LOGIN_ERROR:
		case actionTypes.AUTH_LOGOUT_ERROR:
		default:
			break;
	}
});

export default authStore;
