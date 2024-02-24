/** @format */

import React, { useState } from 'react';
import AuthRouter from './routers/AuthRouter';
import HomeRouter from './routers/HomeRouter';

const App = () => {
	const [isLogin, setIsLogin] = useState(true);

	return <>{!isLogin ? <AuthRouter /> : <HomeRouter />}</>;
};

export default App;
