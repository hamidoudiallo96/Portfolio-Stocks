import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import Stocks from "../pages/Stocks";
import stocksActions from "../../redux/actions/stocksActions";

const useStyles = makeStyles({
	root: {
		margin: "100px auto ",
		width: "50%"
	},
	title: {
		color: "#a12bcc",
		textAlign: "center",
		marginBottom: "50px"
	},
	userBalance: {
		textAlign: "center"
	}
});
const StocksContainer = props => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(stocksActions.getStocksFromDB());
	}, [dispatch]);
	const classes = useStyles();
	const currentUser = useSelector(state => state.login.currentUser);
	const stocks = useSelector(state => state.stock.stocks);
	const renderStocks = () => {
		return stocks.map(stock => {
			return <Stocks key={stock.id} stock={stock} history={props.history} />;
		});
	};
	return (
		<div className={classes.root}>
			<h1 className={classes.title}>Current Stock Options</h1>
			<h5 className={classes.userBalance}>
				Your Current Balance: ${currentUser.balance}
			</h5>
			{renderStocks()}
		</div>
	);
};

export default StocksContainer;
