import * as actionTypes from "./actionTypes";
import axios from "axios";

export function requestComments() {
	return async (dispatch) => {
		dispatch({ type: actionTypes.GET_COMMENTS_STARTED });
		axios
			.get("https://jsonplaceholder.typicode.com/comments")
			.then((response) => {
				dispatch({
					type: actionTypes.GET_COMMENTS_SUCCESS,
					data: response.data,
				});
			})
			.catch(function (err) {
				console.log(err.message);
				dispatch({
					type: actionTypes.GET_COMMENTS_FAILURE,
					error: err.message,
				});
			});
	};
}
