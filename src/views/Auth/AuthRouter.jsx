import React from 'react';

const AuthRouter = () => (
	<Router>
		<div>
			<Menu />
			<Route path="/home" exact component={Home} />
			<Route path="/messages" exact component={SignIn} />
			<Route path="/calendar" component={About} />
			<Route path="/tasks" component={Users} />
			<Route path="/settings" component={Users} />
		</div>
	</Router>
);

export default AuthRouter;
