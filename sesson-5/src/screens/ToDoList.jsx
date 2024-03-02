/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { Card, Input, List } from 'antd';
import TaskItem from '../components/TaskItem';

const ToDoList = () => {
	const [content, setContent] = useState('');
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState();

	const inpRef = useRef(null);
	const localname = 'tasks';

	useEffect(() => {
		inpRef.current.focus();
		getTasksFromLocal();
	}, []);

	const handleAddNewTask = () => {
		const items = [...tasks];

		if (task) {
			updateTask({ ...task, content, updatedAt: Date.now() });
			setTask(undefined);
		} else {
			const data = {
				content,
				createdAt: Date.now(),
				updatedAt: Date.now(),
				isCompleted: false,
			};

			items.push(data);

			localStorage.setItem(localname, JSON.stringify(items));

			getTasksFromLocal();
		}

		setContent('');
	};

	const getTasksFromLocal = () => {
		const res = localStorage.getItem(localname);

		if (res) {
			setTasks(JSON.parse(res));
		}
	};

	const updateTask = (item) => {
		const index = tasks.findIndex(
			(element) => element.createdAt === item.createdAt
		);

		if (index !== -1) {
			tasks[index] = item;

			localStorage.setItem(localname, JSON.stringify(tasks));
		}

		getTasksFromLocal();
	};

	const removeTask = (item) => {
		const index = tasks.findIndex(
			(element) => element.createdAt === item.createdAt
		);

		if (index !== -1) {
			tasks.splice(index, 1);

			localStorage.setItem(localname, JSON.stringify(tasks));
		}

		getTasksFromLocal();
	};

	return (
		<div>
			<div className='container mt-4'>
				<div className='row'>
					<div className='col-md-8 offset-md-2'>
						<Card>
							<Input
								ref={inpRef}
								value={content}
								style={{ marginBottom: 12 }}
								size='large'
								placeholder='What do you want to do?'
								allowClear
								onChange={(val) => setContent(val.target.value)}
								onPressEnter={handleAddNewTask}
							/>

							<List
								dataSource={tasks}
								renderItem={(task) => (
									<TaskItem
										task={task}
										onRemove={() => removeTask(task)}
										onEdit={() => {
											setContent(task.content);
											setTask(task);
											inpRef.current.focus();
										}}
										trigerComplete={() =>
											updateTask({ ...task, isCompleted: !task.isCompleted })
										}
									/>
								)}
							/>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToDoList;
