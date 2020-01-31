import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER } from '../types';

export default (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case SEARCH_USERS:
			return {
				...state,
				users: payload,
				loading: false
			};
		case CLEAR_USERS:
			return {
				...state
			};

		case SET_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
};
