const rateLimit = 'https://api.github.com/rate_limit';

// const fetchUsers = async (
// 	endPoint = `https://api.github.com/users?client_id=${process.env
// 		.REACT_APP_GITHUB_CLIENT_ID} &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
// ) => {
// 	setLoading(true);
// 	const res = await axios.get(endPoint);
// 	return res;
// };

// useEffect(() => {
// 	const intialUsers = async (
// 		endPoint = `https://api.github.com/users?client_id=${process.env
// 			.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
// 	) => {
// 		setLoading(true);

// 		const limit = await axios.get(rateLimit);
// 		console.log(limit.data.rate);
// 		const res = await axios.get(endPoint);
// 		setUsers(res.data);
// 	};

// 	users.length < 1 && intialUsers();
// 	setLoading(false);
// }, []);

// const getUser = useCallback(
// 	async (username) => {
// 		let endPoint = `https://api.github.com/users/${username}?client_id=${process.env
// 			.REACT_APP_GITHUB_CLIENT_ID} &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

// 		const res = await fetchUsers(endPoint);

// 		setLoading(false);
// 		setUser(res.data);
// 	},
// 	[ setUser ]
// );

// let indexOfLastPost = currentPage * postPerPage;
// let indexOfFirstPost = indexOfLastPost - postPerPage;
// let currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
// console.log('cp', currentPage);

// <Router>
// 	<div className="App">
// 		<Navbar />
// 	</div>
// 	<Switch>
// 		<Route exact path="/" />
// 		<div className="container">
// 			<Route exact path="/about" component={About} />
// 			<Route
// 				exact
// 				path="/user/:login"
// 				render={({ match }) => <User match={match} getUser={getUser} user={user} loading={loading} />}
// 			/>
// 			<Pagination postPerPage={postPerPage} totalPosts={users.length} paginate={paginate} />
// 		</div>
// 	</Switch>
// </Router>;

//----------------------------------------------------------

// const paginate = (number) => {
// 	setCurrentPage(number);
// 	console.log('called', number);
// };

//const [ currentPage, setCurrentPage ] = useState(1);

// const clearUsers = () => {
// 	setUsers([]);
// };

//Authorization undefined
// const config = {
// 	headers: {
// 		Authorization: process.env.GITHUB_ACCESS_TOKEN
// 	}
// };

// const res = await axios.get(`https://api.github.com/search/users?q=${text}`, config);
