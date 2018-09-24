import React from 'react';
import '../assets/main-body-top.css';

const SelectionComponent = () => {
	return (
		<div className = "selection-complete">
			<div className = "selection-container">
				<div className = "selection-main">
					<div className = "header-message-main">
						Your everyday travel partner
					</div>
					<div className = "subheader-message-main">
						AC Cabs for point to point travel
					</div>

					<div className = "window-input">
						<div className = "left-window-input" disabled> Pickup </div>
						<div className = "right-window-input" > Current location </div>
					</div>

					<div className = "window-input">
						<div className = "left-window-input" disabled> Drop </div>
						<div className = "right-window-input" style = {{color: "#888"}} > Enter drop for ride estimate </div>
					</div>

					<div className = "window-input">
						<div className = "left-window-input" disabled> When </div>
						<div className = "right-window-input">
							<select className = "dropdown-width-adjust">
								<option> Now </option>
								<option> Schedule for later </option>
							</select>
						</div>
					</div>

					<div className = "search-cabs">
						<button type = "button" className = "search-cabs-button"> Search Cabs </button>
					</div>

				</div>
			</div>
		</div>
	);
}

export default SelectionComponent;