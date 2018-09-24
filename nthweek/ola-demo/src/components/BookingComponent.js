import React from 'react';
import '../assets/main-body-top.css';

import OptionSelect from './OptionSelect';
import SelectionComponent from './SelectionComponent';
const BookingComponent = () => {
	return (
		<div className = "ola-booking-wrapper max-width">
			<div className = "ola-booking">
				<div className = "booking-tab">
					<OptionSelect aClassName = {"tab tab-active"} hrefLink = {"/"} wrap_around_text = {"City Taxi"} />
					<OptionSelect aClassName = {"tab"} hrefLink = {"/outstation"} wrap_around_text = {"Outstation"} />
					<OptionSelect aClassName = {"tab"} hrefLink = {"/rentals"} wrap_around_text = {"Rentals"} />
					<SelectionComponent />
				</div>
			</div>
		</div>
	);
}

export default BookingComponent;