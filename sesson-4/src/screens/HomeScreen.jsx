/** @format */

import React, { useContext, useEffect } from 'react';
import { Layout } from 'antd';
import TodoList from './TodoList';
import StoreContext from '../contexts/StoreContext';
import HeaderComponent from '../components/HeaderComponent';

const { Content } = Layout;

const HomeScreen = () => {
	const context = useContext(StoreContext);
	const { store, setStore } = context;

	useEffect(() => {
		const res = localStorage.getItem('store');
		console.log(res);
		if (res) {
			setStore(JSON.parse(res));
		}
	}, []);
	return (
		<Layout className={store.theme === 'light' ? 'bg-white' : 'bg-dark'}>
			<HeaderComponent />
			<Content className='p-4'>
				<TodoList />
			</Content>
		</Layout>
	);
};

export default HomeScreen;
