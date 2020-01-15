import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Navbar = (props) => {
	return (
		<nav className="navbar bg-primary">
			<Link to='/'>
			<h1>
				<i className={props.icon} /> {props.title}
			</h1>
				
			</Link>
			<ul><li>
			<Link to='/about'>About</Link>
				</li></ul>
			
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github'
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
