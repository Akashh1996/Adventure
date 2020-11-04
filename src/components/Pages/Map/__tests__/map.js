import React, { createElement } from 'react';
import Map from '../Map';
import { unmountComponentAtNode, render } from 'react-DOM';
import { act } from 'react-DOM/test-utils';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import placeStore from '../../../../store/place-store';

let container = null;

describe.only('Map', () => {
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should to be defined', () => {
		act(() => {
			render(<Map></Map>, container);
		});
		expect(container.querySelector('div')).toBeDefined();
	});

	[
		{ lat: 41.390103, lng: 2.154007 },
		{ lat: 41.40009, lng: 2.154007 },
		{ lat: 41.420103, lng: 2.184007 },
		{ lat: 41.400103, lng: 2.164007 },
		{ lat: 41.380103, lng: 2.104007 }
	].forEach(({ location }) => {
		test(`should contain marker with ${location}inside map`, () => {
			act(() => {
				render(
					<Map>
						<Marker></Marker>
					</Map>,
					container
				);
			});
			expect(
				document.querySelector(`[data-test-id="marker__${location}"]`)
					.textContent
			).toBe(location);
		});
	});
});
