import React, { useContext, useState } from 'react';
import GithubContext from './../../context/github/githubContext';
import Users from './../users/Users';
import Pagination from './Pagination';

// -- continue course
export const UsersPagination = () => {
	const githubContext = useContext(GithubContext);

	const [ currentPage, setCurrentPage ] = useState(1);
	const [ postPerPage ] = useState(6);

	const { users } = githubContext;

	// Pagination
	const paginate = (number) => {
		setCurrentPage(number);
		console.log('called', number);
	};

	let indexOfLastPost = currentPage * postPerPage;
	let indexOfFirstPost = indexOfLastPost - postPerPage;
	let currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<div>
			<Users paginatedUsers={currentPosts} />
			<Pagination postPerPage={postPerPage} paginate={paginate} />
		</div>
	);
};
