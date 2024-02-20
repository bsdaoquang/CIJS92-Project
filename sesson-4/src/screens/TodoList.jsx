/** @format */

import { Button, Checkbox, Input, List, Modal, Space, message } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import StoreContext from '../contexts/StoreContext';

const { confirm } = Modal;

const TodoList = () => {
	const [tasks, setTasks] = useState([]);
	const [content, setContent] = useState('');
	const [task, setTask] = useState();

	const context = useContext(StoreContext);
	const { store } = context;

	useEffect(() => {
		handleGetAllTasks();
	}, []);

	useEffect(() => {
		if (task) {
			setContent(task.content);
		}
	}, [task]);

	const handleGetAllTasks = () => {
		const res = localStorage.getItem('tasks');
		res && setTasks(JSON.parse(res));
	};

	const handleAddNewTask = () => {
		const items = [...tasks];

		if (content) {
			if (task) {
				const index = tasks.findIndex((element) => element.id === task.id);
				const data = { ...task, content };
				items[index] = data;

				setTask(undefined);
			} else {
				const data = {
					id: Math.floor(Math.random() * 10000),
					content,
					isCompleted: false,
					createdAt: Date.now(),
				};

				items.push(data);
			}

			localStorage.setItem('tasks', JSON.stringify(items));

			message.success(
				task ? 'Update task successfully!!!' : 'Add new item successfully!!!'
			);

			handleGetAllTasks();

			setContent('');
		} else {
			message.error('Content is required!!');
		}
	};

	const toggleTaskStatus = (item, index) => {
		const detail = { ...item, isCompleted: !item.isCompleted };

		tasks[index] = detail;

		localStorage.setItem('tasks', JSON.stringify(tasks));

		handleGetAllTasks();
	};

	const handleRemoveTask = (index) => {
		const items = [...tasks];

		confirm({
			title: 'Confirm',
			content: 'Are you sure you want to remove item?',
			onOk: () => {
				items.splice(index, 1);
				localStorage.setItem('tasks', JSON.stringify(items));
				message.success('Remove item successfully!!!!');
				handleGetAllTasks();
			},
		});
	};

	return (
		<div>
			<div className='container'>
				<List
					header={
						<>
							<Space.Compact>
								<Input
									value={content}
									onChange={(val) => setContent(val.target.value)}
									allowClear
									style={{ width: '100%' }}
									placeholder='Content'
									onPressEnter={handleAddNewTask}
								/>
								<Button onClick={handleAddNewTask}>
									{task ? 'Update' : 'Add new'}
								</Button>
							</Space.Compact>
						</>
					}
					dataSource={tasks}
					renderItem={(item, index) => (
						<List.Item
							key={`Task${index}`}
							extra={[
								<Button
									key={'btnEdit'}
									type='link'
									onClick={() => setTask(item)}>
									{store.language === 'vie' ? 'Cập nhật' : 'Edit'}
								</Button>,
								<Button
									key={'btnDelete'}
									type='link'
									danger
									onClick={() => handleRemoveTask(index)}>
									Remove
								</Button>,
							]}>
							<List.Item.Meta
								title={
									<Checkbox
										style={{
											color: item.isCompleted ? '#676767' : '#212121',
											textDecoration: item.isCompleted ? 'line-through' : '',
										}}
										checked={item.isCompleted}
										onChange={() => toggleTaskStatus(item, index)}>
										{item.content}
									</Checkbox>
								}
								description={new Date(item.createdAt).toISOString()}
							/>
						</List.Item>
					)}
				/>
			</div>
		</div>
	);
};

export default TodoList;
