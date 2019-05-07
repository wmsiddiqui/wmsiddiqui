import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../home/home';
import AboutContainer from '../about/aboutContainer';

export default function() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route path="/About" component={AboutContainer} />
		</Router>
	);
}
