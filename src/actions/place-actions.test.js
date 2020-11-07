import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher';
import { loadPlaces, loadPlacesData, loadMyProfile } from './place-actions';

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

	/* test('Dispatcher should return an array of objects', async () => {
		expect(dispatcher.dispatch.mock.calls[4].payload).toEqual([
			{},
			{},
			{},
			{},
			{}
		]);
	}); */
});

describe('Place Actions', () => {
	describe('Load Places Data try', () => {
		beforeEach(async () => {
			axios.mockImplementationOnce(() =>
				Promise.resolve({ data: [{ id: 1, name: 'rafting' }] })
			);

			await loadPlacesData();
		});
		test('should load all datas', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: 'LOAD_PLACE_DATA',
				payload: [{ id: 1, name: 'rafting' }]
			});
		});

		test('shoud return length 1', () => {
			expect(dispatcher.dispatch.mock.calls.length).toBe(1);
		});
		test('shoud be defined', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toBeDefined();
		});
	});
	describe('Load Places Data catch', () => {
		test('shoud return error', async () => {
			axios.mockImplementation(() => Promise.reject());
			await loadPlacesData();

			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: 'Error'
			});
		});
	});
	describe('Load My profile try', () => {
		beforeEach(async () => {
			axios.mockImplementationOnce(() =>
				Promise.resolve({ data: [{ me: 'edith', rating: 5 }] })
			);
			await loadMyProfile();
		});
		test('should load my profile data', () => {
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: 'LOAD_MY_PROFILE',
				payload: [{ me: 'edith', rating: 5 }]
			});
		});
		test('should have length 1', () => {
			expect(dispatcher.dispatch.mock.calls[0][0].payload.length).toBe(1);
		});
	});
	describe('Load my profile catch', () => {
		test('should throw a error with type error', async () => {
			axios.mockImplementation(() => Promise.reject());
			await loadMyProfile();
			expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
				type: 'Error'
			});
		});
	});
});
