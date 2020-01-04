import React from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
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
