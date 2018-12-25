import React from 'react';
import Auth from './Auth';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
// const Auth = React.lazy(() => import('./Auth'));

export default class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	onChange = (type, value) => {
		const state = {};
		state[type] = value;

		this.setState(state);
	};

	render() {
		return (
			<Auth title={'Sign In'}>
				<Card className={'auth-card'}>
					<Input label={'Email'} className={'auth-signin'} onChange={this.onChange.bind(this, 'email')} />
					<Input label={'Password'} type={'password'} className={'auth-signin'} onChange={this.onChange.bind(this, 'password')} />
					<Button label={'Submit'} className={'auth-button'} />
				</Card>
			</Auth>
		);
	}
}
