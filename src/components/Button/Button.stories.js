import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import Button from './Button';
import './Button.css';

storiesOf('Button', module)
	.addDecorator(centered)
	.add('Default', () => <Button label={'Click Me'} onClick={action('clicked')} />)
	.add('Filled', () => <Button label={'Click Me'} filled onClick={action('clicked')} />)
	.add('Borderless', () => <Button label={'Click Me'} borderless onClick={action('clicked')} />)
	.add('Disabled', () => <Button label={'Click Me'} disabled onClick={action('clicked')} />)
	.add('With Icon', () => <Button label={'Click Me'} icon={'icon-account_circle'} onClick={action('clicked')} />)
	.add('Icon only', () => <Button icon={'icon-account_circle'} onClick={action('clicked')} />);
