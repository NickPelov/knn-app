import React, { Component } from 'react';
import { Route } from 'react-router';
import Task from './Task';

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
				<div className={'task-search'} />
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
