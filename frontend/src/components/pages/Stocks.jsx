import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import stocksActions from "../../redux/actions/stocksActions";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		borderBottom: "5px solid #e6e6e6",
		alignItems: "center"
	},
	shares: {
		alignContent: "center"
	},
	low: {
		color: "#f50c2b"
	},
	even: {
		color: "grey"
	},
	high: {
		color: "#0af229"
	},
	purchaseButton: {
		width: "20%",
		borderRadius: "10px",
		background: "#a12bcc",
		color: "whitesmoke",
		margin: "0",
		"&:hover": {
			background: "#a12bcc",
			color: "whitesmoke"
		}
	}
});

const Stocks = props => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const renderTicker = () => {
		if (props.stock.current_price > props.stock.open_price) {
			return <h3 className={classes.low}>({props.stock.ticker})</h3>;
		} else if (props.stock.current_price < props.stock.open_price) {
			return <h3 className={classes.high}>({props.stock.ticker})</h3>;
		} else {
			return <h3 className={classes.med}>({props.stock.ticker})</h3>;
		}
	};

	const handleClick = stockObj => {
		dispatch(stocksActions.getCurrentStock(stockObj));
		props.history.push("/purchase");
	};
	return (
		<div className={classes.root}>
			<h2>BUY</h2>
			{renderTicker()}
			<p>-</p>
			<h4 className={classes.shares}>{props.stock.shares} Shares</h4>
			<p>@</p>
			<h4>${props.stock.current_price}</h4>
			{props.stock.shares > 0 ? (
				<Button
					variant="outlined"
					className={classes.purchaseButton}
					onClick={() => handleClick(props.stock)}
				>
					Purchase
				</Button>
			) : null}
		</div>
	);
};

export default Stocks;
