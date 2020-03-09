import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/Homepage";
import UserSignUp from "./components/pages/UserSignUp";
import UserLogin from "./components/pages/UserLogin";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/signup" component={UserSignUp} />
			<Route exact path="/login" component={UserLogin} />
		</Switch>
	);
};

export default Routes;
