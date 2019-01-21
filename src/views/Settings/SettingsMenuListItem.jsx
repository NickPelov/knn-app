import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Checkbox from '../../components/Checkbox/Checkbox';
import Icon from '../../components/Icon/Icon';

const SettingsMenuListItem = (props) => {
	const { item, index } = props;

	function onClickCheckbox() {}

	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided) => (
				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={'menu-order-item'}>
					<div className={'menu-order-left'}>
						<Icon icon={'icon-drag_handle'} size={'L'} />
						{item.text}
					</div>
					<div className={'menu-order-checkboxes'}>
						<Checkbox onClick={onClickCheckbox} />
						<Checkbox onClick={onClickCheckbox} />
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default SettingsMenuListItem;
