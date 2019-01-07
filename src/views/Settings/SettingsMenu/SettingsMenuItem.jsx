import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';

const SettingsMenuItem = (props) => {
	const { label, className, route, history } = props;

	function onClick() {
		history.push('/settings/' + route);
		console.log(history.entries);
	}

	return (
		<div className={classNames('settings-menu-item', className)} onClick={onClick}>
			{label}
		</div>
	);
};

export default withRouter(SettingsMenuItem);
