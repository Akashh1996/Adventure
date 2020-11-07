import React from 'react';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Profile from './Profile';
import userStore from '../../../store/user-store';

describe('Card Component', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		let myfavorite = [
			{
				photos: [{ photo2: 'ae3242342v34g' }],
				name: 'akash',
				rating: 10,
				phone_number: 'rafting',
				address: 'somedesc',
				url: 'htttp://test.com'
			}
		];
		userStore.setMyProfile(myfavorite);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	let cardImage = document.getElementById('card-img');
	test('should render card.img with photo', () => {
		act(() => {
			render(<Profile />, container, console.log(container));
		});

		expect(cardImage.innerHTML).toBe('ae3242342v34g');
	});
});
