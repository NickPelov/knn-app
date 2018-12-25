import React from 'react';

const Auth = (props) => {
	let { title, children } = props;
	title = title.toUpperCase();
	return (
		<div className={'auth-container'}>
			<img src={'assets/logo/logo.png'} alt="Smiley face" className={'auth-logo'} height="20%" width="40%" />
			<div className={'auth-title'}>{title}</div>
			{children}
		</div>
	);
};

export default Auth;
