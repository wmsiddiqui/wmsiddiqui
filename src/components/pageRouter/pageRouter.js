import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutContainer from '../about/aboutContainer';
import ProjectsContainer from '../projects/projectsContainer';
import './pageRouter.css';
import InvalidView from '../invalid/invalidView';
import GalleryView from '../gallery/galleryView';

export default function() {
	return (
		<div>
			<Route
				render={(routComponentProps) => {
					return (
						<Switch location={routComponentProps.location}>
							<Route path="/about" component={AboutContainer} />
							<Route path="/gallery" component={GalleryView} />
							<Route path="/projects" component={ProjectsContainer} />
							<Route component={InvalidView} />
						</Switch>
					);
				}}
			/>
		</div>
	);
}
