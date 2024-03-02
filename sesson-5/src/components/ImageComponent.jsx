/** @format */

import React from 'react';

const ImageComponent = (props) => {
	const { uri, width, height, styles } = props;

	return (
		<img
			style={{ width: width ?? 100, height: height ?? 50, ...styles }}
			src={uri}
		/>
	);
};

export default ImageComponent;
