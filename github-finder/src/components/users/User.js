import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../Layout/Spinner';
import { Link } from 'react-router-dom';
import GithubContext from './../../context/github/githubContext';

const User = ({ match }) => {
	const githubContext = useContext(GithubContext);

	const { getUser, loading, user } = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		// eslint-disable-next-line
	}, []);

	const { name, avatar_url, location, bio, blog, company, html_url, hireable } = user;

	return loading ? (
		<Spinner />
	) : (
		<Fragment>
			<Link to="/" className="btn btn-dark">
				Back To Search
			</Link>

			<div className="card grid-2 ">
				<div className="all-center">
					<img src={avatar_url} alt="" className="round-img" style={{ width: '150px' }} />

					<h1>{name}</h1>
					<h4>Location: {location}</h4>
					{company && <h4>Company: {company}</h4>}
					{blog && <h4>Website: {blog}</h4>}
				</div>
				<div className="">
					{bio && (
						<Fragment>
							<h3 className="my-1">Bio</h3>
							<p>{bio}</p>
						</Fragment>
					)}

					<a href={html_url} className="btn btn-dark my-1 ">
						Github profile
					</a>

					<div>
						Hireable: {' '}
						{hireable ? (
							<i className="fas fa-check text-success" />
						) : (
							<i className="fas fa-times-circle text-danger" />
						)}
					</div>
				</div>
			</div>
		</Fragment>
	);
};



export default User;
