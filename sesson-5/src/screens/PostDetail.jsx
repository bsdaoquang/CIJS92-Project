/** @format */

import { Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { appInfos } from '../constants/appInfos';
import axios from 'axios';
import UserDetail from '../components/UserDetail';

const { Title } = Typography;

const PostDetail = () => {
	const [searchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);
	const [PostDetail, setPostDetail] = useState();

	const postId = searchParams.get('postId');
	const title = searchParams.get('title');

	useEffect(() => {
		postId && getPostById();
	}, [postId]);

	const getPostById = async () => {
		const api = `${appInfos.BASE_URL}/posts/${postId}`;

		try {
			setIsLoading(true);

			const res = await axios.get(api);

			if (res && res.status === 200 && res.data) {
				setPostDetail(res.data);
			}

			setIsLoading(false);
		} catch (error) {
			console.log(`Can not get post detail by ${error}`);
		}
	};

	return postId && title ? (
		<div>
			<div className='container mt-4'>
				{isLoading ? (
					<>
						<Spin />
					</>
				) : (
					PostDetail && (
						<>
							<Title>{PostDetail.title}</Title>
							<UserDetail userId={PostDetail.userId} />
							<p>{PostDetail.body}</p>
						</>
					)
				)}
			</div>
		</div>
	) : (
		<></>
	);
};

export default PostDetail;
