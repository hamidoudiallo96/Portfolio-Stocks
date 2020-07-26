import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		marginTop: "100px",
	},
	title: {
		margin: "0 auto",
		padding: "40px",
	},
	button: {
		width: "20%",
		borderRadius: "10px",
		background: "#a12bcc",
		color: "whitesmoke",
		margin: "0 auto",
		"&:hover": {
			background: "#a12bcc",
			color: "whitesmoke",
		},
	},
});
const Homepage = (props) => {
	const classes = useStyles();
	const currentUser = useSelector((state) => state.login.currentUser);
	const handleClick = () => {
		props.history.push("/stocks");
	};

	return (
		<div>
			{currentUser.email ? (
				<div className={classes.root}>
					<h1 className={classes.title}>Welcome to StockFolio</h1>
					<h4 className={classes.title}>Welcome {currentUser.name}</h4>
					<Button
						className={classes.button}
						variant="outlined"
						onClick={handleClick}
					>
						Purchase Stocks
					</Button>
				</div>
			) : null}
		</div>
	);
};

export default Homepage;
