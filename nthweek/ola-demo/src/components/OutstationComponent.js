import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../assets/bookcab.css';
import '../assets/main-body-top.css';

import menu_icon from '../assets/menu.png';
import ola_icon from '../assets/ola_icon.png';
import location_pickup from '../assets/location_notice.png';

class OutstationComponent extends Component {
	render(){
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
							<Link to = '/bookcabs' className = "inactive"  style = {{textDecoration: 'none'}}> DAILY RIDES </Link> 
						</div>
						
						<div className = "outstation">
							<Link to = '/outstation' className = "active" style = {{textDecoration: 'none'}}>OUTSTATION</Link>
						</div>

						<div className = "rentals">
							<Link to = '/rentals' className = "inactive"  style = {{textDecoration: 'none'}}>RENTALS</Link>
						</div>
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
								<div className = "right-part"> Enter a city, hotel or address </div>
							</div>
						</div>
					</div>
					<div>
						<img src = {location_pickup} className = "accurate-pickup-image" />
					</div>
				</div>
				<div className = "right-book-cab"  style = {{backgroundImage: 	`url(${'https://olawebcdn.com/images/v1/bg_outstation.jpg'})`}}>
					<div className = "inner-div">
						<div className = "inner-text">
							<div className = "title"> Ride out of town </div>
							<label className = "subtitle"> Book and depart in an hour </label>
							<div className = "hashtag"> #OlaForWeb </div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default OutstationComponent;

						// <div className = "when">
						// 	<div className = "left-part-head">
						// 		<div className = "left-part"> WHEN </div>
						// 	</div>
						// 	<div className = "right-part-head">
						// 		<div className = "right-part">
						// 			<select className = "dropdown">
						// 				<option onClick = {() => this.changeStyleState(0)}> Now </option>
						// 				<option onClick = {() => this.changeStyleState(1)}> Schedule for later </option>
						// 			</select>
						// 		</div>
						// 	</div> 
						// </div>

						// <div className = "when" style = {{display: (style_state == 0 ? 'none' : 'block')}}>
						// 	<div className = "left-part-head">
						// 		<div className = "left-part"> DEPART </div>
						// 	</div>
						// 	<div className = "right-part-head">
						// 		<div className = "right-part">
						// 			<select className = "dropdown-left">
						// 				<option> Today </option>
						// 				<option> Tomorrow </option>
						// 				<option> Monday, 01 Oct </option>
						// 				<option> Tuesday, 02 Oct </option>
						// 				<option> Wednesday, 03 Oct </option>
						// 				<option> Thursday, 04 Oct </option>
						// 				<option> Friday, 05 Oct </option>
						// 			</select>
						// 			<select className = "dropdown-right">
						// 				<option> 12:45 PM </option>
						// 				<option> 1:00 PM </option>
						// 				<option> 1:15 PM </option>
						// 				<option> 1:30 PM </option>
						// 				<option> 1:45 PM </option>
						// 				<option> 2:00 PM </option>
						// 				<option> 2:15 PM </option>
						// 			</select>
						// 		</div>
						// 	</div> 
						// </div>