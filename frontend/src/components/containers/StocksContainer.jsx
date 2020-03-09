import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Stocks from "../pages/Stocks";

const useStyles = makeStyles({
	root: {
		// border: "5px solid #a12bcc"
		margin: "100px auto ",
		width: "50%"
	},
	title: {
		color: "#a12bcc",
		textAlign: "center",
		marginBottom: "50px"
	}
});
const StocksContainer = props => {
	const classes = useStyles();
	const stocks = useSelector(state => state.stock.stocks);
	const renderStocks = () => {
		return stocks.map(stock => {
			return <Stocks key={stock.id} stock={stock} history={props.history} />;
		});
	};
	return (
		<div className={classes.root}>
			<h1 className={classes.title}>Current Stock Options</h1>
			{renderStocks()}
		</div>
	);
};

export default StocksContainer;
