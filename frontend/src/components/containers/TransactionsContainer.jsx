import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import Transactions from "../pages/Transactions";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		borderBottom: "5px solid #e6e6e6",
		alignItems: "center",
		margin: "100px auto ",
		width: "60%"
	},
	title: {
		color: "#a12bcc",
		textAlign: "center",
		margin: "0 auto 50px auto"
	}
});

const TransactionsContainer = props => {
	const classes = useStyles();
	// let stockArr = [];
	const transactions = useSelector(
		state => state.login.currentUser.transactions
	);
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

	const renderTransactions = () => {
		return renderUniqueStocks().map(transaction => {
			return <Transactions key={transaction.id} transaction={transaction} />;
		});
	};
	return (
		<div className={classes.root}>
			<h1 className={classes.title}>Portfolio</h1>
			{renderTransactions()}
		</div>
	);
};

export default TransactionsContainer;
