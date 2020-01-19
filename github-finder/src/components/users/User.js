import React, { Component, Fragment } from 'react';
import Spinner from '../Layout/Spinner';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
	}
	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			company,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable
		} = this.props.user;
		const { loading } = this.props;

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
	}
}

User.propTypes = {
	loading: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	getUser: PropTypes.func.isRequired
};

export default User;
