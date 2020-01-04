import React, { Component } from 'react';
import axios from 'axios'
import Navbar from '../components/Layout/NavBar';
import Users from '../components/users/Users';
import Pagination from '../components/utils/Pagination'


class App extends Component {
state = {
  users: [],
  loading: false,
  currentPage: 1,
  postPerPage: 9
}
async componentDidMount() {
  this.setState({loading: true})
 
  const data = await this.fetchUsers()

  this.setState({users: data, loading: false})
}
async fetchUsers() {
  const res = await axios.get('https://api.github.com/users')

  return res.data
}
paginate =(number) => {
  this.setState({currentPage:number})
}

	render() {
    const indexOfLastPost = this.state.currentPage * this.state.postPerPage; 
    const indexOfFirstPost = indexOfLastPost - this.state.postPerPage 
    const currentPosts = this.state.users.slice(indexOfFirstPost, indexOfLastPost) 

		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Users users={currentPosts} />
          <Pagination postPerPage={this.state.postPerPage} totalPosts={this.state.users.length}
          paginate={this.paginate}
          />
				</div>
			</div>
		);
	}
}

export default App;
