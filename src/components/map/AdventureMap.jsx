import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadDataFromMaps } from '../../actions/adventure-actions';
import sportStore from '../../store/adventure-store';

function PrintMap(props) {
	const [map, setMap] = useState(sportStore.getMapData());

	useEffect(() => {
		sportStore.addEventListener(handleChange);
		if (!map) {
			loadDataFromMaps();
		}
		return () => {
			sportStore.removeEventListener(handleChange);
		};
	}, [map]);

	function handleChange() {
		setMap(sportStore.getMapData());
	}
	return <></>;
}

export default PrintMap;
