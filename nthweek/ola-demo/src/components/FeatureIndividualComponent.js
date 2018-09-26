import React from 'react';
import '../assets/main-body-top.css';
import '../assets/feature.css';
import '../assets/helpfeatures.css';

const FeatureIndividualComponent = ({header, info, imageUrl}) => {
	return (
		<div className = "individual-feature">
			<img className = "feature-img" src = {imageUrl} />
			<div className = "feature-content">
				<h2 className = "feature-heading"> {header} </h2>
				<p className = "feature-info"> {info} </p>
			</div>
		</div>
	);
}

export default FeatureIndividualComponent;