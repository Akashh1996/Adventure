import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './detail-slider.css';
import { loadPlacesData } from '../../../actions/place-actions';
import placeStore from '../../../store/place-store';

function DetailSlider(props) {
	console.log(props);

	const [placeId, setPlaceId] = useState(+props.match.params.id);
	const [places, setPlaces] = useState(placeStore.getPlaceDetailByID(placeId));

	useEffect(() => {
		placeStore.addEventListener(handleChange);
		if (!places || !places.length) {
			loadPlacesData();
		}
		return () => {
			placeStore.removeEventListener(handleChange);
		};
	}, []);

	function handleChange() {
		setPlaces(placeStore.getPlaceDetailByID(placeId));
		setPlaceId(+props.match.params.id);
	}

	return (
		<>
			{places && (
				<div>
					<main>
						<div className="wrapper">
							<div className="form-wrapper-img">
								<img
									className="detail-img"
									src={places.photos[0].photo2}
									alt=""
								/>{' '}
							</div>
						</div>
						<div className="wrapper">
							<div className="form-wrapper">
								<div className="detail_place">
									<h2>{places.name}</h2>
									{places.rating}
								</div>
								<div className="detail_place_type">Type:{places.type}</div>
								<div className="detail_descrition">
									{' '}
									<u>Description: </u> {places.description}{' '}
								</div>
								<div className="detail_price">
									{' '}
									<u>Price Range:</u>
									<span>{places.price}</span>{' '}
								</div>
								<div className="detail_contact">
									{' '}
									<u>Contact Number:</u>
									<span>{places.phone_number}</span>
								</div>
								<div className="detail_address">
									{' '}
									<u>Address:</u>
									<span>{places.address}</span>
								</div>
								<div className="detail_website">
									{' '}
									<u>Website:</u>
									<span>{places.url}</span>
								</div>
							</div>
						</div>
						{/* <div className="detail">
							<div className="detail_header">
								<div className="detail_place_name">
									<h2>{places.name}</h2>
								</div>
								<div className="detail_place_rating">{places.rating}</div>
								<div className="detail_place_type">Type:{places.type}</div>
							</div>
							<div className="detail_descrition">
								{' '}
								<u>Description: </u> {places.description}{' '}
							</div>
							<div className="detail_price">
								{' '}
								<u>Price Range:</u>
								<span>{places.price}</span>{' '}
							</div>
							<div className="detail_contact">
								{' '}
								<u>Contact Number:</u>
								<span>{places.phone_number}</span>
							</div>
							<div className="detail_address">
								{' '}
								<u>Address:</u>
								<span>{places.address}</span>
							</div>
							<div className="detail_website">
								{' '}
								<u>Website:</u>
								<span>{places.url}</span>
							</div>
						</div> */}
					</main>
					<div>
						{places.reviews.map((review) => (
							<div>
								{review.author_name} {review.rating} {review.text}{' '}
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
}

export default DetailSlider;
