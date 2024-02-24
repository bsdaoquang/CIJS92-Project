/** @format */

import { Layout, List } from 'antd';
import React, { useEffect, useState } from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import { appInfos } from '../constants/appInfos';
import axios from 'axios';
import PostItem from '../components/PostItem';

const { Content } = Layout;

const HomeScreen = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		const api = `${appInfos.BASE_URL}/posts`;
		setIsLoading(true);

		try {
			const res = await axios.get(api);

			if (res && res.status === 200 && res.data) {
				setPosts(res.data);
			}

			setIsLoading(false);
		} catch (error) {
			console.log(`Can not get posts data by ${error}`);
			setIsLoading(false);
		}
	};

	return (
		<Layout>
			<Layout>
				<HeaderComponent />

				<Content>
					<div className='container mt-4 mb-4'>
						{!isLoading && posts.length > 0 ? (
							<List
								itemLayout='vertical'
								pagination
								loading={isLoading}
								dataSource={posts}
								renderItem={(item) => <PostItem item={item} key={item.id} />}
							/>
						) : (
							<p>Data found</p>
						)}
					</div>
				</Content>

				<FooterComponent />
			</Layout>
		</Layout>
	);
};

export default HomeScreen;
