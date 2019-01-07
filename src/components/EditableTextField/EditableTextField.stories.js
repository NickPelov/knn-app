import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { State, Store } from '@sambego/storybook-state';
import EditableTextField from './EditableTextField';
import './EditableTextField.css';
import Button from '../Button/Button';

const store = new Store({
	editable: false,
});

storiesOf('Editable Text Field', module)
	.addDecorator(centered)
	.add('Default', () => (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<State store={store}>
				{(state) => [
					<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
						<EditableTextField label={'City'} text={'Eindhoven'} isEditable={state.editable} />
						<Button icon={'icon-edit'} onClick={() => store.set({ editable: !store.get('editable') })} />
					</div>,
				]}
			</State>
		</div>
	));
