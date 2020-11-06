import placeStore from './place-store';
import dispacher from '../dispatcher/dispatcher';

describe(' place store hhhhhh', () => {
	let action;
	let mockCallBackFunction;

	beforeEach(() => {
		mockCallBackFunction = jest.fn();
		placeStore.addEventListener(mockCallBackFunction);
	});
	afterEach(() => {
		placeStore.removeEventListener(mockCallBackFunction);
	});
	test('should exist', () => {
		expect(placeStore).toBeDefined();
	});
	test('should load data', () => {
		action = {
			type: 'LOAD_PLACE_DATA',
			payload: { id: 1, name: 'rafting' }
		};
		dispacher.dispatch(action);
		expect(placeStore.getPlaceData()).toEqual(action.payload);
	});
});

describe(' place store getByid', () => {
	let action;
	let mockCallBackFunction;

	beforeEach(() => {
		mockCallBackFunction = jest.fn();
		placeStore.addEventListener(mockCallBackFunction);
	});
	afterEach(() => {
		placeStore.removeEventListener(mockCallBackFunction);
	});
	test('should exist -', () => {
		expect(placeStore).toBeDefined();
	});
	test('should load data ++', () => {
		action = {
			type: 'LOAD_PLACE_DATA',
			payload: [{ id: 1, name: 'rafting' }]
		};
		dispacher.dispatch(action);
		expect(placeStore.getPlaceDetailByID(1)).toEqual(action.payload[0]);
	});
});
