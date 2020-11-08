import { unmountComponentAtNode, render } from 'react-DOM';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Profile from './Profile';
import userStore from '../../../store/user-store';
import authStore from '../../../store/auth-store';

describe('Profile', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		let profile = [
			{
				my_favourites: [
					{
						id: 1,
						photos: [{ photo1: 'url' }]
					}
				],
				my_reviews: [
					{
						place_name: 'pepe'
					}
				],
				my_friends: [
					{
						friend_name: 'Eric Sanz'
					}
				]
			}
		];

		let myuser = [
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

		userStore.setUserProfile(profile);
		authStore.setUser(myuser);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should ...', async () => {
		act(() => {
			render(<Profile />, container);
			let gg = document.getElementById('gg');
			expect(gg.innerHTML).toBe('Edit my profile');
		});
	});
});
