// Get
// Post
// Update

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

export default {
	getTransactionsFromDB
};
