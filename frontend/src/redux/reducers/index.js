import { combineReducers } from "redux";
import loginReducer from "./login";
import stockReducer from "./stocks";

const rootReducers = combineReducers({
	login: loginReducer,
	stock: stockReducer
});

export default rootReducers;
