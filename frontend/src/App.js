import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import loginActions from "./redux/actions/loginActions";

import stockActions from "./redux/actions/stocksActions";
import NavBarContainer from "./components/containers/NavBarContainer";
import Routes from "./Routes";

import "./App.css";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.token) {
			dispatch(loginActions.persistUser());
			dispatch(stockActions.getStocksFromDB());
		}
	}, [dispatch]);

	return (
		<div>
			<NavBarContainer />
			<Routes />
			<p
				style={{
					margin: "40px auto 0px auto",
					textAlign: "center",
				}}
			>
				Credits: <a href="https://iexcloud.io">IEX Cloud</a>
			</p>
		</div>
	);
}

export default App;
