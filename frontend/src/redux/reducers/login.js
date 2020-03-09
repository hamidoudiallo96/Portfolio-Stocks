const initialState = {
	currentUser: {}
};

const loginReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_USER":
			return { ...state, currentUser: payload };
		case "CLEAR_USER":
			return { ...state, currentUser: payload };
		default:
			return state;
	}
};

export default loginReducer;
