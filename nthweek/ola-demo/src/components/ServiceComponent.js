import React from 'react';
import '../assets/main-body-top.css';
import '../assets/service.css';

import ServiceCards from './ServiceCards';

const ServiceComponent = () => {
	return (
		<section>
			<div className = "service-container">
				<div className = "service-info max-width">
					<h2 className = "service-heading"> A car for every occasion </h2>
					<label className = "service-subheading"> Ola offers city taxis, inter-city taxis, and local cabs at hourly packages </label>
					<div className = "service-cards">
						<ServiceCards />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ServiceComponent;