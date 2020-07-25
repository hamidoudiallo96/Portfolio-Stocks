const STOCKS_URL = "https://stockfolio-api.herokuapp.com/stocks";
const STOCKS_UPDATE = (stocksId) => `${STOCKS_URL}/${stocksId}`;

const setStocks = (stocks) => ({
	type: "SET_STOCKS",
	payload: stocks,
});

const setCurrentStock = (stockObj) => ({
	type: "SET_CURRENT_STOCK",
	payload: stockObj,
});

const getStocksFromDB = () => (dispatch) => {
	let config = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
		},
	};
	fetch(STOCKS_URL, config)
		.then((res) => res.json())
		.then((stocksData) => dispatch(setStocks(stocksData)))
		.catch((error) => console.log(error));
};

const getCurrentStock = (stockObj) => (dispatch) => {
	localStorage.setItem("stock", JSON.stringify(stockObj));
	let stock = JSON.parse(localStorage.stock);
	let config = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
		},
	};
	fetch(`${STOCKS_URL}/${stock.id}`, config)
		.then((res) => res.json())
		.then((stockData) => {
			dispatch(setCurrentStock(stockData));
		})
		.catch((error) => console.log(error));
};

// TODO: DO STOCK SHARES UPDATE;
const patchStockToDB = (stockObj, stockQuanity) => (dispatch) => {
	let remainingShares = stockObj.shares - stockQuanity;
	let config = {
		method: "PATCH",
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			shares: remainingShares,
		}),
	};
	fetch(STOCKS_UPDATE(stockObj.id), config)
		.then((res) => res.json())
		.then((stockData) => {
			dispatch(setCurrentStock(stockData));
		})
		.catch((error) => console.log(error));

	getStocksFromDB();
};

export default {
	getStocksFromDB,
	getCurrentStock,
	patchStockToDB,
};
