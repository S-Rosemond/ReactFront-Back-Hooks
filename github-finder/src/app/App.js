import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Layout/NavBar';
import Alert from './../components/utils/Alert';
import Home from './../components/pages/Home';
import About from './../components/pages/About';
import NotFound from './../components/pages/NotFound';
import User from './../components/users/User';
import GithubState from './../context/github/githubState';
import AlertState from './../context/alert/alertState';



const App = () => {
	

	return (
		<GithubState>
			<AlertState>
			<Router>
			<div className="App">
				<Navbar/>
				<div className="container">
				<Alert />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' exact component={About}/>
					<Route exact path="/user/:login" component={User} />
					<Route component={NotFound} />
				</Switch>
			</div>
			</div>	
			</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
