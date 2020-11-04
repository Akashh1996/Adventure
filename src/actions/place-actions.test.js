import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher';
import { loadPlaces } from './place-actions';

jest.mock('axios');
jest.mock('../dispatcher/dispatcher');

describe('loadPlaces should be true', () => {
	beforeEach(async () => {
		axios.mockImplementationOnce(() => Promise.resolve({}));

		await loadPlaces();
	});
	test('Should call axios with an argument', async () => {
		expect(axios.mock.calls[0][0]).toBe(
			'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?'
		);
	});

	test.skip('Dispatcher should return an array of objects', async () => {
		expect(dispatcher.dispatch.mock.calls[4].payload).toEqual([
			{},
			{},
			{},
			{},
			{}
		]);
	});
});
