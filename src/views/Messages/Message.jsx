import React from 'react';
import classNames from 'classnames';
import Icon from '../../components/Icon/Icon';
import Tooltip from '../../components/Tooltip/Tooltip';
import Notification from '../../components/Notification/Notification';

class Message extends React.Component {
	state = {
		parseResult: undefined,
		showNotification: false,
	};
	library = ['Tomorrow ', 'Thursday ', 'Monday ', 'Thuesday ', 'Wednesday ', 'Friday ', 'Saturday ', 'Sunday '];

	componentDidMount() {
		this.parseMessage();
	}
	parseMessage = () => {
		const { body } = this.props;
		const { parseResult } = this.state;
		if (parseResult) return true;
		for (let string of this.library) {
			const index = body.indexOf(string);
			if (index > -1) {
				this.setState({ parseResult: body.slice(index, index + string.length + 5) });
				return true;
			}
		}
	};

	onClickScheduleEvent = () => {
		this.setState({ showNotification: true, parseResult: undefined });
		setTimeout(() => {
			this.setState({ showNotification: false });
		}, 2000);
	};

	render() {
		const { body, isReceived } = this.props;
		const { showNotification, parseResult } = this.state;
		return (
			<div className={classNames('message-container', { received: isReceived })}>
				<span className={classNames('message-body', { received: isReceived })}>{body}</span>
				{parseResult ? (
					<Tooltip
						text={`Do you want to create an event for ${parseResult}?`}
						position={'top'}
						className={'message-notification'}
						onClick={this.onClickScheduleEvent}>
						<Icon icon={'icon-notifications_active'} size={'S'} />
					</Tooltip>
				) : (
					undefined
				)}
				<Notification title={'Success'} text={'Event has been scheduled'} isVisible={showNotification} />
			</div>
		);
	}
}

export default Message;
