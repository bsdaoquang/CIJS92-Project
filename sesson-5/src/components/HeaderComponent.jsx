/** @format */

import { Avatar } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
	return (
		<div className='p-2'>
			<div className='row'>
				<div className='col'>
					<p></p>
				</div>
				<div className='col text-right' style={{ padding: '0 20px' }}>
					<Link to={'/profile'}>
						<Avatar>Q</Avatar>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeaderComponent;
