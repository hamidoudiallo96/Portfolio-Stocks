const BASE_URL = "http://localhost:3001/transactions";

const setTransactions = transactions => ({
	type: "GET_TRANSACTIONS",
	payload: transactions
});

const getTransactionsFromDB = () => dispatch => {
	let config = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.token}`
		}
	};

	fetch(BASE_URL, config)
		.then(res => res.json())
		.then(transactionData => dispatch(setTransactions(transactionData)))
		.catch(error => console.log(error));
};
// "price"
// "quantity"
const postTransactionToDB = (
	stockPrice,
	stockQuantity,
	userId,
	stockId
) => dispatch => {
	let config = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			price: stockPrice,
			quantity: stockQuantity,
			user_id: userId,
			stock_id: stockId
		})
	};
	fetch(BASE_URL, config)
		.then(res => res.json())
		.then(postData => console.log(postData))
		.catch(error => console.log(error));
};

export default {
	getTransactionsFromDB,
	postTransactionToDB
};
