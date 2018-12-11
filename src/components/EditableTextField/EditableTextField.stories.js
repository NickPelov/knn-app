import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import EditableTextField from './EditableTextField';
import './EditableTextField.css';

storiesOf('Editable Text Field', module)
	.addDecorator(centered)
	.add('Default', () => (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			Not editable:
			<EditableTextField text={'Eindhoven'} />
			<br />
			Editable:
			<EditableTextField text={'Eindhoven'} isEditable />
		</div>
	));
