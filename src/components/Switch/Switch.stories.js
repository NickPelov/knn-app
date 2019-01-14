import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import Switch from './Switch';
import './Switch.css';

storiesOf('Switch', module)
	.addDecorator(centered)
	.add('Default', () => <Switch />);
