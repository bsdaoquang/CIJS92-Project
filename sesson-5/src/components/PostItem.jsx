/** @format */

import { Avatar, List, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import UserDetail from './UserDetail';

const PostItem = (props) => {
	const { item } = props;

	return (
		<List.Item
			actions={[
				<UserDetail userId={item.userId} />,
				<Space>100 Xem</Space>,
				<Space>100 Xem</Space>,
			]}
			extra={
				<img
					style={{ width: 100, height: 50 }}
					src='https://images.fbox.fpt.vn/wordpress-blog/2023/08/tat-ca-thong-tin-ve-luffy.jpg'
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
	);
};

export default PostItem;
