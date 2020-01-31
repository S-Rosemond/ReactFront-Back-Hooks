import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from './../../context/github/githubContext';

const Search = ({ setAlert }) => {
	const githubContext = useContext(GithubContext);

	const [ text, setText ] = useState('');

	const onChange = (e) => {
		setText(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();

		if (text === '') {
			setAlert('Please enter a query', 'dark');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form className="form" onSubmit={onSubmit}>
				<input type="text" name="text" placeholder="Search Users" value={text} onChange={onChange} />
				<input type="submit" value="Search" className="btn-primary btn-block btn-mx" />
			</form>
			{githubContext.users.length > 0 && (
				<button className="btn btn-dark btn-block" onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};

export default Search;
