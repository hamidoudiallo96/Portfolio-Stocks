import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import purchaseActions from "../../redux/actions/purchaseActions";
import Transactions from "../pages/Transactions";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
		margin: "100px auto ",
		width: "60%",
	},
	title: {
		color: "#a12bcc",
		textAlign: "center",
		margin: "0 auto 50px auto",
	},
	userBalance: {
		margin: "0 auto",
	},
});

const TransactionsContainer = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.login.currentUser);
	useEffect(() => {
		dispatch(purchaseActions.getTransactionsFromDB());
	}, [dispatch]);

	const userTransactions = useSelector(
		(state) => state.transaction.transactions
	);

	const renderTransactions = () => {
		return userTransactions.map((transaction) => {
			return <Transactions key={transaction.id} transaction={transaction} />;
		});
	};
	return (
		<div className={classes.root}>
			<h1 className={classes.title}>Transactions</h1>
			<h5 className={classes.userBalance}>
				Your Current Balance: ${currentUser.balance}
			</h5>
			{renderTransactions()}
		</div>
	);
};

export default TransactionsContainer;
