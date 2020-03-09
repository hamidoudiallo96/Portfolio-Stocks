import React from "react";
import { useSelector } from "react-redux";
const Homepage = props => {
	const currentUser = useSelector(state => state.login.currentUser);
	return (
		<div>
			<h1>Welcome to StockFolio</h1>
		</div>
	);
};

export default Homepage;
