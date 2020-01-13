import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Layout/NavBar';
import Users from '../components/users/Users';
import Search from './../components/users/Search';
import Alert from './../components/utils/Alert';
import Pagination from '../components/utils/Pagination';

class App extends Component {
	state = {
		alert: null,
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

	clearUsers = () => {
		this.setState({ users: [] });
	};

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });

		setTimeout((params) => this.setState({ alert: null }), 5000);
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
					<Alert alert={this.state.alert} />
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={this.state.users.length > 0 ? true : false}
						setAlert={this.setAlert}
					/>
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
