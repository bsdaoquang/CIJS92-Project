/** @format */

import React from 'react';

const CardComponent = (props) => {
	const { children, styles, onPress } = props;

	return (
		<div
			onClick={onPress}
			style={{
				padding: 10,
				marginBottom: 20,
				backgroundColor: 'coral',
				borderRadius: 12,
				...styles,
			}}>
			{children}
		</div>
	);
};

export default CardComponent;
