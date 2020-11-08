import { unmountComponentAtNode, render } from 'react-DOM';
import React from 'react';
import { act } from 'react-dom/test-utils';
import DetailSlider from './DetailSlider';
import placeStore from '../../../store/place-store';

describe('Detail Slider Component', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		let place = [
			{
				id: 6,
				name: 'akash',
				rating: 10,
				type: 'rafting',
				description: 'somedesc',
				photos: [{ photo2: 'ae3242342v34g' }],
				reviews: [{ profile_photo_url: '34234' }]
			}
		];
		placeStore.setPlaceData(place);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should render h2 with place name', async () => {
		let props = {
			params: {
				id: 6
			}
		};

		act(() => {
			render(<DetailSlider match={props} />, container);
		});

		let placeTitle = document.getElementById('place-title');

		expect(placeTitle.innerHTML).toBe('akash');

		expect(container.querySelector('#place-title').textContent).toBe('akash');
	});
});
describe('Detail Slider Component removeListener', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		let place = [
			{
				id: 7,
				name: 'akash',
				rating: 10,
				type: 'rafting',
				description: 'somedesc',
				photos: [{ photo2: 'ae3242342v34g' }],
				reviews: [{ profile_photo_url: '34234' }]
			}
		];
		placeStore.setPlaceData(place);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should render h2 with name, remove the listener and emit the change ', () => {
		let props = {
			params: {
				id: 7
			}
		};
		act(() => {
			placeStore.emitChange();
			render(<DetailSlider match={props} />, container);
		});

		let placeTitle = document.getElementById('place-title');

		expect(placeTitle.innerHTML).toBe('akash');
	});
});
