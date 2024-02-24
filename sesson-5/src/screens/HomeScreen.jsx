/** @format */

import { Button, Input, Layout, Space } from 'antd';
import React from 'react';
import SiderComponent from '../components/SiderComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { useSearchParams } from 'react-router-dom';
import { Send } from 'iconsax-react';

const { Content } = Layout;

const HomeScreen = () => {
	const [searchParams] = useSearchParams();

	const uid = searchParams.get('uid');

	const conversations = [
		{
			uid: '',
			sender: '.',
			messages: [
				{
					content: '',
					createdAt: Date.now(),
				},
			],
		},
	];

	return (
		<Layout style={{ height: '100vh' }}>
			<SiderComponent />

			<Layout>
				<HeaderComponent />

				<Content>
					{uid ? (
						<>
							<div className='container' height={'100%'}></div>
							<div className='p-4'>
								<Space.Compact>
									<Input placeholder='fafafa' />
									<Button
										type='primary'
										icon={<Send size={22} color='coral' />}
									/>
								</Space.Compact>
							</div>
						</>
					) : (
						<p>Selecte user first</p>
					)}
				</Content>

				<FooterComponent />
			</Layout>
		</Layout>
	);
};

export default HomeScreen;
