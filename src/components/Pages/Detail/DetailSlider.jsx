import React, { useState, useEffect } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './detail-slider.css';
import { loadPlacesData } from '../../../actions/place-actions';
import placeStore from '../../../store/place-store';

<<<<<<< HEAD
function DetailSlider() {
	const [places, setPlaces] = useState(placeStore.getPlaceData());

	function handleChange() {
		setPlaces(placeStore.getPlaceData());
	}

	useEffect(() => {
		placeStore.addEventListener(handleChange);
		if (!places) {
			loadPlacesData();
		}
		return placeStore.removeEventListener(handleChange);
	}, [places]);
=======

function DetailSlider(props) {
    console.log(props);

    const [placeId, setPlaceId] = useState(+props.match.params.id)
    const [places, setPlaces] = useState(placeStore.getPlaceDetailByID(placeId))


    useEffect(() => {
        placeStore.addEventListener(handleChange)
        if (!places || !places.length) {
            loadPlacesData()
        }
        return () => { placeStore.removeEventListener(handleChange) }
    }, [])

    function handleChange() {
        setPlaces(placeStore.getPlaceDetailByID(placeId))
        setPlaceId(+props.match.params.id)
    }


    return (
        <>
            { places &&
                <div>
                    <main>

                        <div className="img-container"><img src={places.photos[0].photo2} alt="" />  </div>
                        <div className="detail">
                            <div className="detail_header">
                                <div className="detail_place_name"><h2>{places.name}</h2></div>
                                <div className="detail_place_rating">{places.rating}</div>
                                <div className="detail_place_type">Type:{places.type}</div>
                            </div>
                            <div className="detail_descrition"> <u>Description: </u> {places.description} </div>
                            <div className="detail_price"> <u>Price Range:</u><span>{places.price}</span> </div>
                            <div className="detail_contact"> <u>Contact Number:</u><span>{places.phone_number}</span></div>
                            <div className="detail_address"> <u>Address:</u><span>{places.address}</span></div>
                            <div className="detail_website"> <u>Website:</u><span>{places.url}</span></div>

                        </div>
                    </main>
                    <div>
                        {places.reviews.map((review) => <div>{review.author_name} {review.rating} {review.text} </div>)}
                    </div>
                </div>
            }
        </>
>>>>>>> 0b1afdb02cf8b0d0db6f9e5afc4293547aa8ac01

	return (
		<>
			{places && (
				<main>
					<div className="img-container">
						<img src="https://images.alphacoders.com/433/433876.jpg" alt="" />
					</div>
					<div className="detail">
						<div className="detail_header">
							<div className="detail_place_name">
								<h2>Live water rafting</h2>
							</div>
							<div className="detail_place_rating">4.7</div>
							<div className="detail_place_type">Type:Rafting</div>
						</div>
						<div className="detail_descrition">
							{' '}
							<u>Description</u>: Lorem, ipsum dolor sit amet consectetur a,ash
							jhf hjdbh hjehbdhfdszb jdsbfjd jdsfj elit Ullam sed maxime, totam
							consequuntur eveniet ut est dignissimos dolorem minima id officia
							animi similique, unde dicta nulla eligendi quas soluta sapiente.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At
							perspiciatis vitae itaque quo accusamus facilis voluptatem! Beatae
							fugit qui minus provident, consectetur aperiam animi laudantium
							praesentium voluptatibus tempore, Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Omnis ipsum numquam velit facilis
							magni nam sequi laudantium praesentium quos, dolores laborum
							consequuntur doloremque quo veritatis ex illo ea, necessitatibus
							perferendis. id labore?
						</div>
						<div className="detail_price">
							{' '}
							<u>Price Range:</u>
							<span>0.5€</span>{' '}
						</div>
						<div className="detail_contact">
							{' '}
							<u>Contact Number:</u>
							<span>0001111000</span>
						</div>
						<div className="detail_address">
							{' '}
							<u>Address:</u>
							<span>Nowhere</span>
						</div>
						<div className="detail_website">
							{' '}
							<u>Website:</u>
							<span>www.wtf.com</span>
						</div>
						<div className="user-reviews">
							<div className="user_review_title">User Reviews</div>
						</div>
					</div>
				</main>
			)}
		</>
	);
}

export default DetailSlider;
