// {
// 	state = {
// 		alert: null,
// 		users: [],
// 		user: {},
// 		loading: false,
// 		currentPage: 1,
// 		postPerPage: 6
// 	};
// 	paginate = (number) => {
// 		this.setState({ currentPage: number });
// 	};
// 	render() {
// 		let indexOfLastPost = this.state.currentPage * this.state.postPerPage;
// 		let indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
// 		let currentPosts = this.state.users.slice(indexOfFirstPost, indexOfLastPost);

// 		return (
// 			<Router>
// 				<div className="App">
// 					<Navbar />
// 				</div>
// 				<Switch>
// 					<Route
// 						exact
// 						path="/"
// 						render={(props) => (
// 							<div className="container">
// 								<Users users={currentPosts} loading={loading} />
// 								<Pagination
// 									postPerPage={this.state.postPerPage}
// 									totalPosts={this.state.users.length}
// 									paginate={this.paginate}
// 								/>
// 							</div>
// 						)}
// 					/>
// 				</Switch>
// 			</Router>
// 		);
// 	}
// }
