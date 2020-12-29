import userStore from './user-store';
import dispatcher from '../dispatcher/dispatcher';

describe('User store', () => {
	let action;
	let mockCallback;

	beforeEach(() => {
		mockCallback = jest.fn();
		userStore.addEventListener(mockCallback);
	});
	afterEach(() => {
		userStore.removeEventListener(mockCallback);
	});
	test('should exist', () => {
		expect(userStore).toBeDefined();
	});
	test('should load user profile data', () => {
		action = {
			type: 'LOAD_MY_PROFILE',
			payload: { id: 1, name: 'erik' }
		};
		dispatcher.dispatch(action);
		expect(userStore.getMyProfile()).toEqual(action.payload);
	});
});
