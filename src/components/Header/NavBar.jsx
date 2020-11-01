import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SideBarData';
import './NavBar.css';
import logo from './logo-adventure-awaits.png';

function NavBar() {
	const [sidebar, setSidebar] = useState(false);
	const [loginOn, setLoginOn] = useState(true);

	const offOnLogin = () => setLoginOn(!loginOn);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className="NavBar">
				<Link to="#" className="menu-bars">
					<FaIcons.FaBars onClick={showSidebar} />
				</Link>
				<img className="logo" src={logo} alt="logo" />
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items" onClick={showSidebar}>
					<li className="navbar-toggle">
						<Link to="#" className="menu-close">
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
					<li
						className={loginOn ? 'nav-text' : 'nav-text-inactive'}
						onClick={offOnLogin}
					>
						<Link to="/login">
							<AiIcons.AiOutlineLogin />
							<span>Login</span>
						</Link>
					</li>
					<li
						className={loginOn ? 'nav-text' : 'nav-text-inactive'}
						onClick={offOnLogin}
					>
						<Link to="/register">
							<AiIcons.AiOutlineLogin />
							<span>Register</span>
						</Link>
					</li>
					<li
						className={!loginOn ? 'nav-text' : 'nav-text-inactive'}
						onClick={offOnLogin}
					>
						<Link to="/profile">
							<FaIcons.FaUserAlt />
							<span>My profile</span>
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
					<li
						className={!loginOn ? 'nav-text' : 'nav-text-inactive'}
						onClick={offOnLogin}
					>
						<Link to="/logout">
							<AiIcons.AiOutlineLogout />
							<span>Log Out</span>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavBar;
