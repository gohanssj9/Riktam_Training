import React, { Component, Fragment } from 'react';
import Header from './Header';
import MainBody from './MainBody';

class ExtraButMainComponent extends Component {
	render(){
		return (
			<Fragment>
				<Header />
				<MainBody />
			</Fragment>
		);
	}
}

export default ExtraButMainComponent;