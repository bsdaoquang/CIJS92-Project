/** @format */

// import './App.css';
import { useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
import Posts from './screens/Posts';
import TodoList from './screens/TodoList';
import HeaderComponent from './components/HeaderComponent';
import StoreContext from './contexts/StoreContext';

const { Content } = Layout;
const { Title } = Typography;

const App = () => {
	const [store, setStore] = useState({
		theme: 'light',
		language: 'vie',
	});

	useEffect(() => {
		const res = localStorage.getItem('store');
		if (res) {
			setStore(JSON.parse(res));
		}
	}, []);

	return (
		<StoreContext.Provider value={{ store, setStore }}>
			<Layout className={store.theme === 'light' ? 'bg-white' : 'bg-dark'}>
				<HeaderComponent />
				<Content className='p-4'>
					<TodoList />
				</Content>
			</Layout>
		</StoreContext.Provider>
	);
};

export default App;
