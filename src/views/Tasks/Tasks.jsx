import React, { Component } from 'react';
import Task from './Task';
import Icon from '../../components/Icon/Icon';

class Tasks extends Component {
	context = null;

	state = {
		tasks: [],
	};

	componentDidMount() {
		//request tasks
		const tasks = require('./dummyTasks');

		console.log(tasks);

		this.setState(tasks);
	}

	render() {
		const { tasks } = this.state;
		return (
			<div className={'tasks-container'}>
				<div className={'task-search'}>
					<div className="search-menu">
						<Icon icon={'icon-menu'} />
					</div>
					<div className="search-input">
						<Icon icon={'icon-search'} />
					</div>
				</div>
				{tasks.map((task, index) => {
					{
						console.log(task);
					}
					return <Task key={index} task={task} />;
				})}
			</div>
		);
	}
}

export default Tasks;
