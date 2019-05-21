import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import AboutContainer from '../about/aboutContainer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './pageRouter.css';

export default function() {
	return (
		<div>
			<Route
				render={(routComponentProps) => {
					return (
						<TransitionGroup>
							<CSSTransition key={routComponentProps.location.key} timeout={1000} classNames="fade">
								<Switch location={routComponentProps.location}>
									<Route exact path="/" component={Home} />
									<Route path="/about" component={AboutContainer} />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					);
				}}
			/>
		</div>
	);
}
