import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userStore from '../../../store/user-store';
import { loadMyProfile } from '../../../actions/place-actions';
import './Profile.css';

function Profile() {
	const [profile, setProfile] = useState(userStore.getMyProfile());

	function handleChange() {
		setProfile(userStore.getMyProfile());
	}

	useEffect(() => {
		userStore.addEventListener(handleChange);

		if (!profile) {
			loadMyProfile();
		}

		return () => {
			userStore.removeEventListener(handleChange);
		};
	}, [profile]);

	return (
		<>
			{profile && (
				<>
					<header className="">
						<Link to="/home">
							<span>Edit profile</span>
						</Link>
					</header>
					{/* PICTURE PROFILE AND NAME */}
					<section>
						<div class="userProfile">
							<span className="userProfile--picture">
								<img src={profile[0]['me']['my_picture']} alt="" />
							</span>
							<h2 className="userProfile--name">
								{profile[0]['me']['my_name']}
							</h2>
						</div>
					</section>
					{/* FAVOURITES */}

					<section>
						{/* FAVOURITES HEADER */}
						<div>
							<h3>Favoritos</h3>
							<button>Edit my favourites</button>
						</div>

						{/* FAVOURITES CARD DETAIL */}
						<div className="cardFav">
							{profile[0]['my_favourites'].map((FavoriteDetail) => {
								return (
									<div className="card">
										<figure>
											<img
												src={FavoriteDetail.photos[0]['photo1']}
												alt="PictBestPlace"
											/>
											<figcaption>{FavoriteDetail.type}</figcaption>
										</figure>
										<h1>{FavoriteDetail.name}</h1>
										<h2>{FavoriteDetail.rating}</h2>
										<h2>{FavoriteDetail.phone_number}</h2>
										<h3>{FavoriteDetail.address}</h3>
										<h3>{FavoriteDetail.url}</h3>
									</div>
								);
							})}
						</div>
					</section>

					{/* PICTURES */}
					<section>
						{/* PICTURES HEADER */}
						<div>
							<h3>Mis Fotos</h3>
							<button>Add picture</button>
						</div>
						<div>slider with pictures</div>
					</section>
					{/* REVIEWS */}

					<section>
						<div>
							<h3>Mis Reviews</h3>
							<button>Edit my reviews</button>
						</div>
						<div className="reviewsCard">
							{profile[0]['my_reviews'].map((ReviewDetail) => {
								return (
									<div>
										<h1>{ReviewDetail.place_name}</h1>
										<h2>{ReviewDetail.my_rating}</h2>
										<h3>{ReviewDetail.url}</h3>
										<text>{ReviewDetail.my_description}</text>
										<h4>{ReviewDetail.user_name}</h4>
									</div>
								);
							})}
						</div>
					</section>

					{/* FRIENDS */}
					<section>
						<div>
							<h3>Mi círculo de amigos</h3>
							<button>Invitar a un amigo</button>
						</div>
						<div className="cardFav">
							{profile[0]['my_friends'].map((FriendsDetail) => {
								return (
									<div className="card">
										<figure>
											<img
												src={FriendsDetail['friend_picture']}
												alt="PictBestFriend"
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
