import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	const footerItems = [
		{
			id: 1,
			name: 'Terms of use',
			path: '/Terms_of_use'
		},
		{
			id: 2,
			name: 'About',
			path: '/About'
		},
		{
			id: 3,
			name: 'Help',
			path: '/Help'
		},
		{
			id: 4,
			name: 'Contact',
			path: '/Contact'
		}
	];
	return (
<<<<<<< HEAD
		<div className="foot-container">
			<footer>
				{footerItems.map((item) => {
					return (
						<Link to={item.path} key={item.id}>
							{item.name}
						</Link>
					);
				})}
			</footer>
		</div>
=======
		<footer className="foot-container">
			{footerItems.map((item) => {
				return (
					<Link
						data-test-id={`footer-link__${item.name}`}
						to={item.path}
						key={item.id}
					>
						{item.name}
					</Link>
				);
			})}
		</footer>
>>>>>>> c2dde2c80cd0cdd4f883136cd447c643b6fd764b
	);
}

export default Footer;
