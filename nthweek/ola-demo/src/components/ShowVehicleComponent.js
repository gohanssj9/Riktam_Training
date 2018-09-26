import React from 'react';
import '../assets/fleet.css';

import ola_fleet from '../assets/ola_fleet_common.png';

const ShowVehicleComponent = ({title, body, info, vehicle_image}) => {
	console.log(title, body);
	return (
		<div className = "scroll-fleet-real">
			<div className = "scroll-fleet-holder">
				<div className = "left-part">
					<img src = {vehicle_image} className = "scroll-left-part" />
				</div>

				<div className = "right-part">
					<div className = "right-holder">
						<div className = "title"> {title} </div>
						<label className = "subtitle" > {body} </label>
						<p className = "info" > {info} </p>
						<img src = {ola_fleet} className = "ola_fleet" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ShowVehicleComponent;