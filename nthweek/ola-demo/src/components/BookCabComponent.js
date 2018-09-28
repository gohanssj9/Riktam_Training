import React from 'react';
import '../assets/bookcab.css';
import '../assets/main-body-top.css';

import menu_icon from '../assets/menu.png';
import ola_icon from '../assets/ola_icon.png';
import location_pickup from '../assets/location_notice.png';

const BookCabComponent = () => {
	return (
		<div className = "whole-book-cab">
			<div className = "left-book-cab">
				<div className = "header">
					<div className = "menu-icon">
						<img src = {menu_icon} className = "img-adjust" />
					</div>
					<div className = "ola-icon">
						<img src = {ola_icon} className = "icon-adjust" />
					</div>
					<div className = "login"> LOG IN</div>
				</div>
				<div className = "navbar-header">
					<div className = "daily"> 
						<div className = "daily-rides"> DAILY RIDES </div> 
					</div>
					<div className = "outstation">OUTSTATION</div>
					<div className = "rentals">RENTALS</div>
				</div>
				<div className = "details">
					<div className = "pickup">
						<div className = "left-part-head">
							<div className = "left-part">FROM</div>
						</div>
						<div className = "right-part-head">
							<div className = "right-part">Enter pickup location</div>
						</div>
					</div>
					<div className = "to-locality">
						<div className = "left-part-head">
							<div className = "left-part"> TO </div>
						</div>
						<div className = "right-part-head">
							<div className = "right-part"> Search for a locality or landmark </div>
						</div>
					</div>
					<div className = "when">
						<div className = "left-part-head">
							<div className = "left-part"> WHEN </div>
						</div>
						<div className = "right-part-head">
							<div className = "right-part">
								<select className = "dropdown">
									<option> Now </option>
									<option> Schedule for later </option>
								</select>
							</div>
						</div> 
					</div>
				</div>

				<div>
					<img src = {location_pickup} className = "accurate-pickup-image" />
				</div>
			</div>
			<div className = "right-book-cab">
				<div className = "inner-div">
					<div className = "inner-text">
						<div className = "title"> Everyday city commute </div>
						<label className = "subtitle"> Affordable AC cab rides at your doorstep </label>
						<div className = "hashtag"> #OlaForWeb </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BookCabComponent;

