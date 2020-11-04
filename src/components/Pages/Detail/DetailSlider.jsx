
import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './detail-slider.css';


function DetailSlider() {
    return (
        <div>
            <main>
                <div className="img-container"><img src="https://images.alphacoders.com/433/433876.jpg" alt="" /></div>
                <div className="detail">
                    <div className="detail_header">
                        <div className="detail_place_name"><h2>Live water rafting</h2></div>
                        <div className="detail_place_rating">4.7</div>
                        <div className="detail_place_type">Type:Rafting</div>
                    </div>
                    <div className="detail_descrition"> <u>Description</u>: Lorem, ipsum dolor sit amet consectetur a,ash jhf hjdbh hjehbdhfdszb jdsbfjd jdsfj elit Ullam sed maxime, totam consequuntur eveniet ut est dignissimos dolorem minima id officia animi similique, unde dicta nulla eligendi quas soluta sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis vitae itaque quo accusamus facilis voluptatem! Beatae fugit qui minus provident, consectetur aperiam animi laudantium praesentium voluptatibus tempore, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum numquam velit facilis magni nam sequi laudantium praesentium quos, dolores laborum consequuntur doloremque quo veritatis ex illo ea, necessitatibus perferendis.  id labore?</div>
                    <div className="detail_price"> <u>Price Range:</u><span>0.5€</span> </div>
                    <div className="detail_contact"> <u>Contact Number:</u><span>0001111000</span></div>
                    <div className="detail_address"> <u>Address:</u><span>Nowhere</span></div>
                    <div className="detail_website"> <u>Website:</u><span>www.wtf.com</span></div>
                    <div className="user-reviews">
                        <div className="user_review_title">User Reviews</div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default DetailSlider
