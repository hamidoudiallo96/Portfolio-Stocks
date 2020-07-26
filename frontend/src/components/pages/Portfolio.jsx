import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
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

const Portfolio = (props) => {
	const classes = useStyles();

	const renderTicker = () => {
		if (props.stock.current_price > props.stock.open_price) {
			return <h3 className={classes.low}>({props.stock.ticker})</h3>;
		} else if (props.stock.current_price < props.stock.open_price) {
			return <h3 className={classes.high}>({props.stock.ticker})</h3>;
		} else {
			return <h3 className={classes.med}>({props.stock.ticker})</h3>;
		}
	};

	return (
		<div className={classes.root}>
			<h2>BUY</h2>
			{renderTicker()}
			<p>-</p>
			<h4 className={classes.shares}>{40 - props.stock.shares} Shares</h4>
			<p>@</p>
			<h4>${props.stock.current_price}</h4>
		</div>
	);
};

export default Portfolio;
