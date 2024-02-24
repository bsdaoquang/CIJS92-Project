/** @format */

import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../screens/About';
import Setting from '../screens/Setting';
import Profile from '../screens/profiles/Profile';
import UpdatePhoto from '../screens/profiles/UpdatePhoto';
import PostDetail from '../screens/PostDetail';

const HomeRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path='/' element={<HomeScreen />} />
				<Route path='/about' element={<About />} />
				<Route path='/setting' element={<Setting />} />
				<Route path='/post-detail' element={<PostDetail />} />
				<Route path='/profile' element={<Profile />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default HomeRouter;
