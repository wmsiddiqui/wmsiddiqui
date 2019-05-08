import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import AboutContainer from '../about/aboutContainer';

export default function() {
	return (
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/About" component={AboutContainer} />
		</Switch>
	);
}
