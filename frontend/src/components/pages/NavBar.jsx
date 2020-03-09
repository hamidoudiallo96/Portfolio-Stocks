import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "row",
		margin: "30px auto 0 auto",

		listStyle: "none"
	},
	navLinks: {
		paddingRight: "45px"
	}
});
const NavBar = () => {
	const classes = useStyles();
	const currentUser = useSelector(state => state.login.currentUser);
	return (
		<div>
			{currentUser.email ? (
				<ul className={classes.root}>
					<li className={classes.navLinks}>Transactions</li>
					<li className={classes.navLinks}>Portolio</li>
				</ul>
			) : (
				<ul className={classes.root}>
					<li className={classes.navLinks}>Login</li>
					<li className={classes.navLinks}>SignUp</li>
				</ul>
			)}
		</div>
	);
};

export default NavBar;
