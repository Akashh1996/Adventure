import Profile from './Profile';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode, render } from 'react-DOM';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

let container = null;

describe('Profile component', () => {
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	['name', 'rating', 'phone_number', 'address', 'url', 'photos'].forEach(
		(text) => {
			test(`should contain a div with text ${text}`, () => {
				act(() => {
					render(
						<BrowserRouter>
							<Profile />
						</BrowserRouter>,
						container
					);
				});

				expect(
					document.querySelector([`data-test-id="profile_div__${text}"`])
						.firstElementChild.innerHTML
				).toBe(text);
			});
		}
	);
});
