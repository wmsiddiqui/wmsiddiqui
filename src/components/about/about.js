import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function(props) {
	let content;

	if (props.isLoadingProfile) {
		content = (
			<Spinner animation="border" role="status">
				<span className="sr-only">Loading...</span>
			</Spinner>
		);
	} else {
		content = <span>{props.userProfile.bio}</span>;
	}
	return (
		<React.Fragment>
			<h1>About Me</h1>
			{content}
		</React.Fragment>
	);
}
