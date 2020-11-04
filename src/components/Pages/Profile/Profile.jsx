import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userStore from '../../../store/user-store';
import { loadUser } from '../../../actions/place-actions';
import './Profile.css';

function Profile() {
	const [user, setUser] = useState(userStore.getUser());
	const [favorites, setFavorites] = useState(userStore.getMyFavorites());

	function handleChange() {
		setUser(userStore.getUser());
		setFavorites(userStore.getMyFavorites());
	}

	useEffect(() => {
		userStore.addEventListener(handleChange);

		if (!user) {
			loadUser();
		}

		return () => {
			userStore.removeEventListener(handleChange);
		};
	}, [user, favorites]);

	return (
		<>
			{/* HEADER */}
			{user && (
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
								<img src={user.picture} alt="" />
							</span>
							<h2 className="userProfile--name">{user.name}</h2>
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
						<div className="card-deck">
							{/* .map del objeto favourites / create bootstrap card / div flex
							horizontal */}
							{favorites.map((FavoriteDetail) => {
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
							<button>Buscar reviews</button>
						</div>
						<div>slider with pictures</div>
					</section>
					{/* FRIENDS */}
					<section>
						<div>
							<h3>Mi círculo de amigos</h3>
							<button>Invitar a un amigo</button>
						</div>
						<div>.map de fotos de usuario que crea un span con una imagen.</div>
					</section>
				</>
			)}
		</>
	);
}

export default Profile;
