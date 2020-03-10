import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});
const PurchaseForm = props => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const stocks = useSelector(state => state.stock.stocks);
	return (
		<div>
			<form></form>
		</div>
	);
};

export default PurchaseForm;
