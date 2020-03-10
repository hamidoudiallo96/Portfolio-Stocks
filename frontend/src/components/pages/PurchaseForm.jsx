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
	closedButton: {
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
	const classes = useStyles();
	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.login.currentUser);
	const currentStock = JSON.parse(localStorage.stock);
	const [quantityInput, setQuantityInput] = useState();
	const current_price = parseInt(currentStock.current_price);
	const userBalance = parseInt(currentUser.balance);
	console.log(currentUser.balance, currentStock.current_price);
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
		let stockPrice = currentStock.current_price * quantityInput;
		console.log("clicked");
		evt.preventDefault();

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
		setTimeout(() => {
			props.history.push("/stocks");
		}, 1000);
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
				{userBalance > current_price ? (
					<Button
						className={classes.button}
						disabled={false}
						variant="outlined"
						type="submit"
					>
						Buy
					</Button>
				) : (
					<Button
						className={classes.button}
						disabled={true}
						variant="outlined"
						type="submit"
					>
						Buy
					</Button>
				)}
			</form>
		</div>
	);
};

export default PurchaseForm;
