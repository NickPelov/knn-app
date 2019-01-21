import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import SettingsMenuListItem from './SettingsMenuListItem';
import { MenuContext } from '../../contexts/MenuContext';

class SettingsMenuList extends React.Component {
	onDragEnd = (callback, result) => {
		const { destination, source, draggableId } = result;

		if (!destination) return;

		if (destination.droppableId === source.droppableId && destination.index === source.index) return;

		callback(draggableId, source.index, destination.index);
	};

	render() {
		return (
			<div className={'settings-content-container settings-menu-order'}>
				<div className={'menu-order-header'}>
					<span>Menu Item</span>
					<div className={'menu-order-checkbox-header'}>
						<span>Top</span>
						<span>Bottom</span>
					</div>
				</div>
				<MenuContext.Consumer>
					{({ menuItemOrder, menuItems, onReorderMenuItem }) => (
						<DragDropContext onDragEnd={this.onDragEnd.bind(this, onReorderMenuItem)}>
							<Droppable droppableId={'1'}>
								{(provided) => (
									<div {...provided.droppableProps} ref={provided.innerRef} className={'menu-order-container'}>
										{menuItemOrder.map((key, index) => (
											<SettingsMenuListItem
												label={menuItems[key].id}
												key={menuItems[key].id}
												item={menuItems[key]}
												index={index}
											/>
										))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</DragDropContext>
					)}
				</MenuContext.Consumer>
			</div>
		);
	}
}

export default SettingsMenuList;
