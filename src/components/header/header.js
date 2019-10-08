import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './header.css';
import logo from '../../images/Logo.png';

const navBar = function() {
	return (
		<div className="navbar">
			<div className="navbarItems">
				<div className="navbarBrand">
					<img
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
					<Link to="/">Waqar Siddiqui</Link>
				</div>
				<div className="navbarBrandCollapsed">
					<Link to="/">WS</Link>
				</div>
				<div className="navbarLinks">
					<Link to="/about">About</Link>
					<Link to="/resume">Resume</Link>
					<Link to="/projects">Projects</Link>
				</div>
			</div>
		</div>
	);
};

export default withRouter(navBar);
