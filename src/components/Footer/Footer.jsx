import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { footerItems } from './Footer-items';
import * as FaIcons from 'react-icons/fa';

function Footer() {
	return (
		<footer className="foot-container">
			{footerItems.map((item) => {
				return (
					<Link
						data-test-id={`footer-link__${item.name}`}
						to={item.path}
						key={item.id}
					>
						<div className="footer-strings">{item.name}</div>
						<span className="footer-separator">|</span>
					</Link>
				);
			})}
			<span className="footer-icon">
				<FaIcons.FaFacebookSquare />
			</span>
			<span className="footer-separator">|</span>
			<span className="footer-icon">
				<FaIcons.FaInstagram />
			</span>
			<span className="footer-separator">|</span>
			<span className="footer-icon">
				<FaIcons.FaTwitter />
			</span>
			<span className="footer-separator">|</span>
			<span className="footer-icon">
				<FaIcons.FaYoutube />
			</span>
		</footer>
	);
}

export default Footer;
