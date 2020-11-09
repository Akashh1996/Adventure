import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './detail-slider.css';
import { loadPlacesData } from '../../../actions/place-actions';
import placeStore from '../../../store/place-store';

function DetailSlider(props) {
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
						<div className="wrapper-detail">
							<div className="form-wrapper-img">
								<img
									className="detail-img"
									src={places.photos[0]?.photo2}
									alt=""
								/>{' '}
							</div>
						</div>
						<div className="wrapper-detail">
							<div className="form-wrapper-detail">
								<div className="detail_place">
									<h2 id="place-title">{places.name}</h2>
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
					</main>
					<div>
						{places.reviews.map((review) => (
							<div className="space" key={Date.now()}>
								<div className="wrapper-map">
									<div className="form-wrapper-map">
										<img
											className="photo-reviewer"
											src={review.profile_photo_url}
											alt=""
											key={Math.random() * 3}
										/>
										<div className="reviewer">{review.author_name} </div>
										{review.text}{' '}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
}

export default DetailSlider;
