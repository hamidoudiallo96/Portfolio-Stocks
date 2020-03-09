const initialState = {
	stocks: []
};

const stockReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_STOCKS":
			return { ...state, stocks: payload };

		default:
			return state;
	}
};

export default stockReducer;
