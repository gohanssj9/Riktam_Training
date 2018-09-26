import React from 'react';
import '../assets/footer.css';
import '../assets/main-body-top.css';

import RoutesSingleComponent from './RoutesSingleComponent';

const firstSetOfData = [
	{
		title: 'Northern India',
		bodyStart: ['Delhi', 'Delhi', 'Delhi', 'Delhi', 'Delhi', 'Jaipur'],
		bodyEnd: ['Chandigarh', 'Agra', 'Jaipur', 'Shimla', 'Nainital', 'Delhi']
	},
	{
		title: 'Southern India',
		bodyStart: ['Chennai', 'Chennai', 'Chennai', 'Hyderabad', 'Hyderabad', 'Hyderabad'],
		bodyEnd: ['Pondicherry', 'Tirupati', 'Vellore', 'Vijayawada', 'Warangal', 'Tirupati']
	},
	{
		title: 'East & West India',
		bodyStart: ['Mumbai', 'Mumbai', 'Mumbai', 'Mumbai', 'Mumbai', 'Mumbai'],
		bodyEnd: ['Pune', 'Mahabaleshwar', 'Lonavala', 'Nashik', 'Matheran', 'Shirdi']
	}
];

const FooterComponent = () => {
	return (
		<footer className = "ola-footer">
			<div className = "max-width">
				<div className = "footer">
					<div className = "row-item main-links top-cities">
						<div className = "title"> Top Visited Cities </div>
					</div>
					<div className = "row-item lists">
						<div className = "title"> Popular Outstation Routes </div>
						<div className = "border-bottom">
							<RoutesSingleComponent data = {firstSetOfData[0]} />
							<RoutesSingleComponent data = {firstSetOfData[1]}/>
							<RoutesSingleComponent data = {firstSetOfData[2]}/>
						</div>
					</div>

					<div className = "row-item social-media">
						<div className = "title"> Social Links </div>
							<img src = {`https://olacabs.com/webstatic/img/footer/fb-footer-icon.svg`} />
							<img src = {`https://olacabs.com/webstatic/img/footer/insta-footer-icon.svg`} />
							<img src = {`https://olacabs.com/webstatic/img/footer/youtube-footer-icon.svg`} />
							<img src = {`https://olacabs.com/webstatic/img/footer/twitter-footer-icon.svg`} />
							<div className = "pull-right"> Select
								<select classID = "countries" className = "icon-menu">
									<option value = "India"> India </option>
									<option value = "Australia"> Australia </option>
									<option value = "The Great Britain"> The Great Britain </option>
								</select>
							</div>
					</div>

					<div className = "row-item main-links">
						<div className = "title"> Discover Ola </div>
						<div className = "pull-left"> About Ola </div>
						<div className = "pull-left"> Careers </div>
						<div className = "pull-left"> Offers </div>
						<div className = "pull-left"> Contact Us </div>
						<div className = "pull-left"> Media Center </div>

						<div className = "pull-right"> Book a Ride </div>
						<div className = "pull-right last"> Become a driver </div>
					</div>

					<div className = "row-item under-cover">
						<img src ={`https://olacabs.com/webstatic/img/footer-ola-logo.svg`} className = "pull-left" />
						<div className = "pull-right"> Privacy Policy </div>
						<div className = "pull-right"> Terms and Conditions </div>
						<div className = "pull-right"> Notices </div>
						<div className = "copyrights"> Copyright © 2018 ANI Technologies Pvt. Ltd. All rights reserved. </div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default FooterComponent;