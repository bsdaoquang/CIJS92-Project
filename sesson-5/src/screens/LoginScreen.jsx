/** @format */

import { Input, Card, Space, Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const emailRef = useRef();
	const passRef = useRef();
	const btnRef = useRef();

	useEffect(() => {
		emailRef.current?.focus();
	}, []);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-6 offset-3 p-4'>
					<Card>
						<Input
							ref={emailRef}
							size='large'
							value={email}
							onChange={(val) => setEmail(val.target.value)}
							onPressEnter={() => passRef.current.focus()}
						/>
						<div className='mt-4' />
						<Input.Password
							ref={passRef}
							size='large'
							value={password}
							onChange={(val) => setPassword(val.target.value)}
							onPressEnter={() => btnRef.current.click()}
						/>

						<div className='mt-4'>
							<Button onClick={() => console.log('login')} ref={btnRef}>
								Login
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
