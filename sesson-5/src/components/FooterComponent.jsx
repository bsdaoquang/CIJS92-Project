/** @format */

import { Space } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FooterComponent = () => {
	return (
		<div className='row'>
			<div className='col text-center p-2'>
				<Space>
					<Link to={'/about'}>About</Link>
					<Link to={'/setting'}>Setting</Link>
				</Space>
			</div>
		</div>
	);
};

export default FooterComponent;
