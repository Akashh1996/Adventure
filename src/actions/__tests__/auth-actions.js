import firebase from 'firebase';
import actionTypes from '../action-types';
import dispatcher from '../../dispatcher/dispatcher';
import { signInWithGoogle } from '../auth-actions';

jest.mock('firebase', () => {
	return {
		auth: jest.fn()
	};
});

describe.skip('google', () => {
	test('should return user', async () => {
		firebase.auth.mockImplementationOnce(() => Promise.resolve({}));

		const actual = await signInWithGoogle();

		expect(actual).toEqual({
			displayName: 'user.displayName',
			email: 'user.email',
			phoneNumber: 'user.phoneNumber',
			photoURL: 'user.photoURL'
		});
	});

	test('should login user', () => {
		firebase.auth.mockImplementationOnce(() => Promise.resolve({}));

		const customUserData = signInWithGoogle();
		expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
			type: actionTypes.AUTH_LOGIN,
			payload: customUserData
		});
	});

	test('should return undefined', async () => {
		firebase.auth.mockImplementationOnce(() => Promise.resolve({}));
		const actual = signInWithGoogle();
		expect(actual).toBeUndefined();
	});
});
