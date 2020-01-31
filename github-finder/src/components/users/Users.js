import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from './../Layout/Spinner';
import PropTypes from 'prop-types';
import GithubContext from './../../context/github/githubContext';

const Users = () => {
	const githubContext = useContext(GithubContext);
	const { users, loading } = githubContext;

	return loading ? (
		<Spinner />
	) : (
		<div className="user-style">
			{users.map((user) => {
				return <UserItem key={user.id} user={user} />;
			})}
		</div>
	);
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};

export default Users;
