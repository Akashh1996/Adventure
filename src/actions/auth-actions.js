import './firebase/firebaseIndex';
import firebase from 'firebase';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './action-types';

function handleSignIn(user) {
	const customUserData = {
		displayName: user.displayName,
		email: user.email,
		phoneNumber: user.phoneNumber,
		photoURL: user.photoURL
	};

	dispatcher.dispatch({
		type: actionTypes.AUTH_LOGIN,
		payload: customUserData
	});
}

function handleError() {
	dispatcher.dispatch({
		type: actionTypes.AUTH_LOGIN_ERROR
	});
}

export async function signInWithGoogle() {
	const provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

	try {
		const { user } = await firebase.auth().signInWithPopup(provider);
		handleSignIn(user);
	} catch (error) {
		handleError(actionTypes.AUTH_LOGIN_ERROR);
	}
}

export async function signOut() {
	try {
		await firebase.auth().signOut();
		dispatcher.dispatch({
			type: actionTypes.AUTH_LOGOUT
		});
	} catch (error) {
		handleError(actionTypes.AUTH_LOGOUT_ERROR);
	}
}
