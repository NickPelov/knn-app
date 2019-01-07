import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SelectUser from '../AuthSelectUser/SelectUser';
const AuthRouter = () => (
	<Router>
		<div>
			<Menu />
			<Route path="/signup" exact component={SignUp} />
			<Route path="/signin" exact component={SignIn} />
			<Route path="/user-exists" component={SelectUser} />
		</div>
	</Router>
);

export default AuthRouter;
