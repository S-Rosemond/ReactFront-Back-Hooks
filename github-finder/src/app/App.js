import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from '../components/Layout/NavBar';
import Users from '../components/users/Users';
import Search from './../components/users/Search';
import Alert from './../components/utils/Alert';
import Pagination from '../components/utils/Pagination';
import About from './../components/pages/About';
import  User  from './../components/users/User';

class App extends Component {
	state = {
		alert: null,
		users: [],
		user: {},
		loading: false,
		currentPage: 1,
		postPerPage: 6
	};
	async componentDidMount() {
		const res = await this.fetchUsers();

		this.setState({ users: res.data, loading: false });
	}
	async fetchUsers(
		endPoint = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID &
			process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	) {
		this.setState({ loading: true });

		const res = await axios.get(endPoint);
		
		return res;
	}
	paginate = (number) => {
		this.setState({ currentPage: number });
	};

	clearUsers = () => {
		this.setState({ users: [] });
	};

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });

		setTimeout(() => this.setState({ alert: null }), 5000);
	};

	// Search Github users
	searchUsers = async (text) => {
		const endPoint = `https://api.github.com/search/users?q=${text}&client_id=${process.env
			.REACT_APP_GITHUB_CLIENT_ID & process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
		const res = await this.fetchUsers(endPoint);
		this.setState({ users: res.data.items, loading: false });
	};

	// Get single github user
	getUser = async (username) => {
		const endPoint = `https://api.github.com/users/${username}?client_id=${process.env
			.REACT_APP_GITHUB_CLIENT_ID & process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

			const res = await this.fetchUsers(endPoint)
			
			this.setState({user: res.data, loading: false})
		
	}
	

	render() {
		let indexOfLastPost = this.state.currentPage * this.state.postPerPage;
		let indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
		 let currentPosts = this.state.users.slice(indexOfFirstPost, indexOfLastPost);
		let loading = this.state.loading;

		return (
			
			<Router>
			<div className="App">
				<Navbar />
				
			</div>
			<Switch>
				<Route exact path='/' render={(props) => (<div className="container">
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
				</div>)
				} />
				<Route exact path='/about' component={About} />
				<Route exact path='/user/:login' render={(props) => (
					<User {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading}/> 
				)
					
				
				} />

			</Switch>

			</Router>
			
		);
	}
}

export default App;
