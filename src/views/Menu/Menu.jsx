import React, { Fragment } from 'react';
import classNames from 'classnames';
import MenuItem from './MenuItem';
import MenuArrow from './MenuArrow';
import { withRouter } from 'react-router';
import { MenuContext } from '../../contexts/MenuContext';

class Menu extends React.Component {
	state = {
		isCollapsed: false,
		selected: 'home',
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
				<MenuContext.Consumer>
					{({ menuItemOrder, menuItems }) => {
						return (
							<Fragment>
								<div className={'menu-container-top'}>
									{menuItemOrder.map((key) => {
										const item = menuItems[key];
										if (item.position === 'top' || item.position === 'both') {
											return (
												<MenuItem
													key={item.id}
													icon={item.icon}
													selected={selected === item.id}
													text={item.text}
													isCollapsed={isCollapsed}
													onClick={this.onClick.bind(this, item.id)}
												/>
											);
										}
									})}
								</div>
								<div className={'menu-container-bottom'}>
									{menuItemOrder.map((key) => {
										const item = menuItems[key];
										if (item.position === 'bottom' || item.position === 'both') {
											return (
												<MenuItem
													key={item.id}
													icon={item.icon}
													selected={selected === item.id}
													text={item.text}
													isCollapsed={isCollapsed}
													onClick={this.onClick.bind(this, item.id)}
												/>
											);
										}
									})}
									<MenuArrow icon={'icon-double-arrow'} isCollapsed={isCollapsed} onClick={this.onArrowClick} />
								</div>
							</Fragment>
						);
					}}
				</MenuContext.Consumer>
			</div>
		);
	}
}

const MenuWithRouter = withRouter(Menu);

export default MenuWithRouter;
