import { unmountComponentAtNode, render } from 'react-DOM';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Slider from './Slider';
import { BrowserRouter } from 'react-router-dom';

describe('Detail Slider Component', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should render h2 with place name', async () => {
		act(() => {
			render(
				<BrowserRouter>
					<Slider />
				</BrowserRouter>,
				container
			);
		});

		let placeTitle = document.getElementById('first-quote');
		expect(placeTitle.innerHTML).toBe(
			'"If it scares you, it might be a good thing to try"'
		);
	});
});
