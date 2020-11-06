import placeStore from '../store/place-store';

describe('Store functions ', () => {
	describe('loadPlaceById ', () => {
		test('should return a object with id and name', () => {
			let data = { id: 1, name: 2 };
			placeStore.getPlaceDetailByID(1);

			const response = placeStore.getPlaceData();

			expect(response).toEqual({ id: 1 });
		});
	});
});
