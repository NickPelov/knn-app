import React, { Component, Fragment } from 'react';
import Icon from '../../components/Icon/Icon';
import Tooltip from '../../components/Tooltip/Tooltip';
import Avatar from '../../components/Avatar/Avatar';

class Task extends Component {
	context = null;

	state = {
		task: this.props.task,
	};

	componentDidMount() {
		const { deadline, updated_at } = this.state.task;

		if (deadline !== undefined) {
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
				<div className={'task-state'}>
					<Tooltip text={task.state} position={'bottom'}>
						<Icon icon={task.state === 'open' ? 'icon-unlocked' : ' icon-lock'} className={`task-state-${task.state}`} />
					</Tooltip>
				</div>
				{/* <Divider direction={'vertical'} /> */}
				<div className={'task-main'}>
					<div className={'task-title'}>
						<p className={'task-primary'}>{task.title} </p>
						{task.labels.map((label, index) => {
							return (
								<Tooltip key={index} text={label.name} position={'top'} className={'task-label'}>
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
									<Avatar image={assignee.image} size={'L'} status={assignee.state} />
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
