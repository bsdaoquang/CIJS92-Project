/** @format */

import { Avatar, Input, Layout, List, Radio } from 'antd';
import { User } from 'iconsax-react';
import React, { useState } from 'react';
import { users } from '../data/users';
import { Link, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const SiderComponent = () => {
	const [conversationType, setConversationType] = useState('All');
	const navigate = useNavigate();

	return (
		<Sider width={380} theme='light' style={{ padding: 20 }}>
			<Input
				size='large'
				prefix={<User size={22} variant='Bold' color='#e0e0e0' />}
				placeholder='Search'
				allowClear
			/>
			<div className='mt-4'>
				<Radio.Group
					style={{ width: '100%' }}
					value={conversationType}
					onChange={(val) => setConversationType(val.target.value)}>
					<Radio.Button value={'All'}>All</Radio.Button>
					<Radio.Button value={'Read'}>Read</Radio.Button>
					<Radio.Button value={'Unread'}>Unread</Radio.Button>
				</Radio.Group>
			</div>

			<div className='mt-4'>
				<List
					dataSource={users}
					renderItem={(item) => (
						<Link to={`?uid=${item.id}`}>
							<List.Item
								key={item.id}
								extra={
									<p className='text-mute' style={{ fontSize: 12, margin: 0 }}>
										Just now
									</p>
								}>
								<List.Item.Meta
									avatar={<Avatar>{item.id}</Avatar>}
									title={item.email}
									description={''}
								/>
							</List.Item>
						</Link>
					)}
				/>
			</div>
		</Sider>
	);
};

export default SiderComponent;
