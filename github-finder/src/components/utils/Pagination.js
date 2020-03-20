import React, { useContext } from 'react';
import GithubContext from './../../context/github/githubContext';

const Pagination = ({ postPerPage, paginate }) => {
	const githubContext = useContext(GithubContext);

	const totalPosts = githubContext.users.length;

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); ++i) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<ul className="grid-3 text-center">
				{pageNumbers.map((number) => (
					<li key={number} className="btn-mx bg-primary ">
						<a href="!#" className="text-light flex" onClick={() => paginate(number)}>
							{number}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Pagination;
