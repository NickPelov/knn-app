import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import Input from './Input';
import './Input.css';

function validate(value) {
	if (value.length > 5) return new Error('WOW long length');
}

storiesOf('Input', module)
	.addDecorator(centered)
	.add('Text Field Input', () => (
		<div>
			<h6>Default input</h6>
			<Input label={'Name'} onClick={action('clicked')} onChange={action('changed')} />
			<h6>Clearable input</h6>
			<Input label={'Name'} onClick={action('clicked')} onChange={action('changed')} clearable />
			<h6>With helper text</h6>
			<Input label={'Name'} helperText={'*Required'} onClick={action('clicked')} onChange={action('changed')} clearable />
		</div>
	))
	.add('Text Area Input', () => (
		<div>
			<h6>Text Area</h6>
			<Input label={'Name'} onClick={action('clicked')} onChange={action('changed')} isTextarea />
			<h6>Clearable text area</h6>
			<Input label={'Name'} onClick={action('clicked')} onChange={action('changed')} clearable isTextarea />
		</div>
	))
	.add('With Prefix/Suffix', () => (
		<div>
			<h6>Prefix</h6>
			<Input label={'Amount'} onClick={action('clicked')} onChange={action('changed')} prefix={'$'} />
			<h6>Suffix</h6>
			<Input label={'Height'} onClick={action('clicked')} onChange={action('changed')} suffix={'cm'} />
			<h6>With helper text</h6>
			<Input label={'Amount'} onClick={action('clicked')} onChange={action('changed')} prefix={'$'} suffix={'0.00'} />
		</div>
	))
	.add('Validated', () => (
		<div>
			<h6>{'Length < 5'}</h6>
			<Input label={'City'} onValidate={validate} onClick={action('clicked')} onChange={action('changed')} />
			<h6>With Icon</h6>
			<Input label={'Height'} onValidate={validate} onClick={action('clicked')} onChange={action('changed')} clearable />
			<h6>With helper text</h6>
			<Input
				label={'Amount'}
				onValidate={validate}
				onClick={action('clicked')}
				onChange={action('changed')}
				helperText={`I'm here to help`}
			/>
		</div>
	))
	.add('Disabled', () => (
		<div>
			<h6>Default</h6>
			<Input label={'Name'} onClick={action('clicked')} onChange={action('changed')} disabled />
			<h6>Clearable</h6>
			<Input label={'Name'} onClick={action('clicked')} onChange={action('changed')} disabled clearable />
			<h6>With prefix and Helper text</h6>
			<Input
				label={'Name'}
				onClick={action('clicked')}
				onChange={action('changed')}
				disabled
				prefix={'#'}
				helperText={`I'm here to help`}
			/>
		</div>
	));
