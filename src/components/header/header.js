import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './header.css';

const navBar = function() {
	return (
		<div className="navbar">
			<div className="navbarItems">
				<div className="navbarBrand">
					<img
						src="https://via.placeholder.com/30"
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
					<Link to="/">Waqar Siddiqui</Link>
				</div>
				<div className="navbarLinks">
					<Link to="/about">About</Link>
					<Link to="/about">About</Link>
					<Link to="/about">About</Link>
				</div>
			</div>
		</div>
	);
};

export default withRouter(navBar);
