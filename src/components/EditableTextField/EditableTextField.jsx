import React from 'react';
import classNames from 'classnames';
import Input from '../Input/Input';

const EditableTextField = (props) => {
	const { text, isEditable, label, className, style } = props;

	return (
		<div>
			{isEditable ? (
				<Input label={label} value={text} className={classNames('editable-textfield', className)} style={style} />
			) : (
				<div className={classNames('editable-textfield', className)} style={style}>
					{text}
				</div>
			)}
		</div>
	);
};
export default EditableTextField;
