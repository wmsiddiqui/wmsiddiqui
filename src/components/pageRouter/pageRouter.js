import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import AboutContainer from '../about/aboutContainer';
import ProjectsContainer from '../projects/projectsContainer';
import './pageRouter.css';

export default function() {
	return (
		<div>
			<Route
				render={(routComponentProps) => {
					return (
						<Switch location={routComponentProps.location}>
							<Route exact path="/" component={Home} />
							<Route path="/wmsiddiqui" component={Home} />
							<Route path="/about" component={AboutContainer} />
							<Route path="/projects" component={ProjectsContainer} />
						</Switch>
					);
				}}
			/>
		</div>
	);
}
