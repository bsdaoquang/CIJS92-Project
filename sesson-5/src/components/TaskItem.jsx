/** @format */

import { Button, Checkbox, List, Modal, Space } from 'antd';
import React from 'react';

const { confirm } = Modal;

const TaskItem = (props) => {
	const { task, onEdit, onRemove, trigerComplete } = props;

	const renderDateTime = (num) => {
		const date = new Date(num);

		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	};

	return (
		<List.Item
			key={task.createdAt}
			extra={
				<Space>
					<Button
						type='primary'
						danger
						onClick={() => {
							confirm({
								title: 'Remove task',
								content: 'Are you sure you want to remove this item?',
								onOk: () => onRemove(),
							});
						}}>
						Del
					</Button>
					<Button type='primary' ghost onClick={onEdit}>
						Edit
					</Button>
				</Space>
			}>
			<List.Item.Meta
				title={
					<Checkbox onChange={trigerComplete} checked={task.isCompleted}>
						{task.content}
					</Checkbox>
				}
				description={renderDateTime(task.createdAt)}
			/>
		</List.Item>
	);
};

export default TaskItem;
