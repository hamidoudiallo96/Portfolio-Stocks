import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import NavBar from "../pages/NavBar";

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContent: "space-between"
	},
	link: {
		textDecoration: "none"
	},
	logo: {
		color: "#a12bcc",
		paddingLeft: "40px"
	}
});

const NavBarContainer = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Link className={classes.link} to="/">
				<h1 className={classes.logo}>StockFolio</h1>
			</Link>
			<NavBar />
		</div>
	);
};

export default NavBarContainer;
