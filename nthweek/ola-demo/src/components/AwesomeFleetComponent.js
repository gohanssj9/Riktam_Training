import React, {Component} from 'react';
import '../assets/fleet.css';
import '../assets/main-body-top.css';

import ShowVehicleComponent from './ShowVehicleComponent';
const fleetData = [
	{
		title: 'Auto',
		imgWithoutHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-auto.svg',
		imgWithHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-auto-active.svg',
		class_id: 'active',
		vehicle_image: '',
		id: 0
	},
	{
		title: 'Bike',
		imgWithoutHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-bike.svg',
		imgWithHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-bike-active.svg',
		class_id: '',
		vehicle_image: '',
		id: 1
	},
	{
		title: 'Share',
		imgWithoutHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-share.svg',
		imgWithHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-share-active.svg',
		class_id: '',
		vehicle_image: '',
		id: 2
	},
	{
		title: 'Micro',
		imgWithoutHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-micro.svg',
		imgWithHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-micro-active.svg',
		class_id: '',
		vehicle_image: '',
		id: 3
	},
	{
		title: 'Mini',
		imgWithoutHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-mini.svg',
		imgWithHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-mini-active.svg',
		class_id: '',
		vehicle_image: '',
		id: 4
	},
	{
		title: 'Prime Sedan',
		imgWithoutHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan.svg',
		imgWithHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan-active.svg',
		class_id: '',
		vehicle_image: '',
		id: 5
	},
	{
		title: 'Prime Play',
		imgWithoutHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play.svg',
		imgWithHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play-active.svg',
		class_id: '',
		vehicle_image: '',
		id: 6
	},
	{
		title: 'Prime SUV',
		imgWithoutHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv.svg',
		imgWithHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv-active.svg',
		class_id: '',
		vehicle_image: '',
		id: 7
	}
];

const insideFleetData = [
	{
		title: 'Auto',
		body: 'Get an Auto at your doorstep',
		info: 'The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convenient way to travel everyday.',
		bigImage: 'https://olacabs.com/webstatic/img/fleet-image/auto.png'
	},
	{
		title: 'Bike',
		body: 'On Time, Every time.',
		info: 'Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town!',
		bigImage: 'https://olacabs.com/webstatic/img/fleet-image/bike.png'
	},
	{
		title: 'Share',
		body: 'Eco-friendly rides at pocket-friendly rates',
		info: 'Fully air conditioned cars that you can share with others depending on your route and location.',
		bigImage: 'https://olacabs.com/webstatic/img/fleet-image/share.png'
	},
	{
		title: 'Micro',
		body: 'Small fares for short rides',
		info: 'Compact yet comfortable AC cars that seat up to 3 people and give you great value for your money. Small fares for short rides.',
		bigImage: 'https://olacabs.com/webstatic/img/fleet-image/micro.png'
	},
	{
		title: 'Mini',
		body: 'Everyday dependable ride',
		info: 'A regular comfortable AC hatchback that becomes your everyday dependable ride. An economical option for daily commute.',
		bigImage: 'https://olacabs.com/webstatic/img/fleet-image/mini.png'
	},
	{
		title: 'Prime Sedan',
		body: 'Sedans with free Wi-Fi and top drivers',
		info: 'Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space.',
		bigImage: 'https://olacabs.com/webstatic/img/fleet-image/prime-sedan.png'
	},
	{
		title: 'Prime Play',
		body: 'Enjoy music, radio, videos on the go',
		info: 'Cars with in-cab entertainment consoles that allow you to watch movies, listen to music and stay connected while on the move.',
		bigImage: 'https://olacabs.com/webstatic/img/fleet-image/prime-play.png'
	},
	{
		title: 'Prime SUV',
		body: 'SUVs with free Wi-Fi and top drivers',
		info: 'A perfect choice of car for your weekend getaways, with plenty of room for everyone including that extra bag.',
		bigImage: 'https://olacabs.com/webstatic/img/fleet-image/prime-suv.png'
	}	
];

class AwesomeFleetComponent extends Component {

	constructor(props){
		super(props);

		this.state = {
			fetched_id: 0,
		};

		this.onClickedFleet = this.onClickedFleet.bind(this);
		
	}

	onClickedFleet(id){
		for(var i = 0; i < 8; i++){
				fleetData[i].class_id = '';
				fleetData[i].vehicle_image = fleetData[i].imgWithoutHover;
		}
		fleetData[id].class_id = 'active';
		fleetData[id].vehicle_image = fleetData[id].imgWithHover;
		this.setState({fetched_id : id});
	}


	render(){
		const {fetched_id} = this.state;
		return (
			<section className = "awesome-fleet">
				<div className = "fleet-holder max-width">
					<h2 className = "title"> Meet out Awesome Fleet </h2>
					<label className = "subtitle"> The widest variety of cars to choose from </label>
					<div className = "scroll-fleet">
						{
							fleetData.map(vehicle => 
								<div className = "individual-scroll-vehicle"  onClick = {() => this.onClickedFleet(vehicle.id)}>
									<div className = "img-holder" ID = {vehicle.class_id}>
										<img src = {vehicle.vehicle_image} className = "width-adjust" onMouseOver = {e => (e.target.src = vehicle.imgWithHover)}
											onMouseOut = {e => (e.target.src = vehicle.imgWithoutHover)} />
									</div>
									<label className = "vehicle-name" > {vehicle.title} </label>
								</div>
							)
						}
					</div>
					<ShowVehicleComponent title = {insideFleetData[fetched_id].title} body = {insideFleetData[fetched_id].body}
						info = {insideFleetData[fetched_id].info} vehicle_image = {insideFleetData[fetched_id].bigImage} />
				</div> 
			</section>
		);
	}
}

export default AwesomeFleetComponent;

	// {
	// 	title: 'LUX',
	// 	imgWithoutHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-lux.svg',
	// 	imgWithHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-lux-active.svg',
	// 	id: 8
	// },
	// {
	// 	title: 'E-Rick',
	// 	imgWithoutHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-e-rick.svg',
	// 	imgWithHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-e-rick-active.svg',
	// 	id: 9
	// },
	// {
	// 	title: 'Kaali Peeli',
	// 	imgWithoutHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-kaali-peeli.svg',
	// 	imgWithHover: 'https://olacabs.com/webstatic/img/ola-fleet-svg/ola-kaali-peeli-active.svg',
	// 	id: 10
	// }