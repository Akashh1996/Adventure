import Footer from '../Footer';
import React from 'react';
import { unmountComponentAtNode, render } from 'react-DOM';
import { act } from 'react-DOM/test-utils';
import { BrowserRouter, Link } from 'react-router-dom';

let container = null;

describe('Footer', () => {
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	['Terms of use', 'About', 'Help', 'Contact'].forEach((text) => {
		test(`should contain a link with text ${text}`, () => {
			act(() => {
				render(
					<BrowserRouter>
						<Footer />
					</BrowserRouter>,
					container
				);
			});
			expect(
				document.querySelector(`[data-test-id="footer-link__${text}"]`)
					.textContent
			).toBe(text);
		});
	});
});
