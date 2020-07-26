const initialState = {
	transactions: [],
};

const transactionReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "GET_TRANSACTIONS":
			return { ...state, transactions: payload };
		default:
			return state;
	}
};

export default transactionReducer;
