import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
	state = {
		text: ''
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();

		if (this.state.text === '') {
			this.props.setAlert('Please enter a query', 'dark');
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ text: '' });
		}
	};

	render() {
		return (
			<div>
				<form className="form" onSubmit={this.onSubmit}>
					<input
						type="text"
						name="text"
						placeholder="Search Users"
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input type="submit" value="Search" className="btn-primary btn-block btn-mx" />
				</form>
				{this.props.showClear && (
					<button className="btn btn-dark btn-block" onClick={this.props.clearUsers}>
						Clear
					</button>
				)}
			</div>
		);
	}
}

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};

export default Search;
