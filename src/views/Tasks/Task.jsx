import React, { Component } from 'react';
import { Route } from 'react-router';

class Task extends Component {
	context = null;

	state = {
		task: this.props.task,
	};

	componentDidMount() {
		const { deadline } = this.state.task;

		if (deadline !== undefined) {
			const tempTask = { ...this.state.task, deadline: new Date(deadline).toDateString() };

			this.setState({ task: tempTask }, () => {
				console.log('task:', this.state.task);
			});
		}
	}

	render() {
		const { task } = this.state;

		return (
			<div className={'task'}>
				<div className={'task-main'}>
					<div className={'task-title'}>
						<p>{task.title}</p>
					</div>
					<div className={'task-info'}>
						<p>
							created by: {task.author.first_name} {task.author.last_name}
						</p>
						{task.labels.map((label, index) => {
							return (
								<div
									className={'task-label'}
									key={index}
									style={{ color: label['font-color'], backgroundColor: label.color }}>
									<p>{label.name}</p>
								</div>
							);
						})}
						{task.deadline !== undefined ? <p>{task.deadline}</p> : undefined}
					</div>
				</div>
				<div className={'task-meta'}>{task.updated_at}</div>
			</div>
		);
	}
}

export default Task;
