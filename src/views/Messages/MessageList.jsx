import React from 'react';
import Message from './Message';

const MessageList = (props) => {
	const { messages } = props;

	return (
		<div className={'messages-container'}>
			{messages.map((message) => (
				<Message key={message.id} isReceived={message.author} body={message.body} />
			))}
		</div>
	);
};

export default MessageList;
