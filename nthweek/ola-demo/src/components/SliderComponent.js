import React, {Component} from 'react';
import '../assets/slider.css';
import '../assets/main-body-top.css';

import slider_1 from '../assets/slider_1.png';
import slider_2 from '../assets/slider_2.png';
import slider_3 from '../assets/slider_3.png';
import slider_4 from '../assets/slider_4.png';

class SliderComponent extends Component{
	constructor(props){
		super(props);

		this.state = {
			data: [slider_1, slider_2, slider_3],
			additional_var: slider_4,
		};

		this.callOnceEveryFour = this.callOnceEveryFour.bind(this);
	}

	callOnceEveryFour(){
		const {data, additional_var} = this.state;
		const temp_var = data[0];
		data.splice(0, 1);
		data.push(additional_var);
		console.log("Inside callOnceEveryFive");
		this.setState({data: data, additional_var: temp_var});
	}

	// componentDidUpdate(prevProps){
	// 	console.log("Inside componentDidUpdate");
	// 	if(prevProps.additional_var !== this.props.additional_var){
	// 		console.log("Inside If Component");
	// 		const {data, additional_var} = this.props;
	// 		const temp_var = data[0];
	// 		data.splice(0, 1);
	// 		data.push(additional_var);
	// 		this.setState({data: data, additional_var: temp_var});
	// 	}
	// }

	// componentDidMount(){
	// 	console.log("Inside ComponentDidMount");
	// 	const {data, additional_var} = this.state;
	// 	const temp_var = additional_var;
	// 	data.splice(0, 1);
	// 	data.push(additional_var);
	// 	this.setState({data: data, additional_var: temp_var});
	// }

	render(){
		const {data} = this.state;
		return (
			<section onLoad = {setTimeout(() => this.callOnceEveryFour(), 4000)}>
				<div className = "offers-container">
					<div className = "offers-wrapper max-width">
						{data.map(item =>
							<img src = {item} className = "img-holder" />
						)}
					</div>
				</div>
			</section>
		);
	}
}

export default SliderComponent;