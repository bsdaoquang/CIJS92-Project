/** @format */

import { Avatar, Button, List, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import UserDetail from './UserDetail';
import ImageComponent from '../components/ImageComponent';
import CardComponent from '../components/CardComponent';

const PostItem = (props) => {
	const { item, onRemove } = props;

	return (
		<CardComponent
			onPress={() => console.log('fafaf')}
			styles={{ border: '2px solid #676767' }}>
			<List.Item
				actions={[
					<UserDetail userId={item.userId} />,
					<Space>100 Xem</Space>,
					<Space>
						<Button onClick={() => onRemove(item.id)} danger type='link'>
							Del
						</Button>
					</Space>,
				]}
				extra={
					<ImageComponent
						uri={
							'https://images.fbox.fpt.vn/wordpress-blog/2023/08/tat-ca-thong-tin-ve-luffy.jpg'
						}
						width={120}
						height={100}
						styles={{ borderRadius: 12 }}
					/>
				}>
				<List.Item.Meta
					title={
						<Link to={`post-detail?postId=${item.id}&title=${item.title}`}>
							{item.title}
						</Link>
					}
					description={item.body}
				/>
			</List.Item>
		</CardComponent>
	);
};

export default PostItem;
