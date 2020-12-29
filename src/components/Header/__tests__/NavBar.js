import NavBar from '../NavBar';
import React from 'react';
import { unmountComponentAtNode, render } from 'react-DOM';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';


let container = null;

describe('Navbar Component', () => {
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	['Home', 'Maps', 'Photos'].forEach((text) => {
		test(`should contain a link with text ${text}`, () => {
			act(() => {
				render(
					<BrowserRouter>
						<NavBar />
					</BrowserRouter>,
					container
				);
			});
			expect(
				document.querySelector(`[data-test-id="navbar-link__${text}"]`)
					.lastElementChild.innerHTML
			).toBe(text);
		});
	});

	test('changes value when clicked', () => {
		const onChange = jest.fn();
		let buttonElement = null;
		let menuElement = null;
		act(() => {
			render(
				<BrowserRouter>
					<NavBar onChange={onChange} />
				</BrowserRouter>,
				container
			);
			buttonElement = document.querySelector('[data-testid=buttontest]');
			menuElement = document.querySelector('.nav-menu');
			buttonElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			console.log(menuElement.className);
		});

		expect(buttonElement.lastChild.innerHTML).toBe('Menu');
		expect(menuElement.style.left).toBe(0);
	});
});
