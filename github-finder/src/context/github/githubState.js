import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER } from '../types';

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		loading: false
	};

	const [ state, dispatch ] = useReducer(GithubReducer, initialState);

	/* Github code ref: from bushblade*/
	const github = axios.create({
		baseURL: 'https://api.github.com/',
		timeout: 2000,
		headers: { Authorization: process.env.GITHUB_ACCESS_TOKEN }
	});

	// Search Users
	const searchUsers = async (text) => {
		setLoading();

		const res = await github.get(`search/users?q=${text}`);

		dispatch({ type: SEARCH_USERS, payload: res.data.items });
	};
	// Get User
	const getUser = async (username) => {
		setLoading();

		const res = await github.get(`users/${username}`);

		dispatch({ type: GET_USER, payload: res.data });
	};

	// Clear Users
	const clearUsers = () => dispatch({ type: CLEAR_USERS, payload: [] });

	// Set Loading

	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				loading: state.loading,
				searchUsers,
				clearUsers,
				getUser
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
