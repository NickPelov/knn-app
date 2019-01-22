import React, { Component, Fragment } from 'react';
import Icon from '../../components/Icon/Icon';
import Tooltip from '../../components/Tooltip/Tooltip';
import Avatar from '../../components/Avatar/Avatar';
import { Route } from 'react-router';

class Task extends Component {
	context = null;

	state = {
		task: this.props.task,
	};

	componentDidMount() {
		const { deadline, updated_at } = this.state.task;

		if (deadline !== undefined) {
			// // get total seconds between the times
			// var delta = Math.abs(deadline - new Date().getTime()) / 1000;

			// // calculate (and subtract) whole days
			// var days = Math.floor(delta / 86400);
			// delta -= days * 86400;

			// // calculate (and subtract) whole hours
			// var hours = Math.floor(delta / 3600) % 24;
			// delta -= hours * 3600;

			// // calculate (and subtract) whole minutes
			// var minutes = Math.floor(delta / 60) % 60;
			// delta -= minutes * 60;

			// // what's left is seconds
			// var seconds = delta % 60; // in theory the modulus is not required
			// console.log(days, hours, minutes, Math.round(seconds));

			const tempTask = {
				...this.state.task,
				deadline: new Date(deadline).toDateString(),
				updated_at: new Date(updated_at).toDateString(),
			};

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
						<p className={'task-primary'}>{task.title} </p>
						{task.labels.map((label, index) => {
							return (
								<Tooltip key={index} text={label.name} position={'bottom'} className={'task-label'}>
									<Icon icon={'icon-label'} style={{ color: label.color }} />
								</Tooltip>
							);
						})}
					</div>
					<div className={'task-info'}>
						<p className="task-secondary">
							created by: {task.author.first_name} {task.author.last_name}
						</p>

						{task.deadline !== undefined ? (
							<div className={'task-deadline'}>
								<Tooltip text={'deadline'} position={'bottom'}>
									<Icon icon={'icon-alarm'} className="task-secondary" />
									<p className={'task-secondary'}>{task.deadline}</p>
								</Tooltip>
							</div>
						) : (
							undefined
						)}
					</div>
				</div>
				<div className={'task-meta'}>
					<div className={'task-assignees'}>
						{task.assignees.map((assignee, index) => {
							return (
								<Tooltip
									key={index}
									text={`${assignee.first_name} ${assignee.last_name}`}
									position={'bottom'}
									className={'task-assignee'}>
									<Avatar image={assignee.image} size={'L'} status={'offline'} />
								</Tooltip>
							);
						})}
					</div>
					<p className="task-timestamp task-secondary">{task.updated_at}</p>
				</div>
			</div>
		);
	}
}

export default Task;
