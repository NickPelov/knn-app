import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Button from './Button';
import './Button.css';
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
	.add('Default', () => <Button label={'Click Me'} onClick={action('clicked')} />)
	.add('Filled', () => <Button label={'Click Me'} filled={true} onClick={action('clicked')} />)
	.add('Borderless', () => <Button label={'Click Me'} borderless={true} onClick={action('clicked')} />)
	.add('Disabled', () => <Button label={'Click Me'} disabled={true} onClick={action('clicked')} />);
