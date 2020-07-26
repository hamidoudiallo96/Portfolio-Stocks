import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		borderBottom: "5px solid #e6e6e6",
		alignItems: "center",
	},
	shares: {
		alignContent: "center",
	},
	low: {
		color: "#f50c2b",
	},
	even: {
		color: "grey",
	},
	high: {
		color: "#0af229",
	},
	purchaseButton: {
		width: "20%",
		borderRadius: "10px",
		background: "#a12bcc",
		color: "whitesmoke",
		margin: "0",
		"&:hover": {
			background: "#a12bcc",
			color: "whitesmoke",
		},
	},
});

const Transactions = (props) => {
	const classes = useStyles();

	const renderTicker = () => {
		if (
			props.transaction.stock.current_price > props.transaction.stock.open_price
		) {
			return (
				<h3 className={classes.low}>({props.transaction.stock.ticker})</h3>
			);
		} else if (
			props.transaction.stock.current_price < props.transaction.stock.open_price
		) {
			return (
				<h3 className={classes.high}>({props.transaction.stock.ticker})</h3>
			);
		} else {
			return (
				<h3 className={classes.med}>({props.transaction.stock.ticker})</h3>
			);
		}
	};
	let stockTotal =
		(40 - props.transaction.stock.shares) *
		props.transaction.stock.current_price;
	return (
		<div className={classes.root}>
			<h2>BUY</h2>
			{renderTicker()}
			<p>-</p>
			<h4 className={classes.shares}>
				{40 - props.transaction.stock.shares} Shares
			</h4>
			<p>@</p>
			<h4>${stockTotal.toFixed(2)}</h4>
		</div>
	);
};

export default Transactions;
