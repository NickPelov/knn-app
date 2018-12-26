import React from 'react';
import classNames from 'classnames';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
	state = {
		isCollapsed: true,
	};

	onArrowClick = () => {
		const { isCollapsed } = this.state;

		this.setState({ isCollapsed: !isCollapsed });
	};

	render() {
		const { isCollapsed } = this.state;
		return (
			<div
				className={classNames('menu-container', {
					collapsed: isCollapsed,
					expanded: !isCollapsed,
				})}>
				<div className={'menu-container-top'}>
					<MenuItem icon={'icon-message'} text={'Messages'} isCollapsed={isCollapsed} />
					<MenuItem icon={'icon-calendar'} text={'Calendar'} isCollapsed={isCollapsed} />
					<MenuItem icon={'icon-tasks'} text={'Tasks'} isCollapsed={isCollapsed} />
					<MenuItem icon={'icon-home'} text={'Home'} isCollapsed={isCollapsed} />
				</div>
				<div className={'menu-container-bottom'}>
					<MenuItem icon={'icon-settings'} text={'Settings'} isCollapsed={isCollapsed} />
					<MenuItem icon={'icon-exit'} text={'Log Out'} isCollapsed={isCollapsed} />
					<MenuItem icon={'icon-double-arrow'} isCollapsed={isCollapsed} onClick={this.onArrowClick} />
				</div>
			</div>
		);
	}
}
