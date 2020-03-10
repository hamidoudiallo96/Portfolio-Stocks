const initialState = {
	stocks: [],
	currentStock: {}
};

const stockReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_STOCKS":
			return { ...state, stocks: payload };
		case "SET_CURRENT_STOCK":
			return { ...state, currentStock: payload };
		default:
			return state;
	}
};

export default stockReducer;
