import React from 'react';
import '../assets/whyola.css';
import '../assets/main-body-top.css';

const WhyOlaSingleItemComponent = ({imgSource, header, body}) => {
	return (
		<a className = "individual-item-list">
			<div className = "image-holder">
				<img src = {imgSource} className = "individual-image" />
			</div>
			<div className = "text-holder">
				<h4 className = "text-heading"> {header} </h4>
				<p className = "text-body"> {body} </p>
			</div>
		</a>
	);
}

export default WhyOlaSingleItemComponent;