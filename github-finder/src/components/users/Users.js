import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from './../Layout/Spinner';
import GithubContext from './../../context/github/githubContext';

const Users = ({ paginatedUsers }) => {
	const githubContext = useContext(GithubContext);
	const { users, loading } = githubContext;

	let mappedUsers = paginatedUsers || users;

	return loading ? (
		<Spinner />
	) : (
		<div className="user-style">
			{mappedUsers.map((user) => {
				return <UserItem key={user.id} user={user} />;
			})}
		</div>
	);
};

export default Users;
