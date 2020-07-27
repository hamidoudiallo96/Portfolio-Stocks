const BASE_URL = "https://stockfolio-api.herokuapp.com/transactions";

const setTransactions = (transactions) => ({
	type: "GET_TRANSACTIONS",
	payload: transactions,
});

const getTransactionsFromDB = () => (dispatch) => {
	let user = JSON.parse(localStorage.user);
	let config = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
		},
	};

	fetch(BASE_URL, config)
		.then((res) => res.json())
		.then((transactionData) => {
			let userTransactions = transactionData.filter(
				(transaction) => transaction.user.id === user
			);
			dispatch(setTransactions(userTransactions));
		})
		.catch((error) => console.log(error));
};

const postTransactionToDB = (stockPrice, stockQuantity, userId, stockId) => (
	dispatch
) => {
	let config = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			price: stockPrice,
			quantity: stockQuantity,
			user_id: userId,
			stock_id: stockId,
		}),
	};
	fetch(BASE_URL, config)
		.then((res) => res.json())
		.then((postData) => console.log(postData))
		.catch((error) => console.log(error));
};

export default {
	getTransactionsFromDB,
	postTransactionToDB,
};
