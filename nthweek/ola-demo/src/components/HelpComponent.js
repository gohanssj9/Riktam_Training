import React from 'react';
import '../assets/main-body-top.css';
import '../assets/helpfeatures.css';
import '../assets/feature.css';


import FeatureIndividualComponent from './FeatureIndividualComponent';

const HelpComponent = () => {
	return (
		<section>
			<div className = "help-features">
				<div className = "help-features-wrapper max-width">
					<FeatureIndividualComponent header = {`24/7 Customer Support`} info = {`A dedicated 24x7 customer support team always at your service to help solve any problem`} imageUrl = {`https://olacabs.com/webstatic/img/ola-support.svg`} />
					<FeatureIndividualComponent header = {`Your Safety First`} info = {`Keep your loved ones informed about your travel routes or call emergency services when in need`} imageUrl = {`https://olacabs.com/webstatic/img/send_out_succour.svg`} />
					<FeatureIndividualComponent header = {`Top Rated Driver-Partners`} info = {`All our driver-partners are background verified and trained to deliver only the best experience`} imageUrl = {`https://olacabs.com/webstatic/img/ola-best-driver.svg`} />
				</div>
			</div>
		</section>
	);
}

export default HelpComponent;