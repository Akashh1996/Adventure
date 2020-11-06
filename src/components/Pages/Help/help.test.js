import Help from '../Help/Help';
import React from 'react';
import { unmountComponentAtNode, render } from 'react-DOM';
import { act } from 'react-DOM/test-utils';

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

	test('should return help me', () => {
		act(() => {
			render(<Help />, container);
		});
		expect(container.querySelector(`h1`).textContent).toBe('Help me!!!!!');
	});
});
