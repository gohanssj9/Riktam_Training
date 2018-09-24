import React, {Component} from 'react';
import '../assets/main-body-top.css';

import MainImageComponent from './MainImageComponent';
import SliderComponent from './SliderComponent';
import ServiceComponent from './ServiceComponent';
import WhyOlaComponent from './WhyOlaComponent';
import DownloadOlaComponent from './DownloadOlaComponent';

class MainBody extends Component {
	render (){
		return (
			<div>
				<MainImageComponent />
				<SliderComponent />
				<ServiceComponent />
				<WhyOlaComponent />
				<DownloadOlaComponent />
			</div>
		);
	}
}

export default MainBody;