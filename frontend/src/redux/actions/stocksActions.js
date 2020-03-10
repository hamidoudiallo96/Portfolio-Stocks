const STOCKS_URL = "http://localhost:3001/stocks";
const STOCKS_UPDATE = stocksId => `${STOCKS_URL}/${stocksId}`;

const setStocks = stocks => ({
	type: "SET_STOCKS",
	payload: stocks
});

const getStocksFromDB = () => dispatch => {
	let config = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.token}`
		}
	};
	fetch(STOCKS_URL, config)
		.then(res => res.json())
		.then(stocksData => dispatch(setStocks(stocksData)))
		.catch(error => console.log(error));
};

// TODO: DO STOCK SHARES UPDATE;

export default {
	getStocksFromDB
};
