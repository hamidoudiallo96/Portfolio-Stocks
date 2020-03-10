import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/Homepage";
import UserSignUp from "./components/pages/UserSignUp";
import UserLogin from "./components/pages/UserLogin";
import StocksContainer from "./components/containers/StocksContainer";
import PurchaseForm from "./components/pages/PurchaseForm";
import TransactionsContainer from "./components/containers/TransactionsContainer";
import PortfolioContainer from "./components/containers/PortfolioContainer";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/signup" component={UserSignUp} />
			<Route exact path="/login" component={UserLogin} />
			<Route exact path="/stocks" component={StocksContainer} />
			<Route exact path="/purchase" component={PurchaseForm} />
			<Route exact path="/transactions" component={TransactionsContainer} />
			<Route exact path="/portfolio" component={PortfolioContainer} />
		</Switch>
	);
};

export default Routes;
