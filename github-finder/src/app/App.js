import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Layout/NavBar';
import Users from '../components/users/Users';
import Search from './../components/users/Search';
import Pagination from '../components/utils/Pagination';

class App extends Component {
	state = {
		users: [],
		loading: false,
		currentPage: 1,
		postPerPage: 6
	};
	async componentDidMount() {
		const data = await this.fetchUsers();

		this.setState({ users: data, loading: false });
	}
	async fetchUsers(
		endPoint = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID &
			process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	) {
		this.setState({ loading: true });

		const res = await axios.get(endPoint);

		return res.data;
	}
	paginate = (number) => {
		this.setState({ currentPage: number });
	};

	// Search Github users
	searchUsers = async (text) => {
		const endPoint = `https://api.github.com/search/users?q=${text}&client_id=${process.env
			.REACT_APP_GITHUB_CLIENT_ID & process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
		const data = await this.fetchUsers(endPoint);

		this.setState({ users: data.items, loading: false });
	};

	render() {
		const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
		const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
		const currentPosts = this.state.users.slice(indexOfFirstPost, indexOfLastPost);
		let loading = this.state.loading;

		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Search searchUsers={this.searchUsers} />
					<Users users={currentPosts} loading={loading} />
					<Pagination
						postPerPage={this.state.postPerPage}
						totalPosts={this.state.users.length}
						paginate={this.paginate}
					/>
				</div>
			</div>
		);
	}
}

export default App;
