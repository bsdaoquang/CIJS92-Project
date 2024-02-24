/** @format */

import React, { useEffect, useState } from 'react';
import { appInfos } from '../constants/appInfos';
import axios from 'axios';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';

const UserDetail = (props) => {
	const { userId } = props;

	const [isLoading, setIsLoading] = useState(false);
	const [userDetail, setUserDetail] = useState();

	useEffect(() => {
		userId && getUserById();
	}, [userId]);

	const getUserById = async () => {
		const api = `${appInfos.BASE_URL}/users/${userId}`;

		try {
			setIsLoading(true);

			const res = await axios.get(api);

			if (res && res.status === 200 && res.data) {
				setUserDetail(res.data);
				setIsLoading(false);
			}
		} catch (error) {
			console.log(`can not get User detail by ${error}`);
		}
	};

	return isLoading ? (
		<Spin />
	) : userDetail ? (
		<Link to={'/'}>{userDetail.name}</Link>
	) : (
		<></>
	);
};

export default UserDetail;
