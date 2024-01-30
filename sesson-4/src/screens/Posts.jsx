/** @format */
import { useEffect, useState } from 'react';
import { Button, List } from 'antd';
import Title from 'antd/es/typography/Title';
import { posts } from '../data/posts';

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		handleGetAllPosts();
	}, []);

	const handleGetAllPosts = () => {
		console.log('Get posts');
		const res = localStorage.getItem('posts');
		res && setPosts(JSON.parse(res));
	};

	return (
		<div className='container mt-4'>
			<div className='text-right'>
				<Button onClick={() => setCount(count + 1)}>+</Button>
			</div>
			<Title>{count}</Title>
			<List
				dataSource={posts}
				renderItem={(item) => (
					<List.Item key={item.id}>
						<List.Item.Meta title={item.title} />
					</List.Item>
				)}
			/>
		</div>
	);
};

export default Posts;
