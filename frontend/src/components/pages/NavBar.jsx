import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import loginActions from "../../redux/actions/loginActions";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "row",
		margin: "30px auto 0 auto",

		listStyle: "none"
	},
	link: {
		textDecoration: "none",
		color: "black"
	},
	navLinks: {
		paddingRight: "45px"
	}
});
const NavBar = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.login.currentUser);
	const handleClick = () => {
		dispatch(loginActions.logoutUser());
	};
	return (
		<div>
			{currentUser.email ? (
				<ul className={classes.root}>
					<Link className={classes.link} to="/transactions">
						<li className={classes.navLinks}>Transactions</li>
					</Link>

					<Link className={classes.link} to="/portfolio">
						<li className={classes.navLinks}>Portolio</li>
					</Link>

					<Link onClick={handleClick} className={classes.link} to="/">
						<li className={classes.navLinks}>Logout</li>
					</Link>
				</ul>
			) : (
				<ul className={classes.root}>
					<Link className={classes.link} to="/login">
						<li className={classes.navLinks}>Login</li>
					</Link>
					<Link className={classes.link} to="/signup">
						<li className={classes.navLinks}>SignUp</li>
					</Link>
				</ul>
			)}
		</div>
	);
};

export default NavBar;
