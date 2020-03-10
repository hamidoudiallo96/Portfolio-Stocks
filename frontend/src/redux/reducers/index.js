import { combineReducers } from "redux";
import loginReducer from "./login";
import stockReducer from "./stocks";
import transactionReducer from "./purchase";

const rootReducers = combineReducers({
	login: loginReducer,
	stock: stockReducer,
	transaction: transactionReducer
});

export default rootReducers;
