import React from 'react';
import classNames from 'classnames';
import Icon from '../../components/Icon/Icon';
import { withRouter } from 'react-router';
import Input from '../../components/Input/Input';
import MessageList from './MessageList';

class Messages extends React.Component {
	state = {
		users: [
			{
				id: 0,
				firstName: 'Pesho',
				lastName: 'Ivanov',
				messages: [
					{ id: 0, body: 'Could we talk about the next steps', author: true },
					{ id: 1, body: 'Im not sure how i should proceed...', author: true },
					{ id: 2, body: 'Sure', author: false },
					{ id: 3, body: 'Can we schedule a meeting for tomorrow?', author: true },
					{ id: 4, body: 'Sorry im busy tomorrow', author: false },
					{ id: 5, body: 'But i can do Thursday 14:00', author: false },
					{ id: 6, body: 'Sounds great!', author: true },
				],
				status: 'online',
			},
			{
				id: 1,
				firstName: 'Nikolay',
				lastName: 'Pelov',
				messages: [
					{ id: 0, body: 'Something', author: true },
					{ id: 1, body: 'Something', author: true },
					{ id: 2, body: 'Something', author: false },
					{ id: 3, body: 'Something', author: true },
					{ id: 4, body: 'Something', author: false },
					{ id: 5, body: 'Something', author: true },
					{ id: 6, body: 'Something', author: true },
				],
				status: 'online',
			},
			{
				id: 2,
				firstName: 'Kaloyan',
				lastName: 'Ivanov',
				messages: [
					{ id: 0, body: 'Something', author: true },
					{ id: 1, body: 'Something', author: true },
					{ id: 2, body: 'Something', author: false },
					{ id: 3, body: 'Something', author: true },
					{ id: 4, body: 'Something', author: false },
					{ id: 5, body: 'Something', author: true },
					{ id: 6, body: 'Something', author: true },
				],
				status: 'offline',
			},
			{ id: 3, firstName: 'Petur', lastName: 'Makriev', messages: [], status: 'online' },
			{ id: 4, firstName: 'Jurian', lastName: 'Berg', messages: [], status: 'online' },
			{ id: 5, firstName: 'Mathijs', lastName: 'Schoolen', messages: [], status: 'offline' },
			{ id: 6, firstName: 'Siyana', lastName: 'Stoyanova', messages: [], status: 'online' },
			{ id: 7, firstName: 'Ox', lastName: 'Jenkins', messages: [], status: 'offline' },
			{ id: 8, firstName: 'Fabian', lastName: 'Krikke', messages: [], status: 'online' },
			{ id: 9, firstName: 'Ivan', lastName: 'Stoilchev', messages: [], status: 'offline' },
		],
		currentMessage: '',
	};

	getMessages = () => {
		const { params } = this.props.match;
		const { users } = this.state;
		if (!users[params.id]) return [];
		return users[params.id].messages;
	};

	onSend = () => {
		console.log('sent');
		const { users, currentMessage } = this.state;
		console.log(!currentMessage);
		if (!currentMessage) return;
		const id = this.props.match.params.id;
		const message = { id: users[id].messages.length, body: currentMessage, author: false };
		const shallowCopy = users.slice();
		shallowCopy[id].messages.push(message);
		this.setState({ users: shallowCopy });
	};

	onChange = (value) => {
		this.setState({ currentMessage: value });
	};

	render() {
		return (
			<div className={'messages-view-container'}>
				<MessageList messages={this.getMessages()} />
				<div className={'messages-input-container'}>
					<Input className={'messages-input'} isTextarea onChange={this.onChange} onEnterClick={this.onSend} />
					<Icon icon={'icon-send'} size={'L'} className={'messages-input-icon'} onClick={this.onSend} />
				</div>
			</div>
		);
	}
}

export default withRouter(Messages);
