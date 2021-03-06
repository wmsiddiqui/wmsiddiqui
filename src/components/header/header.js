import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './header.css';
import logo from '../../images/Logo.png';

const navBar = function() {
	return (
		<div className="navbar">
			<div className="navbarItems">
				<div className="navbarBrand">
					<Link to="/">
						<img
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
						Waqar Siddiqui
					</Link>
				</div>
				<div className="navbarBrandCollapsed">
					<Link to="/">
						<img
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Link>
				</div>
				<div className="navbarLinks">
					<Link to="/about">About</Link>
					<Link to="/resume">Resume</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/gallery">Gallery</Link>
				</div>
			</div>
		</div>
	);
};

export default withRouter(navBar);
