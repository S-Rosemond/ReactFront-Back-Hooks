import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Layout/NavBar';
import Users from '../components/users/Users';
import Search from './../components/users/Search';
import Alert from './../components/utils/Alert';
import Pagination from '../components/utils/Pagination';
import About from './../components/pages/About';
import User from './../components/users/User';
import GithubState from './../context/github/githubState';

const App = () => {
	const [ alert, setAlert ] = useState(null);
	const [ user, setUser ] = useState({});
	const [ loading, setLoading ] = useState(false);

	const showAlert = (msg, type) => {
		setAlert({ msg, type });

		setTimeout(() => setAlert(null), 5000);
	};

	return (
		<GithubState>
			<Router>
				<Switch>
					<Route
						exact
						render={(props) => (
							<div className="container">
								<Alert alert={alert} />
								<Search setAlert={showAlert} />
								<Users />
							</div>
						)}
					/>
				</Switch>
			</Router>
		</GithubState>
	);
};

export default App;
