import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';
import { Link } from 'react-router-dom';

function Slider() {
	return (
		<main>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100 img-carrousel"
						src="https://i.pinimg.com/originals/5c/98/31/5c98316423594c8ee268e6aae44c1b66.jpg"
						alt="First slide"
					/>
					<Carousel.Caption style={{ bottom: '50%' }}>
						<h2 className="quote">
							"If you think adventure is dangerous, try routine. It’s lethal!"
						</h2>
					</Carousel.Caption>
					<Carousel.Caption>
						<div className="button-navigation">
							<p>Ready to explore catalunya ?</p>
							<Link to={'/maps'} className="btn btn-primary">
								Lets Go
							</Link>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 item"
						src="https://i.pinimg.com/originals/6d/a2/19/6da219f774b7fd885d0a9aa217d51c49.jpg"
						alt="First slide"
					/>
					<Carousel.Caption style={{ bottom: '44%' }}>
						<h2 className="quote ">
							"When was the last time you did something for the first time?"
						</h2>
					</Carousel.Caption>
					<Carousel.Caption className="button--block">
						<p className="button--margin">Ready to explore catalunya ?</p>
						<Link to={'/maps'} className="btn btn-primary button--margin">
							Lets Go
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 item"
						src="https://i.pinimg.com/originals/1f/85/ca/1f85caf1332d058ba7af34e3620aeb27.jpg"
						alt="First slide"
					/>
					<Carousel.Caption style={{ bottom: '42%' }}>
						<h2 className="quote">
							"If it scares you, it might be a good thing to try"
						</h2>
					</Carousel.Caption>
					<Carousel.Caption>
						<p>Ready to explore catalunya ?</p>
						<Link to={'/maps'} className="btn btn-primary">
							Lets Go
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</main>
	);
}

export default Slider;
