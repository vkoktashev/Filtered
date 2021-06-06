import * as types from "./actionTypes";
import { Map } from "immutable";

// Создаем reducer с начальным состоянием.
const initialState = Map({
	isLoading: false,
	comments: [],
	error: null,
});

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.GET_COMMENTS_SUCCESS:
			return state.merge({
				comments: action.data,
				isLoading: false,
				error: null,
			});
		case types.GET_COMMENTS_STARTED:
			return state.set("isLoading", true);
		case types.GET_COMMENTS_FAILURE:
			return state.merge({ isLoading: false, error: action.error });
		default:
			return state;
	}
}

export function getComments(state) {
	return state.get("comments");
}

export function getCommentsLoading(state) {
	return state.get("comments");
}

export function getCommentsError(state) {
	return state.get("error");
}
