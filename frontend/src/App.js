import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import loginActions from "./redux/actions/loginActions";
import NavBarContainer from "./components/containers/NavBarContainer";
import Routes from "./Routes";

import "./App.css";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loginActions.persistUser());
	}, [dispatch]);
	return (
		<div>
			<NavBarContainer />
			<Routes />
		</div>
	);
}

export default App;
