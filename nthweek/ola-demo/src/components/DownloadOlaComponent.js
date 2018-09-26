import React from 'react';
import '../assets/downloadola.css';
import '../assets/main-body-top.css';

const DownloadOlaComponent = () => {
	return (
		<section>
			<div className = "extra-padding">
				<div className = "download-image-holder">
					<div className = "content max-width">
						<div className = "left-holder">
							<div className = "left-section">
								<h2 className = "left-section-heading"> Book an Ola from the App </h2>
								<p className = "left-section-info"> Download the app for exclusive deals and ease of booking </p>
								<div className = "download-link-image"></div>
							</div>
						</div>

						<div className = "right-holder">
							<img src = 'https://www.olacabs.com/webstatic/img/ola-booking.png' className = 'booking-img' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default DownloadOlaComponent;