import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { loadPlacesData } from '../../../actions/place-actions';
import { Link } from 'react-router-dom';
import placeStore from '../../../store/place-store';
import '../Home/Slider.css';

function Photos() {
	const [places, setPlaces] = useState(placeStore.getPlaceData());

	function handleChange() {
		setPlaces(placeStore.getPlaceData());
	}

	useEffect(() => {
		placeStore.addEventListener(handleChange);
		if (!places) {
			loadPlacesData();
		}
		return () => {
			placeStore.removeEventListener(handleChange);
		};
	}, [places]);

	return (
		<>
			{places && (
				<div>
					<Carousel>
						{places.map((placeDetail) => {
							return (
								<Carousel.Item interval={3000}>
									<img
										className="d-block w-100"
										src={placeDetail.photos[0]['photo4']}
										alt= "photos"
									/>

									<Carousel.Caption className="button--block">
										<h3>Descubre nuestras aventuras !</h3>
										<Link
											to={`/detail/${placeDetail.id}`}
											className="btn btn-primary button--margin"
										>
											Más detalles de este sitio
										</Link>
									</Carousel.Caption>
								</Carousel.Item>
							);
						})}
					</Carousel>
				</div>
			)}
		</>
	);
}

export default Photos;
