import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import Portfolio from "../pages/Portfolio";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
		margin: "100px auto 50px auto ",
		width: "60%"
	},
	title: {
		color: "#a12bcc",
		textAlign: "center",
		margin: "0 auto 50px auto"
	},
	userBalance: {
		margin: "0 auto"
	}
});

const PortfolioContainer = props => {
	const classes = useStyles();
	const currentUser = useSelector(state => state.login.currentUser);
	const transactions = currentUser.transactions;
	const renderUniqueStocks = () => {
		if (transactions) {
			let userStocks = transactions.map(item => item.stock);
			let checked = {};
			let uniqueUserStocks = [];
			userStocks.forEach(stock => {
				if (!checked[stock.ticker]) {
					uniqueUserStocks.push(stock);
					checked[stock.ticker] = true;
				}
			});
			return uniqueUserStocks;
		}
	};
	let userPortfolio = renderUniqueStocks();

	const renderPortfolio = userPortfolio => {
		return userPortfolio.map(stock => {
			return <Portfolio key={stock.id} stock={stock} />;
		});
	};
	return (
		<div className={classes.root}>
			<h1 className={classes.title}>Portfolio</h1>
			<h5 className={classes.userBalance}>
				Your Current Balance: ${currentUser.balance}
			</h5>
			{renderPortfolio(userPortfolio)}
		</div>
	);
};

export default PortfolioContainer;
