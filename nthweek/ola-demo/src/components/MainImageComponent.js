import React from 'react';
import '../assets/main-body-top.css';

import BookingComponent from './BookingComponent';

const MainImageComponent = () => {
	return (
		<section>
			<div className = "top-banner">
				<div className = "custom-carousel-wrapper">
					<div className = "carousel-item banner">
						<div className = "overlay"></div>
						<div className = "top_heading hide-xs">
							<div className = "text-overlay-top"></div>
							<h1 className="top_title">
								Book a City Taxi to your destination in town
							</h1>
							<label className = "top_subtitle"> Choose from a range of categories and prices </label>
						</div>
						<BookingComponent />
					</div>
				</div>
			</div>
		</section>
	);
}

export default MainImageComponent;