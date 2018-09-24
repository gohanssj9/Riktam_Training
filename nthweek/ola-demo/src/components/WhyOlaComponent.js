import React from 'react';
import '../assets/whyola.css';
import '../assets/main-body-top.css';

import WhyOlaSingleItemComponent from './WhyOlaSingleItemComponent';

const firstSetOfData = [
	{
		header: 'Cabs for every pocket',
		body: 'From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket',
		imgSource: 'https://cms-web.olacabs.com/00000000368.jpg'
	},

	{
		header: 'Ola Select',
		body: 'A membership program with Ola that lets you ride a Prime Sedan at Mini fares, book cabs without peak pricing and has zero wait time',
		imgSource: 'https://cms-web.olacabs.com/00000000374.jpg'
	},

	{
		header: 'Share and Express',
		body: ' To travel with the lowest fares choose Ola Share. For a faster travel experience we have Share Express on some fixed routes with zero deviations. Choose your ride and zoom away!',
		imgSource: 'https://cms-web.olacabs.com/00000000382.jpg'
	} 
];

const secondSetOfData = [
	{
		header: 'Secure and Safer Rides',
		body: 'Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place, also bearing automatic.',
		imgSource: 'https://cms-web.olacabs.com/00000000370.jpg'
	},

	{
		header: 'In Cab Entertainment',
		body: 'Play music, watch videos and a lot more with Ola Play! Also stay connected even if you are travelling through poor network areas.',
		imgSource: 'https://cms-web.olacabs.com/00000000371.jpg'
	},

	{
		header: 'Cashless Rides',
		body: 'Now go cashless and travel easy. Simply recharge your Ola money or add your credit/debit card to enjoy hassle free payments.',
		imgSource: 'https://cms-web.olacabs.com/00000000372.jpg'
	} 
];

const WhyOlaComponent = () => {
	return (
		<section>
			<div className = "section-holder why-ola max-width">
				<h2 className = "why-ola-header"> Why ride with Ola ? </h2>
				<label className = "why-ola-subheader"> The best way to travel to your destination </label>
				<div className = "list-wrapper">
					<div className = "left-items-wrapper">
						{firstSetOfData.map(item => 
							<WhyOlaSingleItemComponent header = {item.header} body = {item.body} imgSource = {item.imgSource} />
						)}
					</div>

					<div className = "right-items-wrapper">
						{secondSetOfData.map(item => 
							<WhyOlaSingleItemComponent header = {item.header} body = {item.body} imgSource = {item.imgSource} />
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyOlaComponent;