import React from 'react';
import classNames from 'classnames';
import MenuItem from './MenuItem';
import MenuArrow from './MenuArrow';
import { withRouter } from 'react-router';

class Menu extends React.Component {
	state = {
		isCollapsed: false,
		selected: undefined,
	};

	onArrowClick = () => {
		const { isCollapsed } = this.state;

		this.setState({ isCollapsed: !isCollapsed });
	};

	onClick = (key, e) => {
		const { history } = this.props;
		history.push('/' + key);
		this.setState({ selected: key });
		console.log(history);
	};

	onClickLogout = () => {
		console.log('loged out');
	};

	render() {
		const { isCollapsed, selected } = this.state;
		return (
			<div
				className={classNames('menu-container', {
					collapsed: isCollapsed,
					expanded: !isCollapsed,
				})}>
				<div className={'menu-container-top'}>
					<MenuItem
						icon={'icon-bitbucket'}
						selected={selected === 'home'}
						text={'Home'}
						isCollapsed={isCollapsed}
						onClick={this.onClick.bind(this, 'home')}
					/>
					<MenuItem
						icon={'icon-account_circle'}
						selected={selected === 'profile'}
						text={'Profile'}
						isCollapsed={isCollapsed}
						onClick={this.onClick.bind(this, 'profile')}
					/>
					<MenuItem
						icon={'icon-message'}
						selected={selected === 'messages'}
						text={'Messages'}
						isCollapsed={isCollapsed}
						onClick={this.onClick.bind(this, 'messages')}
					/>
					<MenuItem
						icon={'icon-calendar'}
						selected={selected === 'calendar'}
						text={'Calendar'}
						isCollapsed={isCollapsed}
						onClick={this.onClick.bind(this, 'calendar')}
					/>
					<MenuItem
						icon={'icon-tasks'}
						selected={selected === 'tasks'}
						text={'Tasks'}
						isCollapsed={isCollapsed}
						onClick={this.onClick.bind(this, 'tasks')}
					/>
				</div>
				<div className={'menu-container-bottom'}>
					<MenuItem
						icon={'icon-settings'}
						selected={selected === 'settings'}
						text={'Settings'}
						isCollapsed={isCollapsed}
						onClick={this.onClick.bind(this, 'settings')}
					/>
					<MenuItem icon={'icon-exit'} text={'Log Out'} isCollapsed={isCollapsed} onClick={this.onClickLogout} />
					<MenuArrow icon={'icon-double-arrow'} isCollapsed={isCollapsed} onClick={this.onArrowClick} />
				</div>
			</div>
		);
	}
}

export default withRouter(Menu);
