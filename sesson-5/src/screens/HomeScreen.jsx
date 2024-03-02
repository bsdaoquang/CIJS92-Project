/** @format */

import { Input, Layout, List, Modal } from 'antd';
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
	const [searchKey, setSearchKey] = useState('');
	const [results, setResults] = useState([]);

	const { confirm } = Modal;

	useEffect(() => {
		if (searchKey) {
			handleSearch();
		} else {
			setResults([]);
		}
	}, [searchKey]);

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

	const handleSearch = () => {
		const items = posts.filter((element) => element.title.includes(searchKey));
		setResults(items);
	};

	const handleRemove = (id) => {
		confirm({
			title: 'Confirm',
			mess: 'Are yor sure you want to remove this item?',
			onOk: () => {
				const index = posts.findIndex((element) => element.id === id);
				const items = [...posts];

				if (index !== -1) {
					items.splice(index, 1);

					setPosts(items);
				}
			},
		});
	};

	return (
		<Layout>
			<Layout>
				<HeaderComponent />

				<Content>
					<div className='container mt-4 mb-4'>
						<div className='row'>
							<div className='col-md-6 offset-md-3'>
								<div className='mb-4'>
									<Input.Search
										value={searchKey}
										onChange={(val) => setSearchKey(val.target.value)}
										size='large'
										allowClear
										placeholder='Search'
									/>
								</div>
								{!isLoading && posts.length > 0 ? (
									<List
										itemLayout='vertical'
										pagination
										loading={isLoading}
										dataSource={searchKey ? results : posts}
										renderItem={(item, index) => (
											<PostItem
												item={item}
												key={item.id}
												onRemove={(id) => handleRemove(id)}
											/>
										)}
									/>
								) : (
									<p>Data found</p>
								)}
							</div>
						</div>
					</div>
				</Content>

				<FooterComponent />
			</Layout>
		</Layout>
	);
};

export default HomeScreen;
