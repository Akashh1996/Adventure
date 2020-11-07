import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userStore from '../../../store/user-store';
import authStore from '../../../store/auth-store';
import { loadMyProfile } from '../../../actions/place-actions';
import { signInWithGoogle } from '../../../actions/auth-actions';
import './Profile.css';
import { Card, CardDeck, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Profile() {
	const [profile, setProfile] = useState(userStore.getMyProfile());
	const [myuser, setUser] = useState(authStore.getUser());

	function handleChange() {
		setProfile(userStore.getMyProfile());
		setUser(authStore.getUser());
	}

	useEffect(() => {
		userStore.addEventListener(handleChange);
		authStore.addEventListener(handleChange);

		if (!profile) {
			loadMyProfile();
		}

		if (!myuser) {
			signInWithGoogle();
		}

		return () => {
			userStore.removeEventListener(handleChange);
			authStore.removeEventListener(handleChange);
		};
	}, [profile, myuser]);

	return (
		<>
			{profile && myuser && (
				<>
					{/* PICTURE PROFILE AND NAME */}
					<section>
						<div className="userProfile">
							<span>
								<img src={myuser.photoURL} className="userProfile--picture" />
							</span>
							<text>Edit my profile</text>
							<h2 className="userProfile--name">{myuser.displayName}</h2>
						</div>
					</section>
					{/* FAVOURITES */}

					<section className="section--body">
						{/* FAVOURITES HEADER */}
						<div className="favorites--header">
							<h3>Favoritos</h3>
							<button className="button--request">Edit my favourites</button>
						</div>

						{/* FAVOURITES CARD DETAIL */}
						<div className="favorites--deck">
							<CardDeck>
								{profile[0]['my_favourites'].map((FavoriteDetail) => {
									return (
										<Card border="light" style={{ width: '20rem' }}>
											<Card.Img
												id="card-img"
												variant="top"
												src={FavoriteDetail.photos[0]['photo2']}
												style={{ height: '300px', width: 'auto' }}
											/>
											<Card.Body>
												<Card.Title>{FavoriteDetail.name}</Card.Title>
												Mi nota : {FavoriteDetail.rating} / 5 <br></br>
												Teléfono : {FavoriteDetail.phone_number} <br></br>
												Dirección : {FavoriteDetail.address} <br></br>
												Sitio web :{' '}
												<a href={FavoriteDetail.url}>
													{FavoriteDetail.url}
												</a>{' '}
												<br></br>
											</Card.Body>
										</Card>
									);
								})}
							</CardDeck>
						</div>
					</section>

					{/* PICTURES */}
					<section className="section--body">
						{/* PICTURES HEADER */}
						<div className="favorites--header">
							<h3>Mis Fotos</h3>
							<button className="button--request">Add picture</button>
						</div>
						<div>
							<Carousel>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src="https://media.iatiseguros.com/wp-content/uploads/2019/12/04012454/trekking-deporte-aventura-1.jpg"
										alt="First slide"
									/>
									<Carousel.Caption>
										<h3>
											haciendo una caminata antes de bajar el rio en canoa
										</h3>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/11/05/376a0320-a405-4c44-8534-cec6c7c8e02d/canyoning-spain"
										alt="Third slide"
									/>

									<Carousel.Caption>
										<h3>al lado de Lleida</h3>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src="https://checkyeti.imgix.net/images/optimized/canyoning-in-the-susec-gorge-top-rafting.jpg"
										alt="Third slide"
									/>

									<Carousel.Caption>
										<h3>Yo en los pirineos franceses</h3>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</div>
					</section>
					{/* REVIEWS */}

					<section className="section--body">
						<div className="favorites--header">
							<h3>Mis Reviews</h3>
							<button className="button--request">Edit my reviews</button>
						</div>
						<div className="reviewsCard">
							<CardDeck>
								{profile[0]['my_reviews'].map((ReviewDetail) => {
									return (
										<Card border="light" style={{ width: '18rem' }}>
											<Card.Body style={{ height: 'auto', width: 'auto' }}>
												<Card.Title>{ReviewDetail.place_name}</Card.Title>
												Mi nota : {ReviewDetail.my_rating} / 5 <br></br>
												{ReviewDetail.my_description}
												<br></br>
												Página web : {ReviewDetail.url} <br></br>
												<Card.Footer>{ReviewDetail.user_name}</Card.Footer>
											</Card.Body>
										</Card>
									);
								})}
							</CardDeck>
						</div>
					</section>

					{/* FRIENDS */}
					<section className="userProfile--friends">
						<div className="favorites--header">
							<h3>Mi círculo de amigos</h3>
							<div>
								<button className="button--invitar">Invitar</button>
							</div>
						</div>
						<div className="friends--deck">
							{profile[0]['my_friends'].map((FriendsDetail) => {
								return (
									<div>
										<figure>
											<img
												src={FriendsDetail['friend_picture']}
												alt="PictBestFriend"
												className="userProfile--friends--image"
											/>
										</figure>
										<h3>{FriendsDetail.name}</h3>
									</div>
								);
							})}
						</div>
					</section>
				</>
			)}
		</>
	);
}

export default Profile;
