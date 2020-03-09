import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		margin: "100px auto 0 auto",
		width: "35%",
		padding: "40px",
		border: "5px solid #a12bcc"
	},
	header: {
		textAlign: "center",
		color: "#a12bcc"
	},
	userForm: {
		display: "flex",
		flexDirection: "column",
		width: "90%",
		margin: "0 auto",
		padding: "20px"
	},
	input: {
		padding: "10px",
		margin: "15px"
	},
	button: {
		width: "60%",
		borderRadius: "10px",
		background: "#a12bcc",
		color: "whitesmoke",
		margin: "10px auto 0 auto",
		"&:hover": {
			color: "#a12bcc",
			background: "whitesmoke"
		}
	}
});

const UserLogin = () => {
	const classes = useStyles();
	const [loginInput, setLoginInput] = useState({
		email: "",
		password: ""
	});

	const handleChange = evt => {
		setLoginInput({ ...loginInput, [evt.target.name]: evt.target.value });
	};

	const handleSubmit = evt => {
		evt.preventDefault();
	};
	return (
		<div className={classes.root}>
			<h1 className={classes.header}>Login</h1>
			<form className={classes.userForm} onSubmit={handleSubmit}>
				<input
					className={classes.input}
					type="text"
					placeholder="Email"
					name="email"
					value={loginInput.email}
					onChange={handleChange}
				/>
				<input
					className={classes.input}
					type="text"
					placeholder="Password"
					name="password"
					value={loginInput.password}
					onChange={handleChange}
				/>
				<Button className={classes.button} variant="outlined" type="submit">
					Login
				</Button>
			</form>
		</div>
	);
};

export default UserLogin;
