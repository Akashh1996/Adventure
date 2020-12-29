import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SideBarData';
import './NavBar.css';
import { signInWithGoogle, signOut } from '../../actions/auth-actions';
import authStore from '../../store/auth-store';

const logo =
	'https://trello-attachments.s3.amazonaws.com/5f9fe516582bea5ce01d06b2/5f9fe5242167b873b8f1f631/3e0221f7d523436eb2520790995026bc/logo-adventure-awaits.png';

function NavBar() {
	const [sidebar, setSidebar] = useState(false);
	const [user, setUser] = useState(authStore.getUser());
	const showSidebar = () => {
		setSidebar(!sidebar);
	};

	function handleChange() {
		setUser(authStore.getUser());
	}

	useEffect(() => {
		authStore.addEventListener(handleChange);

		return () => authStore.removeEventListener(handleChange);
	});

	function getSignInButton() {
		return (
			<li
				className="nav-text"
				type="button"
				onClick={(event) => {
					event.preventDefault();
					signInWithGoogle();
				}}
			>
				<div className="nav-text-icon">
					<AiIcons.AiOutlineLogin />
				</div>
				<span className="nav-text-log">Log In</span>
			</li>
		);
	}

	function isSigninVisible() {
		return user ? (
			<li
				className="nav-text"
				type="button"
				onClick={(event) => {
					event.preventDefault();
					signOut();
				}}
			>
				<div className="nav-text-icon">
					<AiIcons.AiOutlineLogout />
				</div>
				<span className="nav-text-log">Log Out</span>
			</li>
		) : (
			getSignInButton()
		);
	}

	return (
		<>
			<div className="NavBar">
				<Link
					to="#"
					onClick={showSidebar}
					className="menu-bars"
					data-testid="buttontest"
				>
					<FaIcons.FaBars />
				</Link>
				<img className="logo" src={logo} alt="logo" />
				{user && (
					<Link to="/profile">
						<img src={user.photoURL} className="scaled" alt="userImage" />
					</Link>
				)}
			</div>

			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items" onClick={showSidebar}>
					<li className="navbar-toggle">
						<Link to="#" className="menu-close">
							<FaIcons.FaWindowClose />
						</Link>
					</li>
					<li className="nav-text">{isSigninVisible()}</li>
					{user && (
						<li className="nav-text">
							<div className="nav-text-icon">
								<FaIcons.FaUserAlt />
							</div>
							<Link to="/profile">My profile</Link>
						</li>
					)}
					{SidebarData.map((item, index) => {
						return (
							<li
								data-test-id={`navbar-link__${item.title}`}
								key={index}
								className={item.cName}
							>
								<div className="nav-text-icon">{item.icon}</div>
								<Link to={item.path}>{item.title}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default NavBar;
