import React from 'react';
import { menuItems } from '../constants/MenuItems';

const menuItemOrder = Object.keys(menuItems);

export const MenuContext = React.createContext({ menuItems, menuItemOrder, onReorderMenuItem: () => {} });

export class MenuContextComponent extends React.Component {
	static contextType = MenuContext;
	state = {
		context: {
			menuItemOrder: menuItemOrder,
			menuItems: menuItems,
		},
	};

	onReorderMenuItem = (id, origin, destination) => {
		const { context } = this.state;
		const newItemOrder = Array.from(context.menuItemOrder);
		newItemOrder.splice(origin, 1);
		newItemOrder.splice(destination, 0, id);
		const newMenuContext = { ...context, menuItemOrder: newItemOrder };
		this.setState({ context: newMenuContext });
	};

	render() {
		const { context } = this.state;
		const { children } = this.props;
		console.log(context);
		const newContext = { ...context, onReorderMenuItem: this.onReorderMenuItem };
		return <MenuContext.Provider value={newContext}>{children}</MenuContext.Provider>;
	}
}
