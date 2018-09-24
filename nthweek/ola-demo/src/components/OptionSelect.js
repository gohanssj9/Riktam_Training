import React from 'react';
import '../assets/main-body-top.css';

const OptionSelect = ({wrap_around_text, aClassName, hrefLink}) => {
	return (
		<div className = "tab-btn-wrapper text-center">
			<a className = {aClassName} href = {hrefLink}> {wrap_around_text} </a>
		</div>
	);
}

export default OptionSelect;