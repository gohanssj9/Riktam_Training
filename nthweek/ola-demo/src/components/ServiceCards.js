import React, {Fragment} from 'react';
import '../assets/service.css';
import '../assets/main-body-top.css';

import logo from '../assets/bottom_1.png';

const serviceCardData = [
	{
		title: 'City Taxi',
		body: 'The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as Rs. 6/km, you can choose from a wide range of options! You can also opt to do your bit for the environment with Ola Share!',
		imageUrl: 'https://cms-web.olacabs.com/00000000356.jpg',
		bottomImageUrl: '../assets/bottom_1.png',
		circleImageUrl: 'https://olacabs.com/webstatic/img/service-type/ola-prime-sedan-active.svg'
	},

	{
		title: 'Outstation',
		body: 'Ride out of town at affordable one-way and round-trip fares with Ola’s intercity travel service.Choose from a range of AC cabs driven by top partners, available in 1 hour or book upto 7 days in advance. We have you covered across India with presence in 90+ cities with over 500 one way routes.',
		imageUrl: 'https://cms-web.olacabs.com/00000000357.jpg',
		bottomImageUrl: '2-1',
		circleImageUrl: 'https://olacabs.com/webstatic/img/service-type/ola-outstation-active.svg'
	},

	{
		title: 'Rentals',
		body: 'With Ola Rentals you get a cab at your disposal. We offer the best services, and the cab stays. So be it a  day long business meeting, a shopping trip with your friends or just a day out in a new city, we have you covered. Packages start at 1 hour and can be extended upto 12 hours!',
		imageUrl: 'https://cms-web.olacabs.com/00000000380.jpg',
		bottomImageUrl: '3-1',
		circleImageUrl: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-auto-active.svg'
	},	
];

const ServiceCards = () => {
	return (
		<Fragment>
		{serviceCardData.map(card => 
			<div className = "card-holder">
			<div className = "individual-card">
				<div className = "img-holder">
					<div className = "main-image">
					</div>
					<div className = "overlay">
						<img src = {card.imageUrl} className = "modified" />
					</div>
					<div className = "car-type">
						<img src = {card.circleImageUrl} />
					</div>
				</div>

				<div className = "info-holder">
					<h2 className = "heading"> {card.title} </h2>
					<p className = "car-type-info"> {card.body} </p>
				</div>

				<div className = "offerings-list">
					<img src = {logo} />
				</div>
			</div>
			</div>
		)}
		</Fragment>
	);
}

export default ServiceCards;