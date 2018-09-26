import React, {Component, Fragment} from 'react';
import '../assets/main-body-top.css';

import MainImageComponent from './MainImageComponent';
import SliderComponent from './SliderComponent';
import ServiceComponent from './ServiceComponent';
import WhyOlaComponent from './WhyOlaComponent';
import AwesomeFleetComponent from './AwesomeFleetComponent';
import DownloadOlaComponent from './DownloadOlaComponent';
import HelpComponent from './HelpComponent';
import FooterComponent from './FooterComponent';

class MainBody extends Component {
	render (){
		return (
			<Fragment>
				<MainImageComponent />
				<SliderComponent />
				<ServiceComponent />
				<WhyOlaComponent />
				<AwesomeFleetComponent />
				<DownloadOlaComponent />
				<HelpComponent />
				<FooterComponent />
			</Fragment>
		);
	}
}

export default MainBody;