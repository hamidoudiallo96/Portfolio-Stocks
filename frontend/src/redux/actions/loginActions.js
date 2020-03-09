// HTTP Request
const BASE_URL = "http://localhost:3001";
const SIGNUP_URL = BASE_URL + "/users";
const LOGIN_URL = BASE_URL + "/login";
const PERSIST_URL = BASE_URL + "/auth";

const setUserAction = userObj => ({
	type: "SET_USER",
	payload: userObj
});

const clearUserAction = () => ({
	type: "CLEAR_USER",
	payload: {}
});

const newUserToDB = userObj => dispatch => {
	let config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify(userObj)
	};
	fetch(SIGNUP_URL, config)
		.then(res => res.json())
		.then(userData => {
			dispatch(userData);
			localStorage.setItem("token", userData.token);
		})
		.catch(error => console.log(error));
};

const loginUserToDB = userObj => dispatch => {
	let config = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify(userObj)
	};
	fetch(LOGIN_URL, config)
		.then(res => res.json())
		.then(userData => dispatch(userData))
		.catch(error => console.log(error));
};

const persistUser = () => dispatch => {
	let config = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.token}`
		}
	};

	fetch(PERSIST_URL, config)
		.then(res => res.json())
		.then(userData => dispatch(setUserAction(userData)))
		.catch(error => console.log(error));
};

const logoutUser = () => dispatch => {
	dispatch(clearUserAction());
	localStorage.clear();
};

export default {
	newUserToDB,
	loginUserToDB,
	persistUser,
	logoutUser
};
