import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../assets/bookcab.css';
import '../assets/main-body-top.css';

import menu_icon from '../assets/menu.png';
import ola_icon from '../assets/ola_icon.png';
import location_pickup from '../assets/location_notice.png';

class RentalsComponent extends Component {
	constructor(props){
		super(props);

		this.state = {
			style_state: 0,
			style_state_inner: 0
		};
		this.changeStyleState = this.changeStyleState.bind(this);
		this.changeStyleStateInner = this.changeStyleStateInner.bind(this);
	}

	changeStyleState(id){
		this.setState({style_state: id});
	}

	changeStyleStateInner(id) {
		this.setState({style_state_inner: id});
	}

	render(){
		const {style_state, style_state_inner} = this.state;
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
							<Link to = '/outstation' className = "inactive" style = {{textDecoration: 'none'}}>OUTSTATION</Link>
						</div>

						<div className = "rentals">
							<Link to = '/rentals' className = "active"  style = {{textDecoration: 'none'}}>RENTALS</Link>
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

						<div className = "when">
							<div className = "left-part-head">
								<div className = "left-part"> PACKAGE </div>
							</div>
							<div className = "right-part-head">
								<div className = "right-part">
									<select className = "dropdown">
										<option onClick = {() => this.changeStyleState(0)}> Select a Package </option>
										<option onClick = {() => this.changeStyleState(1)}> 1hrs 10km </option>
										<option onClick = {() => this.changeStyleState(1)}> 2hrs 20km </option>
										<option onClick = {() => this.changeStyleState(1)}> Airport Transfer </option>
										<option onClick = {() => this.changeStyleState(1)}> 4hrs 40km </option>
										<option onClick = {() => this.changeStyleState(1)}> 6hrs 60km </option>
									</select>
								</div>
							</div> 
						</div>

						<div className = "when" style = {{display: (style_state == 0 ? 'none' : 'block')}}>
							<div className = "left-part-head">
								<div className = "left-part"> WHEN </div>
							</div>
							<div className = "right-part-head">
								<div className = "right-part">
									<select className = "dropdown">
										<option onClick = {() => this.changeStyleStateInner(0)}> Now </option>
										<option onClick = {() => this.changeStyleStateInner(1)}> Schedule for later </option>
									</select>
								</div>
							</div> 
						</div>

						<div className = "when" style = {{display: ((style_state && style_state_inner) ? 'block' : 'none')}}>
							<div className = "left-part-head">
								<div className = "left-part"> DEPART </div>
							</div>
							<div className = "right-part-head">
								<div className = "right-part">
									<select className = "dropdown-left">
										<option> Today </option>
										<option> Tomorrow </option>
										<option> Wednesday, 03 Oct </option>
										<option> Thursday, 04 Oct </option>
										<option> Friday, 05 Oct </option>
									</select>
									<select className = "dropdown-right">
										<option> 12:45 PM </option>
										<option> 1:00 PM </option>
										<option> 1:15 PM </option>
										<option> 1:30 PM </option>
										<option> 1:45 PM </option>
										<option> 2:00 PM </option>
										<option> 2:15 PM </option>
									</select>
								</div>
							</div> 
						</div>

					</div>
					<div>
						<img src = {location_pickup} className = "accurate-pickup-image" />
					</div>
				</div>
				<div className = "right-book-cab"   style = {{backgroundImage: `url(${'https://olawebcdn.com/images/v1/bg_rentals.jpg'})`}}>
					<div className = "inner-div">
						<div className = "inner-text">
							<div className = "title"> Rent cabs by the hour </div>
							<label className = "subtitle"> Flexible packages at affordable fares </label>
							<div className = "hashtag"> #OlaForWeb </div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RentalsComponent;


						// <div className = "to-locality">
						// 	<div className = "left-part-head">
						// 		<div className = "left-part"> TO </div>
						// 	</div>
						// 	<div className = "right-part-head">
						// 		<div className = "right-part"> Search for a locality or landmark </div>
						// 	</div>
						// </div>



						// -------------------------------------
						// 						<div className = "when" style = {{display: (style_state == 0 ? 'none' : 'block')}}>
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