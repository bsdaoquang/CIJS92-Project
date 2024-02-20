/** @format */

import { useContext, useEffect, useState } from 'react';
import { Button, Space, Switch } from 'antd';
import React from 'react';
import StoreContext from '../contexts/StoreContext';

const HeaderComponent = () => {
	const context = useContext(StoreContext);
	const { store, setStore } = context;

	useEffect(() => {
		localStorage.setItem('store', JSON.stringify(store));
	}, [store]);

	return (
		<div>
			<div className='row p-4 bg-light'>
				<div className='col'>
					<p>{new Date().toISOString()}</p>
				</div>
				<div className='col text-right'>
					<Space>
						<Switch
							unCheckedChildren='dark'
							checkedChildren='light'
							defaultChecked
							checked={store.theme === 'light'}
							onChange={(val) => {
								setStore({ ...store, theme: val ? 'light' : 'dark' });
							}}
						/>
						<Switch
							unCheckedChildren='Eng'
							checkedChildren='Vie'
							defaultChecked
							checked={store.language === 'vie'}
							onChange={(val) => {
								setStore({ ...store, language: val ? 'vie' : 'eng' });
							}}
						/>
						{store.accessToken ? (
							<Button
								type='link'
								onClick={() => setStore({ ...store, accessToken: '' })}>
								Đăng xuất
							</Button>
						) : (
							<Button
								type='link'
								onClick={() => setStore({ ...store, accessToken: 'abfasfsa' })}>
								Đăng nhập
							</Button>
						)}
					</Space>
				</div>
			</div>
		</div>
	);
};

export default HeaderComponent;
