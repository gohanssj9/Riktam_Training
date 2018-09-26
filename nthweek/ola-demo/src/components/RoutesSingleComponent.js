import React from 'react';
import '../assets/footer.css';
import '../assets/routes_single.css';
import '../assets/main-body-top.css';

const RoutesSingleComponent = ({data}) => {
	console.log(data);
	return (
		<ul>
			<li className = "big"> {data.title} </li>
			<li> <a href = 'https://www.google.co.in'> {data.bodyStart[0]} to {data.bodyEnd[0]} Outstation Cabs </a> </li>
			<li> <a href = 'https://www.google.co.in'> {data.bodyStart[1]} to {data.bodyEnd[1]} Outstation Cabs </a> </li>
			<li> <a href = 'https://www.google.co.in'> {data.bodyStart[2]} to {data.bodyEnd[2]} Outstation Cabs </a> </li>
			<li> <a href = 'https://www.google.co.in'> {data.bodyStart[3]} to {data.bodyEnd[3]} Outstation Cabs </a> </li>
			<li> <a href = 'https://www.google.co.in'> {data.bodyStart[4]} to {data.bodyEnd[4]} Outstation Cabs </a> </li>
			<li> <a href = 'https://www.google.co.in'> {data.bodyStart[5]} to {data.bodyEnd[5]} Outstation Cabs </a> </li>
		</ul>
	);
}

export default RoutesSingleComponent;