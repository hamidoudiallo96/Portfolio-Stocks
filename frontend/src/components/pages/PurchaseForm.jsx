import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import purchaseActions from "../../redux/actions/purchaseActions";
import loginActions from "../../redux/actions/loginActions";
import stockActions from "../../redux/actions/stocksActions";

const useStyles = makeStyles({
	root: {
		marginTop: "100px"
	},
	purchaseForm: {
		display: "flex",
		flexDirection: "column",
		width: "30%",
		margin: "0 auto"
	},
	label: {
		textAlign: "center"
	},
	input: {
		textAlign: "center",
		padding: "10px",
		marginTop: "10px"
	},
	button: {
		width: "100%",
		borderRadius: "10px",
		background: "#a12bcc",
		color: "whitesmoke",
		margin: "20px auto 0 auto",
		"&:hover": {
			background: "#a12bcc",
			color: "whitesmoke"
		}
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
	div: {
		display: "flex",
		width: "8%",
		margin: "0 auto"
	},
	ticker: {
		textAlign: "center",
		marginRight: "10px"
	},
	userBalance: {
		textAlign: "center"
	}
});
const PurchaseForm = props => {
	console.log(props.history);
	const classes = useStyles();
	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.login.currentUser);
	const currentStock = JSON.parse(localStorage.stock);
	const [quantityInput, setQuantityInput] = useState();

	const renderTicker = () => {
		if (currentStock.current_price > currentStock.open_price) {
			return <h3 className={classes.high}> {currentStock.ticker}</h3>;
		} else if (currentStock.current_price < currentStock.open_price) {
			return <h3 className={classes.low}>{currentStock.ticker}</h3>;
		} else {
			return <h3 className={classes.med}> {currentStock.ticker}</h3>;
		}
	};

	const handleChange = evt => {
		let stockQuantity = parseInt(evt.target.value);
		setQuantityInput(stockQuantity);
	};

	const handleSubmit = evt => {
		console.log("clicked");
		evt.preventDefault();
		let stockPrice = currentStock.current_price * quantityInput;
		dispatch(
			purchaseActions.postTransactionToDB(
				stockPrice,
				quantityInput,
				currentUser.id,
				currentStock.id
			)
		);
		dispatch(loginActions.patchUserBalanceToDB(currentUser, stockPrice));
		dispatch(stockActions.patchStockToDB(currentStock, quantityInput));
		setQuantityInput();
		props.history.push("/stocks");
	};
	return (
		<div className={classes.root}>
			<h2 className={classes.userBalance}>CASH - ${currentUser.balance}</h2>
			<div className={classes.div}>
				<h4 className={classes.ticker}>Ticker:</h4>
				{renderTicker()}
			</div>
			<form className={classes.purchaseForm} onSubmit={handleSubmit}>
				<label className={classes.label}>QTY:</label>
				<input
					className={classes.input}
					type="text"
					placeholder="Quantity"
					onChange={handleChange}
				/>
				<Button className={classes.button} variant="outlined" type="submit">
					Buy
				</Button>
			</form>
		</div>
	);
};

export default PurchaseForm;
